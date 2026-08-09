import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import FloatingBadge from "../components/ui/FloatingBadge";
import TechBadge from "../components/ui/TechBadge";
import heroImage from "../assets/images/hero-placeholder.svg";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 pb-20 pt-36 sm:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute left-[-10rem] top-20 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />
      <div className="pointer-events-none absolute right-[-8rem] top-40 h-96 w-96 rounded-full bg-violet-200/30 blur-3xl" />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <div className="animate-fade-up">
            <span className="inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-indigo-700">
              Available for Projects
            </span>

            <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
              Crafting modern websites for{" "}
              <span className="text-indigo-600">growing businesses.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
              ORIVEX membantu UMKM, sekolah, organisasi, dan personal brand membangun website yang cepat, modern, dan terasa profesional.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact">Start a Project</Button>
              <Button href="#portfolio" variant="secondary">View Portfolio</Button>
            </div>

            <div className="mt-9 flex flex-wrap gap-2">
              {["React", "Node.js", "MySQL", "Tailwind"].map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] animate-fade-up lg:justify-self-end">
            <div className="absolute -left-4 top-12 z-10 sm:-left-8">
              <FloatingBadge title="Projects" value="3+ built" />
            </div>
            <div className="absolute -right-4 bottom-10 z-10 sm:-right-8">
              <FloatingBadge title="Focus" value="Modern Web" />
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white bg-white p-2 shadow-2xl shadow-slate-900/10">
              <img src={heroImage} alt="ORIVEX website preview" className="h-[360px] w-full rounded-[1.5rem] object-cover sm:h-[430px]" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;