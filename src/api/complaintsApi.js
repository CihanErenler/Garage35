import api from "./axios";

const complaintsApi = {
  async createComplaint(complaint) {
    return api.post("/complaints", complaint, {
      headers: {
        "Content-Type": undefined,
      },
    });
  },
};

export default complaintsApi;
