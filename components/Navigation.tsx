"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/projetos", label: "Projetos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isHome = pathname === "/";
  const isTransparent = isHome && !scrolled && !menuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isTransparent
            ? "bg-transparent"
            : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link href="/" aria-label="involve arquitectos — página inicial">
              <Image
                src="/semfundo.png"
                alt="involve arquitectos"
                height={80}
                width={0}
                sizes="300px"
                className={`w-auto h-[64px] md:h-[80px] transition-all duration-300 ${
                  isTransparent ? "brightness-0 invert" : ""
                }`}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`nav-link transition-colors duration-300 ${
                    pathname === href ? "active" : ""
                  } ${
                    isTransparent
                      ? "text-white/80 hover:text-white after:bg-white"
                      : ""
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              className={`md:hidden flex flex-col gap-1.5 p-1 transition-colors duration-300 ${
                isTransparent && !menuOpen ? "text-white" : "text-stone-900"
              }`}
            >
              <span
                className={`block h-px w-6 bg-current transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-px w-4 bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-6 bg-current transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#F5F0E8] flex flex-col justify-center px-10 transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-8">
          {navLinks.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              className={`font-heading text-4xl font-light tracking-tight text-stone-900 transition-all duration-300 ${
                pathname === href ? "text-warm-500" : ""
              }`}
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(12px)",
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="mt-16 border-t border-stone-100 pt-8">
          <p className="text-stone-400 text-sm tracking-widest uppercase">
            involve arquitectos
          </p>
        </div>
      </div>
    </>
  );
}
