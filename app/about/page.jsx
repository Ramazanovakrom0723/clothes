import React from 'react'
import DateRangeIcon from '@mui/icons-material/DateRange';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Card from "../../components/ui/card/index"
import "./about.css"
import Link from 'next/link';



const links = [
  { title: "Главная", path: "/" },
];



const Index = () => {
  return (
    <div className='mt-[200px] bg-[#F2F2F2]'>
      <div className='flex gap-3 px-[150px] pb-[24px] opacity-70 pt-[20px]'>
        <HomeIcon/> 
        {links.map((item, index) => (
        <Link href={item.path} key={index}>
          {item.title}
        </Link>
        ))}
        <ChevronRightIcon/>
        <p>Полезные информации</p>
      </div>
      <div className='px-[150px] '>
        <h2 className='pb-[31px] text-[32px] font-bold'>Полезные информации</h2>
         <div className='flex flex-col gap-[24px]'>


<div className='flex gap-[24px]'>
<div className='w-[603px] h-[417px] bg-white flex flex-col justify-around pt-[38px] pl-[35px] pr-[110px] pb-[ 45px] '>
  <div>
    <h2 className=' text-[32px] font-bold'>Как правильно выбрать эллиптический тренажер?</h2>
    <p className='text-[16px] opacity-60'>Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...</p>
  </div>
  <div className='flex gap-[35px] opacity-55 '>
    <p><DateRangeIcon/> 27.01.2022</p>
    <p><RemoveRedEyeIcon/> 250</p>
  </div>
</div>
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
</div>
<div className='flex '>
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
</div>
<div className='flex '>
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
</div>
<div className='flex '>
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
</div>

         </div>
      </div>
      <button className='pokazat'>
      Показать ещё
      </button>

      <div className=' px-[150px] flex flex-col pt-[70px] pb-[76px]'>
        <div className='flex justify-between'>
          <h2 className='text-[32px] font-medium pb-[42px]'>Акция</h2>
          <div>
            <button className='w-[50px] h-[50px] rounded-[50%] bg-white text-3xl mr-[20px]'><KeyboardArrowLeftIcon/></button>
            <button className='w-[50px] h-[50px] rounded-[50%] bg-white text-3xl'><ChevronRightIcon/></button>
          </div>
        </div>
       <div className='flex gap-[20px]'>
        <Card/>
        <Card/> 
        <Card/>
        <Card/>
       </div>
    </div>
   </div>
  )
}

export default Index
