"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import productImage from "../../public/gantel.png"; 
import avatar from "../../public/avatar.svg"
import  Card  from "../../components/ui/card";


const Index = () => {
  const imgList = [productImage, productImage, productImage, productImage];

  return (
    <div className="p-4 pt-[200px] md:px-[150px] bg-gray-100">
      <div className="flex container flex-col md:flex-row gap-8  p-6 rounded-lg ">
        <div className="md:w-1/2">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="w-full rounded-xl bg-white overflow-hidden"
            modules={[Navigation, Pagination]}
          >
            {imgList.map((item, index) => (
              <SwiperSlide style={{ display: 'flex',
              justifyContent: 'center',
              alignItems: 'center', }} key={index}>
                <Image src={item} alt={`Product image ${index + 1}`} className="w-[370px] py-10  h-[370px]  object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex gap-2 mt-4">
            {imgList.map((item, index) => (
              <div key={index} className="w-20 bg-white p-2 h-20 border-2 border-yellow-500 rounded-lg overflow-hidden">
                <Image src={item} alt={`Thumbnail image ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 p-8 bg-white">
          <h1 className="text-2xl font-bold">Гантель виниловая, 2 x 3 кг</h1>
          <p className="mt-2 text-gray-700">В составе томатов в большом количестве содержатся сахары, ликопин, пектин, бетакаротин, витамины.</p>
          <p className="mt-2 text-gray-700">В наличии: 2 шт.</p>
          <p className="mt-2 text-gray-700">Страна производитель: Китай</p>
          <p className="mt-4 text-2xl font-bold">220 000 UZS / 1 шт.</p>
          <div className="flex gap-4 mt-4">
            <button className="px-4 py-2 bg-yellow-400 text-black rounded-md">
            <i className="bi bi-cart3 mr-1"></i>
              Корзина</button>
            <button className="px-4 flex items-center gap-1 py-2 border-2 border-yellow-400 text-yellow-400 rounded-md">
              {/* <HiAdjustmentsVertical/> */}
              Сравнить</button>
          </div>
          <div className="mt-4">
            <button className="px-4 py-2 border-2 mt-24  rounded-md">
            <i className="bi bi-share mr-1"></i>
              Поделиться</button>
          </div>
        </div>
      </div>
      <div className="mt-28 grid grid-cols-1 container md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md xl:w-[600px] sm:w-[300px] xl:h-[500px] sm:h-[400px] xl:py-[40px] sm:py-[20px] xl:px-[40px] sm:px-[20px]">
        <h2 className="text-[20px] font-bold mb-4">Описание</h2>
          <h4 className="xl:text-[16px] sm:text-[18px] font-semibold">
            Гантель виниловая, 2 х 3 кг
          </h4>
          <p className="xl:text-[16px] sm:text-[12px] sm:mt-[12px] sm:mb-[28px] xl:mt-[28px] xl:mb-[53px] sm:w-[250px] xl:w-[400px]">
            В составе томатов в большом количестве содержатся сахара, клетчатка,

            пектины, бета-каротин, витамины.
          </p>

          <ul className="flex flex-wrap gap-4">
            <li className="xl:w-[150px] sm:w-[100px]">
              <h3 className="sm:text-[12px] xl:text-[16px]">Вес гантела:</h3>
              <p className="sm:text-[10px] xl:text-[16px]">5кг</p>
            </li>
            <li className="xl:w-[150px] sm:w-[100px]">
              <h3 className="sm:text-[12px] xl:text-[16px]">Цвета:</h3>
              <p className="sm:text-[10px] xl:text-[16px]">Синий, Красный</p>
            </li>
            <li className="xl:w-[150px] sm:w-[100px]">
              <h3 className="sm:text-[12px] xl:text-[16px]">Вес гантела:</h3>
              <p className="sm:text-[10px] xl:text-[16px]">5кг</p>
            </li>
            <li className="xl:w-[150px] sm:w-[100px]">
              <h3 className="sm:text-[12px] xl:text-[16px]">Цвета:</h3>
              <p className="sm:text-[10px] xl:text-[16px]">Синий, Красный</p>
            </li>
          </ul>
        </div>
        <div className="bg-white p-6  rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Отзывы</h2>
          <div className="mt-4 flex gap-4">
            <div>
              <Image src={avatar} alt="User avatar" width={60} height={60} className="rounded-full" />
            </div>
            <div>
              <p className="font-bold">Шахзод Анаров</p>
              <p className="text-gray-700">Клиент</p>
              <p className="text-gray-700">В составе томатов в большом количестве содержатся сахары, ликопин, пектин, бетакаротин, витамины.</p>
              <div className="flex">
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-gray-400">★</span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex gap-4">
            <div>
              <Image src={avatar} alt="User avatar" width={60} height={60} className="rounded-full" />
            </div>
            <div>
              <p className="font-bold">Шахзод Анаров</p>
              <p className="text-gray-700">Клиент</p>
              <p className="text-gray-700">В составе томатов в большом количестве содержатся сахары, ликопин, пектин, бетакаротин, витамины.</p>
              <div className="flex">
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-gray-400">★</span>
              </div>
            </div>
          </div>
          <a href="#" className="mt-4 text-yellow-400">
            <i className="bi bi-prev"></i>
            Все отзывы</a>
        </div>
      </div>
      <div className='mt-[81px] mb-[160px]'>
      <h2 className='text-2xl md:text-3xl font-bold'>Похожие продукты</h2>
      <div className='flex flex-wrap gap-5 mt-8'>
      {[...Array(4).keys()].map(index => (
            <Card key={index}/>
          ))}
      </div>
    </div>
    </div>
  );
};

export default Index;
