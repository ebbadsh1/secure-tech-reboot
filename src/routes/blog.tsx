import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { BlogPage } from "@/components/BlogPage";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Insights — SecureTech Consultancy" },
      { name: "description", content: "Perspectives on biometric technology, digital identity, e-governance and secure infrastructure — plus downloads and certifications." },
      { property: "og:title", content: "SecureTech Insights" },
      { property: "og:description", content: "News, insights, brochures and certifications from Secure Tech Consultancy." },
    ],
  }),
  component: () => <Layout><BlogPage /></Layout>,
});
