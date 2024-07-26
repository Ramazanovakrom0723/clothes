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
  // const links = [
  //   { path: "/продукты", title: "Продукты" },
  //   { path: "/контакты", title: "Контакты" },
  //   { path: "/оплата", title: "Оплата и Доставка" },
  //   { path: "/новости", title: "Новости" },
  //   { path: "/cc", title: "О нас" },
  // ];
  const links = [
    { title: "Продукты", path: "/product" },
    { title: "Контакты", path: "/контакты" },
    { title: "Оплата и Доставка", path: "/оплата" },
    { title: "Новости", path: "/новости" },
    { title: "О нас", path: "/about" },
  ];

  const Home = [
    { title: "Sport  Market", path: "/" },
  ];

  return (
    <div className="  text-gray-50 fixed">
      <header className="">
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
      <div className=" pt-[100px] bg-white px-[150px]">
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






// <div className="flex text-2xl gap-3">
//       <Image src={Icon} alt="Header Icon"/>
//         <div className="font-bold">
//         {Home.map((item, index) => (
//         <Link href={item.path} key={index}>
//           {item.title}
//         </Link>
//         ))}
//         </div>
//       </div>






// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// import Logo from "../public/icon.svg"
// import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const data = [
//     { title: "Продукты", path: "/продукты" },
//     { title: "Контакты", path: "/контакты" },
//     { title: "Оплата и Доставка", path: "/оплата" },
//     { title: "Новости", path: "/новости" },
//     { title: "О нас", path: "/нас" },
//   ];

//   return (
//     <>
//       <nav className="fixed w-full h-full">
//         <div className=" bg-[#1F1D14]">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex items-center justify-between py-4">
//               <div className="flex items-center">
//                 <Link href="/" className="flex text-[24px] font-bold text-white">
//                   <Image src={Logo} alt="logo" />
//                     <div>
//                     <h2>Sport</h2>
//                     <h2>Market</h2>
//                     </div>
//                 </Link>
//               </div>
//               <div className="flex items-center lg:hidden">
//                 <button
//                   onClick={() => setIsOpen(!isOpen)}
//                   className="text-white focus:outline-none"
//                 >
//                   <i
//                     className={`bi ${isOpen ? "bi-x" : "bi-list"} text-2xl`}
//                   ></i>
//                 </button>
//               </div>
//               <div className="hidden lg:flex lg:items-center lg:gap-8">
//                 <ul className="flex items-center gap-8">
//                   {data.map((item, index) => (
//                     <li key={index}>
//                       <Link href={item.path} className="text-white">
//                         {item.title}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//                 <div className="flex items-center gap-8">
//                   <p className=" text-white flex items-center gap-1">
//                     <i className="bi bi-telephone text-white"></i>
//                     <p className="text-white text-xs font-normal font-['Fira Sans']">
//                       +998 (90)
//                     </p>
//                     565-85-85
//                   </p>
//                   <p className="text-white flex items-center gap-2">
//                     <i className="bi bi-envelope text-white"></i>
//                     info@gmail.com
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="py-4 flex items-center justify-between">
//             <div className="flex items-center gap-4 lg:gap-10">
//               <button className="flex items-center gap-4 lg:gap-10 px-4 py-2 lg:px-10 lg:py-3 rounded bg-black text-white">
//                 <i className="bi bi-stack"></i>
//                 <span className="hidden lg:inline">Каталог</span>
//               </button>
//               <div className="relative  w-[100px]  lg:w-[402px] h-10 lg:h-12 md:w-[302px] sm:w-full flex ">
//                 <input
//                   type="text"
//                   className="w-full h-full py-2 px-4 lg:px-10 rounded outline-none bg-[#F2F2F2] placeholder:text-black"
//                   placeholder="Поиск"
//                 />
//                 <i className="bi bi-search absolute top-2 right-3 lg:top-3"></i>
//               </div>
//             </div>
//             <div className="flex items-center gap-4 lg:gap-8">
//               <button className="rounded bg-[#F2F2F2] text-black p-3 lg:p-4">
//                 <PersonOutlineIcon/>
//               </button>
//               <button className="rounded bg-[#F2F2F2] text-black p-3 lg:p-4">
//                 <FavoriteBorderIcon/>
//               </button>
//               <button className="flex items-center gap-2 lg:gap-4 px-4 py-2 lg:px-10 lg:py-3 rounded bg-[#F2F2F2] text-black">
//                 <LocalGroceryStoreIcon/>
//                 <span className="hidden lg:inline">Корзина</span>
//               </button>
//             </div>
//           </div>
//         </div>
//         {isOpen && (
//           <div className="lg:hidden bg-[#1F1D14]">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
//               <ul className="flex flex-col gap-4">
//                 {data.map((item, index) => (
//                   <li key={index}>
//                     <Link href={item.path} className="text-white">
//                       {item.title}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//               <div className="flex flex-col gap-4 mt-4">
//                 <p className="text-white flex items-center gap-2">
//                   <i className="bi bi-telephone text-white"></i>
//                   <span className="text-xs font-normal">
//                     +998 (90) 565-85-85
//                   </span>
//                 </p>
//                 <p className="text-white flex items-center gap-2">
//                   <i className="bi bi-envelope text-white"></i>
//                   info@gmail.com
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// }

// export default Header;
