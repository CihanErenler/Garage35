import api from '../services/axios';


 const listingService = {
  async getListings(params) {
    try {
      const response = await api.get('/storage/list', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching listings:', error);
      throw error;
    }
  },

  async getListing(id) {
    try {
      const response = await api.get(`/listings/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching listing:', error);
      throw error;
    }
  }
};

export default listingService;