import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ContactPage } from "@/components/ContactPage";
import { SITE_URL, OG_IMAGE, COMPANY } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SecureTech Consultancy" },
      { name: "description", content: "Talk to Secure Tech Consultancy about biometric programmes, product demos or partnerships — headquartered in Islamabad, serving five countries." },
      { property: "og:title", content: "Contact SecureTech Consultancy" },
      { property: "og:description", content: "Get in touch — we respond within one business day." },
      { property: "og:url", content: `${SITE_URL}/contact` },
      { property: "og:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: COMPANY.name,
        url: SITE_URL,
        email: COMPANY.email,
        telephone: COMPANY.phone,
        address: { "@type": "PostalAddress", streetAddress: COMPANY.address, addressCountry: "PK" },
      }),
    }],
  }),
  component: () => <Layout><ContactPage /></Layout>,
});
