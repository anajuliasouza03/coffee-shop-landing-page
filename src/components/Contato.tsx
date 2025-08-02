import Image from "next/image";
import { FormContact } from "./FormContact";
import bg from "@/images/xicara.png";

export function Contato() {
  return (
    <div
      className="bg-[#2c1c19] p-10  bg-cover bg-center flex flex-col scroll-mt-[100px]"
      id="contato"
    >
      <div className="text-4xl text-center text-white">Fale conosco</div>
      <div className=" text-center mx-auto text-white">
        Tire suas maiores dúvidas com a gente
      </div>
      <div className="flex justify-around py-10 items-center">
        <div>
          <Image src={bg} alt="xicara" className="hidden md:block" />
        </div>
        <div className="mx-auto md:mx-0">
          <FormContact />
        </div>
      </div>
    </div>
  );
}
