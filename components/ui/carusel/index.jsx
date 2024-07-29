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
    <div className="mt-[200px] px-4 md:px-10 lg:px-20 xl:px-40">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        {imgList.map((item, index) => (
          <SwiperSlide key={index} className="rounded-2xl overflow-hidden">
            <div className="h-[488px] rounded-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="pt-8 md:pt-20 md:pl-10 lg:pl-20 xl:pl-28">
                  <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold">
                    Бутсы Nike Phantom <br />
                    GT2 Elite FG
                  </h1>
                  <button className="py-2.5 mt-4 md:mt-6 px-5 rounded-md border-2 border-[#FBD029]">
                    Подробности
                  </button>
                </div>
                <div className="relative h-[488px] flex items-center justify-center md:justify-end mt-6 md:mt-0">
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-red-500 z-0"></div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-auto md:top-[-75px] md:right-10 rotate-[25deg] w-[355px] h-[921px] bg-[#BDD400] z-0"></div>
                  <div className="relative z-10">
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
