import Link from "next/link";
import { projects } from "@/data/site";

export const metadata = {
  title: "Case Studies — J.Muthukumar",
  description: "Detailed case studies across analytics, fintech, and commerce.",
};

export default function CaseIndexPage() {
  return (
    <div className="pt-10">
      <h1 className="text-3xl font-bold">Case Studies</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <Link key={p.id} href={`/case/${p.id}`} className="glass rounded-2xl border p-5 block hover-elevate">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-zinc-400">{p.role} · {p.year}</p>
            <p className="mt-2 text-sm text-zinc-300">{p.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
