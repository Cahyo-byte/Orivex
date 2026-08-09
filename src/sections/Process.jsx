import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import { MessageCircle, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  [MessageCircle, "01", "Discover", "Memahami kebutuhan, tujuan, target pengguna, dan referensi yang kamu inginkan."],
  [PenTool, "02", "Design", "Menyusun struktur halaman, visual direction, dan pengalaman pengguna sebelum coding."],
  [Code2, "03", "Build", "Mengubah desain menjadi website responsive dengan kode yang rapi dan mudah dikembangkan."],
  [Rocket, "04", "Launch", "Testing, optimasi, lalu membantu menyiapkan website agar siap digunakan."],
];

function Process() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <SectionTitle
          eyebrow="Process"
          title="Simple process. Clear progress."
          subtitle="Dibuat sederhana supaya proses pengerjaan tetap jelas dari ide sampai website siap digunakan."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([Icon, number, title, desc]) => (
            <div key={number} className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600"><Icon size={20} /></div>
                <span className="text-sm font-black text-slate-300">{number}</span>
              </div>
              <h3 className="mt-7 text-xl font-bold text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">{desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Process;