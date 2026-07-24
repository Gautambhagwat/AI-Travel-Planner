import Avatar from "../common/Avatar";

function TopBar() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-8 py-4">

      <div>
        <h1 className="text-2xl font-bold">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-4">

        <button className="rounded-full bg-gray-100 p-2">
          🔔
        </button>

        <Avatar name="Gautam" />

      </div>

    </header>
  );
}

export default TopBar;