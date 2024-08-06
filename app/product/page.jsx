'use client'


import HomeIcon from '@mui/icons-material/Home';
import React, { useState } from 'react';
import { Slider, TextField, Select, MenuItem, Button, FormControl, InputLabel } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from 'next/link';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Card from "../../components/ui/card/index"





const links = [
  { title: "Главная", path: "/" },
];

const Index = () => {
  const [price, setPrice] = useState([3000, 40000]);
  const handlePriceChange = (event, newValue) => {
    setPrice(newValue);
  };


  return (
    <div className='py-8 md:py-[200px] px-4 md:px-[130px] bg-[#F2F2F2]'>
    <div className='flex flex-wrap gap-3 pb-[24px] opacity-70 pt-[20px]'>
      <HomeIcon/>
      {links.map((item, index) => (
        <Link href={item.path} key={index} className='text-sm md:text-base'>
          {item.title}
        </Link>
      ))}
      <ChevronRightIcon/>
      <p className='text-sm md:text-base'>Продукты</p>
    </div>
  
    <div className='flex flex-col md:flex-row gap-4'>
      <div className='w-full md:w-[700px] bg-white p-4 rounded-lg h-auto md:h-[520px]'>
        <h2 className='text-xl font-bold mb-4'>Фильтр</h2>
        <div className='mb-4'>
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
        <TextField label="Артикул" variant="outlined" className="bg-[#F2F2F2] mb-4" fullWidth />
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
        <Button variant="contained" className="bg-[#F2F2F2] hover:bg-orange-400 pt-3 mt-4" fullWidth>
          <p className='text-black font-bold'>Показать результат</p>
        </Button>
      </div>
  
      <div className='w-full md:w-auto'>
        <div className='flex flex-wrap gap-6 mb-4'>
          <FormControl sx={{ minWidth: 150 }} size="small">
            <InputLabel>Сортировать</InputLabel>
            <Select defaultValue="" className="bg-white">
              <MenuItem value="">Все</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 160 }} size="small">
            <InputLabel>Все продукты</InputLabel>
            <Select defaultValue="" className="bg-white">
              <MenuItem value="">Все</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className='flex flex-wrap gap-4 mb-4'>
          <button className='px-4 py-2 flex gap-3 bg-white border rounded-md'>
            Кард
            <ViewWeekIcon/>
          </button>
          <button className='px-4 py-2 flex gap-3 bg-white border rounded-md opacity-50'>
            Лист
            <FormatListBulletedIcon/>
          </button>
        </div>
        <div className='flex flex-wrap gap-4'>
          <Card/>
          <Card/>
          <button className='mt-8 py-2 bg-white px-8 mx-auto block'>Показать ещё</button>
        </div>
      </div>
    </div>
  
    <div className='mt-8'>
      <h2 className='text-2xl md:text-3xl font-bold'>Реконмендуемые продукты</h2>
      <div className='flex flex-wrap gap-5 mt-8'>
      <Card/>
      </div>
    </div>
  </div>
  
  );
};

export default Index;