// import React from 'react'
// import Link from 'next/link';
// import Card from "../../components/ui/card/index"
// import HomeIcon from '@mui/icons-material/Home';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';


// const links = [
//   { title: "Главная", path: "/" },
// ];
// const Index = () => {
//   return (
//     <div className='py-[200px] px-[150px] bg-[#F2F2F2]'>
//       <div className='flex gap-3  pb-[24px] opacity-70 pt-[20px]'>
//         <HomeIcon/> 
//         {links.map((item, index) => (
//         <Link href={item.path} key={index}>
//           {item.title}
//         </Link>
//         ))}
//         <ChevronRightIcon/>
//         <p>Продукты</p>
//       </div>
//     </div>
//   )
// }

// export default Index



'use client'


import HomeIcon from '@mui/icons-material/Home';
import React, { useState } from 'react';
import { Slider, TextField, Select, MenuItem, Button, FormControl, InputLabel } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from 'next/link';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Card from "../../components/ui/card/index"




const products = [
    {
      id: 1,
      name: 'Бутса Nike Mercurial Superfly 8 FG',
      image: 'https://via.placeholder.com/200',
      price: 250000,
      oldPrice: 300000,
      isOnSale: false
    },
    {
      id: 2,
      name: 'Бутса Nike Mercurial Superfly 8 FG',
      image: 'https://via.placeholder.com/200',
      price: 500000,
      oldPrice: 750000,
      isOnSale: true
    },
    {
      id: 3,
      name: 'Бутса Nike Mercurial Superfly 8 FG',
      image: 'https://via.placeholder.com/200',
      price: 250000,
      oldPrice: 300000,
      isOnSale: false
    }
  ];
const links = [
  { title: "Главная", path: "/" },
];

const Index = () => {
  const [price, setPrice] = useState([3000, 40000]);
  const handlePriceChange = (event, newValue) => {
    setPrice(newValue);
  };


  return (
  <div className='py-[200px] px-[150px] bg-[#F2F2F2]'>
    <div className='flex gap-3  pb-[24px] opacity-70 pt-[20px]'>
         <HomeIcon/> 
         {links.map((item, index) => (
        <Link href={item.path} key={index}>
          {item.title}
        </Link>
        ))}
        <ChevronRightIcon/>
        <p>Продукты</p>
    </div>
    <div className='flex gap-4'>



      <div style={{ padding: 20, width: 700, backgroundColor: '#fff', borderRadius: 10, }} className=' h-[520px]'>
      <h2>Фильтр</h2>
      <div>
        <InputLabel>Цена</InputLabel>
        <Slider
          value={price}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={0}
          max={50000}
          step={1000}
          marks={[
            { value: 3000, label: '3 000 uzs' },
            { value: 40000, label: '40 000 uzs' }
          ]}
        />
      </div>
      <TextField label="Артикул" variant="outlined" className="bg-[#F2F2F2]" fullWidth margin="normal" />
      <FormControl fullWidth margin="normal">
        <InputLabel>Выберите категорию</InputLabel>
        <Select defaultValue="" className="bg-[#F2F2F2]">
          <MenuItem value="">Все</MenuItem>
          {/* Add more categories here */}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Новинка</InputLabel>
        <Select defaultValue="" className="bg-[#F2F2F2]">
          <MenuItem value="">Все</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal" className="bg-[#F2F2F2]">
        <InputLabel>Акция</InputLabel>
        <Select defaultValue="">
          <MenuItem value="">Все</MenuItem>
          {/* Add more options here */}
        </Select>
      </FormControl>
      <Button variant="contained"  className="bg-[#F2F2F2] hover:bg-orange-400 pt-3"  fullWidth>
      <p className='text-black bolder'>Показать результат</p>
      </Button>
      </div>






      <div>
        <div className='flex'>
        <div className='flex gap-6 '>
        <div>
          <FormControl sx={{ minWidth: 150, }} size="small">
      <InputLabel  className='w-[100px]'>Сортировать</InputLabel>
      <Select defaultValue="" className="bg-white">
        <MenuItem value="">Все</MenuItem>
      </Select>
        </FormControl>
        </div>
        <div>
        <FormControl sx={{ minWidth: 160 }} size="small">
      <InputLabel  >Все продукты</InputLabel>
      <Select defaultValue="" className="bg-white">
        <MenuItem value="">Все</MenuItem>
      </Select>
        </FormControl>
        </div>
        </div>
        <div className='flex gap-4 ml-[310px]'>
          <div><button className='px-[15px] py-[7px] flex gap-3 bg-white'>
          Кард
          <ViewWeekIcon/>
          </button></div>
          <div> <button className='px-[15px] py-[7px] flex gap-3 opacity-50 bg-white'>
          Лист
          <FormatListBulletedIcon/>
          </button></div>
        </div>
        </div>
        <div className='flex flex-wrap gap-3 pt-4'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <button className='mt-[50px] py-4 bg-white px-[400px]'>Показать ещё  </button>
        </div>
      </div>
    </div>
    <div className='mt-24'>
      <h2 className='text-3xl'>Реконмендуемые продукты</h2>
      <div className='flex gap-5 mt-16'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  </div>
  );
};

export default Index;