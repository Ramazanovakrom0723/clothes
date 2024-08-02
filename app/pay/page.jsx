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
        <div className="flex gap-4 pt-[18px] px-[18px] pb-[218px] h-[200px] bg-white rounded-lg">
          <h2>Оплата и Доставка</h2>
        </div>
        <div className="pt-10 pl-[20px] md:pl-[50px] pr-[20px] md:pr-[80px] w-full md:w-[967px] pb-[71px] bg-white flex flex-col gap-4">
          <p className="text-[24px] font-bold pb-[21px]">Способы оплаты</p>
          <p className="w-full md:w-[550px]">
            Для того, чтобы оплатить товар, Вам нужно перейти в «Корзину» и выбрать тот товар, который Вы хотите купить.
          </p>
          <p className="w-full md:w-[550px]">
            После перехода в Корзину, откроется список товаров, которые Вы добавили. Далее, нажимаем кнопку «Оформить заказ». В окне, появится «Контактная информация» и «Способы доставки», которые Вам необходимо заполнить.
          </p>
          <div>
            <p>Вы можете выбрать более подходящий для Вас способ оплаты:</p>
            <p>- Оплата на месте;</p>
            <p>- Оплата через платёжные системы, такие как CLICK, Payme.</p>
          </div>
          <p>
            Оплатить покупки можно наличными при получении. Убедительная просьба вначале ознакомиться с товаром, убедиться в отсутствии дефектов в присутствии курьера, после чего оплачивать сумму.
          </p>
          <p className="text-[24px] font-bold pb-[21px]">Доставка</p>
          <p>Тарифы на доставку товаров по Ташкенту:</p>
          <div>
            <p>- 20.000 сум для товаров до 150.000 сум</p>
            <p>- Бесплатная установка для всех тренажеров</p>
          </div>
          <div>
            <p>Тарифы на доставку товаров по всех регионов:</p>
            <p>- Платная доставка для всех товаров по согласованной цене</p>
            <p>- Бесплатная установка для всех тренажеров</p>
          </div>
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
