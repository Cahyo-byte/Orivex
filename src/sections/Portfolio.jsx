import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import PortfolioCard from "../components/cards/PortfolioCard";
import portfolio from "../data/portfolio";

function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-28 bg-slate-50 py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            eyebrow="Selected Work"
            title="Projects that make ideas real."
            subtitle="Beberapa project yang mewakili cara ORIVEX menggabungkan desain, teknologi, dan kebutuhan pengguna."
          />
          <span className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-500 sm:inline-flex">
            02 featured projects
          </span>
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-2">
          {portfolio.map((project) => <PortfolioCard key={project.title} {...project} />)}
        </div>
      </Container>
    </section>
  );
}

export default Portfolio;