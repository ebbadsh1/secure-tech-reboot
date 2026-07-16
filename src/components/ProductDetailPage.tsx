import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumbs } from "./Breadcrumbs";
import { PRODUCTS, type Product } from "@/data/products";

export function ProductDetailPage({ product }: { product: Product }) {
  const related = PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);
  return (
    <>
      <section className="bg-surface border-b border-border">
        <div className="container-page py-6">
          <Breadcrumbs items={[{ label: "Products", to: "/products" }, { label: product.name }]} />
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div className="rounded-3xl bg-gradient-to-br from-secondary via-background to-accent/5 p-12 grid place-items-center aspect-square lg:aspect-auto lg:min-h-[500px]">
            <img src={product.img} alt={`${product.name} biometric device`} width={500} height={500}
              className="max-h-full max-w-full object-contain drop-shadow-xl" />
          </div>
          <div>
            <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent-dark uppercase tracking-wider">
              {product.category}
            </span>
            <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold">{product.name}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{product.tagline}</p>
            <p className="mt-6 text-foreground/80 leading-relaxed">{product.description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent hover:bg-accent-dark text-accent-foreground">
                <Link to="/contact">Request a quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline">
                <Download className="mr-2 h-4 w-4" /> Datasheet
              </Button>
            </div>

            <div className="mt-10">
              <h2 className="font-display text-lg font-semibold">Applications</h2>
              <ul className="mt-4 space-y-2">
                {product.applications.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-accent-dark shrink-0" /> {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="container-page">
          <h2 className="font-display text-2xl md:text-3xl font-bold">Specifications</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
            <dl className="divide-y divide-border">
              {product.specs.map((s) => (
                <div key={s.label} className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-2 px-6 py-4">
                  <dt className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{s.label}</dt>
                  <dd className="text-sm">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container-page py-16 md:py-20">
          <h2 className="font-display text-2xl md:text-3xl font-bold">Related products</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <Card key={p.slug} className="group h-full overflow-hidden border-border/70 hover:shadow-xl transition-all">
                <div className="aspect-[4/3] bg-gradient-to-br from-secondary via-background to-accent/5 grid place-items-center p-6">
                  <img src={p.img} alt={p.name} width={300} height={225} loading="lazy" className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform" />
                </div>
                <CardContent className="p-5">
                  <h3 className="font-display font-semibold">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
                  <Button asChild size="sm" variant="ghost" className="mt-3 px-0 text-primary hover:bg-transparent">
                    <Link to="/products/$slug" params={{ slug: p.slug }}>View <ArrowRight className="ml-1 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
