import Button from "../common/Button";

function QuickActions() {
  return (
    <div className="rounded-xl bg-white p-6 shadow">

      <h2 className="mb-6 text-xl font-bold">
        Quick Actions
      </h2>

      <div className="flex flex-wrap gap-4">

        <Button>New Trip</Button>

        <Button variant="secondary">
          Saved Trips
        </Button>

        <Button variant="outline">
          Explore
        </Button>

      </div>

    </div>
  );
}

export default QuickActions;