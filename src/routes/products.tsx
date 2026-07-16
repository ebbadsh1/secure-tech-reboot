import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ProductsPage } from "@/components/ProductsPage";
import { SITE_URL, OG_IMAGE } from "@/data/site";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Biometric Products & Hardware — SecureTech Consultancy" },
      { name: "description", content: "Fingerprint terminals, facial recognition devices and rugged biometric tablets — the TPS product family, deployed across telecom, banking, elections and civil registration." },
      { property: "og:title", content: "Biometric Products — SecureTech Consultancy" },
      { property: "og:description", content: "Explore the full TPS range of biometric verification hardware." },
      { property: "og:url", content: `${SITE_URL}/products` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/products` }],
  }),
  component: () => <Layout><ProductsPage /></Layout>,
});
