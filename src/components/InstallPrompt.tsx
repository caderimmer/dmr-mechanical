"use client";

import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export function InstallPrompt() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem("dmr-pwa-install-dismissed") === "1") {
        setDismissed(true);
      }
    } catch {
      /* ignore */
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  if (!deferred || dismissed) return null;

  return (
    <div className="fixed bottom-20 left-3 right-3 z-40 mx-auto max-w-md rounded-xl border border-ice-100 bg-white p-4 shadow-xl md:bottom-6 md:left-auto md:right-6">
      <p className="font-display text-sm font-bold text-navy-950">Install DMR Mechanical</p>
      <p className="mt-1 text-xs text-steel-700">
        Add to your home screen for one-tap call &amp; quote—works offline with our contact info.
      </p>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          className="flex-1 rounded-md bg-red-600 px-3 py-2 text-xs font-bold text-white"
          onClick={async () => {
            await deferred.prompt();
            await deferred.userChoice;
            setDeferred(null);
          }}
        >
          Install App
        </button>
        <button
          type="button"
          className="rounded-md border border-ice-100 px-3 py-2 text-xs font-semibold text-steel-700"
          onClick={() => {
            setDismissed(true);
            try {
              localStorage.setItem("dmr-pwa-install-dismissed", "1");
            } catch {
              /* ignore */
            }
          }}
        >
          Not now
        </button>
      </div>
    </div>
  );
}
