import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { CareersPage } from "@/components/CareersPage";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — SecureTech Consultancy" },
      { name: "description", content: "Join Secure Tech Consultancy and build identity and security systems for governments, telecom and banks across five countries." },
      { property: "og:title", content: "Careers at SecureTech Consultancy" },
      { property: "og:description", content: "Open roles in engineering, mobile, consulting and QA — Islamabad and remote." },
    ],
  }),
  component: () => <Layout><CareersPage /></Layout>,
});
