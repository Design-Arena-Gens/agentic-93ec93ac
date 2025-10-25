import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/site";
import Link from "next/link";

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const proj = projects.find((p) => p.id === params.id);
  if (!proj) return { title: "Case" };
  return {
    title: `${proj.title} — Case Study | J.Muthukumar`,
    description: proj.summary,
  };
}

export default function CasePage({ params }: { params: { id: string } }) {
  const proj = projects.find((p) => p.id === params.id);
  if (!proj) return notFound();

  const sections = [
    { title: "Problem", content: "Complex workflows led to confusion and low adoption." },
    { title: "Research", content: "User interviews, analytics review, and heuristic audits informed priorities." },
    { title: "Design Process", content: "Wireframes to high-fidelity UI, with motion prototypes for key flows." },
    { title: "Solution", content: "Modular cards, accessible components, and guided walkthroughs." },
    { title: "Impact & Metrics", content: "Reduced onboarding time, improved activation and task success." },
    { title: "Handover", content: "Design tokens, component library, and dev-ready specs." },
  ];

  return (
    <article className="pt-10">
      <Link href="/case" className="text-sm text-zinc-400 hover:text-white">← All case studies</Link>
      <h1 className="mt-2 text-3xl font-bold">{proj.title}</h1>
      <p className="text-sm text-zinc-400">{proj.role} · {proj.year}</p>
      <p className="mt-4 text-zinc-300 max-w-3xl">{proj.summary}</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-[12px] text-zinc-300">
        {proj.highlights.map((h) => (
          <div key={h} className="rounded-2xl border p-3">{h}</div>
        ))}
      </div>

      <div className="mt-10 space-y-6">
        {sections.map((s) => (
          <section key={s.title} className="glass rounded-2xl border p-6">
            <h2 className="text-xl font-semibold">{s.title}</h2>
            <p className="mt-2 text-zinc-300">{s.content}</p>
          </section>
        ))}
      </div>

      <div className="mt-10">
        <a href={proj.demo_url} target="_blank" rel="noreferrer" className="rounded-full bg-[--color-accent] px-5 py-2 text-sm font-semibold">Open prototype</a>
      </div>
    </article>
  );
}
