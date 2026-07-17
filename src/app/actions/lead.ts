"use server";

export type LeadResult =
  | { ok: true; message: string }
  | { ok: false; message: string; fieldErrors?: Record<string, string> };

export type LeadPayload = {
  name: string;
  phone: string;
  email: string;
  service: string;
  propertyType: string;
  urgency: string;
  preferredDate: string;
  message: string;
};

function clean(value: unknown, max = 500): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

export async function submitLead(formData: FormData): Promise<LeadResult> {
  const payload: LeadPayload = {
    name: clean(formData.get("name"), 120),
    phone: clean(formData.get("phone"), 40),
    email: clean(formData.get("email"), 120),
    service: clean(formData.get("service"), 80),
    propertyType: clean(formData.get("propertyType"), 40),
    urgency: clean(formData.get("urgency"), 20),
    preferredDate: clean(formData.get("preferredDate"), 40),
    message: clean(formData.get("message"), 2000),
  };

  const fieldErrors: Record<string, string> = {};
  if (!payload.name || payload.name.length < 2) {
    fieldErrors.name = "Please enter your name.";
  }
  if (!isValidPhone(payload.phone)) {
    fieldErrors.phone = "Please enter a valid phone number.";
  }
  if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    fieldErrors.email = "Please enter a valid email.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, message: "Please fix the highlighted fields.", fieldErrors };
  }

  const summary = [
    `New quote request from ${payload.name}`,
    `Phone: ${payload.phone}`,
    `Email: ${payload.email || "(not provided)"}`,
    `Service: ${payload.service || "(not specified)"}`,
    `Property: ${payload.propertyType || "(not specified)"}`,
    `Urgency: ${payload.urgency || "standard"}`,
    `Preferred date: ${payload.preferredDate || "(flexible)"}`,
    `Message: ${payload.message || "(none)"}`,
  ].join("\n");

  console.info("[DMR lead]", summary);

  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL ?? "onboarding@resend.dev";

  if (resendKey && to) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          subject: `[DMR Quote] ${payload.urgency === "emergency" ? "EMERGENCY — " : ""}${payload.name}`,
          text: summary,
        }),
      });
      if (!res.ok) {
        const body = await res.text();
        console.error("[DMR lead] Resend failed", res.status, body);
      }
    } catch (err) {
      console.error("[DMR lead] email error", err);
    }
  }

  return {
    ok: true,
    message:
      payload.urgency === "emergency"
        ? "Request received. For fastest help, call (318) 629-6800 now—we’re available 24/7."
        : "Thanks! We received your request and will follow up soon.",
  };
}
