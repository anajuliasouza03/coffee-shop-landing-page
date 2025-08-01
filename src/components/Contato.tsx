import Image from "next/image";
import { FormContact } from "./FormContact";
import bg from "@/images/xicara.png";

export function Contato() {
  return (
    <div className="bg-[url('/bg-contact.svg')] p-10  bg-cover bg-no-repeat flex flex-col">
      <div className="text-4xl text-center text-white">
        Veja alguns depoimentos de nossos clientes
      </div>
      <div className=" text-center mx-auto text-white">
        Quem já visitou, recomenda e conta como foi
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
