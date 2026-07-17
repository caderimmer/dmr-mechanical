"use client";

import { useId, useState } from "react";
import { receipts } from "@/lib/site";
import { Reveal } from "./Reveal";

export function StatsReceipts() {
  const [active, setActive] = useState<string | null>(null);
  const baseId = useId();

  return (
    <section
      className="border-b border-ice-100 bg-white"
      aria-label="Company receipts"
    >
      <div className="container-dmr px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
        <Reveal>
          <p className="mb-8 text-center text-sm text-steel-500">
            Touch any number for its receipt — that&apos;s the house rule.
          </p>
        </Reveal>

        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ice-100 bg-ice-100 sm:grid-cols-3 lg:grid-cols-5">
          {receipts.map((item, i) => {
            const isOpen = active === item.id;
            const panelId = `${baseId}-${item.id}`;
            return (
              <li key={item.id} className="bg-white">
                <button
                  type="button"
                  className={`flex h-full w-full flex-col items-start px-5 py-7 text-left transition sm:px-6 sm:py-8 ${
                    isOpen ? "bg-navy-950 text-white" : "hover:bg-ice-50"
                  }`}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setActive(isOpen ? null : item.id)}
                >
                  <span
                    className={`font-display text-3xl font-bold tracking-tight sm:text-4xl ${
                      isOpen ? "text-red-500" : "text-navy-950"
                    }`}
                  >
                    {item.value}
                  </span>
                  <span
                    className={`mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] ${
                      isOpen ? "text-white/60" : "text-steel-500"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
                {/* Mobile: receipt under card; desktop uses shared panel below */}
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-label={`Receipt for ${item.label}`}
                    className="border-t border-white/10 bg-navy-900 px-5 py-4 text-sm leading-relaxed text-white/80 lg:hidden"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-500">
                      The receipt
                    </p>
                    <p className="mt-2">{item.receipt}</p>
                  </div>
                )}
                {/* keep index used for potential stagger */}
                <span className="sr-only">{i + 1}</span>
              </li>
            );
          })}
        </ul>

        {/* Desktop shared receipt panel */}
        <div className="mt-4 hidden lg:block" aria-live="polite">
          {active ? (
            <div className="rounded-xl border border-navy-950/10 bg-ice-50 px-6 py-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-600">
                The receipt
              </p>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-steel-700 sm:text-base">
                {receipts.find((r) => r.id === active)?.receipt}
              </p>
            </div>
          ) : (
            <p className="px-1 text-sm text-steel-500/80">
              Select a figure above to see how we stand behind it.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
