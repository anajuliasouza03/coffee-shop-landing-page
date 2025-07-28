import { Coffee } from "lucide-react";
import { Video } from "./Video";

export function Escolha() {
  return (
    <div className="flex justify-center min-h-screen bg-[#FAFBFD]">
      <div className="m-10 my-auto">
        <Video />
      </div>
      <div className="text-[#3E2723] flex flex-col justify-center">
        <h1 className="text-[36px]">Por que somos a melhor escolha</h1>
        <div className="flex flex-col gap-5">
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
