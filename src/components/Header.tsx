"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ice-100/80 bg-white/90 text-navy-950 backdrop-blur-md">
      <div className="container-dmr flex items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3 no-underline"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo.jpg"
            alt="DMR Mechanical, LLC"
            width={120}
            height={107}
            priority
            className="h-10 w-auto sm:h-11"
          />
          <span className="hidden flex-col leading-tight lg:flex">
            <span className="font-display text-[15px] font-semibold tracking-wide text-navy-950">
              DMR Mechanical
            </span>
            <span className="text-[10px] uppercase tracking-[0.14em] text-steel-500">
              Shreveport, Louisiana
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2.5 py-2 text-[13px] font-medium text-steel-700 transition hover:text-navy-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-1.5 text-[13px] font-semibold text-navy-950 transition hover:text-red-600 md:inline-flex"
          >
            {site.phone}
          </a>
          <Link
            href="/#contact"
            className="rounded-full bg-navy-950 px-4 py-2 text-[13px] font-semibold text-white transition hover:bg-red-600"
          >
            Start a quote
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ice-100 text-navy-950 xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-ice-100 bg-white px-5 py-4 xl:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-md px-3 py-3 text-base font-medium text-navy-950 hover:bg-ice-50"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.phoneHref}
                className="mt-2 flex items-center gap-2 rounded-md bg-red-600/10 px-3 py-3 text-base font-semibold text-red-600"
                onClick={() => setOpen(false)}
              >
                Call {site.phone}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
