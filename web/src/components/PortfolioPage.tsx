import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Testimonials from "@/sections/Testimonials";
import Services from "@/sections/Services";
import Contact from "@/sections/Contact";

export function PortfolioPage() {
  return (
    <div className="space-y-24 sm:space-y-28">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Services />
      <Contact />
    </div>
  );
}
