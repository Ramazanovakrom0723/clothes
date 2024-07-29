"use client";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ImageCarusel from "../../../public/krasofka_red.png";

const Carusel = () => {
  const imgList = [
    ImageCarusel,
    ImageCarusel,
    ImageCarusel,
    ImageCarusel,
    ImageCarusel,
  ];

  return (
    <div className="mt-[200px] px-[150px]"> 
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={1}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        {imgList.map((item, index) => (
          <SwiperSlide key={index} className="w-[820px] rounded-[20px]">
            <div className="h-[488px]  rounded-[20px] overflow-hidden ">
              <div className="flex items-start justify-between">
                <div className="pt-[82px] pl-[70px]">
                  <h1 className="text-[28px] font-extrabold">
                    Бутсы Nike Phantom <br />
                    GT2 Elite FG
                  </h1>
                  <button className="py-2.5 mt-[27px] px-5 rounded-md border-2 border-[#FBD029]">
                    Подробности
                  </button>
                </div>
                <div className="relative h-[488px]">
                  <div className="absolute top-[55px] left-[20px] w-[380px] h-[380px] rounded-[50%] bg-red-500 z-0"></div>
                  <div className="absolute top-[-75px] left-[130px] rotate-[25deg] w-[355px] h-[921px] bg-[#BDD400] z-0"></div>
                  <div className="sticky z-10 pr-5">
                    <Image
                      src={item}
                      width={438}
                      height={438}
                      alt="Carusel img"
                      className="z-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

Carusel.displayName = "Carusel";
export default Carusel;
