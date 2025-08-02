import logo from "@/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export function Footer() {
  return (
    <div>
      <div className="bg-[#130c0b] flex p-20 justify-around gap-6 md:gap-0">
        <div className="flex flex-col gap-5 justify-center items-center">
          <Image
            alt="logo"
            src={logo}
            className="rounded-full bg-[#D9BB98] p-3 w-20 md:w-40"
          />
          <p className="text-center text-[#D9BB98] max-w-50">
            Copyright © 2024 Solace Cafeteria All Rights Reserved{" "}
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="font-bold text-[20px] underline py-1 text-[#8E481D]">
            Links
          </h4>
          <ul className="text-[#D9BB98]">
            <li>
              <Link href="#inicio">Início</Link>
            </li>
            <li>
              <Link href="#diferenciais">Diferenciais</Link>
            </li>
            <li>
              <Link href="#cardapio">Cardápio</Link>
            </li>
            <li>
              <Link href="#depoimentos">Depoimentos</Link>
            </li>
            <li>
              <Link href="#contato">Contato</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[20px] underline py-1 text-[#8E481D]">
            Social
          </h4>
          <div className="text-[#D9BB98] flex gap-1">
            <a href="#">
              <WhatsAppIcon />
            </a>
            <a href="#">
              <FacebookIcon />
            </a>

            <a href="#">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
