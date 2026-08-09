import Navbar from "../components/layout/Navbar";
import Hero from "../sections/Hero";
import Technologies from "../sections/Technologies";
import About from "../sections/About";
import Services from "../sections/Services";
import Portfolio from "../sections/Portfolio";
import Process from "../sections/Process";
import FAQ from "../sections/FAQ";
import CTA from "../sections/CTA";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Technologies />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default Home;