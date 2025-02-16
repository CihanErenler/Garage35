import api from './axios';


 const listingApi = {
  async getListings() {
    return  api.get("/storage/list");
  },

  async getLatestListing() {
    return  api.get(`/storage/latest`);
  },

  async getCarById(registration, vehicleType) {
    return api.get(`/storage/vehicle/${registration}/${vehicleType}`)
  },
};

export default listingApi;