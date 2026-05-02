import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container-x">
        {(eyebrow || title || subtitle) && (
          <div className="max-w-2xl mb-12 md:mb-16">
            {eyebrow && (
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">{eyebrow}</p>
            )}
            {title && <h2 className="text-3xl md:text-5xl text-foreground mb-4">{title}</h2>}
            {subtitle && <p className="text-muted-foreground leading-relaxed">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}