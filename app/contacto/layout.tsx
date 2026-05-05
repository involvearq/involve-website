import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Entre em contacto com o involve arquitectos. Estamos disponíveis para apresentações de projecto, orçamentos e consultas gerais.",
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
