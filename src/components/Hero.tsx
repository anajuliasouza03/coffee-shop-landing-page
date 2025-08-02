import imghero from "@/images/img-hero.png";
import Image from "next/image";
import { Button } from "./Button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div
      className="bg-[#E5CFB5] md:flex  justify-center min-h-[600px] md:min-h-[600px] pt-[10px] md:pt-0 scroll-mt-[100px] w-full px-20 overflow-hidden"
      id="inicio"
    >
      <div className=" my-auto flex md:hidden">
        <Image
          src={imghero}
          alt="image hero section"
          className=" max-w-full h-auto"
        />
      </div>

      <div className="flex flex-col justify-center gap-6">
        {/* textos */}
        <div className=" flex flex-col gap-3 text-[#3E2723]">
          <h1 className=" text-[30px] text-center md:text-[56px] leading-none md:text-start">
            Um lugar aconchegante para aproveitar seu café
          </h1>
          <a className="text-center text-[18px] opacity-90 md:text-start">
            Café recém-passado e deliciosas guloseimas, preparados com paixão
            para iluminar o seu dia. Relaxe, saboreie e aproveite os momentos
            conosco.
          </a>
        </div>
        <div className="flex gap-4 justify-center md:justify-start">
          {/* botoes */}
          <Button variant="solid">
            <a href="#cardapio" className="flex gap-2">
              Ver cardapio <ArrowRight width={15} />
            </a>
          </Button>
          <Button variant="outlined">Localização</Button>
        </div>
      </div>
      <div className=" pt-10 my-auto hidden md:flex">
        <Image src={imghero} alt="image hero section" className="" />
      </div>
    </div>
  );
}
