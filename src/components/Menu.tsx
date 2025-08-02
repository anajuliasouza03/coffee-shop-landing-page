"use client";

import Image from "next/image";
import logo from "@/images/logo.svg";
import { Button } from "./Button";
import { useState } from "react";
import { MenuIcon, X } from "lucide-react";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" sticky  overflow-hidden top-0 left-0 w-full z-50 bg-[#D9BB98] flex justify-around py-2 h-[100px]">
      <Image src={logo} alt="logo solace cafeteria" width={150} />

      <div className=" gap-6 lg:gap-10 items-center hidden md:flex ">
        <div className="flex gap-6 justify-center items-center">
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
            <a
              href="#cardapio"
              className="hover:text-[#3E2723] hover:font-bold"
            >
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

      {isOpen && (
        <>
          <div
            className={`overflow-hidden w-screen fixed top-[100px] left-0 bg-[#D9BB98] z-40 origin-top md:hidden ${
              isOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="flex  flex-col items-center justify-center text-center space-y-5 p-10">
              <div className="flex flex-col gap-6">
                <a
                  href="#inicio"
                  className="hover:text-[#3E2723] hover:font-bold"
                >
                  Início
                </a>
                <a
                  href="#diferenciais"
                  className="hover:text-[#3E2723] hover:font-bold"
                >
                  Diferenciais
                </a>
                <a
                  href="#cardapio"
                  className="hover:text-[#3E2723] hover:font-bold"
                >
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

          <button
            className="md:hidden flex justify-center items-center"
            onClick={() => setIsOpen(!isOpen)}
          ></button>
        </>
      )}

      <button
        className="md:hidden flex justify-center items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={20} /> : <MenuIcon size={20} />}
      </button>
    </div>
  );
}
