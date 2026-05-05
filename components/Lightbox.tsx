"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";

interface LightboxProps {
  project: Project;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export default function Lightbox({
  project,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    },
    [onClose, onPrev, onNext, hasPrev, hasNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      className="lightbox-backdrop fixed inset-0 z-[100] bg-stone-950/95 flex flex-col"
      onClick={onClose}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-6 md:px-10 py-5 shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <p className="text-white font-light text-lg md:text-xl">
            {project.title}
          </p>
          <p className="text-stone-400 text-xs tracking-widest uppercase mt-0.5">
            {project.location} · {project.year}
          </p>
        </div>
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="text-stone-400 hover:text-white transition-colors duration-200 p-2"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.2">
            <line x1="1" y1="1" x2="21" y2="21" />
            <line x1="21" y1="1" x2="1" y2="21" />
          </svg>
        </button>
      </div>

      {/* Image */}
      <div
        className="lightbox-content flex-1 flex items-center justify-center px-4 md:px-12 py-4 relative min-h-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prev button */}
        <button
          onClick={onPrev}
          disabled={!hasPrev}
          aria-label="Anterior"
          className={`absolute left-4 md:left-8 z-10 p-3 text-white transition-all duration-200 ${
            hasPrev ? "opacity-70 hover:opacity-100" : "opacity-20 cursor-not-allowed"
          }`}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
            <polyline points="17,4 7,14 17,24" />
          </svg>
        </button>

        <div className="relative w-full h-full max-w-5xl mx-auto">
          <Image
            src={project.coverImage}
            alt={project.coverImageAlt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 85vw"
            priority
          />
        </div>

        {/* Next button */}
        <button
          onClick={onNext}
          disabled={!hasNext}
          aria-label="Próximo"
          className={`absolute right-4 md:right-8 z-10 p-3 text-white transition-all duration-200 ${
            hasNext ? "opacity-70 hover:opacity-100" : "opacity-20 cursor-not-allowed"
          }`}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
            <polyline points="11,4 21,14 11,24" />
          </svg>
        </button>
      </div>

      {/* Bottom info */}
      <div
        className="px-6 md:px-10 py-5 shrink-0 border-t border-stone-800"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-stone-400 text-sm leading-relaxed max-w-2xl">
          {project.description}
        </p>
        <p className="text-stone-600 text-xs tracking-widest uppercase mt-2">
          {project.category}
        </p>
      </div>
    </div>
  );
}
