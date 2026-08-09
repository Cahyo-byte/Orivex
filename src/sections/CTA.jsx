import { ArrowUpRight, Mail } from "lucide-react";
import Container from "../components/ui/Container";

function CTA() {
  return (
    <section id="contact" className="scroll-mt-28 bg-slate-950 py-24 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-indigo-600 px-7 py-12 sm:px-12 sm:py-16 lg:px-16">
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
          <div className="relative z-10 max-w-3xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
              <Mail size={22} />
            </div>
            <h2 className="mt-7 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Have an idea? Let's build it.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-indigo-100">
              Ceritakan kebutuhan website kamu. Kita mulai dari ide sederhana lalu ubah menjadi solusi digital yang siap digunakan.
            </p>
            <a
              href="mailto:hello@orivex.dev"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-indigo-700 transition hover:-translate-y-0.5 hover:bg-indigo-50"
            >
              Start a conversation <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CTA;