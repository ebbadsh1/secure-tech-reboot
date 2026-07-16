import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useServerFn } from "@tanstack/react-start";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Reveal } from "./Reveal";
import { submitContact } from "@/lib/forms.functions";
import { COMPANY } from "@/data/site";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(120).optional(),
  phone: z.string().trim().max(40).optional(),
  inquiry_type: z.enum(["general", "sales", "support", "partnership", "media"]),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(2000),
});
type FormData = z.infer<typeof schema>;

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const submit = useServerFn(submitContact);
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", company: "", phone: "", inquiry_type: "general", message: "" },
  });

  const onSubmit = async (data: FormData) => {
    try {
      await submit({ data });
      setSent(true);
      toast.success("Message sent — we'll be in touch shortly.");
      form.reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent/20" aria-hidden />
        <div className="container-page relative py-20 md:py-28">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl">Let's talk.</h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/85 text-lg">
            Whether it's a national programme, a pilot, or a partnership — our team responds within one business day.
          </p>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Reveal>
              <h2 className="font-display text-2xl font-bold">Get in touch</h2>
              <div className="mt-6 space-y-6">
                <div className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Headquarters</p>
                    <p className="text-sm text-muted-foreground mt-1">{COMPANY.address}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href={`tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`} className="text-sm text-muted-foreground mt-1 hover:text-primary block">
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href={`mailto:${COMPANY.email}`} className="text-sm text-muted-foreground mt-1 hover:text-primary block">
                      {COMPANY.email}
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-10 rounded-2xl border border-border bg-surface p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-accent-dark">Regional presence</p>
                <p className="mt-2 text-sm text-muted-foreground">Live deployments across {COMPANY.countries.join(", ")}.</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              {sent ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-accent-dark" />
                  <h3 className="mt-4 font-display text-2xl font-bold">Message received</h3>
                  <p className="mt-2 text-muted-foreground">Thanks for reaching out — someone from our team will respond within one business day.</p>
                  <Button className="mt-6" variant="outline" onClick={() => setSent(false)}>Send another message</Button>
                </div>
              ) : (
                <>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Full name *</Label>
                      <Input id="name" {...form.register("name")} className="mt-1.5" />
                      {form.formState.errors.name && <p className="mt-1 text-xs text-destructive">{form.formState.errors.name.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" {...form.register("email")} className="mt-1.5" />
                      {form.formState.errors.email && <p className="mt-1 text-xs text-destructive">{form.formState.errors.email.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" {...form.register("company")} className="mt-1.5" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" {...form.register("phone")} className="mt-1.5" />
                    </div>
                  </div>
                  <div className="mt-5">
                    <Label>Inquiry type</Label>
                    <Select defaultValue="general" onValueChange={(v) => form.setValue("inquiry_type", v as FormData["inquiry_type"])}>
                      <SelectTrigger className="mt-1.5"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General inquiry</SelectItem>
                        <SelectItem value="sales">Sales & demos</SelectItem>
                        <SelectItem value="support">Technical support</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="media">Press & media</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="mt-5">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" rows={6} {...form.register("message")} className="mt-1.5" />
                    {form.formState.errors.message && <p className="mt-1 text-xs text-destructive">{form.formState.errors.message.message}</p>}
                  </div>
                  <Button type="submit" size="lg" disabled={form.formState.isSubmitting} className="mt-6 bg-accent hover:bg-accent-dark text-accent-foreground">
                    {form.formState.isSubmitting ? "Sending..." : <>Send message <Send className="ml-2 h-4 w-4" /></>}
                  </Button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
