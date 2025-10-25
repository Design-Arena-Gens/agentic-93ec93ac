import { services } from "@/data/site";

export default function Services() {
  return (
    <section id="services">
      <h2 className="text-2xl font-semibold">Services</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s} className="glass rounded-2xl border p-5">
            <p className="text-zinc-200">{s}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
