import React from 'react';
import Image from 'next/image';
import Тренажеры from '../public/kach.png';
import Krasofka from '../public/krasofka.png';
import Kiyim from '../public/kiyim.png';
import Suv from '../public/suvKiyimi.png';
import Lija from '../public/lija.png';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DateRangeIcon from '@mui/icons-material/DateRange';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Run from '../public/yuguradigon.svg';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import Carusel from '@/components/ui/carusel';
import Card from '../components/ui/card/index';

export default function Home() {
  return (
    <main className="bg-[#F2F2F2] mt-[120px]">
      <Carusel />
      <div className="px-4 md:px-10 lg:px-20 xl:px-[150px] bg-white pb-20">
        <h2 className="fira-sans text-2xl md:text-3xl lg:text-4xl font-medium pt-24">Каталог</h2>
        <div className="flex flex-wrap justify-center gap-6 pt-8">
          <div className="flex flex-col items-center gap-6 p-6 bg-[#D3E5F2] rounded-lg">
            <p>Тренажеры</p>
            <Image src={Тренажеры} alt="Тренажеры" className="w-36 h-28" />
          </div>
          <div className="flex flex-col items-center gap-6 p-6 bg-[#DADBE0] rounded-lg">
            <p>Спротивные <br />обуви</p>
            <Image src={Krasofka} alt="Krasofka" className="w-36 h-28" />
          </div>
          <div className="flex flex-col items-center gap-6 p-6 bg-[#DADBE0] rounded-lg">
            <p>Спортивные <br />одежды</p>
            <Image src={Kiyim} alt="Kiyim" className="w-36 h-28" />
          </div>
          <div className="flex flex-col items-center gap-6 p-6 bg-[#C2BCE8] rounded-lg">
            <p>Водный спорт</p>
            <Image src={Suv} alt="SuvKiyim" className="w-36 h-28" />
          </div>
          <div className="flex flex-col items-center gap-6 p-6 bg-[#ABA520] rounded-lg">
            <p>Горный спорт</p>
            <Image src={Lija} alt="lija" className="w-36 h-28" />
          </div>
        </div>
      </div>

      <section className="px-4 md:px-10 lg:px-20 xl:px-[145px] flex flex-col pt-16 pb-20">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">Акция</h2>
          <div>
            <button className="w-12 h-12 rounded-full bg-white text-3xl mr-5">
              <KeyboardArrowLeftIcon />
            </button>
            <button className="w-12 h-12 rounded-full bg-white text-3xl">
              <ChevronRightIcon />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 pt-8">
          <Card />
        </div>
      </section>

      <section className="px-4 md:px-10 lg:px-20 xl:px-[145px] flex flex-col pt-16 pb-20">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">Новинки</h2>
          <div>
            <button className="w-12 h-12 rounded-full bg-white text-3xl mr-5">
              <KeyboardArrowLeftIcon />
            </button>
            <button className="w-12 h-12 rounded-full bg-white text-3xl">
              <ChevronRightIcon />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 pt-8">
          <Card />
        </div>
      </section>

      <section className="px-4 md:px-10 lg:px-20 xl:px-[145px] flex flex-col pt-16 pb-20">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">Продукты</h2>
          <div>
            <button className="w-12 h-12 rounded-full bg-white text-3xl mr-5">
              <KeyboardArrowLeftIcon />
            </button>
            <button className="w-12 h-12 rounded-full bg-white text-3xl">
              <ChevronRightIcon />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 pt-8">
          <Card />
        </div>
      </section>

      <section className="px-4 md:px-10 lg:px-20 xl:px-[145px] flex flex-col pt-16 pb-20">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">ТОП продажа</h2>
          <div>
            <button className="w-12 h-12 rounded-full bg-white text-3xl mr-5">
              <KeyboardArrowLeftIcon />
            </button>
            <button className="w-12 h-12 rounded-full bg-white text-3xl">
              <ChevronRightIcon />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 pt-8">
          <Card />
        </div>
      </section>

      <section className="px-4 md:px-10 lg:px-20 xl:px-[115px] flex flex-col pt-16 pb-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold pb-8">Полезное</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="w-full md:w-[603px] h-[417px] bg-white flex flex-col justify-around p-8">
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                Как правильно выбрать эллиптический тренажер?
              </h2>
              <p className="text-sm md:text-base lg:text-lg opacity-60">
                Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...
              </p>
            </div>
            <div className="flex gap-8 opacity-55">
              <p className="flex items-center gap-2">
                <DateRangeIcon /> 27.01.2022
              </p>
              <p className="flex items-center gap-2">
                <RemoveRedEyeIcon /> 250
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-full md:w-[603px] py-8 bg-white flex justify-center">
              <Image src={Run} alt="run" />
            </div>
            <button className="w-full md:w-[603px] py-4 bg-white text-center">
              Посмотрет все
            </button>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-10 lg:px-20 xl:px-[145px] pt-16 pb-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold pb-8">Примущества</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="p-10 bg-white flex flex-col items-center text-center gap-4 w-[292px] h-[289px]">
            <LocalShippingOutlinedIcon className="w-12 h-12" />
            <p>Доставка по всему Узбекистану</p>
          </div>
          <div className="p-10 bg-white flex flex-col items-center text-center gap-4 w-[292px] h-[289px]">
            <LocalShippingOutlinedIcon className="w-12 h-12" />
            <p>Скидки и акции</p>
          </div>
          <div className="p-10 bg-white flex flex-col items-center text-center gap-4 w-[292px] h-[289px]">
            <LocalShippingOutlinedIcon className="w-12 h-12" />
            <p>Широкий ассортимент товаров</p>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-10 lg:px-20 xl:px-40 pt-16 pb-40">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold pb-8">О нас</h2>
        <div className="w-full h-[367px] bg-black flex items-center justify-center">
          <p className="text-white text-center text-base md:text-lg lg:text-xl px-4 md:px-10 lg:px-20 xl:px-40">
            Интернет магазин спортивных товаров 7MARKETSPORT.UZ предлагает широкий ассортимент продукции с доставкой по Ташкенту, области и другим регионам Узбекистана. Ведется работа как с розничными покупателями, так и с оптовыми клиентами. Разнообразие форм оплаты заметно упрощает процесс приобретения товара. Действует гибкая система скидок.
          </p>
        </div>
      </section>
    </main>
  );
}
