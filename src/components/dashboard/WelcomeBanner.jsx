import Button from "../common/Button";

function WelcomeBanner() {
  return (
    <section className="mb-8 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white">

      <h2 className="text-4xl font-bold">
        Welcome Back 👋
      </h2>

      <p className="mt-3 text-blue-100">
        Ready to plan your next adventure?
      </p>

      <div className="mt-6">

        <Button>
          Plan New Trip
        </Button>

      </div>

    </section>
  );
}

export default WelcomeBanner;