import Image from "next/image";
import logo from "@/images/logo.svg";
import { Button } from "./Button";

export function Menu() {
  return (
    <div className=" sticky  overflow-hidden top-0 left-0 w-full z-50 bg-[#D9BB98] flex justify-around py-2 h-[100px]">
      <Image src={logo} alt="logo solace cafeteria" width={150} />
      <div className=" gap-4 items-center hidden md:flex">
        <div className="flex gap-6">
          <a href="#inicio" className="hover:text-[#3E2723] hover:font-bold">
            Início
          </a>
          <a
            href="#diferenciais"
            className="hover:text-[#3E2723] hover:font-bold"
          >
            Diferenciais
          </a>
          <a href="#cardapio" className="hover:text-[#3E2723] hover:font-bold">
            Cardápio
          </a>
          <a
            href="#depoimentos"
            className="hover:text-[#3E2723] hover:font-bold"
          >
            Depoimentos
          </a>
        </div>
        <div>
          <a href="#contato">
            <Button variant="solid">Contato</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
