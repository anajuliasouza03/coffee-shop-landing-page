import Image from "next/image";
import logo from "@/images/logo.svg";
import { Button } from "./Button";

export function Menu() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#D9BB98] flex justify-around py-2">
      <Image src={logo} alt="logo solace cafeteria" width={150} />
      <div className="flex gap-4 items-center">
        <div className="flex gap-6">
          <a href="/" className="hover:text-[#3E2723] hover:font-bold">
            Início
          </a>
          <a href="#" className="hover:text-[#3E2723] hover:font-bold">
            Sobre
          </a>
          <a href="#" className="hover:text-[#3E2723] hover:font-bold">
            Cardápio
          </a>
          <a href="#" className="hover:text-[#3E2723] hover:font-bold">
            Instagram
          </a>
          <a href="#" className="hover:text-[#3E2723] hover:font-bold">
            Depoimentos
          </a>
        </div>
        <div>
          <Button variant="solid">Contato</Button>
        </div>
      </div>
    </div>
  );
}
