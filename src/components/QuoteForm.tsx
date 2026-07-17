"use client";

import { useActionState, useState } from "react";
import { submitLead, type LeadResult } from "@/app/actions/lead";
import { serviceOptions, site } from "@/lib/site";

const initial: LeadResult | null = null;

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [state, formAction, pending] = useActionState(
    async (_prev: LeadResult | null, formData: FormData) => submitLead(formData),
    initial,
  );
  const [urgency, setUrgency] = useState("standard");

  if (state?.ok) {
    return (
      <div className="rounded-xl border border-navy-950/10 bg-ice-50 p-6 sm:p-8" role="status">
        <h3 className="font-display text-xl font-bold text-navy-950">Message received</h3>
        <p className="mt-2 text-steel-700">{state.message}</p>
        <a
          href={site.phoneHref}
          className="mt-6 inline-flex rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700"
        >
          Call {site.phone}
        </a>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {!compact && (
        <div>
          <h3 className="font-display text-xl font-bold tracking-tight text-navy-950">
            Start a conversation
          </h3>
          <p className="mt-1 text-sm text-steel-700">
            For emergencies, call{" "}
            <a href={site.phoneHref} className="font-semibold text-red-600">
              {site.phone}
            </a>{" "}
            first — then leave details if helpful.
          </p>
        </div>
      )}

      {state && !state.ok && (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-800" role="alert">
          {state.message}
        </p>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Full name *"
          name="name"
          error={state?.ok === false ? state.fieldErrors?.name : undefined}
          required
          autoComplete="name"
        />
        <Field
          label="Phone *"
          name="phone"
          type="tel"
          error={state?.ok === false ? state.fieldErrors?.phone : undefined}
          required
          autoComplete="tel"
        />
      </div>

      <Field
        label="Email"
        name="email"
        type="email"
        error={state?.ok === false ? state.fieldErrors?.email : undefined}
        autoComplete="email"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-navy-950">
            Service needed
          </label>
          <select
            id="service"
            name="service"
            className="w-full rounded-lg border border-ice-100 bg-white px-3 py-2.5 text-sm text-navy-950 focus:border-red-600"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="propertyType" className="mb-1.5 block text-sm font-medium text-navy-950">
            Property type
          </label>
          <select
            id="propertyType"
            name="propertyType"
            className="w-full rounded-lg border border-ice-100 bg-white px-3 py-2.5 text-sm text-navy-950 focus:border-red-600"
            defaultValue="residential"
          >
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="industrial">Industrial</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <span className="mb-1.5 block text-sm font-medium text-navy-950">Urgency</span>
          <div className="flex gap-2">
            {(
              [
                ["standard", "Standard"],
                ["emergency", "Emergency"],
              ] as const
            ).map(([value, label]) => (
              <label
                key={value}
                className={`flex flex-1 cursor-pointer items-center justify-center rounded-lg border px-3 py-2.5 text-sm font-semibold transition ${
                  urgency === value
                    ? value === "emergency"
                      ? "border-red-600 bg-red-600/10 text-red-600"
                      : "border-navy-950 bg-navy-950 text-white"
                    : "border-ice-100 bg-white text-steel-700"
                }`}
              >
                <input
                  type="radio"
                  name="urgency"
                  value={value}
                  checked={urgency === value}
                  onChange={() => setUrgency(value)}
                  className="sr-only"
                />
                {label}
              </label>
            ))}
          </div>
        </div>
        <Field label="Preferred date" name="preferredDate" type="date" />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-950">
          What needs work?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-ice-100 bg-white px-3 py-2.5 text-sm text-navy-950 focus:border-red-600"
          placeholder="Describe the system, site, or project..."
        />
      </div>

      {urgency === "emergency" && (
        <p className="rounded-lg border border-red-600/25 bg-red-600/5 px-3 py-2 text-sm text-navy-950">
          Call{" "}
          <a href={site.phoneHref} className="font-bold text-red-600">
            {site.phone}
          </a>{" "}
          now for fastest emergency response.
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-navy-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-red-600 disabled:opacity-60 sm:w-auto sm:min-w-[180px]"
      >
        {pending ? "Sending…" : "Send"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-navy-950">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-navy-950 focus:border-red-600 ${
          error ? "border-red-400" : "border-ice-100"
        }`}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
