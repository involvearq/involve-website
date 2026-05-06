import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/data/projects";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-end">
        <Image
          src="/Hero.png"
          alt="involve arquitectos — projecto de habitação"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />

        <div className="relative z-10 w-full mx-auto max-w-7xl px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
          <h1
            className="heading-display text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-2xl"
          >
            Arquitectura<br />
            <em>com carácter</em>
          </h1>
          <p className="text-white/70 text-base md:text-lg mt-6">
            Projectos de habitação, reabilitação e espaços comerciais.
          </p>
          <p className="text-white/40 text-sm mt-2 tracking-wide">
            Torres Vedras · Portugal
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 md:right-10 lg:right-16 z-10 flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-white/30 relative overflow-hidden">
            <div
              className="absolute left-0 w-full bg-white/70"
              style={{ height: "40%", animation: "scrollLine 2s ease-in-out infinite" }}
            />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="section-label mb-6">O gabinete</p>
            <h2
              className="heading-display text-stone-900 text-4xl md:text-5xl lg:text-6xl leading-tight"
            >
              Rigor, lugar<br />e identidade
            </h2>
          </div>
          <div>
            <div className="divider" />
            <p className="text-stone-600 leading-relaxed text-base md:text-lg">
              A involve arquitectos é um atelier fundado em Torres Vedras. Desenvolvemos projectos de habitação, reabilitação e espaços comerciais com um compromisso constante com o lugar, o programa e a materialidade.
            </p>
            <p className="text-stone-500 leading-relaxed text-base mt-4">
              Cada projecto é uma oportunidade de criar espaços que transcendem a função e se tornam parte da memória de quem os habita.
            </p>
            <Link href="/sobre" className="btn-primary mt-8 inline-block">
              Sobre nós
            </Link>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-stone-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <p className="section-label mb-12 text-center">A nossa abordagem</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              {
                number: "01",
                title: "Conceito",
                text: "Cada projecto parte de uma ideia clara e coerente que orienta todas as decisões de projecto, desde a implantação até ao detalhe construtivo.",
              },
              {
                number: "02",
                title: "Materialidade",
                text: "Os materiais são escolhidos pela sua qualidade táctil, pela sua relação com o lugar e pela sua capacidade de envelhecer com dignidade.",
              },
              {
                number: "03",
                title: "Espaço",
                text: "O espaço é o resultado de um equilíbrio cuidado entre luz, proporção, escala e movimento. Projectamos sequências de espaços, não apenas compartimentos.",
              },
            ].map(({ number, title, text }) => (
              <div key={number} className="group">
                <p className="text-stone-200 text-6xl font-light mb-4 transition-colors duration-300 group-hover:text-warm-300">
                  {number}
                </p>
                <h3
                  className="text-stone-900 text-2xl font-light mb-3"
                 
                >
                  {title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label mb-3">Selecção</p>
              <h2
                className="heading-display text-stone-900 text-4xl md:text-5xl"
              >
                Projectos recentes
              </h2>
            </div>
            <Link
              href="/projetos"
              className="hidden sm:flex items-center gap-2 text-stone-500 hover:text-stone-900 text-xs tracking-widest uppercase transition-colors duration-200"
            >
              Ver todos
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2">
                <line x1="1" y1="7" x2="13" y2="7" />
                <polyline points="8,2 13,7 8,12" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProjects.map((project) => (
              <Link href="/projetos" key={project.id} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
                  <Image
                    src={project.coverImage}
                    alt={project.coverImageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/30 transition-all duration-500" />
                </div>
                <div className="mt-4">
                  <p className="section-label mb-1">{project.category}</p>
                  <h3
                    className="text-stone-900 text-xl font-light"
                   
                  >
                    {project.title}
                  </h3>
                  <p className="text-stone-400 text-xs mt-0.5">
                    {project.location} · {project.year}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 sm:hidden">
            <Link href="/projetos" className="btn-primary">
              Ver todos os projectos
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
