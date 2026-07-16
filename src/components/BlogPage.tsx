import { ArrowRight, Calendar, Download, FileText, Award, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "./Reveal";

const posts = [
  {
    title: "The state of biometric identity in South Asia",
    excerpt: "Fingerprint verification has moved from ID cards to SIMs, banking and elections. Where next?",
    date: "May 12, 2026",
    img: "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=1200&q=70",
    tag: "Biometrics",
  },
  {
    title: "Designing e-governance that citizens actually use",
    excerpt: "Lessons from a decade of building population registration and entitlement platforms.",
    date: "April 28, 2026",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=70",
    tag: "e-Governance",
  },
  {
    title: "HSMs and why your biometric database needs one",
    excerpt: "A practical primer on hardware security modules for teams shipping identity systems.",
    date: "April 09, 2026",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1200&q=70",
    tag: "Security",
  },
  {
    title: "Building Android apps for field agents in low-connectivity areas",
    excerpt: "Offline-first patterns for telecom verification and cash disbursement apps.",
    date: "March 22, 2026",
    img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1200&q=70",
    tag: "Mobile",
  },
  {
    title: "Smart cards vs. mobile credentials: a 2026 view",
    excerpt: "Where physical cards still win — and where mobile-first identity has clearly taken over.",
    date: "March 04, 2026",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=70",
    tag: "Identity",
  },
  {
    title: "Inside our biometric voting pilot",
    excerpt: "What we learned deploying the first HSM-backed biometric polling system in Pakistan.",
    date: "February 18, 2026",
    img: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=70",
    tag: "Elections",
  },
];

const certifications = [
  { name: "ISO 9001", desc: "Quality Management" },
  { name: "ISO 27001", desc: "Information Security" },
  { name: "PCI-DSS", desc: "Payment Security" },
  { name: "NADRA Certified", desc: "Verified Partner" },
];

const downloads = [
  "TPS 360c Datasheet",
  "TPS 900 Datasheet",
  "TPS 980 Facial Recognition Brochure",
  "TPS 950 Facial Recognition Brochure",
  "TPS 550s Integrated Camera Datasheet",
  "TPS 470 Biometric Tablet Brochure",
  "SecureTech Company Profile",
  "Case Study: Biometric SIM Issuance",
];

export function BlogPage() {
  return (
    <>
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=70')",
            backgroundSize: "cover", backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" aria-hidden />
        <div className="container-page relative py-20 md:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-medium">
            <FileText className="h-3.5 w-3.5 text-accent" /> Insights
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl">News & Insights.</h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/85 text-lg">
            Perspectives on biometric technology, digital identity, e-governance and the future of secure infrastructure.
          </p>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <Card className="group h-full overflow-hidden border-border/70 hover:shadow-xl transition-all">
                <div className="aspect-video overflow-hidden">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between text-xs">
                    <span className="rounded-full bg-accent/15 px-2 py-0.5 font-semibold text-accent-dark uppercase tracking-wider">{p.tag}</span>
                    <span className="inline-flex items-center gap-1 text-muted-foreground"><Calendar className="h-3 w-3" /> {p.date}</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                  <Button variant="ghost" className="mt-3 px-0 text-primary hover:text-primary hover:bg-transparent">
                    Read More <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20 md:py-24">
        <div className="container-page">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent-dark">Certifications</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Standards we're held to.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((c) => (
              <div key={c.name} className="rounded-2xl border border-border bg-card p-6 text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
                  {c.name.includes("ISO") ? <Award className="h-6 w-6" /> : <ShieldCheck className="h-6 w-6" />}
                </div>
                <p className="mt-4 font-display font-bold text-primary">{c.name}</p>
                <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-dark">Downloads</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Product brochures & datasheets.</h2>
        </Reveal>
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {downloads.map((d) => (
            <div key={d} className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card px-5 py-4 hover:border-accent transition-colors">
              <div className="flex items-center gap-3 min-w-0">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <FileText className="h-4 w-4" />
                </div>
                <p className="truncate text-sm font-medium">{d}</p>
              </div>
              <Button size="sm" variant="ghost" className="shrink-0 text-accent-dark hover:text-accent-dark hover:bg-accent/10">
                <Download className="mr-1.5 h-4 w-4" /> PDF
              </Button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
