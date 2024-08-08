
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Bag from "../../../public/ryukzak.png";
import { FaShoppingCart } from "react-icons/fa";
import { getProductApi } from "../../../service/auth.product";
import postLike from "../../../service/like.service";
import Link from "next/link";
import Basket from "../../../service/auth.korzinka";
import Cookies from "js-cookie";
import { Button } from "@mui/material";
import { notification } from "antd";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Index = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await getProductApi(4, 1);
      if (response.status === 200) {
        const productsWithLikeState = response.data.products.map((product) => ({
          ...product,
          liked: false,
        }));
        setData(productsWithLikeState);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleBasket = async (id) => {
    try {
      const response = await Basket.basketPost({ productId: id, quantity: 1 });
      if (response.data === true) {
        toast.success("Product added to basket successfully");
      } else {
        console.error("Failed to add product to basket:", response);
        toast.error("Failed to add product to basket");
      }
    } catch (error) {
      console.error("Error adding product to basket:", error);
      toast.error("Error adding product to basket");
    }
  };

  const handleLikeClick = async (id) => {
    try {
      const res = await postLike(id);
      if (res.data === true) {
        notification.success({
          message: "Added to wishlist",
          description: "Product has been added to your wishlist.",
        });
      } else if (res.data === false) {
        notification.error({
          message: "Removed from wishlist",
          description: "Product has been removed from your wishlist.",
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="mb-[18px] flex flex-wrap justify-between gap-8">
      {data.map((product) => (
        <div
          key={product.product_id}
          className="w-[270px] bg-white rounded-t-md relative pt-4 mb-4"
        >
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleLikeClick(product.product_id);
            }}
            className="absolute top-2 right-2 p-1"
            style={{
              minWidth: "unset",
              padding: "0",
              color: product.liked ? "red" : "white",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
            }}
          >
            {product.liked ? (
              <FavoriteIcon style={{ color: "red", fontSize: 24 }} />
            ) : (
              <FavoriteBorderIcon style={{ color: "black", fontSize: 24 }} />
            )}
          </Button>
          <div className="flex justify-center">
            <div>
              <div className="relative w-[200px] h-[170px]">
                <Link
                  onClick={() => Cookies.set("product_id", product.product_id)}
                  href={`/${product.product_id}`}
                >
                  <Image
                    src={product.image_url[1] || Bag}
                    alt="Product Image"
                    className="object-cover rounded-md transition-transform duration-300 group-hover:scale-110"
                    layout="fill"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="ml-[20px] mt-[10px]">
            <p className="text-2xl h-[80px] mb-10 w-[216px] font-bold">
              {product.product_name}
            </p>
            <p className="text-[30px] mb-[20px] text-[#FF1313] font-sans font-bold mt-[5px]">
              {product.cost}{" "}
              <span className="text-[18px] font-medium">uzs</span>
            </p>
          </div>
          <button
            onClick={() => handleBasket(product.product_id)}
            className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg flex items-center justify-center transition-colors hover:bg-yellow-600"
          >
            <FaShoppingCart className="mr-2" /> Корзина
          </button>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
};

export default Index;

