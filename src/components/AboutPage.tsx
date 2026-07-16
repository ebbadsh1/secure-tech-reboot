import { Link } from "@tanstack/react-router";
import { Award, Building, MapPin, ShieldCheck, Target, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatCounter } from "./StatCounter";
import { Reveal } from "./Reveal";
import { COMPANY } from "@/data/site";

const values = [
  { icon: ShieldCheck, title: "Security First", desc: "Every system we ship is designed for hostile environments — cryptography, HSMs and audit trails, from day one." },
  { icon: Target, title: "Programme Delivery", desc: "We measure success by production milestones — national rollouts, citizen enrolments, transactions completed." },
  { icon: Users2, title: "Local Expertise, Global Reach", desc: "Engineers in Islamabad supporting deployments across five countries, in five languages." },
];

const timeline = [
  { year: "2009", event: "Founded in Islamabad." },
  { year: "2011", event: "Iraq National Entitlement Programme + Pakistan Army Smart Card ID." },
  { year: "2012", event: "Kenya Integrated Population Registration System consultancy." },
  { year: "2013", event: "Sudan Civil Registration + Jazz biometric verification (Pakistan)." },
  { year: "2015", event: "PITB attendance system across Punjab hospitals." },
  { year: "2016", event: "PTA Technical Audit of Cellular Mobile Operators." },
  { year: "2017", event: "Pakistan's first biometric-verified polling pilot (NA-120)." },
  { year: "2018", event: "Exhibited at ID4Africa, Abuja, Nigeria." },
  { year: "2020", event: "Broke ground on new HQ in Sector I-9/3, Islamabad." },
  { year: "2024", event: "Live in Pakistan, Iraq, Kenya, Sudan, Nigeria." },
];

export function AboutPage() {
  return (
    <>
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-25"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=70')", backgroundSize: "cover", backgroundPosition: "center" }} aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" aria-hidden />
        <div className="container-page relative py-20 md:py-28">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl">
            Identity and security, engineered end-to-end since {COMPANY.founded}.
          </h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/85 text-lg">
            Secure Tech Consultancy is a Pakistan-based systems integrator delivering biometric, cryptographic and RFID identity infrastructure to governments, telecom operators and banks across five countries.
          </p>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCounter end={2026 - COMPANY.founded} suffix="+" label="Years Delivering" />
          <StatCounter end={5} label="Countries" />
          <StatCounter end={20} suffix="+" label="Gov. Programmes" />
          <StatCounter end={150} suffix="M+" label="Verifications" />
        </div>
      </section>

      <section className="bg-surface py-20 md:py-24">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent-dark">Our values</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">How we build.</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-8">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-dark">Our journey</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">A decade and a half of national-scale delivery.</h2>
        </Reveal>
        <ol className="mt-12 relative border-l-2 border-border pl-8 space-y-8">
          {timeline.map((t) => (
            <li key={t.year} className="relative">
              <span className="absolute -left-[41px] grid h-8 w-8 place-items-center rounded-full bg-accent text-accent-foreground text-xs font-bold ring-4 ring-background">
                {t.year.slice(2)}
              </span>
              <p className="font-display font-semibold text-primary">{t.year}</p>
              <p className="mt-1 text-muted-foreground">{t.event}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-primary text-primary-foreground py-20 md:py-24">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Global presence</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Live across five countries.</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {COMPANY.countries.map((c) => (
              <div key={c} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 text-center">
                <MapPin className="mx-auto h-6 w-6 text-accent" />
                <p className="mt-3 font-medium">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="rounded-3xl bg-gradient-to-br from-primary via-primary to-primary-dark text-primary-foreground p-10 md:p-14 text-center">
          <Award className="mx-auto h-10 w-10 text-accent" />
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold">Recognized by the industry.</h2>
          <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/85">
            Global Top 50 Suppliers in the Auto ID Industry · Star of Excellence Award, Government of Pakistan · Outstanding Achievement for Secure Documentation, Rome · Lifetime Achievement Award, NCR Corp.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-accent hover:bg-accent-dark text-accent-foreground">
              <Link to="/contact">Work with us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/careers"><Building className="mr-2 h-4 w-4" /> Join the team</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
