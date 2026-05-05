"use client";

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 pt-40 pb-32">
      <div className="flex flex-col gap-10 max-w-sm mb-16">
        <div>
          <p className="text-stone-400 text-xs tracking-widest uppercase mb-3">Morada</p>
          <address className="not-italic text-stone-700 leading-relaxed">
            Rua 1º de Dezembro, nº4, escritório 7<br />
            2560-300 Torres Vedras
          </address>
        </div>

        <div>
          <p className="text-stone-400 text-xs tracking-widest uppercase mb-3">Email</p>
          <a
            href="mailto:involvearq@gmail.com"
            className="text-stone-700 hover:text-stone-900 transition-colors duration-200"
          >
            involvearq@gmail.com
          </a>
        </div>

        <div>
          <p className="text-stone-400 text-xs tracking-widest uppercase mb-3">Telemóvel</p>
          <a
            href="tel:+351987344400"
            className="text-stone-700 hover:text-stone-900 transition-colors duration-200"
          >
            +351 987 344 44
          </a>
        </div>

        <div>
          <p className="text-stone-400 text-xs tracking-widest uppercase mb-3">Redes sociais</p>
          <div className="flex items-center gap-4">
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

      {/* Google Maps */}
      <div className="w-full h-[400px] bg-stone-100">
        <iframe
          src="https://maps.google.com/maps?q=Rua+1%C2%BA+de+Dezembro+4+2560-300+Torres+Vedras+Portugal&t=&z=17&ie=UTF8&iwloc=B&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização involve arquitectos"
        />
      </div>
    </div>
  );
}
