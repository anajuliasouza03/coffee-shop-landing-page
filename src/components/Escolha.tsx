import { Coffee } from "lucide-react";
import { Video } from "./Video";

export function Escolha() {
  return (
    <div
      className=" py-10 min-h-[800px] bg-[#FAFBFD] md:px-20 justify-center md:flex scroll-mt-[100px]"
      id="diferenciais"
    >
      <div className=" md:pr-5 my-auto">
        <Video />
      </div>
      <div className="text-[#3E2723] mx-10 md:mx-0  flex flex-col justify-center">
        <h1 className="text-[36px] text-center md:text-start">
          Por que somos a melhor escolha
        </h1>
        <div className="flex md:flex-col gap-5 pt-10">
          <div className="w-[80%]">
            <div className="flex gap-2">
              <Coffee width={14} />
              <p className="text-[18px]">1</p>
            </div>

            <p>
              Ao oferecer um ambiente aconchegante, nossa cafeteria se torna o
              lugar perfeito para relaxar e se conectar.
            </p>
          </div>
          <div className="w-[80%]">
            <div className="flex gap-2">
              <Coffee width={14} />
              <p className="text-[18px]">2</p>
            </div>

            <p>
              Ao servir bebidas cuidadosamente preparadas, garantimos que cada
              xícara proporcione uma experiência deliciosa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
