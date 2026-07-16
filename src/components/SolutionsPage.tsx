import { Link } from "@tanstack/react-router";
import { ArrowRight, Radio, Building2, Vote, Landmark, HeartPulse, HandCoins, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

const SOLUTIONS = [
  {
    id: "telecom",
    icon: Radio,
    title: "Telecom",
    lead: "Biometric SIM issuance and subscriber verification at national scale.",
    body: "Turnkey front-end apps and NADRA-integrated middleware powering real-time SIM verification across all major Pakistani mobile operators — Jazz, Ufone, Zong, Telenor and Warid. Retailer, device and fingerprint management built for millions of daily transactions.",
    outcomes: ["150M+ verifications processed", "Sub-second NADRA response time", "Deployed across 70,000+ retailers"],
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1600&q=70",
  },
  {
    id: "banking",
    icon: Building2,
    title: "Banking & Financial Services",
    lead: "End-to-end biometric onboarding and secure card programmes.",
    body: "Full-stack biometric-enabled payment programmes — from enrolment and card personalization to POS integration and secure disbursement of government grants. Reference deployment: International Smart Card, Iraq.",
    outcomes: ["End-to-end debit card programme in Iraq", "Biometric KYC for mobile financial services", "Cryptographic personalization on HSM"],
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=70",
  },
  {
    id: "elections",
    icon: Vote,
    title: "Elections & Civil Registration",
    lead: "HSM-secured biometric voter verification and civil ID programmes.",
    body: "Delivered Pakistan's first-ever biometric-verified polling pilot (NA-120, Election Commission of Pakistan). Consultancy on Kenya's Integrated Population Registration System and Sudan's Civil Registration.",
    outcomes: ["First biometric polling pilot in Pakistan", "Kenya IPRS consultancy", "Sudan Civil Registration systems"],
    img: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1600&q=70",
  },
  {
    id: "government",
    icon: Landmark,
    title: "Government & e-Governance",
    lead: "Population registration, entitlements and attendance for public sector.",
    body: "Biometric attendance systems deployed across district and tehsil hospitals for the Punjab IT Board. Technical audit of mobile subscriber data for PTA. Iraq's National Entitlement Programme. Pakistan Army Smart Card ID.",
    outcomes: ["PITB attendance across Punjab hospitals", "PTA Technical Audit — CMOs", "Pakistan Army Smart Card ID"],
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=70",
  },
  {
    id: "ngo",
    icon: HandCoins,
    title: "NGO & Cash Disbursement",
    lead: "Offline-first Android apps for aid distribution and beneficiary verification.",
    body: "Rugged handheld and tablet-based enrolment plus offline-first Android software for beneficiary verification, cash disbursement and refugee registration across five countries.",
    outcomes: ["Offline-first field verification", "Multi-modal enrolment (fingerprint, face, photo)", "Deployed across Pakistan, Iraq, Kenya, Sudan, Nigeria"],
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1600&q=70",
  },
  {
    id: "healthcare",
    icon: HeartPulse,
    title: "Healthcare",
    lead: "Patient identification and staff attendance for hospital networks.",
    body: "Biometric patient identification to eliminate duplicate records, plus workforce attendance rolled out across district hospitals in Punjab. Built for high-throughput OPDs and rural facilities alike.",
    outcomes: ["Hospital workforce attendance at scale", "Patient duplicate elimination", "Facial recognition attendance kiosks"],
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=70",
  },
];

export function SolutionsPage() {
  return (
    <>
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/85 to-accent/20" aria-hidden />
        <div className="container-page relative py-20 md:py-28">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl">
            Solutions built for the world's most trusted programmes.
          </h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/85 text-lg">
            From national elections to nationwide SIM verification, our identity and biometric platforms power some of the largest programmes in South Asia, the Middle East and Africa.
          </p>
        </div>
      </section>

      <div className="container-page py-20 md:py-24 space-y-24">
        {SOLUTIONS.map((s, i) => (
          <Reveal key={s.id}>
            <section id={s.id} className={`grid gap-10 lg:grid-cols-2 items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent-dark uppercase tracking-wider">
                  <s.icon className="h-3.5 w-3.5" /> {s.title}
                </div>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold">{s.lead}</h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">{s.body}</p>
                <ul className="mt-6 space-y-2">
                  {s.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-accent-dark shrink-0" /> {o}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 bg-accent hover:bg-accent-dark text-accent-foreground">
                  <Link to="/contact">Discuss your programme <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
              <div className="overflow-hidden rounded-2xl shadow-xl border border-border">
                <img src={s.img} alt={`${s.title} solutions`} loading="lazy" width={800} height={500} className="w-full h-full object-cover aspect-video" />
              </div>
            </section>
          </Reveal>
        ))}
      </div>
    </>
  );
}
