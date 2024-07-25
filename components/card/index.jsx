import React from 'react'
import Red from "../../public/krasofka_red.png"
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Kach from "../../public/kach.png"
import Kiyimm from "../../public/kiyim.png"
import Ryukzak from "../../public/ryukzak.png"
import Image from 'next/image';


const Index = () => {
  return (
    <div>
      <div className=' px-[150px] flex flex-col pt-[70px] pb-[76px]'>
        <div className='flex justify-between'>
          <h2 className='text-[32px] font-medium pb-[42px]'>Новинки</h2>
          <div>
            <button className='w-[50px] h-[50px] rounded-[50%] bg-white text-3xl mr-[20px]'><KeyboardArrowLeftIcon/></button>
            <button className='w-[50px] h-[50px] rounded-[50%] bg-white text-3xl'><ChevronRightIcon/></button>
          </div>
        </div>
       <div className='flex gap-[20px]'>
       <div className='flex'>
       <div className='pl-[25px] pt-[25px] pr-[17px] bg-white '>
            <div className='flex justify-end'><button><FavoriteBorderIcon/></button></div>
            <Image src={Red} alt='Red'/>
            <p className='text-[20px]'>Бутса Nike Mercurial</p>
            <p className='text-[20px]'>Superfly 8 FG</p>
            <div className='py-[16px]'>
            <b className='text-[20px] '>250 000<span>uzs</span></b>
            </div>
            <button className='w-full py-[15px] bg-[#FBD029] text-[]'> <LocalGroceryStoreIcon/> Корзина</button>
          </div>
        </div>
        <div className='flex'>
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
        </div>
        <div className='flex'>
        <div className='pl-[25px] pt-[25px] pr-[17px] bg-white '>
            <div className='flex justify-end'><button><FavoriteBorderIcon/></button></div>
            <Image src={Kiyimm} alt='Kiyimm' className='w-[242px] h-[194px]'/>
            <p className='text-[20px]'>Бутса Nike Mercurial</p>
            <p className='text-[20px]'>Superfly 8 FG</p>
            <div className='py-[16px]'>
            <b className='text-[20px] '>250 000<span>uzs</span></b>
            </div>
            <button className='w-full py-[15px] bg-[#FBD029] text-[]'> <LocalGroceryStoreIcon/> Корзина</button>
          </div>
        </div>
        <div className='flex'>
          <div className='pl-[25px] pt-[25px] pr-[17px] bg-white '>
            <div className='flex justify-end'><button><FavoriteBorderIcon/></button></div>
            <Image src={Ryukzak} alt='Ryukzak'/>
            <p className='text-[20px]'>Бутса Nike Mercurial</p>
            <p className='text-[20px]'>Superfly 8 FG</p>
            <div className='py-[16px]'>
            <b className='text-[20px] '>250 000<span>uzs</span></b>
            </div>
            <button className='w-full py-[15px] bg-[#FBD029] text-[]'> <LocalGroceryStoreIcon/> Корзина</button>
          </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Index
