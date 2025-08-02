import p1 from "@/images/people1.png";
import p2 from "@/images/people2.png";
import p3 from "@/images/people3.png";
import Image from "next/image";

const Pessoas = [
  {
    img: p1,
    name: "Maria Fernanda",
    description: "Professora Universitária",
    comment:
      "“A Solace é meu refúgio diário. Além do melhor café da cidade, o ambiente é calmo, aconchegante e cheio de boas energias. Sempre que preciso trabalhar fora de casa ou apenas relaxar, é pra lá que eu vou.”",
  },
  {
    img: p2,
    name: "Lucas Andrade",
    description: "Designer Gráfico",
    comment:
      "“Descobri a Solace por acaso e hoje já é parada obrigatória. Os baristas são incríveis, os cafés são especiais e o espaço é perfeito pra trocar ideias ou curtir uma boa leitura.”",
  },
  {
    img: p3,
    name: "Ana Paula Ribeiro",
    description: "Estudante de Arquitetura",
    comment:
      "“A vibe da Solace é única. A iluminação, a trilha sonora, o aroma do café... tudo parece pensado pra inspirar. É o meu lugar preferido pra estudar e recarregar as ideias.”",
  },
];

export function Depoimentos() {
  return (
    <div
      className="text-[#3E2723] bg-[url('/bg-comments.svg')] bg-no-repeat bg-cover py-20 min-h-[500px] scroll-mt-[100px]"
      id="depoimentos"
    >
      <div className="text-4xl text-center px-20 mb-5">
        Veja alguns depoimentos de nossos clientes
      </div>
      <div className=" text-center mx-auto">
        Quem já visitou, recomenda e conta como foi
      </div>
      <div className="p-15 flex flex-col  md:flex-row gap-10 items-center justify-center">
        {Pessoas.map((item, index) => (
          <div
            key={index}
            className="bg-[#F6EDE2] rounded-4xl p-4 w-full h-[280px]"
          >
            <div className="flex gap-5 items-center px-5">
              <Image
                alt="user-comentario"
                src={item.img}
                className="w-11 h-11"
              />
              <div>
                <div className="text-[18px] font-bold">{item.name}</div>
                <div className="text-[#626262]">{item.description}</div>
              </div>
            </div>

            <div className="text-[#3A3A3A] font-semibold p-5">
              {item.comment}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
