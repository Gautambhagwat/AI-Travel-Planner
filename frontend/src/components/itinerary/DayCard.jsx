function DayCard({ day }) {
  return (
    <div className="mb-6 rounded-xl bg-white p-6 shadow">

      <h2 className="mb-4 text-2xl font-bold">

        Day {day.day}

      </h2>

      <h3 className="mb-4">

        {day.title}

      </h3>

      <ul className="list-disc pl-5">

        {day.activities.map((activity) => (

          <li key={activity}>

            {activity}

          </li>

        ))}

      </ul>

    </div>
  );
}

export default DayCard;