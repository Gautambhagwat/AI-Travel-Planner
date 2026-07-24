function Card({ title, children }) {
  return (
    <div className="rounded-xl border shadow-md p-6 bg-white">

      {title && (
        <h2 className="text-xl font-semibold mb-4">
          {title}
        </h2>
      )}

      {children}

    </div>
  );
}

export default Card;