import { Cardapio } from "@/components/Cardapio";
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

      {/*
        <Formulario /> 
        <Footer />
      */}
    </div>
  );
}
