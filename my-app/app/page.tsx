import Link from "next/link";

const features = [
  {
    title: "Inference & models",
    body: "Run hosted models with low-latency endpoints. Batch or real-time, same API shape.",
    href: "/docs",
  },
  {
    title: "Marketplace integrations",
    body: "Discover vetted providers, unified billing, and consistent auth across services.",
    href: "/docs/api-reference",
  },
  {
    title: "Secure by default",
    body: "Scoped API keys, request signing, and audit-friendly logs for production teams.",
    href: "/docs#authentication",
  },
] as const;

export default function Home() {
  return (
    <main className="hero-sheen flex flex-1 flex-col">
      <section className="relative mx-auto flex max-w-6xl flex-1 flex-col items-center px-4 pb-20 pt-16 text-center sm:px-6 sm:pt-24">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-violet-600/80 dark:text-violet-300/80">
          API marketplace
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl sm:leading-tight dark:text-white">
          Ship faster with a single integration surface
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
          From strategy to deployment, documentation that matches how you actually build: clear
          endpoints, copy-paste examples, and production-ready patterns.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/docs"
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_-8px_rgba(99,102,241,0.65)] transition hover:from-indigo-400 hover:to-violet-500"
          >
            Read the docs
          </Link>
          <Link
            href="/about"
            className="rounded-xl border border-slate-300/80 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-slate-900 dark:border-white/15 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:border-sky-500/40 dark:hover:text-white"
          >
            About the platform
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <h2 className="sr-only">Features</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((card) => (
            <article
              key={card.title}
              className="group flex flex-col rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-[0_16px_50px_-32px_rgba(99,102,241,0.5)] backdrop-blur-md transition hover:border-violet-300 hover:shadow-[0_0_48px_-16px_rgba(99,102,241,0.35)] dark:border-white/10 dark:bg-slate-900/40 dark:shadow-[0_0_48px_-20px_rgba(56,189,248,0.15)] dark:hover:border-violet-500/30 dark:hover:shadow-[0_0_48px_-16px_rgba(139,92,246,0.35)]"
            >
              <div className="mb-6 min-h-[100px] rounded-xl border border-dashed border-slate-200/90 bg-gradient-to-br from-violet-500/10 to-sky-500/10 dark:border-white/10 dark:from-violet-500/5 dark:to-sky-500/5" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{card.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-400">{card.body}</p>
              <Link
                href={card.href}
                className="mt-6 inline-flex w-fit items-center rounded-lg border border-violet-300 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700 transition group-hover:border-violet-400 group-hover:bg-violet-100 dark:border-violet-500/40 dark:bg-violet-500/10 dark:text-violet-200 dark:group-hover:border-violet-400 dark:group-hover:bg-violet-500/20"
              >
                Learn more
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section
        id="pricing"
        className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 pb-24 sm:px-6"
      >
        <h2 className="text-center text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Simple, transparent usage
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600 dark:text-slate-400">
          Pay for what you run through the marketplace. Detailed tiers and enterprise options are
          available from the main Meivan site.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/docs"
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_-8px_rgba(99,102,241,0.65)] transition hover:from-indigo-400 hover:to-violet-500"
          >
            View API docs
          </Link>
          <a
            href="https://meivan.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-slate-300/80 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-violet-300 dark:border-white/15 dark:bg-white/[0.04] dark:text-slate-200"
          >
            Visit Meivan
          </a>
        </div>
      </section>
    </main>
  );
}
