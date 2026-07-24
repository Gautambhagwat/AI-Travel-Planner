function Modal({
  isOpen,
  title,
  children,
  onClose,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">

      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">

        <div className="mb-4 flex items-center justify-between">

          <h2 className="text-xl font-bold">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-xl"
          >
            ×
          </button>

        </div>

        {children}

      </div>

    </div>
  );
}

export default Modal;