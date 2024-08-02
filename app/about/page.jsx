import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';
import Card from "../../components/ui/card/index";

const links = [
  { title: "Главная", path: "/" },
];

const Index = () => {
  return (
    <div className="mt-[190px] pb-[200px] bg-[#F2F2F2]">
      <div className="flex gap-3 px-4 md:px-[150px] pb-[24px] opacity-70 pt-[20px]">
        <HomeIcon />
        {links.map((item, index) => (
          <Link href={item.path} key={index}>
            {item.title}
          </Link>
        ))}
        <ChevronRightIcon />
        <p>Продукты</p>
        <ChevronRightIcon />
        <p>Оплата и Доставка</p>
      </div>
      <div className="px-4 md:px-[150px] flex flex-col md:flex-row gap-4">
        <div className="pt-[18px] pl-[20px] pr-[20px] md:pl-[50px] md:pr-[80px] pb-[218px] h-[200px] bg-white rounded-lg">
          <p>О нас</p>
          <p>Вканация</p>
        </div>
        <div className="pt-10 pl-[20px] pr-[20px] md:pl-[50px] md:pr-[80px] w-full md:w-[967px] pb-[71px] bg-white flex flex-col gap-4">
          <p className="text-[24px] font-bold pb-[21px]">7 SPORT MARKET</p>
          <p className="w-full md:w-[650px]">
            В составе томатов в большом количестве содержатся сахара, клетчатка, пектины, бета-каротин, витамины В1, В2, В5, В6, В9, С, К, Н и РР, а также нужные организму человека.
          </p>
          <p className="w-full md:w-[620px]">
            Овощи содержат в себе много полезных витаминов, которые укрепляют здоровье и иммунитет и являются необходимым компонентом в рационе человека. Тепличный помидор - всегда доступен для вас и в сети супермаркетов “Makro” вы всегда можете найти его по выгодной цене и заказать их с доставкой в Ташкенте.
          </p>
          <p className="w-full md:w-[650px]">
            В составе томатов в большом количестве содержатся сахара, клетчатка, пектины, бета-каротин, витамины В1, В2, В5, В6, В9, С, К, Н и РР, а также нужные организму человека
          </p>
          <p className="w-full md:w-[630px]">
            Овощи содержат в себе много полезных витаминов, которые укрепляют здоровье и иммунитет и являются необходимым компонентом в рационе человека. Тепличный помидор - всегда доступен для вас и в сети супермаркетов “Makro” вы всегда можете найти его по выгодной цене и заказать их с доставкой в Ташкенте.
          </p>
        </div>
      </div>
      <div>
        <div className="px-4 md:px-[150px] flex flex-col pt-[70px] pb-[76px]">
          <div className="flex justify-between">
            <h2 className="text-[32px] font-medium pb-[42px]">Акция</h2>
          </div>
          <div className="flex flex-wrap gap-[20px]">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
