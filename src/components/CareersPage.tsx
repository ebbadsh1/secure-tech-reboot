import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useServerFn } from "@tanstack/react-start";
import { Briefcase, MapPin, Clock, Heart, GraduationCap, Users, TrendingUp, Coffee, Wifi, Shield, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Reveal } from "./Reveal";
import { submitApplication } from "@/lib/forms.functions";

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

const schema = z.object({
  full_name: z.string().trim().min(1, "Required").max(120),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(40).optional(),
  role: z.string().trim().min(1, "Please select a role"),
  years_experience: z.string().trim().max(40).optional(),
  linkedin_url: z.string().trim().url("Must be a valid URL").max(255).optional().or(z.literal("")),
  cover_letter: z.string().trim().min(20, "Please write at least 20 characters").max(5000),
});
type FormData = z.infer<typeof schema>;

export function CareersPage() {
  const [sent, setSent] = useState(false);
  const apply = useServerFn(submitApplication);
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { full_name: "", email: "", phone: "", role: "", years_experience: "", linkedin_url: "", cover_letter: "" },
  });

  const onSubmit = async (data: FormData) => {
    try {
      await apply({ data });
      setSent(true);
      toast.success("Application received — we'll be in touch shortly.");
      form.reset();
    } catch { toast.error("Something went wrong. Please try again."); }
  };

  return (
    <>
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-25"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=70')", backgroundSize: "cover", backgroundPosition: "center" }} aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" aria-hidden />
        <div className="container-page relative py-20 md:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-medium">
            <Briefcase className="h-3.5 w-3.5 text-accent" /> Careers
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl">Join Secure Tech Consultancy.</h1>
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
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent-dark"><v.icon className="h-5 w-5" /></div>
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
                    <Button className="bg-accent hover:bg-accent-dark text-accent-foreground"
                      onClick={() => {
                        form.setValue("role", j.title);
                        document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
                      }}>
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
            <p className="mt-3 text-muted-foreground">Don't see the right role? Pick "Open Application" — we're always meeting exceptional people.</p>
          </Reveal>
          <Card className="mt-8 border-border/70">
            <CardContent className="p-6 md:p-8">
              {sent ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-accent-dark" />
                  <h3 className="mt-4 font-display text-2xl font-bold">Application received</h3>
                  <p className="mt-2 text-muted-foreground">Thanks — our team will review and get back to you within a week.</p>
                  <Button className="mt-6" variant="outline" onClick={() => setSent(false)}>Submit another</Button>
                </div>
              ) : (
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="full_name">Full name *</Label>
                      <Input id="full_name" {...form.register("full_name")} className="mt-1.5" placeholder="Ayesha Khan" />
                      {form.formState.errors.full_name && <p className="mt-1 text-xs text-destructive">{form.formState.errors.full_name.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" {...form.register("email")} className="mt-1.5" placeholder="you@example.com" />
                      {form.formState.errors.email && <p className="mt-1 text-xs text-destructive">{form.formState.errors.email.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" {...form.register("phone")} className="mt-1.5" />
                    </div>
                    <div>
                      <Label htmlFor="years">Years of experience</Label>
                      <Input id="years" {...form.register("years_experience")} className="mt-1.5" placeholder="e.g. 5" />
                    </div>
                  </div>
                  <div>
                    <Label>Position *</Label>
                    <Select value={form.watch("role")} onValueChange={(v) => form.setValue("role", v, { shouldValidate: true })}>
                      <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select a role" /></SelectTrigger>
                      <SelectContent>
                        {jobs.map((j) => <SelectItem key={j.title} value={j.title}>{j.title}</SelectItem>)}
                        <SelectItem value="Open Application">Open Application</SelectItem>
                      </SelectContent>
                    </Select>
                    {form.formState.errors.role && <p className="mt-1 text-xs text-destructive">{form.formState.errors.role.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="linkedin">LinkedIn URL</Label>
                    <Input id="linkedin" {...form.register("linkedin_url")} className="mt-1.5" placeholder="https://linkedin.com/in/..." />
                    {form.formState.errors.linkedin_url && <p className="mt-1 text-xs text-destructive">{form.formState.errors.linkedin_url.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="cover">Cover letter *</Label>
                    <Textarea id="cover" rows={6} {...form.register("cover_letter")} className="mt-1.5" placeholder="Tell us why you'd be a great fit..." />
                    {form.formState.errors.cover_letter && <p className="mt-1 text-xs text-destructive">{form.formState.errors.cover_letter.message}</p>}
                  </div>
                  <Button type="submit" size="lg" disabled={form.formState.isSubmitting} className="bg-accent hover:bg-accent-dark text-accent-foreground">
                    {form.formState.isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
