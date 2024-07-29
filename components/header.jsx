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
    { title: "Продукты", path: "/product" },
    { title: "Контакты", path: "/контакты" },
    { title: "Оплата и Доставка", path: "/pay" },
    { title: "Новости", path: "/новости" },
    { title: "О нас", path: "/about" },
  ];

  const Home = [
    { title: "Sport  Market", path: "/" },
  ];

  return (
    <div className="  text-gray-50 fixed ">
      <header>
      <div  className="fixed bg-[#1F1D14] py-4 px-[150px] w-full   flex justify-between items-center">
      <div className="flex text-2xl w-20">
      <Image src={Icon} alt="Header Icon"/>
        <div className="font-bold">
        {Home.map((item, index) => (
        <Link href={item.path} key={index}>
          {item.title}
        </Link>
        ))}
        </div>
      </div>
      <div className="flex gap-[130px]">
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
      <div className=" pt-[100px] bg-white px-[150px] ">
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








// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import Icon from "../public/icon.svg";
// import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
// import EmailIcon from "@mui/icons-material/Email";
// import LayersIcon from "@mui/icons-material/Layers";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
// import { useState } from "react";

// const Index = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const links = [
//     { title: "Продукты", path: "/product" },
//     { title: "Контакты", path: "/контакты" },
//     { title: "Оплата и Доставка", path: "/pay" },
//     { title: "Новости", path: "/новости" },
//     { title: "О нас", path: "/about" },
//   ];

//   const Home = [{ title: "Sport Market", path: "/" }];

//   return (
//     <div className="text-gray-50 fixed w-full">
//       <header>
//         <div className="fixed bg-[#1F1D14] py-4 px-4 px-[150px] w-full flex justify-between items-center">
//           <div className="flex items-center w-full lg:w-auto">
//             <Image src={Icon} alt="Header Icon" width={40} height={40} />
//             <div className="font-bold text-2xl ml-2">
//               {Home.map((item, index) => (
//                 <Link href={item.path} key={index}>
//                   {item.title}
//                 </Link>
//               ))}
//             </div>
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-white focus:outline-none lg:hidden ml-auto"
//             >
//               <i
//                 className={`bi ${isOpen ? "bi-x" : "bi-list"} text-2xl`}
//               ></i>
//             </button>
//           </div>
//           <div className={`lg:flex gap-[130px] ${isOpen ? "flex" : "hidden"} flex-col lg:flex-row w-full lg:w-auto`}>
//             <div className="flex flex-col lg:flex-row gap-5 items-center">
//               {links.map((item, index) => (
//                 <Link href={item.path} key={index} className="text-lg">
//                   {item.title}
//                 </Link>
//               ))}
//             </div>
//             <div className="flex flex-col lg:flex-row gap-6 items-center mt-4 lg:mt-0">
//               <a href="tel:+998943615427" className="flex items-center">
//                 <LocalPhoneIcon />
//                 <p className="text-xs ml-1">+998 (90)</p>
//                 <h3 className="ml-1">565-85-85</h3>
//               </a>
//               <a href="mailto:akromramazanov77@gmail.com" className="flex items-center">
//                 <EmailIcon />
//                 <span className="ml-1">info@gmail.com</span>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="pt-[100px] bg-white px-4 lg:px-[150px] w-full">
//           <div className="flex flex-wrap gap-4 items-center">
//             <button className="mt-[20px] px-[40px] py-[15px] bg-black text-xl rounded-lg flex items-center">
//               <LayersIcon className="mr-2" />
//               Каталог
//             </button>
//             <input
//               type="text"
//               placeholder="Поиск"
//               className="px-4 py-[17px] border bg-[#F2F2F2] w-full lg:w-[480px] rounded-lg"
//             />
//             <div className="flex gap-3 items-center">
//               <button className="text-black py-[13px] px-[13px] bg-[#F2F2F2]">
//                 <PersonOutlineIcon />
//               </button>
//               <button className="text-black py-[13px] px-[13px] bg-[#F2F2F2]">
//                 <FavoriteBorderIcon />
//               </button>
//               <button className="text-black py-[15px] px-[33px] bg-[#F2F2F2] flex items-center">
//                 <LocalGroceryStoreIcon className="mr-2" />
//                 Корзина
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Index;
