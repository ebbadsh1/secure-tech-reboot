import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

function serverClient() {
  const url = process.env.SUPABASE_URL!;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY!;
  return createClient<Database>(url, key, {
    auth: { persistSession: false, autoRefreshToken: false, storage: undefined },
    global: {
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
        h.set("apikey", key);
        return fetch(input, { ...init, headers: h });
      },
    },
  });
}

const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  inquiry_type: z.enum(["general", "sales", "support", "partnership", "media"]).default("general"),
  message: z.string().trim().min(10).max(2000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const supabase = serverClient();
    const { error } = await supabase.from("contact_inquiries").insert({
      name: data.name,
      email: data.email,
      company: data.company || null,
      phone: data.phone || null,
      inquiry_type: data.inquiry_type,
      message: data.message,
    });
    if (error) throw new Error("Failed to submit inquiry");
    return { ok: true as const };
  });

const applySchema = z.object({
  full_name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  role: z.string().trim().min(1).max(120),
  years_experience: z.string().trim().max(40).optional().or(z.literal("")),
  cover_letter: z.string().trim().min(20).max(5000),
  linkedin_url: z.string().trim().url().max(255).optional().or(z.literal("")),
});

export const submitApplication = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => applySchema.parse(data))
  .handler(async ({ data }) => {
    const supabase = serverClient();
    const { error } = await supabase.from("job_applications").insert({
      full_name: data.full_name,
      email: data.email,
      phone: data.phone || null,
      role: data.role,
      years_experience: data.years_experience || null,
      cover_letter: data.cover_letter,
      linkedin_url: data.linkedin_url || null,
    });
    if (error) throw new Error("Failed to submit application");
    return { ok: true as const };
  });

const subscribeSchema = z.object({
  email: z.string().trim().email().max(255),
  source: z.string().trim().max(40).optional(),
});

export const subscribeNewsletter = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => subscribeSchema.parse(data))
  .handler(async ({ data }) => {
    const supabase = serverClient();
    const { error } = await supabase.from("newsletter_subscribers").insert({
      email: data.email,
      source: data.source || "footer",
    });
    if (error) {
      // ignore unique-violation quietly — user already subscribed
      if ((error as { code?: string }).code === "23505") return { ok: true as const, duplicate: true };
      throw new Error("Failed to subscribe");
    }
    return { ok: true as const };
  });
