import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/site";

export default function Projects() {
  return (
    <section id="projects" className="mt-6 sm:mt-10">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <a href="/case" className="text-sm text-zinc-400 hover:text-white">All case studies →</a>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}
