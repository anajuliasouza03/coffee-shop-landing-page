import imghero from "@/images/img-hero.png";
import Image from "next/image";
import { Button } from "./Button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="bg-[#E5CFB5] flex justify-center min-h-screen pt-[100px]">
      <div className="flex flex-col justify-center gap-6">
        {/* textos */}
        <div className="w-130 flex flex-col gap-3 text-[#3E2723]">
          <h1 className="text-[56px] leading-none">
            Um lugar aconchegante para aproveitar seu café
          </h1>
          <a className="text-[18px] opacity-90">
            Café recém-passado e deliciosas guloseimas, preparados com paixão
            para iluminar o seu dia. Relaxe, saboreie e aproveite os momentos
            conosco.
          </a>
        </div>
        <div className="flex gap-4">
          {/* botoes */}
          <Button variant="solid">
            <div className="flex gap-2">
              Ver cardapio <ArrowRight width={14} />
            </div>
          </Button>
          <Button variant="outlined">Localização</Button>
        </div>
      </div>
      <div className="mx-10">
        <Image src={imghero} alt="image hero section" width={500} />
      </div>
    </div>
  );
}
