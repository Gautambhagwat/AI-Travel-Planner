function PlannerLayout({ children, sidebar }) {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
        {/* Main Content */}
        <div className="min-w-0">
          <div className="rounded-3xl border border-secondary-200 bg-white p-6 shadow-card md:p-8">
            {children}
          </div>
        </div>

        {/* Sticky Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            {sidebar}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default PlannerLayout;