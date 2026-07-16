import { useState } from "react";
import { Briefcase, MapPin, Clock, Heart, GraduationCap, Users, TrendingUp, Coffee, Wifi, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Reveal } from "./Reveal";
import { toast } from "sonner";

const values = [
  { icon: TrendingUp, title: "Growth from day one", body: "Real ownership on projects deployed for governments and enterprises across five countries." },
  { icon: GraduationCap, title: "Learn from the best", body: "Work alongside engineers who built Pakistan's first biometric polling system." },
  { icon: Users, title: "Team that has your back", body: "Flat, collaborative teams — your ideas ship, not just your tickets." },
  { icon: Heart, title: "Purpose-driven work", body: "Identity and security systems that affect millions of lives — every day." },
];

const jobs = [
  { title: "Senior Backend Engineer", dept: "Engineering", location: "Islamabad · Onsite", type: "Full-time" },
  { title: "Android Developer (Biometrics)", dept: "Mobile", location: "Islamabad · Hybrid", type: "Full-time" },
  { title: "Solutions Architect", dept: "Consulting", location: "Islamabad · Onsite", type: "Full-time" },
  { title: "QA Automation Engineer", dept: "Quality", location: "Remote · Pakistan", type: "Full-time" },
];

const perks = [
  { icon: Coffee, label: "Fully-stocked kitchen" },
  { icon: Wifi, label: "Hybrid work options" },
  { icon: Shield, label: "Health coverage" },
  { icon: GraduationCap, label: "Learning budget" },
  { icon: TrendingUp, label: "Performance bonuses" },
  { icon: Users, label: "Team retreats" },
];

export function CareersPage() {
  const [form, setForm] = useState({ name: "", email: "", position: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.position) {
      toast.error("Please complete all fields.");
      return;
    }
    toast.success("Application received — we'll be in touch shortly.");
    setForm({ name: "", email: "", position: "" });
  };

  return (
    <>
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=70')",
            backgroundSize: "cover", backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" aria-hidden />
        <div className="container-page relative py-20 md:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-medium">
            <Briefcase className="h-3.5 w-3.5 text-accent" /> Careers
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl">
            Join Secure Tech Consultancy.
          </h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/85 text-lg">
            Build identity and security systems that power governments, telecom operators and banks — across Pakistan and beyond.
          </p>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-dark">Why us</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">A place to do the best work of your career.</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 60}>
              <Card className="h-full border-border/70 hover:border-accent transition-colors">
                <CardContent className="p-6">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent-dark">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20 md:py-24">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent-dark">Open positions</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">We're hiring.</h2>
          </Reveal>
          <div className="mt-10 space-y-4">
            {jobs.map((j, i) => (
              <Reveal key={j.title} delay={i * 40}>
                <Card className="border-border/70 hover:border-primary transition-colors">
                  <CardContent className="p-6 grid gap-4 md:grid-cols-[1fr_auto] items-center">
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-semibold">{j.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5" /> {j.dept}</span>
                        <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {j.location}</span>
                        <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {j.type}</span>
                      </div>
                    </div>
                    <Button
                      className="bg-accent hover:bg-accent-dark text-accent-foreground"
                      onClick={() => {
                        setForm((f) => ({ ...f, position: j.title }));
                        document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-dark">Culture & benefits</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Small perks. Big impact.</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {perks.map((p) => (
            <div key={p.label} className="rounded-xl border border-border bg-card p-5 text-center">
              <p.icon className="mx-auto h-6 w-6 text-accent-dark" />
              <p className="mt-2 text-sm font-medium">{p.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="apply" className="bg-surface py-20 md:py-24">
        <div className="container-page max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent-dark">Apply</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Send us your application.</h2>
            <p className="mt-3 text-muted-foreground">
              Don't see the right role? Send your CV anyway — we're always meeting exceptional people.
            </p>
          </Reveal>
          <Card className="mt-8 border-border/70">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={submit} className="grid gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Ayesha Khan" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
                </div>
                <div className="grid gap-2">
                  <Label>Position</Label>
                  <Select value={form.position} onValueChange={(v) => setForm({ ...form, position: v })}>
                    <SelectTrigger><SelectValue placeholder="Select a role" /></SelectTrigger>
                    <SelectContent>
                      {jobs.map((j) => <SelectItem key={j.title} value={j.title}>{j.title}</SelectItem>)}
                      <SelectItem value="Open Application">Open Application</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="resume">Resume (PDF)</Label>
                  <Input id="resume" type="file" accept=".pdf,.doc,.docx" />
                </div>
                <Button type="submit" size="lg" className="bg-accent hover:bg-accent-dark text-accent-foreground">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
