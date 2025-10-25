import Link from "next/link";

const nav = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="glass border rounded-2xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            <span className="text-[15px] text-zinc-200">J.Muthukumar</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="hover:text-white">
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#projects"
              className="hidden sm:inline-flex rounded-full border px-4 py-1.5 text-[13px] hover-elevate"
            >
              View Work
            </a>
            <a
              href="/files/JMuthukumar_Resume.pdf"
              className="rounded-full bg-[--color-primary] text-black px-4 py-1.5 text-[13px] font-medium hover:opacity-90"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
