import Hero from "../../components/landing/Hero";
import Features from "../../components/landing/Features";
import HowItWorks from "../../components/landing/HowItWorks";
import PopularDestinations from "../../components/landing/PopularDestinations";
import Testimonials from "../../components/landing/Testimonials";

function Landing() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50/50 via-white to-white">
      <Hero />

      <div className="space-y-0">
        <Features />
        <HowItWorks />
        <PopularDestinations />
        <Testimonials />
      </div>
    </main>
  );
}

export default Landing;