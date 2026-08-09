import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import faqs from "../data/faq";

function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <SectionTitle
            eyebrow="FAQ"
            title="Questions, answered."
            subtitle="Beberapa pertanyaan yang biasanya muncul sebelum sebuah project dimulai."
          />

          <div className="space-y-3">
            {faqs.map((item, index) => {
              const isOpen = active === index;
              return (
                <div key={item.question} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <button
                    onClick={() => setActive(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="font-bold text-slate-900">{item.question}</span>
                    <ChevronDown size={19} className={`shrink-0 transition ${isOpen ? "rotate-180 text-indigo-600" : "text-slate-400"}`} />
                  </button>
                  {isOpen && <div className="px-5 pb-5 text-sm leading-7 text-slate-500 sm:px-6">{item.answer}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FAQ;