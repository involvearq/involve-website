import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça o involve arquitectos — o estúdio, a filosofia e a equipa por detrás dos projectos.",
};



export default function SobrePage() {
  return (
    <>
      {/* Hero Section — título + imagem em cima, texto em baixo */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">

          {/* Linha superior: título (esquerda) + imagem (direita) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12 md:mb-16">
            <div>
              <p className="section-label mb-5">O estúdio</p>
              <h1 className="heading-display text-stone-900 text-5xl md:text-6xl lg:text-7xl">
                Arquitectura<br />
                <em>centrada em<br />quem habita.</em>
              </h1>
              <div className="divider mt-8 mb-0" />
            </div>

            <div className="relative w-full aspect-[3/4] overflow-hidden bg-stone-100">
              <Image
                src="/gabinete.jpeg"
                alt="Espaço de trabalho involve arquitectos"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Texto em baixo */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <p className="text-stone-600 text-base md:text-lg leading-relaxed text-justify">
              A involve arquitectos é um estúdio de arquitectura fundado em 2007 em Torres Vedras. O nosso trabalho parte sempre de uma escuta atenta — do cliente, do lugar e do programa — para criar espaços que reflictam genuinamente quem os vai habitar.
            </p>
            <p className="text-stone-500 text-base leading-relaxed text-justify">
              Acreditamos que cada projecto é único. Por isso, rejeitamos soluções genéricas e dedicamo-nos a desenhar respostas à medida, onde cada detalhe tem intenção e cada escolha tem razão de ser.
            </p>
            <p className="text-stone-500 text-base leading-relaxed text-justify">
              Desenvolvemos projectos de escala e programa diverso — da habitação unifamiliar à reabilitação urbana, dos interiores aos espaços comerciais — sempre com rigor, atenção ao detalhe e envolvimento próximo com o cliente em todas as fases do processo.
            </p>
          </div>

        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <h2 className="heading-display text-stone-900 text-4xl md:text-5xl mb-14">
            A equipa
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: "André Tavares", role: "Arquitecto Fundador", image: "/Jorge.jpeg" },
              { name: "Filipa Baeta", role: "Arquitecta Fundadora", image: "/Filipa.png" },
              { name: "Rui Vieira", role: "Arquitecto", image: "/rui.jpeg" },
              { name: "Manel Gomes", role: "Arquitecto", image: "/manel.jpeg" },
            ].map(({ name, role, image }) => (
              <div key={name}>
                <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-3">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <h3 className="text-stone-900 text-sm font-normal">{name}</h3>
                <p className="section-label mt-0.5">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filosofia */}
      <section className="bg-stone-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <p className="section-label mb-5">Filosofia</p>
              <h2
                className="heading-display text-stone-900 text-4xl md:text-5xl mb-8"
              >
                Como<br />pensamos
              </h2>
              <p className="text-stone-500 text-sm leading-relaxed">
                Acreditamos que a arquitectura não começa no papel mas na escuta. Antes de desenhar, observamos, questionamos e compreendemos. O projecto é sempre uma resposta — ao lugar, ao cliente, ao tempo.
              </p>
            </div>
            <div className="flex flex-col gap-10">
              {[
                {
                  title: "Licenciamento",
                  text: "Tratamos de todo o processo de licenciamento junto das entidades competentes e demais organismos — garantindo que o projecto avança com segurança legal e sem surpresas.",
                },
                {
                  title: "Integração com especialidades",
                  text: "Coordenamos as equipas de engenharia estrutural, redes de água e esgotos, electricidade, AVAC e demais especialidades, assegurando coerência entre todos os projectos e o projecto de arquitectura.",
                },
                {
                  title: "Projecto de acabamentos",
                  text: "Definimos com rigor os materiais, revestimentos, cores e equipamentos em cada espaço — do pavimento ao tecto — para que a obra reflicta exactamente a visão do projecto.",
                },
                {
                  title: "Acompanhamento de obra",
                  text: "Visitamos a obra regularmente, respondemos às questões que surgem em estaleiro e garantimos que a execução respeita o projecto. O cliente tem sempre um interlocutor disponível durante toda a construção.",
                },
              ].map(({ title, text }) => (
                <div key={title} className="border-l-2 border-warm-400 pl-5">
                  <h3
                    className="text-stone-900 text-xl font-light mb-2"
                  >
                    {title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
