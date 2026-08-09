import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import ServiceCard from "../components/cards/ServiceCard";
import services from "../data/services";

function Services() {
  return (
    <section id="services" className="scroll-mt-28 bg-white py-24 sm:py-32">
      <Container>
        <SectionTitle
          eyebrow="Services"
          title="What we can build."
          subtitle="Solusi website yang dirancang untuk kebutuhan bisnis, sekolah, UMKM, organisasi, dan personal brand."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => <ServiceCard key={service.title} {...service} />)}
        </div>
      </Container>
    </section>
  );
}

export default Services;