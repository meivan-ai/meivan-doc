import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Meivan about your roadmap and integrations.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl flex-1 px-4 py-14 sm:px-6">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-600/80 dark:text-violet-300/80">
        Contact
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
        Tell us about the problem space
      </h1>
      <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
        For the full contact experience aligned with{" "}
        <a
          href="https://meivan.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-700 underline underline-offset-4 hover:text-violet-600 dark:text-violet-300 dark:hover:text-violet-200"
        >
          Meivan&apos;s marketing site
        </a>
        , use{" "}
        <a href="mailto:meivaninfo@gmail.com" className="text-sky-700 hover:underline dark:text-sky-300">
          meivaninfo@gmail.com
        </a>
        .
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full border border-slate-300/80 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-white/15 dark:text-slate-200 dark:hover:bg-white/5"
      >
        Back to home
      </Link>
    </main>
  );
}
