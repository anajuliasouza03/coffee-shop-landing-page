import imghero from "@/images/img-hero.png";
import Image from "next/image";
import { Button } from "./Button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="bg-[#E5CFB5] md:flex  justify-center min-h-[600px] md:min-h-[800px] pt-[10px] md:pt-0">
      <div className=" pt-10 my-auto flex md:hidden">
        <Image
          src={imghero}
          alt="image hero section"
          className=" w-80  mx-auto mb-10"
        />
      </div>

      <div className="flex flex-col justify-center gap-6 mx-10">
        {/* textos */}
        <div className="w-130 flex flex-col gap-3 text-[#3E2723]">
          <h1 className="text-[30px] text-center md:text-[56px] leading-none md:text-start">
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
            <div className="flex">
              Ver cardapio <ArrowRight width={14} />
            </div>
          </Button>
          <Button variant="outlined">Localização</Button>
        </div>
      </div>
      <div className=" pt-10 my-auto hidden md:flex">
        <Image
          src={imghero}
          alt="image hero section"
          className=" w-100  md:w-[400px]"
        />
      </div>
    </div>
  );
}
