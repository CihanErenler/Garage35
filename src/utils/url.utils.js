export const formQueryString = (params) => {
  return Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
};
