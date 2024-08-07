import http from "../api/interseptors"; 

const basket = {
  get: async () => {
    try {
      const response = await http.get("/user-baskets");
      return response.data;
    } catch (error) {
      console.error("Error fetching user baskets:", error.response ? error.response.data : error.message);
      throw error;
    }
  },
  post: async (product) => {
    try {
      const response = await http.post("/basket", product);
      return response.data;
    } catch (error) {
      console.error("Error adding product to basket:", error.response ? error.response.data : error.message);
      throw error;
    }
  },
  delete: async (productId) => {
    try {
      const response = await http.delete(`/basket/${productId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting product from basket:", error.response ? error.response.data : error.message);
      throw error;
    }
  },
};

export default basket;
