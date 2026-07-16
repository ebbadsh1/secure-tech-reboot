import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SolutionsPage } from "@/components/SolutionsPage";
import { SITE_URL, OG_IMAGE } from "@/data/site";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions by Industry — SecureTech Consultancy" },
      { name: "description", content: "Biometric and identity solutions for Telecom, Banking, Elections, Government, NGO and Healthcare — deployed across Pakistan, Iraq, Kenya, Sudan and Nigeria." },
      { property: "og:title", content: "Industry Solutions — SecureTech" },
      { property: "og:description", content: "Biometric solutions for the world's most trusted programmes." },
      { property: "og:url", content: `${SITE_URL}/solutions` },
      { property: "og:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/solutions` }],
  }),
  component: () => <Layout><SolutionsPage /></Layout>,
});
