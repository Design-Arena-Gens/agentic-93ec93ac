import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="pt-10 sm:pt-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="reveal">
          <p className="text-[13px] text-zinc-400">Vanakkam — naan J.Muthukumar.</p>
          <h1 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight heading-underline">
            Designing intuitive, beautiful interfaces for modern products
          </h1>
          <p className="mt-5 text-zinc-300 max-w-xl">
            UI/UX Designer focused on product clarity, motion-driven interactions, and accessibility.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <Link
              href="#projects"
              className="rounded-full bg-[--color-primary] text-black px-5 py-2 text-sm font-semibold hover:opacity-90"
            >
              View Work
            </Link>
            <a
              href="/files/JMuthukumar_Resume.pdf"
              className="rounded-full border px-5 py-2 text-sm hover-elevate"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="reveal lg:justify-self-end w-full">
          <div className="glass rounded-3xl p-4 sm:p-6 border tilt">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl tilt-inner">
              <Image src="/images/hero/device-mock.svg" alt="Device mockups" fill priority className="object-cover" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-[12px] text-zinc-300">
              <span className="rounded-full border px-3 py-1 text-center">Nova Analytics</span>
              <span className="rounded-full border px-3 py-1 text-center">Flux Wallet</span>
              <span className="rounded-full border px-3 py-1 text-center">Pulse Commerce</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
