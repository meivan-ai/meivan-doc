import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-aurora mt-auto border-t border-slate-200/70 bg-white/60 dark:border-white/10 dark:bg-slate-950/85">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">Meivan</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Transforming Ideas into Intelligent Solutions
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Explore
          </h4>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/" className="transition hover:text-slate-900 dark:hover:text-white">
              Home
            </Link>
            <Link href="/docs" className="transition hover:text-violet-600 dark:hover:text-violet-300">
              Documentation
            </Link>
            <Link href="/about" className="transition hover:text-sky-600 dark:hover:text-sky-300">
              About
            </Link>
            <Link href="/blog" className="transition hover:text-slate-900 dark:hover:text-white">
              Blog
            </Link>
            <Link href="/contact" className="transition hover:text-slate-900 dark:hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Connect
          </h4>
          <a
            href="mailto:meivaninfo@gmail.com"
            className="mt-3 block text-sm text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            meivaninfo@gmail.com
          </a>
          <a
            href="https://meivan.vercel.app/"
            className="mt-2 block text-sm text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            meivan.vercel.app
          </a>
        </div>
      </div>
      <p className="pb-6 text-center text-xs text-slate-500">Copyright {year} Meivan. All rights reserved.</p>
    </footer>
  );
}
