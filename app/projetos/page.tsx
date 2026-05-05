import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectsFilter from "@/components/ProjectsFilter";

export const metadata: Metadata = {
  title: "Projectos",
  description:
    "Portfólio de projectos do involve arquitectos. Habitação, equipamentos públicos, reabilitação e espaços culturais em Portugal.",
};

export default function ProjetosPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 pt-28 md:pt-32 pb-24 md:pb-32">
      <ProjectsFilter projects={projects} />
    </div>
  );
}
