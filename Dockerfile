# syntax = docker/dockerfile:1
ARG NODE_VERSION=22.12.0
FROM node:${NODE_VERSION}-slim AS base
WORKDIR /app
ENV NODE_ENV=production

FROM base AS build
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3
COPY package-lock.json package.json ./
RUN npm ci --include=dev
COPY . .
RUN npm run build
RUN npm prune --omit=dev

# Use a small runtime image
FROM nginx:1.27-alpine AS runtime
# remove default config and use our SPA config
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# copy build output
COPY --from=build /app/dist /usr/share/nginx/html
# document the port (Fly ignores EXPOSE, but it's nice for local runs)
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
