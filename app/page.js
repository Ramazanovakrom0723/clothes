import React from 'react'
import Image from 'next/image';
import Тренажеры from  "../public/kach.png"
import Krasofka from "../public/krasofka.png"
import Kiyim from "../public/kiyim.png"
import Suv from "../public/suvKiyimi.png"
import Lija from "../public/lija.png"
import Red from "../public/krasofka_red.png"
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Kach from "../public/kach.png"
import Kiyimm from "../public/kiyim.png"
import Ryukzak from "../public/ryukzak.png"
import DateRangeIcon from '@mui/icons-material/DateRange';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Run from "../public/yuguradigon.svg"
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

import Card from "../components/card/index"



export default function Home() {
  return (
    <main className='bg-[#F2F2F2] mt-[120px]'>
      <div className='px-[150px] bg-white pb-[80px]'>
        <h2 className='fira-sans text-[32px] font-medium pt-[102px]'>Катаолог</h2>
        <div className='flex gap-[30px] text-[20px] pt-[32px]'>
          <div className='flex flex-col gap-[60px] pl-[28px] pt-[25px] pr-[47px] pb-[36px] bg-[#D3E5F2] rounded-[10px]'>
          <p>Тренажеры</p>
          <Image src={Тренажеры} alt='Тренажеры' className='w-[140px] h-[110px]'/>
          </div>
          <div className='flex flex-col gap-[60px] pl-[28px] pt-[25px] pr-[47px] pb-[36px] bg-[#DADBE0] rounded-[10px]'>
          <p>Спротивные <br/>обуви</p>
          <Image src={Krasofka} alt='Krasofka' className='w-[140px] h-[110px]'/>
          </div>
          <div className='flex flex-col gap-[60px] pl-[28px] pt-[25px] pr-[47px] pb-[36px] bg-[#DADBE0] rounded-[10px]'>
          <p>Спортивные <br/> одежды</p>
          <Image src={Kiyim} alt='Kiyim' className='w-[140px] h-[110px]'/>
          </div>
          <div className='flex flex-col gap-[60px] pl-[28px] pt-[25px] pr-[47px] pb-[36px] bg-[#C2BCE8] rounded-[10px]'>
          <p>Водный спорт</p>
          <Image src={Suv} alt='SuvKiyim' className='w-[140px] h-[110px]'/>
          </div>
          <div className='flex flex-col gap-[60px] pl-[28px] pt-[25px] pr-[47px] pb-[36px] bg-[#ABA520] rounded-[10px]'>
          <p>Горный спорт</p>
          <Image src={Lija} alt='lija' className='w-[140px] h-[110px]'/>
          </div>
        </div>
      </div>
      {/* <Card/> */}



      <div className=' px-[150px] flex flex-col pt-[70px] pb-[76px]'>
        <div className='flex justify-between'>
          <h2 className='text-[32px] font-medium pb-[42px]'>Акция</h2>
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
            <b className='text-[20px] text-[#FF1313]'>500 000<span>uzs</span></b>
            <p className='text-[#1F1D14] opacity-55 line-through'>750 000</p>
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
            <b className='text-[20px] text-[#FF1313]'>500 000<span>uzs</span></b>
            <p className='text-[#1F1D14] opacity-55 line-through'>750 000</p>
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
            <b className='text-[20px] text-[#FF1313]'>500 000<span>uzs</span></b>
            <p className='text-[#1F1D14] opacity-55 line-through'>750 000</p>
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
            <b className='text-[20px] text-[#FF1313]'>500 000<span>uzs</span></b>
            <p className='text-[#1F1D14] opacity-55 line-through'>750 000</p>
            </div>
            <button className='w-full py-[15px] bg-[#FBD029] text-[]'> <LocalGroceryStoreIcon/> Корзина</button>
          </div>
        </div>
       </div>
      </div>




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
            <b className='text-[20px] '>500 000<span>uzs</span></b>
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
            <b className='text-[20px] '>500 000<span>uzs</span></b>
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
            <b className='text-[20px] '>500 000<span>uzs</span></b>
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
            <b className='text-[20px] '>500 000<span>uzs</span></b>
            </div>
            <button className='w-full py-[15px] bg-[#FBD029] text-[]'> <LocalGroceryStoreIcon/> Корзина</button>
          </div>
        </div>
       </div>
      </div>


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


<div className=' px-[150px] flex flex-col pt-[70px] pb-[76px]'>
<div className='flex justify-between'>
  <h2 className='text-[32px] font-medium pb-[42px]'>Продукты</h2>
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
    <b className='text-[20px] '>500 000<span>uzs</span></b>
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
    <b className='text-[20px] '>500 000<span>uzs</span></b>
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
    <b className='text-[20px] '>500 000<span>uzs</span></b>
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
    <b className='text-[20px] '>500 000<span>uzs</span></b>
    </div>
    <button className='w-full py-[15px] bg-[#FBD029] text-[]'> <LocalGroceryStoreIcon/> Корзина</button>
  </div>
</div>
</div>
</div>




<div className=' px-[150px] flex flex-col pt-[70px] pb-[76px]'>
<div className='flex justify-between'>
  <h2 className='text-[32px] font-medium pb-[42px]'>ТОП продажа</h2>
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
    <b className='text-[20px] '>500 000<span>uzs</span></b>
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
    <b className='text-[20px] '>500 000<span>uzs</span></b>
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
    <b className='text-[20px] '>500 000<span>uzs</span></b>
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
    <b className='text-[20px] '>500 000<span>uzs</span></b>
    </div>
    <button className='w-full py-[15px] bg-[#FBD029] text-[]'> <LocalGroceryStoreIcon/> Корзина</button>
  </div>
</div>
</div>
</div>






<div className='px-[150px] '>
<h2 className='pb-[31px] text-[32px] font-bold'>Полезное</h2>
<div className='flex gap-6'>
<div className='w-[603px] h-[417px] bg-white flex flex-col justify-around pt-[38px] pl-[35px] pr-[110px] pb-[ 45px]'>
  <div>
    <h2 className=' text-[32px] font-bold'>Как правильно выбрать эллиптический тренажер?</h2>
    <p className='text-[16px] opacity-60'>Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...</p>
  </div>
  <div className='flex gap-[35px] opacity-55 '>
    <p><DateRangeIcon/> 27.01.2022</p>
    <p><RemoveRedEyeIcon/> 250</p>
  </div>
</div>
<div className='flex flex-col gap-[15px]'>
<div className='px-[145px] py-[33px] bg-white'>
  <Image src={Run} alt='run' />
</div>
  <button className='px-[145px] py-[15px] bg-white'>
  Посмотрет все
  </button>
</div>
</div>
</div>



<div className='px-[150px] pt-[80px]'>
<h2>Примущества</h2>
<div className='flex gap-6'>
<div className='pl-[40px] pt-[64px] pr-[70px] pb-[99px] w-[292px] h-[289px] bg-white flex flex-col gap-10'>
  <LocalShippingOutlinedIcon className='w-[48px] h-[48px]'/>
  <p>Доставка по всему Узбекистану</p>
</div>
<div className='pl-[40px] pt-[64px] pr-[70px] pb-[99px] w-[292px] h-[289px] bg-white flex flex-col gap-10'>
  <LocalShippingOutlinedIcon className='w-[48px] h-[48px]'/>
  <p>Доставка по всему Узбекистану</p>
</div>
<div className='pl-[40px] pt-[64px] pr-[70px] pb-[99px] w-[292px] h-[289px] bg-white flex flex-col gap-10'>
  <LocalShippingOutlinedIcon className='w-[48px] h-[48px]'/>
  <p>Скидки и акции</p>
</div>
<div className='pl-[40px] pt-[64px] pr-[29px] pb-[99px] w-[292px] h-[289px] bg-white flex flex-col gap-10'>
  <LocalShippingOutlinedIcon className='w-[48px] h-[48px]'/>
  <p>Широкий ассортимент товаров</p>
</div>
</div>
</div>



<div className='px-[150px] pt-[80px] mb-[150px]'>
<h2 className='text-[32px] font-bold pb-[30px]'>О нас</h2>
<div className='w-full h-[367px] bg-black'>
<p className='pt-[70px] pl-[80px] pb-[101px] pr-[300px] text-white text-[20px]'>Интернет магазин спортивных товаров 7MARKETSPORT.UZ предлагает широкий ассортимент продукции с доставкой по Ташкенту, области и другим регионам Узбекистана. Ведется работа как с розничными покупателями, так и с оптовыми клиентами. Разнообразие форм оплаты заметно упрощает процесс приобретения товара. Действует гибкая система скидок. Разнообразие форм оплаты заметно упрощает процесс приобретения товара. Действует гибкая система скидок. </p>
</div>
</div>
     


    </main>
  );
}



