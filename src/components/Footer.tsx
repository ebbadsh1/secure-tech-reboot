import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer id="contact" className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-accent-foreground">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-bold">SecureTech</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/75 leading-relaxed">
            Technology for smarter business — a gateway to a secure future. Biometric, identity and
            enterprise solutions since 2008.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><a href="/#about" className="hover:text-accent">About</a></li>
            <li><a href="/#services" className="hover:text-accent">Services</a></li>
            <li><a href="/#products" className="hover:text-accent">Products</a></li>
            <li><a href="/#case-studies" className="hover:text-accent">Case Studies</a></li>
            <li><Link to="/careers" className="hover:text-accent">Careers</Link></li>
            <li><Link to="/blog" className="hover:text-accent">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" /> 391, Secure Tech Towers, Potohar Road, Sector I-9/3, Islamabad, Pakistan</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent" /> +92-51-111-111-782</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-accent" /> info@securetech.pk</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Newsletter</h4>
          <p className="mt-4 text-sm text-primary-foreground/80">Insights on biometrics, identity and secure infrastructure — monthly.</p>
          <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <Input
              type="email"
              required
              placeholder="Your email"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
            />
            <Button type="submit" className="bg-accent hover:bg-accent-dark text-accent-foreground">Join</Button>
          </form>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-page py-5 text-xs text-primary-foreground/60 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Secure Tech Consultancy (Pvt) Ltd. All rights reserved.</p>
          <p>Islamabad · Baghdad · Nairobi · Khartoum · Lagos</p>
        </div>
      </div>
    </footer>
  );
}
