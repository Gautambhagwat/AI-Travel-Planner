import Hero from "../../components/landing/Hero";
import Features from "../../components/landing/Features";
import HowItWorks from "../../components/landing/HowItWorks";
import PopularDestinations from "../../components/landing/PopularDestinations";
import Testimonials from "../../components/landing/Testimonials";

function Landing() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white">
      <Hero />

      <section className="space-y-28 pb-24">
        <Features />
        <HowItWorks />
        <PopularDestinations />
        <Testimonials />
      </section>
    </main>
  );
}

export default Landing;