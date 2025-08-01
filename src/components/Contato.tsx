import Image from "next/image";
import { Form } from "./Form";
import bg from "@/images/xicara.png";

export function Contato() {
  return (
    <div className="bg-[url('/bg-contact.svg')] p-20">
      <div className="text-4xl text-center text-white">
        Veja alguns depoimentos de nossos clientes
      </div>
      <div className=" text-center mx-auto text-white">
        Quem já visitou, recomenda e conta como foi
      </div>
      <div className="flex justify-around py-10">
        <Image src={bg} alt="xicara" className="hidden md:block" />
        <Form />
      </div>
    </div>
  );
}
