import Button from "../common/Button";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
      <div className="mx-auto flex min-h-[80vh] max-w-7xl items-center justify-between px-8">

        <div className="max-w-xl">

          <h1 className="mb-6 text-6xl font-bold leading-tight">
            Plan Your Dream Trip with Us
          </h1>

          <p className="mb-8 text-lg text-blue-100">
            Discover destinations, generate personalized itineraries,
            estimate budgets, and travel smarter using Artificial Intelligence.
          </p>

          <div className="flex gap-4">

            <Button>
              Get Started
            </Button>

            <Button variant="outline">
              Learn More
            </Button>

          </div>

        </div>

        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Travel"
          className="hidden h-[500px] w-[450px] rounded-3xl object-cover shadow-2xl lg:block"
        />

      </div>
    </section>
  );
}

export default Hero;