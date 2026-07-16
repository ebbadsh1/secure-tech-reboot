import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { HomePage } from "@/components/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SecureTech Consultancy — Biometric & Identity Solutions" },
      { name: "description", content: "Since 2008, Secure Tech Consultancy delivers biometric verification terminals, smart ID cards and enterprise identity systems to governments, telecom and banks." },
      { property: "og:title", content: "SecureTech Consultancy — Technology for Smarter Business" },
      { property: "og:description", content: "Biometric, cryptographic and RFID-based identity solutions across 5 countries." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}
