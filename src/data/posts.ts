export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateISO: string;
  tag: string;
  img: string;
  author: string;
  readMinutes: number;
  body: string[];
};

export const POSTS: Post[] = [
  {
    slug: "state-of-biometric-identity-south-asia",
    title: "The state of biometric identity in South Asia",
    excerpt: "Fingerprint verification has moved from ID cards to SIMs, banking and elections. Where next?",
    date: "May 12, 2026",
    dateISO: "2026-05-12",
    tag: "Biometrics",
    img: "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=1600&q=70",
    author: "SecureTech Editorial",
    readMinutes: 8,
    body: [
      "Over the last fifteen years, South Asia has quietly become the world's largest live laboratory for biometric identity. What started with Aadhaar in India and NADRA in Pakistan has grown into an infrastructure layer that now underpins SIM registration, mobile banking, pension delivery, and — increasingly — voter verification.",
      "The shift matters because biometrics moved out of the ID card and into the transaction. A fingerprint is no longer just how you claim your identity once; it is how you authorize a payment, a SIM issuance, or a benefits withdrawal, dozens of times a year.",
      "The next frontier is federating these systems: cross-border verification for migrant workers, mutual recognition of e-IDs between countries, and privacy-preserving models where the citizen holds the biometric on-device rather than in a central database. The technology is ready. The governance frameworks are catching up.",
    ],
  },
  {
    slug: "designing-e-governance-citizens-actually-use",
    title: "Designing e-governance that citizens actually use",
    excerpt: "Lessons from a decade of building population registration and entitlement platforms.",
    date: "April 28, 2026",
    dateISO: "2026-04-28",
    tag: "e-Governance",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=70",
    author: "SecureTech Editorial",
    readMinutes: 6,
    body: [
      "Most government platforms fail not because the technology is wrong, but because they optimize for the department rather than the citizen. After deploying civil registration in Sudan, entitlement systems in Iraq and biometric attendance across Punjab, one lesson keeps repeating: fewer fields, fewer clicks, offline-first.",
      "Field agents in low-connectivity areas cannot rely on stable internet. Every workflow we ship assumes the device is offline until proven otherwise, syncs opportunistically, and reconciles server-side. That single design choice cuts abandonment by more than half.",
      "The other lesson is trust. Citizens need to see, on the same device, exactly what data was captured and what happens next. A one-line receipt with a queue number does more for adoption than any awareness campaign.",
    ],
  },
  {
    slug: "hsms-and-your-biometric-database",
    title: "HSMs and why your biometric database needs one",
    excerpt: "A practical primer on hardware security modules for teams shipping identity systems.",
    date: "April 09, 2026",
    dateISO: "2026-04-09",
    tag: "Security",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1600&q=70",
    author: "SecureTech Editorial",
    readMinutes: 7,
    body: [
      "A biometric template is not a password. If it leaks, the citizen cannot change their fingerprint. That single fact should determine how you architect key management for any identity system that stores or matches biometrics.",
      "Hardware Security Modules (HSMs) exist for exactly this reason. Keys used to encrypt biometric templates, sign verification results, and personalize smart cards should be generated inside the HSM and never leave it in cleartext. FIPS 140-2 Level 3 is the practical minimum for national-scale deployments.",
      "In our biometric voting pilot for the Election Commission of Pakistan, every verification result was signed inside an HSM before being returned to the polling device. That single design decision made the audit trail cryptographically defensible in court.",
    ],
  },
  {
    slug: "android-apps-low-connectivity-field-agents",
    title: "Building Android apps for field agents in low-connectivity areas",
    excerpt: "Offline-first patterns for telecom verification and cash disbursement apps.",
    date: "March 22, 2026",
    dateISO: "2026-03-22",
    tag: "Mobile",
    img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1600&q=70",
    author: "SecureTech Editorial",
    readMinutes: 5,
    body: [
      "The single biggest predictor of an enterprise Android app's success in the field is not its UI — it's whether it works when the network doesn't. Every mobile app we ship for telecom verification, cash disbursement or NGO enrolment assumes a slow, intermittent 2G tail.",
      "We use a durable outbox pattern: every transaction is written to a local encrypted queue first, then synced in background with exponential backoff. The user never waits on the network for a receipt.",
      "For biometric matching, doing 1:1 verification on-device with a small cached template pool avoids a round trip entirely. The server becomes an audit destination, not a critical path.",
    ],
  },
  {
    slug: "smart-cards-vs-mobile-credentials-2026",
    title: "Smart cards vs. mobile credentials: a 2026 view",
    excerpt: "Where physical cards still win — and where mobile-first identity has clearly taken over.",
    date: "March 04, 2026",
    dateISO: "2026-03-04",
    tag: "Identity",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=70",
    author: "SecureTech Editorial",
    readMinutes: 6,
    body: [
      "In 2020, the industry consensus was that mobile credentials would displace smart cards within five years. In 2026, the reality is more nuanced. Smart cards still dominate where the credential must survive without a battery, work offline for years, and be issued to citizens without smartphones.",
      "Mobile credentials have won decisively in workforce access, membership programmes, and payment. But for national ID, driver's licenses and defence-sector access, the physical smart card is still the reference token — increasingly paired with a mobile derived credential rather than replaced by one.",
      "The winning architecture is hybrid: a card as the root of identity, a mobile credential as the daily driver, and a shared cryptographic backbone that lets both prove the same thing.",
    ],
  },
  {
    slug: "inside-biometric-voting-pilot",
    title: "Inside our biometric voting pilot",
    excerpt: "What we learned deploying the first HSM-backed biometric polling system in Pakistan.",
    date: "February 18, 2026",
    dateISO: "2026-02-18",
    tag: "Elections",
    img: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1600&q=70",
    author: "SecureTech Editorial",
    readMinutes: 9,
    body: [
      "In 2017 we delivered Pakistan's first biometric-verified polling pilot for the NA-120 by-election under the Election Commission of Pakistan. It was, by design, a small deployment — but it forced us to solve problems that a lab pilot never would.",
      "The hardest problem was not the biometrics; it was the environment. Polling stations lose power. Presiding officers rotate at short notice. Voter rolls change hours before polls open. Everything had to be resilient to that.",
      "The system paired a rugged handheld terminal with an HSM-backed verification service. Each verification returned a signed result that the presiding officer could not tamper with. Nine years later, the audit trail from that pilot is still cited as the reference implementation for biometric polling in the region.",
    ],
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
