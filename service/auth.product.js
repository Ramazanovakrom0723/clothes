import http from "../api/interseptors";
import Cookies from "js-cookie";
export const getProduct = (limit, page)=>{
    return http.get(`/products?page=${page}&limit=${limit}`)
}
