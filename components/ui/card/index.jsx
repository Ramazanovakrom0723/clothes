import React from 'react'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Kachs from "../../../public/kach.png"
import Image from 'next/image';


const Index = () => {
  return (
    <div className='flex'>
      <div className='pl-[25px] pt-[25px] pr-[17px] bg-white '>
        <div className='flex justify-end'><button><FavoriteBorderIcon/></button></div>
          <Image src={Kachs} alt='Kach' className='w-[242px] h-[194px]'/>
          <p className='text-[20px]'>Бутса Nike Mercurial</p>
          <p className='text-[20px]'>Superfly 8 FG</p>
          <div className='py-[16px]'>
          <b className='text-[20px] '>250 000<span>uzs</span></b>
          </div>
          <button className='w-full py-[15px] bg-[#FBD029] text-[]'> <LocalGroceryStoreIcon/> Корзина</button>
        </div>
    </div> 
  )
}

export default Index










{/* <div className='flex'>
        <div className='pl-[25px] pt-[25px] pr-[17px] bg-white '>
            <div className='flex justify-end'><button><FavoriteBorderIcon/></button></div>
            <Image src={Kach} alt='Kach' className='w-[242px] h-[194px]'/>
            <p className='text-[20px]'>Бутса Nike Mercurial</p>
            <p className='text-[20px]'>Superfly 8 FG</p>
            <div className='py-[16px]'>
            <b className='text-[20px] '>250 000<span>uzs</span></b>
            </div>
            <button className='w-full py-[15px] bg-[#FBD029] text-[]'> <LocalGroceryStoreIcon/> Корзина</button>
          </div>
        </div> */}