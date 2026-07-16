import { Link } from "@tanstack/react-router";
import { ArrowRight, Cpu, ScanFace, Tablet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "./Reveal";
import { Breadcrumbs } from "./Breadcrumbs";
import { PRODUCTS } from "@/data/products";

const categoryIcon = { Handheld: Cpu, "Facial Recognition": ScanFace, Tablet } as const;

export function ProductsPage() {
  return (
    <>
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=2000&q=70')", backgroundSize: "cover", backgroundPosition: "center" }} aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" aria-hidden />
        <div className="container-page relative py-20 md:py-28">
          <div className="text-primary-foreground/80 [&_a]:text-primary-foreground/80 [&_a:hover]:text-accent [&_.text-foreground]:text-primary-foreground">
            <Breadcrumbs items={[{ label: "Products" }]} />
          </div>
          <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl">
            Real-time biometric verification hardware.
          </h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/85 text-lg">
            A trusted range of fingerprint terminals, facial recognition devices and rugged tablets — deployed at national scale across telecom, banking, elections and civil registration.
          </p>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => {
            const Icon = categoryIcon[p.category];
            return (
              <Reveal key={p.slug} delay={i * 60}>
                <Card className="group h-full overflow-hidden border-border/70 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="aspect-[4/3] bg-gradient-to-br from-secondary via-background to-accent/5 grid place-items-center relative overflow-hidden p-8">
                    <img src={p.img} alt={`${p.name} — ${p.tagline}`} loading="lazy" width={400} height={300}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md" />
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground text-[10px] font-semibold uppercase tracking-wider px-2 py-1">
                      <Icon className="h-3 w-3" /> {p.category}
                    </span>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{p.tagline}</p>
                    <Button asChild size="sm" variant="ghost" className="mt-4 px-0 text-primary hover:text-primary hover:bg-transparent">
                      <Link to="/products/$slug" params={{ slug: p.slug }}>
                        View details <ArrowRight className="ml-1.5 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container-page text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold">Need a device fit for your programme?</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Tell us about your deployment and we'll recommend the right combination of hardware, SDK and integration support.
          </p>
          <Button asChild size="lg" className="mt-6 bg-accent hover:bg-accent-dark text-accent-foreground">
            <Link to="/contact">Talk to our team <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
