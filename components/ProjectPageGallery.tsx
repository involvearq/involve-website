"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
}

interface ProjectPageGalleryProps {
  images: GalleryImage[];
}

export default function ProjectPageGallery({ images }: ProjectPageGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = () => setLightboxIndex(null);
  const goPrev = () => setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  const goNext = () => setLightboxIndex((i) => (i !== null && i < images.length - 1 ? i + 1 : i));

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    },
    [images.length]
  );

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, handleKey]);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setLightboxIndex(i)}
            className="group relative block w-full aspect-[4/3] overflow-hidden bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900"
            aria-label={`Ver imagem: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/25 transition-colors duration-400 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <circle cx="14" cy="14" r="12" />
                  <line x1="9" y1="14" x2="19" y2="14" />
                  <line x1="14" y1="9" x2="14" y2="19" />
                </svg>
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="lightbox-backdrop fixed inset-0 z-[100] bg-stone-950/96 flex flex-col"
          onClick={closeLightbox}
        >
          {/* Top bar */}
          <div
            className="flex items-center justify-between px-6 md:px-10 py-5 shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-stone-400 text-xs tracking-widest uppercase">
              {lightboxIndex + 1} / {images.length}
            </p>
            <button
              onClick={closeLightbox}
              aria-label="Fechar"
              className="text-stone-400 hover:text-white transition-colors duration-200 p-2"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2">
                <line x1="1" y1="1" x2="19" y2="19" />
                <line x1="19" y1="1" x2="1" y2="19" />
              </svg>
            </button>
          </div>

          {/* Image + arrows */}
          <div
            className="lightbox-content flex-1 flex items-center justify-center px-4 md:px-16 py-4 min-h-0 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={goPrev}
              disabled={lightboxIndex === 0}
              aria-label="Anterior"
              className={`absolute left-4 md:left-8 z-10 p-3 text-white transition-opacity duration-200 ${
                lightboxIndex === 0 ? "opacity-20 cursor-not-allowed" : "opacity-60 hover:opacity-100"
              }`}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
                <polyline points="17,4 7,14 17,24" />
              </svg>
            </button>

            <div className="relative w-full h-full max-w-5xl mx-auto">
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 85vw"
                priority
              />
            </div>

            <button
              onClick={goNext}
              disabled={lightboxIndex === images.length - 1}
              aria-label="Próximo"
              className={`absolute right-4 md:right-8 z-10 p-3 text-white transition-opacity duration-200 ${
                lightboxIndex === images.length - 1 ? "opacity-20 cursor-not-allowed" : "opacity-60 hover:opacity-100"
              }`}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
                <polyline points="11,4 21,14 11,24" />
              </svg>
            </button>
          </div>

          {/* Caption */}
          <div
            className="px-6 md:px-10 py-5 shrink-0 border-t border-stone-800"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-stone-400 text-sm">{images[lightboxIndex].alt}</p>
          </div>
        </div>
      )}
    </>
  );
}
