"use client";

import americano from "@/images/americano.png";
import bololimao from "@/images/bololimao.png";
import capuccino from "@/images/capuccino.png";
import coffeemilk from "@/images/coffeemilk.png";
import cupcake from "@/images/cupcake.png";
import expresso from "@/images/expresso.png";
import torta from "@/images/torta.png";
import doce from "@/images/doce.png";
import { ChevronRight, ChevronLeft } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const cardapioBebidas = [
  {
    image: americano,
    title: "Americano",
    price: "R$ 3.50",
  },
  {
    image: capuccino,
    title: "Capuccino",
    price: "R$ 4.50",
  },
  {
    image: coffeemilk,
    title: "Coffee Milk",
    price: "R$ 2.50",
  },
  {
    image: expresso,
    title: "Expresso",
    price: "R$ 4.00",
  },
  {
    image: americano,
    title: "Americano",
    price: "R$ 3.50",
  },
  {
    image: capuccino,
    title: "Capuccino",
    price: "R$ 4.50",
  },
  {
    image: coffeemilk,
    title: "Coffee Milk",
    price: "R$ 2.50",
  },
  {
    image: expresso,
    title: "Expresso",
    price: "R$ 4.00",
  },
];

const cardapioDoces = [
  {
    image: bololimao,
    title: "Bolo de Limao",
    price: "R$ 3.50",
  },
  {
    image: cupcake,
    title: "Cupcake",
    price: "R$ 4.50",
  },
  {
    image: torta,
    title: "Torta",
    price: "R$ 4.00",
  },
  {
    image: doce,
    title: "Doce da Casa",
    price: "R$ 3.50",
  },
  {
    image: bololimao,
    title: "Bolo de Limao",
    price: "R$ 3.50",
  },
  {
    image: cupcake,
    title: "Cupcake",
    price: "R$ 4.50",
  },
  {
    image: torta,
    title: "Torta",
    price: "R$ 4.00",
  },
  {
    image: doce,
    title: "Doce da Casa",
    price: "R$ 3.50",
  },
];

export function Cardapio() {
  const [embraRef, emplaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      md: {
        slidesToScroll: 3,
      },
    },
  });
  const [embraRef2, emplaApi2] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      md: {
        slidesToScroll: 3,
      },
    },
  });

  function scrollPrev() {
    emplaApi?.scrollPrev();
  }
  function scrollPrev2() {
    emplaApi2?.scrollPrev();
  }

  function scrollNext() {
    emplaApi?.scrollNext();
  }

  function scrollNext2() {
    emplaApi2?.scrollNext();
  }

  return (
    <div className="flex flex-col items-center min-h-[800px]  bg-[#FAFBFD] px-5 md:px-20">
      <h1 className="text-[36px] text-[#3e2723] mb-5">
        Explore nosso Cardápio
      </h1>

      <div className="relative w-full overflow-hidden my-5">
        <div className="w-full" ref={embraRef}>
          <div className="flex">
            {cardapioBebidas.map((item, index) => (
              <div key={index} className=" px-2 py-2 md:flex-[0_0_25%] md:px-2">
                <div className="border rounded-[20px] p-4 md:p-6 h-full flex flex-col justify-between">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto rounded-lg object-cover select-none"
                  />
                  <div className="flex justify-between gap-10 font-bold pt-4">
                    <div className="select-none ">{item.title}</div>
                    <div className="text-sm text-amber-950 select-none">
                      {item.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={scrollPrev}
          className=" bg-gray-200 shadow-lg rounded-full cursor-pointer flex items-center justify-center absolute left-1 -translate-y-[160px] -translate-x-[3px]"
        >
          <ChevronLeft className="w-6 h-6  text-gray-600 " />
        </button>
        <button
          onClick={scrollNext}
          className=" bg-gray-300 shadow-lg rounded-full cursor-pointer flex items-center justify-center absolute right-0 -translate-y-[160px] -translate-x-[3px]"
        >
          <ChevronRight className="w-6 h-6  text-gray-600 " />
        </button>
      </div>
      <div className="relative w-full overflow-hidden mb-5">
        <div className="w-full" ref={embraRef2}>
          <div className="flex">
            {cardapioDoces.map((item, index) => (
              <div key={index} className=" px-2 py-2 md:flex-[0_0_25%] md:px-2">
                <div className="border rounded-[20px] p-4 md:p-6 h-full flex flex-col justify-between">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto rounded-lg object-cover select-none"
                  />
                  <div className="flex justify-between gap-10 font-bold pt-4">
                    <div className="select-none">{item.title}</div>
                    <div className="text-sm text-amber-950 select-none">
                      {item.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={scrollPrev2}
          className=" bg-gray-300 shadow-lg rounded-full cursor-pointer flex items-center justify-center absolute left-2 -translate-y-[160px] -translate-x-[3px]"
        >
          <ChevronLeft className="w-6 h-6  text-gray-600 " />
        </button>
        <button
          onClick={scrollNext2}
          className=" bg-gray-300 shadow-lg rounded-full cursor-pointer flex items-center justify-center absolute right-0 -translate-y-[160px] -translate-x-[3px]"
        >
          <ChevronRight className="w-6 h-6  text-gray-600 " />
        </button>
      </div>
    </div>
  );
}
