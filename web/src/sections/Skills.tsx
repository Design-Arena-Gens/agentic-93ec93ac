export default function Skills() {
  const skills = {
    ux: ["User research", "Wireframing", "Information architecture", "Usability testing", "Personas", "Accessibility (WCAG)"],
    ui: ["High-fidelity mockups", "Design systems", "Micro-interactions", "Responsive layout", "Motion design"],
    prototyping: ["Figma (variants, auto-layout)", "Framer", "ProtoPie", "Principle"],
    research: ["User interviews", "Surveys", "Analytics-driven insights"],
    soft: ["Collaboration", "Design thinking workshops", "Stakeholder communication"],
  };
  return (
    <section id="skills">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(skills).map(([k, list]) => (
          <div key={k} className="glass rounded-2xl border p-5">
            <h3 className="font-semibold capitalize">{k.replace("_", " ")}</h3>
            <ul className="mt-3 text-sm text-zinc-300 space-y-1">
              {list.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
