import React from 'react'
import DateRangeIcon from '@mui/icons-material/DateRange';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Card from "../../components/ui/card/index"
import "./info.css"
import Link from 'next/link';



const links = [
  { title: "Главная", path: "/" },
];



const Index = () => {
  return (
    <div className='mt-[200px] bg-[#F2F2F2]'>
  <div className='flex flex-wrap gap-3 px-4 md:px-[170px] pb-[24px] opacity-70 pt-[20px]'>
    <HomeIcon/>
    {links.map((item, index) => (
      <Link href={item.path} key={index} className='text-sm md:text-base'>
        {item.title}
      </Link>
    ))}
    <ChevronRightIcon/>
    <p className='text-sm md:text-base'>Полезные информации</p>
  </div>

  <div className='px-4 md:px-[150px]'>
    <h2 className='pb-[31px] text-[24px] md:text-[32px] font-bold'>Полезные информации</h2>
    <div className='flex flex-col gap-[24px]'>
      
      <div className='flex flex-wrap gap-3'>
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <div key={index} className='w-full md:w-[580px] h-[417px] bg-white flex flex-col justify-around pt-[38px] pl-[35px] pr-[110px] pb-[45px]'>
            <div>
              <h2 className='text-[20px] md:text-[32px] font-bold'>Как правильно выбрать эллиптический тренажер?</h2>
              <p className='text-[14px] md:text-[16px] opacity-60'>Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...</p>
            </div>
            <div className='flex gap-[35px] opacity-55'>
              <p><DateRangeIcon/> 27.01.2022</p>
              <p><RemoveRedEyeIcon/> 250</p>
            </div>
          </div>
        ))}
      </div>

      <button className='pokazat mt-[24px]'>Показать ещё</button>

      <div className='px-4  flex flex-col pt-[70px] pb-[76px]'>
        <div className='flex flex-wrap justify-between'>
          <h2 className='text-[24px] md:text-[32px] font-medium pb-[42px]'>Акция</h2>
        </div>
        <div className='flex flex-wrap gap-[10px]'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Index
