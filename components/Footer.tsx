import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#FAF8F4]">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-6 md:py-8">
        {/* Main row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" aria-label="involve arquitectos — página inicial">
            <Image
              src="/semfundo.png"
              alt="involve arquitectos"
              height={72}
              width={0}
              sizes="360px"
              className="w-auto h-[72px]"
            />
          </Link>

          {/* Contacts + Instagram */}
          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            <a
              href="mailto:involvearq@gmail.com"
              className="text-stone-400 hover:text-stone-900 text-sm transition-colors duration-200"
            >
              involvearq@gmail.com
            </a>
            <a
              href="tel:+3519873444"
              className="text-stone-400 hover:text-stone-900 text-sm transition-colors duration-200"
            >
              +351 987 344 4
            </a>
            <a
              href="https://www.instagram.com/involvearq/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-stone-400 hover:text-stone-900 transition-colors duration-200"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/involvearq/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-stone-400 hover:text-stone-900 transition-colors duration-200"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
