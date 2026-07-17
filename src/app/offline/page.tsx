import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Offline",
  description: "You are offline. Call DMR Mechanical anytime for emergency HVAC and plumbing service.",
  robots: { index: false, follow: false },
};

export default function OfflinePage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-navy-950 px-4 py-20 text-center text-white">
      <span className="rounded-xl bg-white p-3 shadow-lg">
        <Image
          src="/images/logo.jpg"
          alt="DMR Mechanical, LLC"
          width={96}
          height={86}
          className="h-16 w-auto"
        />
      </span>
      <h1 className="font-display mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
        You&apos;re offline
      </h1>
      <p className="mt-3 max-w-md text-base text-white/75">
        This page is saved on your device. You can still call us for 24/7 emergency HVAC, plumbing,
        and mechanical service.
      </p>
      <a
        href={site.phoneHref}
        className="mt-8 inline-flex rounded-md bg-red-600 px-6 py-3.5 text-base font-bold text-white hover:bg-red-700"
      >
        Call {site.phone}
      </a>
      <div className="mt-8 space-y-1 text-sm text-white/60">
        <p>{site.address.full}</p>
        <p>{site.hours.emergency}</p>
      </div>
      <Link
        href="/"
        className="mt-10 text-sm font-semibold text-red-600 hover:text-red-500"
      >
        Try again when online →
      </Link>
    </div>
  );
}
