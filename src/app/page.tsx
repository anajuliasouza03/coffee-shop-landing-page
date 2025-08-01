import { Cardapio } from "@/components/Cardapio";
import { Contato } from "@/components/Contato";
import { Depoimentos } from "@/components/Depoimentos";
import { Escolha } from "@/components/Escolha";
import { Hero } from "@/components/Hero";

export default function Page() {
  return (
    <div>
      <Hero />
      <Escolha />
      <Cardapio />
      <Depoimentos />
      <Contato />

      {/*
        
        <Footer />
      */}
    </div>
  );
}
