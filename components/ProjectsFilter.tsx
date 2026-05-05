"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Project, ProjectCategory } from "@/data/projects";

type Filter = "Todos" | ProjectCategory;

const FILTERS: Filter[] = ["Todos", "Habitação", "Comércio e Serviços"];

interface Props {
  projects: Project[];
}

export default function ProjectsFilter({ projects }: Props) {
  const [active, setActive] = useState<Filter>("Todos");

  const filtered =
    active === "Todos"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Filter bar */}
      <div className="flex items-center gap-1 mb-14 border-b border-stone-200 pb-0">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`relative pb-4 px-1 mr-6 text-xs tracking-widest uppercase transition-colors duration-200 ${
              active === f
                ? "text-stone-900"
                : "text-stone-400 hover:text-stone-600"
            }`}
          >
            {f}
            {/* Active underline */}
            <span
              className={`absolute bottom-0 left-0 h-px w-full bg-stone-900 transition-all duration-300 ${
                active === f ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16 md:gap-y-20">
        {filtered.map((project) => (
          <Link
            key={project.id}
            href={`/projetos/${project.slug}`}
            className="group block"
          >
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
              <Image
                src={project.coverImage}
                alt={project.coverImageAlt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/15 transition-colors duration-500" />
            </div>

            {/* Text */}
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h2
                  className="text-stone-900 text-2xl md:text-3xl leading-tight tracking-tight"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {project.title}
                </h2>
                <p className="text-stone-400 text-xs tracking-widest uppercase mt-2">
                  {project.subcategory}
                </p>
              </div>
              <span
                className="shrink-0 mt-1 text-stone-300 group-hover:text-stone-900 transition-colors duration-300"
                aria-hidden
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <line x1="2" y1="10" x2="18" y2="10" />
                  <polyline points="12,4 18,10 12,16" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <p className="text-stone-400 text-sm tracking-wide py-20 text-center">
          Nenhum projecto encontrado.
        </p>
      )}
    </>
  );
}
