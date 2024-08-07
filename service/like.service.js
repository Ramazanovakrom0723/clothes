"use client";
import http from "@/api/interseptors";

const like = async (productId) => {
  try {
    const response = await http.post(`/like/${ productId }`);
    if (response.status === 201) {
      return response;
    }
  } catch (error) {
    console.error(
      "Error like:",
      error.response?.data || error.message
    );
    return [];
  }
};

export default like;