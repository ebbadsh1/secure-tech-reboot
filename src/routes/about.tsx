import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { AboutPage } from "@/components/AboutPage";
import { SITE_URL, OG_IMAGE } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — SecureTech Consultancy" },
      { name: "description", content: "Since 2008, Secure Tech Consultancy has delivered biometric, cryptographic and RFID identity infrastructure to governments, telecom operators and banks across five countries." },
      { property: "og:title", content: "About SecureTech Consultancy" },
      { property: "og:description", content: "A decade and a half of national-scale identity delivery." },
      { property: "og:url", content: `${SITE_URL}/about` },
      { property: "og:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
  }),
  component: () => <Layout><AboutPage /></Layout>,
});
