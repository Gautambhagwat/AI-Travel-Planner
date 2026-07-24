function Features() {

  const features = [
    {
      title: "AI Trip Planner",
      description: "Generate complete travel itineraries in seconds."
    },
    {
      title: "Smart Budget",
      description: "Estimate travel expenses instantly."
    },
    {
      title: "Weather Forecast",
      description: "Know weather conditions before travelling."
    },
    {
      title: "Hidden Gems",
      description: "Discover places beyond tourist attractions."
    }
  ];

  return (
    <section className="py-20">

      <div className="mx-auto max-w-7xl px-8">

        <h2 className="mb-12 text-center text-4xl font-bold">

          Why Choose Us?

        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="rounded-xl border p-8 shadow hover:shadow-xl transition"
            >

              <h3 className="mb-4 text-xl font-bold">

                {feature.title}

              </h3>

              <p className="text-gray-600">

                {feature.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;