import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/cn";

function Breadcrumb({ items = [], className }) {
  return (
    <nav aria-label="Breadcrumb" className={cn("", className)}>
      <ol className="flex flex-wrap items-center gap-1.5 text-body-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight size={14} className="text-secondary-400" aria-hidden="true" />
              )}

              {isLast || !item.href ? (
                <span
                  className={cn(
                    isLast ? "font-medium text-secondary-900" : "text-secondary-500",
                  )}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="text-secondary-500 transition-default hover:text-primary-600"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
