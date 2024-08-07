import http from "../api/interseptors";

const like = {
  get: () => http.get("/wishlist?", { params: { page: 1, limit: 10 } }),
  postLike: (id) => http.post(`/like/${id}`),
  unLike: (id) => http.delete(`/like/${id}`)
};

export default like;
