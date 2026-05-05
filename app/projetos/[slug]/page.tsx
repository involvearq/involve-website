import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectPageGallery from "@/components/ProjectPageGallery";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjetoPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = projects[currentIndex - 1] ?? null;
  const nextProject = projects[currentIndex + 1] ?? null;

  return (
    <>
      {/* Hero */}
      <div className="relative w-full h-[60vh] md:h-[75vh] min-h-[400px] bg-stone-100">
        <Image
          src={project.coverImage}
          alt={project.coverImageAlt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
      </div>

      {/* Project intro */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          <div>
            <p className="section-label mb-4">{project.category}</p>
            <h1
              className="text-stone-900 text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {project.title}
            </h1>
          </div>
          <div className="flex flex-col gap-6 lg:pt-2">
            <div className="grid grid-cols-2 gap-6 border-t border-stone-200 pt-6">
              <div>
                <p className="text-stone-400 text-xs tracking-widest uppercase mb-1">Localização</p>
                <p className="text-stone-700 text-sm">{project.location}</p>
              </div>
              <div>
                <p className="text-stone-400 text-xs tracking-widest uppercase mb-1">Ano</p>
                <p className="text-stone-700 text-sm">{project.year}</p>
              </div>
              <div>
                <p className="text-stone-400 text-xs tracking-widest uppercase mb-1">Programa</p>
                <p className="text-stone-700 text-sm">{project.category}</p>
              </div>
            </div>
            <div className="border-t border-stone-200" />
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 pb-20 md:pb-28">
        <p className="section-label mb-6">Galeria</p>
        <ProjectPageGallery images={project.gallery} />
      </div>

      {/* Prev / Next navigation */}
      <div className="border-t border-stone-200">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-2">
            {/* Prev */}
            <div className="border-r border-stone-200">
              {prevProject ? (
                <Link
                  href={`/projetos/${prevProject.slug}`}
                  className="group flex flex-col gap-3 py-8 pr-8 hover:bg-stone-50 transition-colors duration-200 px-0"
                >
                  <span className="text-stone-400 text-xs tracking-widest uppercase flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <line x1="13" y1="7" x2="1" y2="7" />
                      <polyline points="6,2 1,7 6,12" />
                    </svg>
                    Anterior
                  </span>
                  <p
                    className="text-stone-900 text-xl md:text-2xl leading-tight group-hover:text-stone-600 transition-colors duration-200"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {prevProject.title}
                  </p>
                </Link>
              ) : (
                <div className="py-8 pr-8" />
              )}
            </div>

            {/* Next */}
            <div>
              {nextProject ? (
                <Link
                  href={`/projetos/${nextProject.slug}`}
                  className="group flex flex-col gap-3 items-end py-8 pl-8 hover:bg-stone-50 transition-colors duration-200"
                >
                  <span className="text-stone-400 text-xs tracking-widest uppercase flex items-center gap-2">
                    Próximo
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <line x1="1" y1="7" x2="13" y2="7" />
                      <polyline points="8,2 13,7 8,12" />
                    </svg>
                  </span>
                  <p
                    className="text-stone-900 text-xl md:text-2xl leading-tight text-right group-hover:text-stone-600 transition-colors duration-200"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {nextProject.title}
                  </p>
                </Link>
              ) : (
                <div className="py-8 pl-8" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Back to all */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-10 md:py-14">
        <Link href="/projetos" className="btn-primary">
          ← Todos os projectos
        </Link>
      </div>
    </>
  );
}
