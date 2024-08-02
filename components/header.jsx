'use client';

import Link from "next/link";
import Image from 'next/image';
import { useState } from 'react';
import Icon from "../public/icon.svg";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LayersIcon from '@mui/icons-material/Layers';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import KeepMountedModal from "./modal/page";

const Index = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { title: "Продукты", path: "/product" },
    { title: "Контакты", path: "/контакты" },
    { title: "Оплата и Доставка", path: "/pay" },
    { title: "Новости", path: "/news" },
    { title: "О нас", path: "/about" },
  ];

  const korzinka = [
    { title: "Корзина", path: "/korzinka" },
  ];

  const Home = [
    { title: "Sport Market", path: "/" },
  ];

  return (
    <div className="z-30 text-gray-50 fixed w-full">
      <header>
        <div className="fixed bg-[#1F1D14] py-4 px-[150px] w-full flex justify-between items-center">
          <div className="flex items-center text-2xl w-20">
            <Image src={Icon} alt="Header Icon" />
            <div className="font-bold ml-2">
              {Home.map((item, index) => (
                <Link href={item.path} key={index}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex gap-[130px]">
            <div className="flex gap-5 items-center">
              {links.map((item, index) => (
                <Link href={item.path} key={index}>
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="flex gap-6">
              <a href="tel:+998943615427" className="flex items-center">
                <LocalPhoneIcon />
                <p className="text-xs ml-1">+998 (90)</p>
                <h3 className="ml-1">565-85-85</h3>
              </a>
              <a href="mailto:akromramazanov77@gmail.com" className="flex items-center">
                <EmailIcon />
                <span className="ml-1">info@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex pt-[100px] pb-[20px] bg-white px-[150px]">
          <button className="mt-[20px] px-[40px] py-[15px] bg-black text-xl rounded-lg flex items-center">
            <LayersIcon className="mr-2" />
            Каталог
          </button>
          <input type="text" placeholder="Поиск" className="px-4 border bg-[#F2F2F2] ml-4 w-[480px] rounded-lg" />
          <div className="flex ml-auto items-center gap-3">
            <button className="text-black py-[13px] px-[13px] bg-[#F2F2F2]" onClick={() => setOpen(true)}>
              <PersonOutlineIcon />
            </button>
            <KeepMountedModal open={open} handleClose={() => setOpen(false)} />
            <button className="text-black py-[13px] px-[13px] bg-[#F2F2F2]">
              <FavoriteBorderIcon />
            </button>
            <button className="text-black py-[15px] px-[33px] bg-[#F2F2F2] flex items-center">
              <LocalGroceryStoreIcon className="mr-2" />
              {korzinka.map((item, index) => (
                <Link href={item.path} key={index}>
                  {item.title}
                </Link>
              ))}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Index;
