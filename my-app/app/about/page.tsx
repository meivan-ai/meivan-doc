import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl flex-1 px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-600/80 dark:text-violet-300/80">
        About
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
        Documentation for ambitious API teams
      </h1>
      <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
        This site mirrors the product language of{" "}
        <a
          href="https://meivan.vercel.app/"
          className="text-violet-700 underline decoration-violet-500/40 underline-offset-4 transition hover:text-violet-600 dark:text-violet-300 dark:hover:text-violet-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meivan
        </a>
        — light and dark surfaces, violet and sky accents — while focusing on how developers integrate
        marketplace APIs in production.
      </p>

      <div className="mt-12 space-y-6 rounded-2xl border border-slate-300/80 bg-white/70 p-8 backdrop-blur-md shadow-[0_16px_50px_-32px_rgba(99,102,241,0.55)] dark:border-white/10 dark:bg-slate-900/40 dark:shadow-[0_0_48px_-24px_rgba(139,92,246,0.35)]">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          What you will find here
        </h2>
        <ul className="list-inside list-disc space-y-3 text-slate-600 dark:text-slate-400">
          <li>Getting started: auth, environment setup, and a first request in Node.</li>
          <li>API reference: endpoints, payloads, and error handling patterns.</li>
          <li>Copy-paste examples sized for production (timeouts, idempotency, retries).</li>
        </ul>
        <Link
          href="/docs"
          className="inline-flex rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_28px_-8px_rgba(99,102,241,0.7)] transition hover:from-indigo-400 hover:to-violet-500"
        >
          Open documentation
        </Link>
      </div>
    </main>
  );
}
