"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";
import type { Project } from "@/data/projects";

interface ProjectGalleryProps {
  projects: Project[];
}

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);
  const goToPrev = () => setActiveIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  const goToNext = () =>
    setActiveIndex((i) => (i !== null && i < projects.length - 1 ? i + 1 : i));

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="project-card bg-white group relative"
            onClick={() => openLightbox(index)}
            role="button"
            tabIndex={0}
            aria-label={`Ver projecto: ${project.title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") openLightbox(index);
            }}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
              <Image
                src={project.coverImage}
                alt={project.coverImageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Hover overlay */}
              <div className="project-card-overlay absolute inset-0 bg-stone-950/60 flex flex-col justify-end p-6">
                <p className="text-xs text-white/60 tracking-widest uppercase mb-1">
                  {project.category}
                </p>
                <h3
                  className="text-white text-xl font-light"
                 
                >
                  {project.title}
                </h3>
                <p className="text-white/60 text-xs mt-1">
                  {project.location} · {project.year}
                </p>
                <div className="mt-4 flex items-center gap-2 text-white/80 text-xs tracking-widest uppercase">
                  <span>Ver projecto</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <line x1="1" y1="7" x2="13" y2="7" />
                    <polyline points="8,2 13,7 8,12" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="p-5 border-b border-stone-100">
              <p className="section-label mb-2">{project.category}</p>
              <h3
                className="text-stone-900 text-lg font-light leading-snug"
               
              >
                {project.title}
              </h3>
              <p className="text-stone-400 text-xs mt-1">
                {project.location} · {project.year}
              </p>
            </div>
          </article>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          project={projects[activeIndex]}
          onClose={closeLightbox}
          onPrev={goToPrev}
          onNext={goToNext}
          hasPrev={activeIndex > 0}
          hasNext={activeIndex < projects.length - 1}
        />
      )}
    </>
  );
}
