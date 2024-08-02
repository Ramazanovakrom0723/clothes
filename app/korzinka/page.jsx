"use client";

import { useState } from "react";
import { TextField}from "@mui/material";
import Link from "next/link";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import gantel from "../../public/gantel.png";
import sumka from "../../public/ryukzak.png";
import fudbolka from "../../public/kiyim.png";
import sport from "../../public/skakalka.png";


const Index = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Гантель виниловая, 2 x 3 кг",
      price: 300000,
      image: gantel,
      quantity: 1,
    },
    {
      id: 2,
      name: "Гантель виниловая, 2 x 3 кг",
      price: 220000,
      image: sumka,
      quantity: 1,
    },
    {
      id: 3,
      name: "Гантель виниловая, 2 x 3 кг",
      price: 1500000,
      image: fudbolka,
      quantity: 1,
    },
    {
      id: 4,
      name: "Гантель виниловая, 2 x 3 кг",
      price: 30000,
      image: sport,
      quantity: 1,
    },
  ]);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleQuantityChange = (id, increment) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + increment } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const links = [
    { title: "Главная", path: "/" },
  ];

  return (
    <>
      <div className="bg-[#F2F2F2] w-full pt-60 px-[150px] pb-[200px]">
        <div className='flex flex-wrap gap-3 pb-[24px] opacity-70 pt-[20px]'>
          <HomeIcon />
          {links.map((item, index) => (
            <Link href={item.path} key={index} className='text-sm md:text-base'>
              {item.title}
            </Link>
          ))}
          <ChevronRightIcon />
          <p className='text-sm md:text-base'>Корзина</p>
        </div>
        <div className="flex gap-4">
        <div className="bg-white pt-5 pl-[30px] pr-[26px] pb-[66px] gap-6">
          <div className="flex justify-between">
          <h2 className="text-2xl font-bold pb-4">Ваша корзина</h2>
          <button className="text-[#FF1313]" onClick={() => setCartItems([])}>
            Очистить все
          </button>
          </div>
          {cartItems.map((item) => (
          <div className="flex gap-10 bg-[#F2F2F2] mb-4 p-4" key={item.id}>
              <Image src={item.image} alt={item.name} width={100} height={100} />
              <div>
                <p className="text-xl font-normal">{item.name}</p>
                <p className="text-xl font-normal">Гантель</p>
                <div className="flex items-center gap-3">
                  <button
                    className="px-3 py-1 bg-white rounded-full"
                    onClick={() => handleQuantityChange(item.id, -1)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    className="px-3 py-1 bg-white rounded-full"
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    +
                  </button>
                  <div className="flex">
                  <p className="pl-6 text-2xl font-bold">{item.price * item.quantity}</p>
                  <p>usz</p>
                  </div>
                </div>
              </div>
              <button onClick={() => handleRemoveItem(item.id)}>
                <DeleteIcon />
              </button>
            </div>
          ))}
        </div>



          <div className="bg-white pt-10 pl-10 pr-8">
            <p className="text-5 font-bold">Итого</p>
          <div className="flex justify-between">
            <div>
            <p className="text-xl font-normal">Кол-во товаров: </p>
            <p className="text-2xl font-bold">{totalItems}</p>
            </div>
            <div>
            <p className="text-2xl font-normal">Сумма: </p>
            <p className="text-[24px] font-bold">{totalCost} uzs</p>
            </div> 
          </div>
          <div>
            <p className="text-xl font-bold pt-10">Ваши данные</p>
            <TextField fullWidth label="Имя /Фамилия" margin="normal" required />
            <TextField fullWidth label="+998 __ ___ __ __" margin="normal" required />
            <TextField fullWidth label="Адрес доставки" margin="normal" required />
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;