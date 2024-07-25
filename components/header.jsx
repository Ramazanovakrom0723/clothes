import Link from "next/link";
import Image from 'next/image';
import Icon from "../public/icon.svg"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LayersIcon from '@mui/icons-material/Layers';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

const Index = () => {
  const links = [
    { path: "/продукты", title: "Продукты" },
    { path: "/контакты", title: "Контакты" },
    { path: "/оплата", title: "Оплата и Доставка" },
    { path: "/новости", title: "Новости" },
    { path: "/нас", title: "О нас" },
  ];

  return (
    <div className="  text-gray-50">
      <header className="">
      <div  className="fixed bg-[#1F1D14] py-4 px-[150px] w-full   flex justify-between items-center">
      <div className="flex text-2xl gap-3">
      <Image src={Icon} alt="Header Icon"/>
        <div className="font-bold">
        <h2>Sport</h2>
        <h2>Market</h2>
        </div>
      </div>
      <div className="flex gap-[180px]">
      <div className=" flex gap-5 items-center">
      {links.map((item, index) => (
        <Link href={item.path} key={index}>
          {item.title}
        </Link>
        ))}
      </div>
      <div className="flex gap-6"> 
      <a href="tel:+998943615427" className="flex"><LocalPhoneIcon/><p className="text-xs">+998 (90) </p> <h3> 565-85-85</h3></a>
      <a href="gmail:akromramazanov77@gmail.com"><EmailIcon/>info@gmail.com</a>
      </div>
      </div>
      </div>
      <div className="mx-[150px] pt-[100px]">
        <button className="mt-[20px] px-[40px] py-[15px] bg-black text-xl rounded-lg">
          <LayersIcon />
          Каталог 
        </button>
        <input type="text" placeholder="Поиск" className="px-4 py-[17px] border bg-[#F2F2F2] ml-4 w-[480px] rounded-lg" />
        <button className="text-black ml-[185px] mr-[13px] py-[13px] px-[13px] bg-[#F2F2F2]"><PersonOutlineIcon/></button>
        <button className="text-black py-[13px] px-[13px] ml-3 bg-[#F2F2F2]"><FavoriteBorderIcon/></button>
        <button className="text-black ml-[30px] py-[15px] text-[] px-[33px]  bg-[#F2F2F2]">
          <LocalGroceryStoreIcon/>
          Корзина
        </button>
      </div>
    </header>
    </div>

  );
};

export default Index;