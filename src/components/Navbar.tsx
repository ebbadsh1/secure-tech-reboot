import { Link } from "@tanstack/react-router";
import { Menu, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/#about", label: "About" },
  { to: "/#services", label: "Services" },
  { to: "/#products", label: "Products" },
  { to: "/#industries", label: "Industries" },
  { to: "/#case-studies", label: "Case Studies" },
  { to: "/careers", label: "Careers" },
  { to: "/blog", label: "Blog" },
  { to: "/#contact", label: "Contact" },
];

function Wordmark() {
  return (
    <Link to="/" className="flex items-center gap-2 shrink-0">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
        <ShieldCheck className="h-5 w-5" />
      </span>
      <span className="font-display text-xl font-bold tracking-tight">
        <span className="text-primary">Secure</span>
        <span className="text-accent-dark">Tech</span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Wordmark />
        <nav className="hidden xl:flex items-center gap-6">
          {NAV.map((n) =>
            n.to.startsWith("/#") ? (
              <a key={n.to} href={n.to.slice(1)} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                {n.label}
              </a>
            ) : (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: true }}
              >
                {n.label}
              </Link>
            )
          )}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex bg-accent hover:bg-accent-dark text-accent-foreground shadow-sm">
            <a href="/#contact">Request a Demo</a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="xl:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="mt-6 flex flex-col gap-1">
                {NAV.map((n) =>
                  n.to.startsWith("/#") ? (
                    <a
                      key={n.to}
                      href={n.to.slice(1)}
                      onClick={() => setOpen(false)}
                      className="rounded-md px-3 py-2 text-base font-medium hover:bg-secondary"
                    >
                      {n.label}
                    </a>
                  ) : (
                    <Link
                      key={n.to}
                      to={n.to}
                      onClick={() => setOpen(false)}
                      className="rounded-md px-3 py-2 text-base font-medium hover:bg-secondary"
                    >
                      {n.label}
                    </Link>
                  )
                )}
                <Button asChild className="mt-4 bg-accent hover:bg-accent-dark text-accent-foreground">
                  <a href="/#contact" onClick={() => setOpen(false)}>Request a Demo</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
