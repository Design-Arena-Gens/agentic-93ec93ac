export default function About() {
  return (
    <section id="about" className="mt-16 sm:mt-24">
      <div className="glass rounded-3xl border p-6 sm:p-8">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-4 text-zinc-300 max-w-3xl">
          7+ years designing consumer & enterprise products. I combine user research, interaction design, and pixel-perfect UI to build experiences that scale.
        </p>
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-300">
          <li>Led end-to-end redesign for an analytics dashboard used by 50k+ users.</li>
          <li>Worked closely with engineers to ship accessible components (WCAG AA).</li>
          <li>Prototyped micro-interactions with Lottie and Framer.</li>
        </ul>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-[12px] text-zinc-300">
          <div className="rounded-2xl border p-3 text-center">Discover — user interviews & data analysis</div>
          <div className="rounded-2xl border p-3 text-center">Define — user journeys & IA</div>
          <div className="rounded-2xl border p-3 text-center">Design — wireframes, UI, prototyping</div>
          <div className="rounded-2xl border p-3 text-center">Deliver — tokens, handoff, QA</div>
        </div>
      </div>
    </section>
  );
}
