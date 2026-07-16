import { Link } from "@tanstack/react-router";
import {
  ShieldCheck, Fingerprint, ArrowRight, Cpu, Smartphone, Rocket, ScanFace,
  CreditCard, Layers, Boxes, Building2, Landmark, Radio, HeartPulse, Vote, Shield,
  Download, Award, Star, Calendar, Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,
} from "@/components/ui/carousel";
import { StatCounter } from "./StatCounter";
import { Reveal } from "./Reveal";

const services = [
  { icon: Cpu, title: "Enterprise Software Development", desc: "Custom, scalable platforms engineered for mission-critical operations." },
  { icon: Smartphone, title: "Enterprise Mobility Solutions", desc: "Secure Android apps for telecom, field verification and disbursement." },
  { icon: Rocket, title: "Digital Transformation Services", desc: "Modernize legacy systems with cloud, APIs and identity at the core." },
  { icon: ScanFace, title: "Facial & Access Control Attendance", desc: "AI-powered face recognition for workforce and premises access." },
  { icon: CreditCard, title: "Smart ID Cards", desc: "Contact and contactless smart cards with cryptographic personalization." },
  { icon: Fingerprint, title: "Real-time Biometric Verification", desc: "Fingerprint capture, enrolment and 1:1 / 1:N matching at scale." },
  { icon: Layers, title: "Backend Integration & Middleware", desc: "Robust middleware bridging biometric devices with enterprise systems." },
  { icon: Boxes, title: "Enterprise-level Software Solutions", desc: "End-to-end platforms for governments, telecom and banking." },
];

const products = [
  { name: "TPS 360c", tag: "Compact biometric terminal for retail and field agents." },
  { name: "TPS 900", tag: "High-performance fingerprint verification terminal." },
  { name: "TPS 980", tag: "Facial recognition terminal for premium access control." },
  { name: "TPS 950", tag: "Facial recognition with dual-camera liveness detection." },
  { name: "TPS 550s", tag: "Integrated-camera terminal for enrolment and verification." },
  { name: "TPS 470", tag: "Rugged biometric tablet for mobile field operations." },
  { name: "TPS 550", tag: "Reliable multi-modal verification workhorse." },
  { name: "TPS 350", tag: "Entry-level, cost-effective fingerprint device." },
];

const industries = [
  { icon: Landmark, label: "Government" },
  { icon: Radio, label: "Telecom" },
  { icon: Building2, label: "Banking & Finance" },
  { icon: Shield, label: "Defense & Military" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Vote, label: "Elections & Civil Registration" },
];

const caseStudies = [
  {
    tag: "Telecom",
    title: "Biometric-Based SIM Issuance",
    body: "NADRA-integrated retailer and device verification enabling nationwide compliant SIM activation across leading operators.",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=70",
  },
  {
    tag: "Elections",
    title: "Biometric Voter Verification",
    body: "Pakistan's first HSM-secured biometric polling pilot deployed for the NA-120 by-election with real-time authentication.",
    img: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=70",
  },
  {
    tag: "Banking",
    title: "Smart Debit Card, Iraq",
    body: "National smart debit card programme integrating biometrics for secure issuance, activation and transaction authorization.",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=70",
  },
];

const customers = ["Ufone", "Jazz", "Zong", "Telenor", "Warid", "PTCL", "PTA", "PITB", "Pakistan Army", "Govt. of Pakistan", "NayaPay", "Karandaz"];

const testimonials = [
  { quote: "Their biometric verification stack has been the backbone of our nationwide SIM compliance operations for years — rock solid and fast.", role: "Telecom Operations Director" },
  { quote: "SecureTech delivered an end-to-end identity programme that other vendors called impossible. The team is deeply technical and reliable.", role: "Public Sector Programme Lead" },
  { quote: "From smart cards to backend middleware, they own the full stack. Deployment across our branches was seamless.", role: "Head of Digital Banking" },
];

const awards = [
  { icon: Trophy, label: "Global Top 50 Suppliers — Auto ID Industry" },
  { icon: Star, label: "Star of Excellence Award — Government of Pakistan" },
  { icon: Award, label: "Outstanding Achievement for Secure Documentation — Rome" },
  { icon: Trophy, label: "Lifetime Achievement Award — NCR Corp" },
];

const timeline = [
  { year: "2009", title: "Founded in Islamabad", body: "Secure Tech Consultancy opens its doors, focused on identity and security systems integration." },
  { year: "2011", title: "Iraq & Pakistan Army programmes", body: "National Entitlement enrolment system in Iraq and Smart Card ID for Pakistan Army delivered." },
  { year: "2012", title: "Kenya Population Registration", body: "Consultancy engagement for national population registration modernization." },
  { year: "2017", title: "Biometric polling pilot", body: "First-ever biometric-verified polling pilot in Pakistan with the Election Commission of Pakistan." },
  { year: "2020", title: "New HQ, Islamabad", body: "Groundbreaking of the new Secure Tech headquarters — a hub for R&D and delivery." },
  { year: "2024", title: "Global footprint", body: "Solutions live across Pakistan, Iraq, Kenya, Sudan and Nigeria with 20+ government programmes." },
];

export function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=70')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" aria-hidden />
        <div className="container-page relative py-24 md:py-32 grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-medium">
              <ShieldCheck className="h-3.5 w-3.5 text-accent" /> Since 2008 · Islamabad, Pakistan
            </span>
            <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
              Technology for smarter business.{" "}
              <span className="text-accent">Gateway to a secure future.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-primary-foreground/85">
              One of the region's top suppliers of real-time fingerprint verification terminals — delivering
              biometric, cryptographic and RFID-based identity solutions to governments, telecom and enterprises.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent hover:bg-accent-dark text-accent-foreground">
                <a href="#contact">Request a Demo <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <a href="#services">Explore Solutions</a>
              </Button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -inset-8 bg-accent/20 blur-3xl rounded-full" aria-hidden />
            <img
              src="https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=1000&q=70"
              alt="Biometric fingerprint scan visualisation"
              className="relative rounded-2xl shadow-2xl ring-1 ring-primary-foreground/10"
            />
          </div>
        </div>
      </section>

      {/* ABOUT + STATS */}
      <section id="about" className="container-page py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent-dark">About us</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground">
              Identity and security, engineered end-to-end.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Secure Tech Consultancy is a Pakistan-based IT consulting and systems integration firm specializing in
              identity and security management. For over a decade we have designed and deployed ID cards, e-governance
              platforms, secure access control, biometric enrolment and verification systems, and enterprise software —
              including Android applications powering telecom verification, funds disbursement and mobile financial
              services across five countries.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Biometrics", "Cryptography", "RFID", "e-Governance", "Middleware"].map((t) => (
                <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-3 gap-4 rounded-2xl border border-border bg-card p-8 shadow-sm">
              <StatCounter end={12} suffix="+" label="Years Delivering" />
              <StatCounter end={5} suffix="" label="Countries" />
              <StatCounter end={20} suffix="+" label="Gov. Projects" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 rounded-2xl border border-border bg-card p-8 shadow-sm">
              <StatCounter end={50} suffix="M+" label="Enrolments" />
              <StatCounter end={100} suffix="+" label="Enterprises" />
              <StatCounter end={8} suffix="" label="Product Lines" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-surface py-20 md:py-28">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent-dark">What we do</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Services built for scale and security.</h2>
            <p className="mt-4 text-muted-foreground">
              From custom software to biometric device integration, we cover the full stack of identity-driven enterprise technology.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <Card className="group h-full border-border/70 hover:border-accent hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="container-page py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent-dark">Hardware</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Real-time biometric verification terminals.</h2>
            <p className="mt-4 text-muted-foreground">
              A trusted range of fingerprint and facial recognition devices deployed in the toughest field conditions.
            </p>
          </Reveal>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Products <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((p, i) => (
            <Reveal key={p.name} delay={i * 60}>
              <Card className="group h-full overflow-hidden border-border/70 hover:shadow-xl transition-all">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-secondary to-accent/10 grid place-items-center relative overflow-hidden">
                  <Fingerprint className="h-20 w-20 text-primary/40 group-hover:scale-110 transition-transform" />
                  <span className="absolute top-3 left-3 rounded-full bg-primary text-primary-foreground text-[10px] font-semibold uppercase tracking-wider px-2 py-1">
                    {p.name}
                  </span>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-display font-semibold">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{p.tag}</p>
                  <Button size="sm" variant="ghost" className="mt-3 px-0 text-accent-dark hover:text-accent-dark hover:bg-transparent">
                    <Download className="mr-1.5 h-4 w-4" /> Download Brochure
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="bg-primary text-primary-foreground py-20 md:py-24">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Industries</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Trusted across critical sectors.</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((it, i) => (
              <Reveal key={it.label} delay={i * 50}>
                <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 text-center hover:bg-accent hover:text-accent-foreground transition-colors group">
                  <it.icon className="mx-auto h-8 w-8 text-accent group-hover:text-accent-foreground" />
                  <p className="mt-3 text-sm font-medium">{it.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="case-studies" className="container-page py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-dark">Case studies</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Solutions that moved the needle.</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {caseStudies.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <Card className="group h-full overflow-hidden border-border/70 hover:shadow-xl transition-all">
                <div className="aspect-video overflow-hidden">
                  <img src={c.img} alt={c.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardContent className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent-dark">{c.tag}</span>
                  <h3 className="mt-2 font-display text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                  <Button variant="ghost" className="mt-3 px-0 text-primary hover:text-primary hover:bg-transparent">
                    Read More <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CUSTOMERS */}
      <section className="border-y border-border bg-surface py-14">
        <div className="container-page">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Trusted by leading organisations
          </p>
          <div className="mt-8 grid grid-cols-3 gap-x-6 gap-y-5 sm:grid-cols-4 lg:grid-cols-6">
            {customers.map((c) => (
              <div
                key={c}
                className="text-center font-display font-bold text-lg text-muted-foreground/70 grayscale hover:grayscale-0 hover:text-primary transition-all"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-page py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-dark">Testimonials</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Voices from the field.</h2>
        </Reveal>
        <div className="mt-10">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.role} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border-border/70">
                    <CardContent className="p-8">
                      <div className="flex gap-1 text-accent">
                        {[0, 1, 2, 3, 4].map((i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <p className="mt-4 text-foreground leading-relaxed">"{t.quote}"</p>
                      <p className="mt-6 text-sm font-semibold text-primary">— {t.role}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-6 flex justify-end gap-2">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* AWARDS */}
      <section className="bg-surface py-16">
        <div className="container-page">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent-dark">Awards</span>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold">Recognised globally.</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {awards.map((a) => (
              <div key={a.label} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/15 text-accent-dark">
                  <a.icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-medium leading-snug">{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="container-page py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-dark">Our journey</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">A decade and a half of firsts.</h2>
        </Reveal>
        <div className="relative mt-14">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" aria-hidden />
          <div className="space-y-10">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 60}>
                <div className={`relative md:grid md:grid-cols-2 md:gap-10 ${i % 2 ? "md:[&>*:first-child]:col-start-2" : ""}`}>
                  <div className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left md:pl-10" : "md:text-right md:pr-10"}`}>
                    <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent-dark">
                      <Calendar className="h-3.5 w-3.5" /> {t.year}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-semibold">{t.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.body}</p>
                  </div>
                  <span className="absolute left-4 md:left-1/2 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-accent ring-4 ring-background" aria-hidden />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="container-page pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary-dark p-10 md:p-14 text-primary-foreground">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/30 blur-3xl" aria-hidden />
          <div className="relative grid gap-6 md:grid-cols-[1.4fr_1fr] items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold">Ready to secure your operations?</h3>
              <p className="mt-3 text-primary-foreground/80 max-w-xl">
                Talk to our identity and biometrics experts. We'll scope, prototype and deploy — end to end.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Button size="lg" className="bg-accent hover:bg-accent-dark text-accent-foreground">Request a Demo</Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/blog">Read Insights</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
