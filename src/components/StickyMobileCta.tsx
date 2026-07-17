"use client";

import Link from "next/link";
import { useEffect } from "react";
import { site } from "@/lib/site";

export function StickyMobileCta() {
  useEffect(() => {
    document.body.classList.add("has-mobile-cta");
    return () => document.body.classList.remove("has-mobile-cta");
  }, []);

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-navy-900/20 bg-navy-950/95 p-2 backdrop-blur-md md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <a
          href={site.phoneHref}
          className="flex items-center justify-center gap-2 rounded-md bg-red-600 px-3 py-3 text-sm font-bold text-white"
        >
          Call Now
        </a>
        <Link
          href="/#contact"
          className="flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white px-3 py-3 text-sm font-bold text-navy-950"
        >
          Quote
        </Link>
      </div>
    </div>
  );
}
