import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

export type Crumb = { label: string; to?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link to="/" className="inline-flex items-center gap-1 hover:text-primary">
            <Home className="h-3.5 w-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((c, i) => (
          <li key={i} className="inline-flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5" />
            {c.to ? (
              <Link to={c.to} className="hover:text-primary">{c.label}</Link>
            ) : (
              <span className="text-foreground font-medium">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
