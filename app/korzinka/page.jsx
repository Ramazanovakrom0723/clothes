// "use client";

// import { useState } from "react";
// import { TextField}from "@mui/material";
// import Link from "next/link";
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import HomeIcon from '@mui/icons-material/Home';
// import DeleteIcon from "@mui/icons-material/Delete";
// import Image from "next/image";
// import gantel from "../../public/gantel.png";
// import sumka from "../../public/ryukzak.png";
// import fudbolka from "../../public/kiyim.png";
// import sport from "../../public/skakalka.png";


// const Index = () => {
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: "Гантель виниловая, 2 x 3 кг",
//       price: 300000,
//       image: gantel,
//       quantity: 1,
//     },
//     {
//       id: 2,
//       name: "Гантель виниловая, 2 x 3 кг",
//       price: 220000,
//       image: sumka,
//       quantity: 1,
//     },
//     {
//       id: 3,
//       name: "Гантель виниловая, 2 x 3 кг",
//       price: 1500000,
//       image: fudbolka,
//       quantity: 1,
//     },
//     {
//       id: 4,
//       name: "Гантель виниловая, 2 x 3 кг",
//       price: 30000,
//       image: sport,
//       quantity: 1,
//     },
//   ]);

//   const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
//   const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//   const handleQuantityChange = (id, increment) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + increment } : item
//       )
//     );
//   };

//   const handleRemoveItem = (id) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   };

//   const links = [
//     { title: "Главная", path: "/" },
//   ];

//   return (
//     <>
//       <div className="bg-[#F2F2F2] w-full pt-60 px-[150px] pb-[200px]">
//         <div className='flex flex-wrap gap-3 pb-[24px] opacity-70 pt-[20px]'>
//           <HomeIcon />
//           {links.map((item, index) => (
//             <Link href={item.path} key={index} className='text-sm md:text-base'>
//               {item.title}
//             </Link>
//           ))}
//           <ChevronRightIcon />
//           <p className='text-sm md:text-base'>Корзина</p>
//         </div>
//         <div className="flex gap-4">
//         <div className="bg-white pt-5 pl-[30px] pr-[26px] pb-[66px] gap-6">
//           <div className="flex justify-between">
//           <h2 className="text-2xl font-bold pb-4">Ваша корзина</h2>
//           <button className="text-[#FF1313]" onClick={() => setCartItems([])}>
//             Очистить все
//           </button>
//           </div>
//           {cartItems.map((item) => (
//           <div className="flex gap-10 bg-[#F2F2F2] mb-4 p-4" key={item.id}>
//               <Image src={item.image} alt={item.name} width={100} height={100} />
//               <div>
//                 <p className="text-xl font-normal">{item.name}</p>
//                 <p className="text-xl font-normal">Гантель</p>
//                 <div className="flex items-center gap-3">
//                   <button
//                     className="px-3 py-1 bg-white rounded-full"
//                     onClick={() => handleQuantityChange(item.id, -1)}
//                     disabled={item.quantity === 1}
//                   >
//                     -
//                   </button>
//                   <p>{item.quantity}</p>
//                   <button
//                     className="px-3 py-1 bg-white rounded-full"
//                     onClick={() => handleQuantityChange(item.id, 1)}
//                   >
//                     +
//                   </button>
//                   <div className="flex">
//                   <p className="pl-6 text-2xl font-bold">{item.price * item.quantity}</p>
//                   <p>usz</p>
//                   </div>
//                 </div>
//               </div>
//               <button onClick={() => handleRemoveItem(item.id)}>
//                 <DeleteIcon />
//               </button>
//             </div>
//           ))}
//         </div>



//           <div className="bg-white pt-10 pl-10 pr-8">
//             <p className="text-5 font-bold">Итого</p>
//           <div className="flex justify-between">
//             <div>
//             <p className="text-xl font-normal">Кол-во товаров: </p>
//             <p className="text-2xl font-bold">{totalItems}</p>
//             </div>
//             <div>
//             <p className="text-2xl font-normal">Сумма: </p>
//             <p className="text-[24px] font-bold">{totalCost} uzs</p>
//             </div> 
//           </div>
//           <div>
//             <p className="text-xl font-bold pt-10">Ваши данные</p>
//             <TextField fullWidth label="Имя /Фамилия" margin="normal" required />
//             <TextField fullWidth label="+998 __ ___ __ __" margin="normal" required />
//             <TextField fullWidth label="Адрес доставки" margin="normal" required />
//           </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Index;










"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Basket from "../../service/auth.korzinka";
import click from "../../public/clikc.png";
import payme from "../../public/payme.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Index = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await Basket.get();
        setProducts(response.data.map((product) => ({
          ...product,
          count: product.count || 0,
        })));
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const handleProductUpdate = (id, action) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.product_id === id
          ? { ...product, count: action === "increment" ? product.count + 1 : Math.max(product.count - 1, 0) }
          : product
      )
    );
  };

  const handleDeleteProduct = async (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.product_id !== id)
    );
    try {
      await Basket.basketdel(id);
      toast.success("Product deleted successfully");
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Failed to delete product. Please try again later.");
    }
  };

  const totalSum = products.reduce((total, product) => total + product.count * product.cost, 0);

  return (
    <>
      <ToastContainer />
      <div className="bg-custom-gray mt-[200px] p-4 md:p-8 ">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center sm:justify-center gap-6 md:gap-8 lg:flex-row">
            <div className="w-full max-w-md md:max-w-3xl lg:w-2/3 h-auto rounded-lg bg-white p-4 md:p-6">
              <div className="flex justify-between items-center pt-4 pb-4">
                <h1 className="text-lg md:text-xl font-bold">Ваша корзина</h1>
                <button onClick={() => setProducts([])} className="text-red-500">Очистить все</button>
              </div>
              <div className="space-y-4">
                {products.length ? (
                  products.map((product) => (
                    <div key={product.product_id} className="flex flex-col md:flex-row gap-4 border rounded-lg overflow-hidden p-4 bg-custom-gray relative">
                      <button onClick={() => handleDeleteProduct(product.product_id)} className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white flex justify-center items-center">
                        <DeleteOutlineOutlinedIcon />
                      </button>
                      <Image src={product.image_url[0]} alt={product.product_name} width={145} height={100} className="w-full md:w-[145px] h-[100px] object-cover" />
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="font-bold text-lg md:text-xl">{product.product_name}</div>
                        <div className="flex items-center gap-2">
                          <button onClick={() => handleProductUpdate(product.product_id, "decrement")} className="bg-white border w-8 h-8 flex items-center justify-center font-bold rounded-full">-</button>
                          <span>{product.count}</span>
                          <button onClick={() => handleProductUpdate(product.product_id, "increment")} className="bg-white border w-8 h-8 flex items-center justify-center font-bold rounded-full">+</button>
                          <span className="pl-4 text-lg font-bold">{(product.count * product.cost).toLocaleString()} uzs</span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>No products in the basket</div>
                )}
              </div>
              <h3 className="pt-4 pb-4 text-lg font-semibold">Все информация о доставке</h3>
              <p className="max-w-md">Если у вас имеется вопросы позвоните по номеру:+998 (99) 995 55 65</p>
            </div>
            <div className="w-full max-w-sm lg:max-w-[504px] h-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="text-lg font-semibold mb-2">Итого</div>
                <div className="flex flex-col gap-4 mb-4">
                  <div className="flex justify-between"><span>Кол-во товаров:</span><span>{products.length}</span></div>
                  <div className="flex justify-between"><span>Сумма:</span><span className="font-semibold">{totalSum.toLocaleString()} UZS</span></div>
                </div>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Имя / Фамилия</label>
                    <input id="name" type="text" placeholder="Имя / Фамилия" className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Ваш номер</label>
                    <input id="phone" type="text" placeholder="+998 _ _ _ _ _ _ _" className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Адрес доставки</label>
                    <div className="relative">
                      <input id="address" type="text" placeholder="Область/город/улица/дом" className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" />
                      <button type="button" className="absolute right-0 top-0 mt-2 mr-2 text-yellow-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="text-lg font-semibold mb-2">Тип оплаты</div>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <button type="button" className="px-3 py-2 text-sm font-semibold text-gray-700 border rounded-lg flex items-center justify-center">
                      <Image src={click} alt="click" className="w-20 h-10" />
                    </button>
                    <button type="button" className="flex justify-center items-center px-4 py-2 text-sm font-semibold text-gray-700 border rounded-lg">
                      <Image src={payme} alt="payme" className="w-[80px] h-[38px]" />
                    </button>
                    <button type="button" className="px-3 py-2 text-sm font-semibold text-gray-700 border rounded-lg">Через карту</button>
                    <button type="button" className="px-3 py-2 text-sm font-semibold text-gray-700 border rounded-lg">Банковский счёт</button>
                  </div>
                  <button type="submit" className="w-full px-4 py-2 mt-4 text-white bg-yellow-500 rounded-lg font-semibold">Купить</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;