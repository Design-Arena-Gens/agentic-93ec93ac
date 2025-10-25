"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type Props = {
  id: string;
  title: string;
  role: string;
  year: number;
  tags: string[];
  summary: string;
  demo_url: string;
  thumbnail: string;
};

export default function ProjectCard(props: Props) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = cardRef.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const midX = rect.left + rect.width / 2;
    const midY = rect.top + rect.height / 2;
    const rotateY = ((e.clientX - midX) / rect.width) * 10;
    const rotateX = -((e.clientY - midY) / rect.height) * 10;
    element.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const reset = () => {
    const element = cardRef.current;
    if (!element) return;
    element.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      className="tilt"
      onMouseLeave={reset}
      onMouseEnter={reset}
      onMouseMove={onMouseMove}
    >
      <div ref={cardRef} className="glass hover-elevate rounded-3xl border p-4 transition-transform will-change-transform">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
          <Image src={props.thumbnail} alt={props.title} fill className="object-cover" />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">{props.title}</h3>
          <span className="text-xs text-zinc-400">{props.year}</span>
        </div>
        <p className="mt-2 text-sm text-zinc-300">{props.summary}</p>
        <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-zinc-300">
          {props.tags.map((t) => (
            <span key={t} className="rounded-full border px-2 py-1">{t}</span>
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          <Link href={`/case/${props.id}`} className="rounded-full border px-3 py-1.5 text-sm">Case study</Link>
          <a href={props.demo_url} target="_blank" rel="noreferrer" className="rounded-full bg-[--color-accent] px-3 py-1.5 text-sm">Live prototype</a>
        </div>
      </div>
    </div>
  );
}
