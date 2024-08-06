// "use client";

// import React from "react";
// // import { useEffect } from "react";
// import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import Kachs from "@/public/kach.png";
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import ProductService, { getProduct } from "@/service/auth.product";

// const links = [{ path: "/single" }];

// const Index = () => {
//   const [product, setProduct] = useState([]);
//   const [currentImage, setCurrentImage] = useState(0);

//   const getData = async () => {
//     const res = await getSingleProduct();
//     if (res && res.data) {
//       setProduct(res.data);
//     }
//   };

//   useEffect(() => {
//     getProduct();
//   }, []);

//   return (
//     <div className="flex">
//       <div className="pl-[20px] pt-[25px] pr-[15px] bg-white ">
//         <div className="flex justify-end">
//           <button>
//             <FavoriteBorderIcon />
//           </button>
//         </div>
// <button>
//   {links.map((item, index) => (
//     <Link href={item.path} key={index} className="text-sm md:text-base">
//       {item.title}
//       <Image
//         src={
//           Array.isArray(product.image_url) && product.image_url[0]
//             ? product.image_url[0]
//             : {Kachs}
//         }
//         alt="Kach"
//         className="w-[242px] h-[194px]"
//       />
//     </Link>
//   ))}
// </button>
//         <p className="text-[20px]">Бутса Nike Mercurial</p>
//         <p className="text-[20px]">Superfly 8 FG</p>
//         <div className="py-[16px]">
//           <b className="text-[20px] ">
//             250 000<span>uzs</span>
//           </b>
//         </div>
//         <button className="w-full py-[15px] bg-[#FBD029] text-[]">
//           {" "}
//           <LocalGroceryStoreIcon /> Корзина
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Index;

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Bag from "../../../public/ryukzak.png";
import { getProductApi } from "../../../service/auth.product";
import Link from "next/link";
import Cookies from "js-cookie";

// const links = [{ path: `/${product.product_id}` }];

const Index = () => {
  const [data, setData] = useState([]);
  const [loading] = useState(false);

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

  const handleLikeClick = (productId) => {
    setData((prevData) =>
      prevData.map((product) =>
        product.id === productId
          ? { ...product, liked: !product.liked }
          : product
      )
    );
  };

  return (
    <div className="mb-[18px] flex flex-wrap justify-between gap-8 ">
      {data.map((product) => (
        <div
          key={product.id}
          className="w-[270px] bg-white rounded-t-md relative pt-4 mb-4"
        >
          <FavoriteBorderIcon
            className={`absolute top-3 right-3 cursor-pointer ${
              product.liked ? "text-red-500" : "text-gray-500"
            }`}
            onClick={() => handleLikeClick(product.id)}
          />
          <div className="flex justify-center">
            <div>
              <div className="relative w-[200px] h-[170px]">
                <Link onClick={() =>
                      Cookies.set("product_id", product.product_id)
                    }
                    href={`/${product.product_id}`}>
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
          <button className="korzinka flex w-[270px] p-4 rounded-b-md bg-[#FBD029] items-center justify-center font-normal hover:bg-[#dcbb4e]">
            Корзина
          </button>
        </div>
      ))}
      {loading && <div className="flex justify-center mt-4">Loading...</div>}
    </div>
  );
};

export default Index;
