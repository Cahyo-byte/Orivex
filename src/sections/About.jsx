import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import { GraduationCap, Globe2, Code2, Network } from "lucide-react";
import profile from "../assets/images/profile-placeholder.svg";

const facts = [
  [GraduationCap, "Education", "SMA PLUS AR-RAHMAT"],
  [Network, "Experience", "Network Administration"],
  [Code2, "Focus", "Web Development"],
  [Globe2, "Based in", "Indonesia"],
];

function About() {
  return (
    <section id="about" className="scroll-mt-28 bg-slate-50 py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-[430px]">
            <div className="absolute -inset-4 -z-0 rounded-[2.5rem] bg-indigo-100 rotate-3" />
            <img src={profile} alt="Profile placeholder" className="relative z-10 h-[500px] w-full rounded-[2rem] object-cover shadow-2xl shadow-slate-900/10" />
          </div>

          <div>
            <SectionTitle
              eyebrow="About"
              title="The person behind Orivex."
              subtitle="ORIVEX dibangun dari ketertarikan pada teknologi, desain, dan bagaimana website bisa menyelesaikan masalah nyata."
            />

            <p className="mt-7 max-w-2xl leading-8 text-slate-500">
              Saya berfokus membuat solusi digital yang tidak cuma terlihat bagus, tetapi juga mudah digunakan dan punya struktur yang siap dikembangkan.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {facts.map(([Icon, label, value]) => (
                <div key={label} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Icon size={19} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{label}</p>
                    <p className="mt-1 text-sm font-bold text-slate-900">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;