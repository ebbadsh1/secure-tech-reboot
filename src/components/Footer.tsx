import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { subscribeNewsletter } from "@/lib/forms.functions";
import { COMPANY } from "@/data/site";

function Newsletter() {
  const subscribe = useServerFn(subscribeNewsletter);
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  return (
    <form
      className="mt-4 flex gap-2"
      onSubmit={async (e) => {
        e.preventDefault();
        if (!email.includes("@")) { toast.error("Please enter a valid email."); return; }
        setBusy(true);
        try {
          await subscribe({ data: { email, source: "footer" } });
          toast.success("Subscribed — welcome aboard.");
          setEmail("");
        } catch { toast.error("Couldn't subscribe. Try again."); }
        finally { setBusy(false); }
      }}
    >
      <Input
        type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
      />
      <Button type="submit" disabled={busy} className="bg-accent hover:bg-accent-dark text-accent-foreground">
        {busy ? "..." : "Join"}
      </Button>
    </form>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-accent-foreground">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-bold">SecureTech</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/75 leading-relaxed">
            Technology for smarter business — a gateway to a secure future. Biometric, identity and enterprise solutions since {COMPANY.founded}.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social link"
                className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/products" className="hover:text-accent">Products</Link></li>
            <li><Link to="/solutions" className="hover:text-accent">Solutions</Link></li>
            <li><Link to="/careers" className="hover:text-accent">Careers</Link></li>
            <li><Link to="/blog" className="hover:text-accent">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" /> {COMPANY.address}</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent" /> {COMPANY.phone}</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-accent" /> {COMPANY.email}</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Newsletter</h4>
          <p className="mt-4 text-sm text-primary-foreground/80">Insights on biometrics, identity and secure infrastructure — monthly.</p>
          <Newsletter />
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-page py-5 text-xs text-primary-foreground/60 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <p>{COMPANY.countries.join(" · ")}</p>
        </div>
      </div>
    </footer>
  );
}
