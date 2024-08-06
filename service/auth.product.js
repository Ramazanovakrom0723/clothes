import http from "../api/interseptors";
import Cookies from "js-cookie";

export const getProductApi = ()=>{
    return http.get(`/products?page=1&limit=10`)
}

export const getProductId = async (product_id) => {
    try {
      const response = await http.get(`/product/${product_id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching product by ID:", error);
      throw error;
    }
  };
  export const getSingleProduct = ()=>{
    const id = Cookies.get("product_id");
    return http.get(`/product/${id}`)
}