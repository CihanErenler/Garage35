import api from "./axios";

const listingApi = {
  async getAllListings() {
    return api.get(`/storage/search?order=price|desc`);
  },

  async getCarById(registration, vehicleType) {
    return api.get(
      `/storage/vehicle?registration=${registration}&vehicleType=${vehicleType}`,
    );
  },
};

export default listingApi;
