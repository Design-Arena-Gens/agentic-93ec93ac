import { testimonials } from "@/data/site";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <h2 className="text-2xl font-semibold">Testimonials</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="glass rounded-2xl border p-5">
            <p className="text-zinc-300">“{t.quote}”</p>
            <p className="mt-3 text-sm text-zinc-400">— {t.name}, {t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
