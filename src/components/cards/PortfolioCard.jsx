import { ArrowUpRight, ExternalLink } from "lucide-react";

function PortfolioCard({ image, title, category, description, tech = [], link = "#" }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/10">
      <div className="relative overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={`${title} preview`}
          className="h-64 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-80"
        />
        <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-emerald-700 shadow-lg backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Live Project
        </div>
      </div>

      <div className="p-7 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">{category}</p>
        <div className="mt-2 flex items-start justify-between gap-4">
          <h3 className="text-2xl font-extrabold text-slate-950">{title}</h3>
          <ExternalLink size={20} className="mt-1 shrink-0 text-slate-400" />
        </div>
        <p className="mt-4 leading-7 text-slate-500">{description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span key={item} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
              {item}
            </span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex items-center gap-2 font-bold text-indigo-600 transition hover:gap-3"
        >
          View Project
          <ArrowUpRight size={18} />
        </a>
      </div>
    </article>
  );
}

export default PortfolioCard;