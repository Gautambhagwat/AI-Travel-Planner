import { cn } from "../../lib/cn";

function Card({
  children,
  title,
  subtitle,
  className,
  padding = "default",
  hover = false,
  ...props
}) {
  const paddingClasses = {
    none: "",
    sm: "p-4",
    default: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-surface shadow-card transition-default",
        hover && "hover:-translate-y-0.5 hover:border-secondary-300 hover:shadow-card-hover",
        paddingClasses[padding],
        className,
      )}
      {...props}
    >
      {(title || subtitle) && (
        <div className="mb-4">
          {title && (
            typeof title === "string" ? (
              <h2 className="text-h4 text-secondary-900">{title}</h2>
            ) : title
          )}
          {subtitle && (
            typeof subtitle === "string" ? (
              <p className="mt-1 text-body-sm text-secondary-500">{subtitle}</p>
            ) : subtitle
          )}
        </div>
      )}
      {children}
    </div>
  );
}

function CardHeader({ children, className }) {
  return (
    <div className={cn("mb-4 flex items-start justify-between gap-4", className)}>
      {children}
    </div>
  );
}

function CardBody({ children, className }) {
  return <div className={cn("", className)}>{children}</div>;
}

function CardFooter({ children, className }) {
  return (
    <div className={cn("mt-4 flex items-center gap-3 border-t border-border pt-4", className)}>
      {children}
    </div>
  );
}

function CardImage({ src, alt, className, aspectRatio = "video" }) {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[21/9]",
  };

  return (
    <div className={cn("overflow-hidden rounded-t-xl -mx-6 -mt-6 mb-4", className)}>
      <img
        src={src}
        alt={alt}
        className={cn("h-full w-full object-cover", aspectClasses[aspectRatio])}
      />
    </div>
  );
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Image = CardImage;

export default Card;


