function HowItWorks() {

  const steps = [
    "Enter your travel preferences",
    "AI creates a personalized itinerary",
    "Enjoy your perfect trip"
  ];

  return (
    <section className="bg-gray-100 py-20">

      <div className="mx-auto max-w-6xl">

        <h2 className="mb-16 text-center text-4xl font-bold">

          How It Works

        </h2>

        <div className="grid gap-10 md:grid-cols-3">

          {steps.map((step, index) => (

            <div
              key={step}
              className="rounded-xl bg-white p-8 text-center shadow"
            >

              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white">

                {index + 1}

              </div>

              <p className="font-medium">

                {step}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;