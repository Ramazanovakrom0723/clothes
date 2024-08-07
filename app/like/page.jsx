// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import HomeIcon from '@mui/icons-material/Home';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ViewWeekIcon from '@mui/icons-material/ViewWeek';
// import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
// import * as React from "react";
// import Box from "@mui/material/Box";
// import Slider from "@mui/material/Slider";
// import LikeCard from "../../components/ui/like/like";
// import { useState, useEffect } from "react";

// const Index = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [value, setValue] = useState([20, 37]);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const valuetext = (value) => {
//     return `${value} uzs`;
//   };

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p className="text-[30px] font-medium">Загрузка...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 md:px-10 mt-[200px]">
//       <div className="flex gap-2 pt-[27px] pb-[20px] items-center">
//         <Link href="/" className="flex gap-2 items-center text-black opacity-60 text-[16px]">
//           <HomeIcon />
//           Главная
//         </Link>
//         <ChevronRightIcon />
//         <p className="text-black text-[16px] font-medium">Популярные</p>
//       </div>

//       <div className="flex flex-col md:flex-row md:gap-8">
//         <div className="md:w-[300px] w-full">
//           <div className="bg-white p-4 rounded-lg">
//             <p className="text-[16px] font-medium">Фильтр</p>
//             <p className="text-[12px] font-normal mt-4">Цена</p>
//             <Box sx={{ width: '100%' }} className="bg-[#F2F2F2] rounded-md mt-2">
//               <Slider
//                 getAriaLabel={() => "Price range"}
//                 value={value}
//                 onChange={handleChange}
//                 valueLabelDisplay="auto"
//                 getAriaValueText={valuetext}
//                 min={0}
//                 max={1000}
//                 step={10}
//                 sx={{ color: "#FBD029" }}
//               />
//               <div className="flex p-3 justify-between mt-2 text-sm font-semibold">
//                 <span>{`${value[0]} uzs`}</span>
//                 <span>{`${value[1]} uzs`}</span>
//               </div>
//             </Box>

//             <div className="mt-4">
//               <p className="text-[14px] font-medium">Артикул:</p>
//               <input
//                 type="text"
//                 placeholder="аф566"
//                 className="w-full bg-[#F2F2F2] p-3 rounded-lg mt-2"
//               />
//               <p className="text-[14px] font-medium mt-4">Выберите категорию:</p>
//               <select className="w-full bg-[#F2F2F2] p-3 rounded-lg mt-2">
//                 <option value="all">Все</option>
//                 <option value="option1">Option 1</option>
//               </select>

//               <p className="text-[14px] font-medium mt-4">Новинка:</p>
//               <select className="w-full bg-[#F2F2F2] p-3 rounded-lg mt-2">
//                 <option value="all">Все</option>
//                 <option value="option1">Option 1</option>
//               </select>

//               <p className="text-[14px] font-medium mt-4">Акция:</p>
//               <select className="w-full bg-[#F2F2F2] p-3 rounded-lg mt-2">
//                 <option value="all">Все</option>
//                 <option value="option1">Option 1</option>
//               </select>
//             </div>
//           </div>

//           <div className="mt-4">
//             <button className="w-full p-4 bg-[#E4E4E4] rounded-lg text-[15px] font-medium">
//               Показать результат
//             </button>
//           </div>
//         </div>

//         <div className="w-full">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-[50px]">
//             <div className="flex gap-2 items-center">
//               <select className="w-full md:w-[147px] bg-white px-3 py-2 rounded-md">
//                 <option value="all" className="font-semibold">Сортировать</option>
//                 <option value="option1">Option 1</option>
//               </select>
//               <select className="w-full md:w-[147px] bg-white px-3 py-2 rounded-md">
//                 <option value="all" className="font-semibold">Все продукты</option>
//                 <option value="option1">Option 1</option>
//               </select>
//             </div>

//             <div className="flex gap-2 items-center">
//               <div className="bg-white flex w-full md:w-[93px] rounded-lg px-3 py-2 items-center">
//                 <p className="text-[16px] pl-2">Кард</p>
//                 <ViewWeekIcon />
//               </div>

//               <div className="bg-white flex w-full md:w-[93px] px-3 py-2 rounded-lg items-center">
//                 <p className="text-[16px] opacity-80 pl-2">Лист</p>
//                 <FormatListBulletedIcon />
//               </div>
//             </div>
//           </div>

//           <div className="lg:grid lg:grid-cols-2 gap-4 mt-5 mb-[50px]">
//             <LikeCard />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Index;






"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Like from "../../service/auth.like";
import Image from "next/image";
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@mui/material";
import Cookie from "js-cookie";

const Wishlist = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await Like.get();
      console.log(response);
      const productsWithLikes = response.data.products.map(product => ({
        ...product,
        liked: true,
      }));
      setData(productsWithLikes || []);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLike = async (productId) => {
    try {
      const response = await Like.postLike(productId);
      if (response) {
        const productsWithLikeState = data.map((product) =>
          product.product_id === productId
            ? { ...product, liked: !product.liked }
            : product
        );
        setData(productsWithLikeState);
      }
      window.location.reload()
    } catch (error) {
      console.error('Error liking the product:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-1">
        <div className='flex gap-2 pt-[10px] ml-[25px] sm:ml-0 sm:gap-4 pb-4 items-center'>
          <Image src={HomeIcon} alt='Home' className='w-5 h-5' />
          <Link href="/">
            <p className='text-sm sm:text-base opacity-70 hover:text-[#FBD029] hover:opacity-100'>Главная</p>
          </Link>
          <Image src={ChevronRightIcon} alt='Arrow' className='w-5 h-5' />
          <Link href="/shopping">
            <p className='text-sm sm:text-base opacity-70 hover:text-[#FBD029] hover:opacity-100'>Корзина</p>
          </Link>
        </div>
        <h1 className="text-[24px] text-[#FBD029] sm:text-black mt-[20px] sm:mt-0 ml-[25px] sm:ml-0">Products you like</h1>
        <div className="flex flex-wrap ml-[10px] md:ml-0 rounded-lg gap-4 md:gap-1 mt-4">
          {data.map((product) => (
            <div key={product.product_id} className="relative m-4">
              <div className="w-[300px] h-[350px] bg-white flex flex-col items-center justify-between relative shadow-md">
              <div className="absolute ml-[270px]">
              <Button
              onClick={(e) => {
                e.stopPropagation();
                handleLike(product.product_id);
              }}
              className="  p-1"
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
              </div>
                <div className="w-[200px] h-[194px] grid justify-center items-center z-[999]">
                  <img
                    src={product.image_url[0]}
                    alt={product.product_name}
                    width={150}
                    height={194}
                  />
                </div>
                <div className="px-3 text-center">
                  <h1 className="text-[14px] font-medium sm:text-[16px] md:text-[18px]">
                    {product.product_name}
                  </h1>
                  <p className="text-red-700 font-bold text-[16px] sm:text-[18px] md:text-[20px]">
                    {product.cost} uzs
                  </p>
                </div>
                <Link
                  onClick={() => Cookie.set("product_id", product.product_id)}
                  href={`/${product.product_id}`}
                  className="py-[10px] w-full border-2 bg-[#FBD029] rounded-lg text-center text-[14px] sm:text-[16px] md:text-[18px]"
                >
                  Корзина
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
