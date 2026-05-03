"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
type NavLink =
  | { href: string; label: string; external?: boolean }
  | {
    href: string;
    label: string;
    matchPrefix?: boolean;
    external?: boolean;
  };

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Docs", matchPrefix: true },
  { href: "https://meivan.vercel.app/work", label: "Our Work", external: true },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/#pricing", label: "Pricing" },
  { href: "https://meivan.vercel.app/", label: "Login", external: true },
  { href: "https://meivan.vercel.app/", label: "Sign Up", external: true },
];

function isActive(pathname: string, link: NavLink): boolean {
  if ("matchPrefix" in link && link.matchPrefix) {
    return pathname.startsWith(link.href);
  }
  if (link.href.startsWith("/#")) {
    return false;
  }
  if (link.href.startsWith("http")) {
    return false;
  }
  return pathname === link.href;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClasses = (active: boolean) =>
    active
      ? "rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-500/25 dark:text-indigo-100"
      : "rounded-full px-3 py-1 text-xs font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/85">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 text-sm font-medium text-slate-900 dark:text-white"
          onClick={() => setMobileOpen(false)}
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-sm border border-indigo-300/70 bg-white text-[10px] font-bold text-indigo-600 dark:border-indigo-400/50 dark:bg-slate-900 dark:text-indigo-300">
            
            <Image
              src="/logo.png"
              alt="Logo"
              width={36}
              height={36}
              className="object-contain"
            />
          </span>
          <span className="text-[13px] tracking-tight">Meivan</span>
        </Link>

        <nav className="hidden flex-1 justify-center lg:flex lg:gap-0.5">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={`${link.label}-${link.href}`}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClasses(isActive(pathname, link))}
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} className={linkClasses(isActive(pathname, link))}>
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300/80 bg-white/80 lg:hidden dark:border-white/10 dark:bg-slate-900/80"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {mobileOpen ? <path strokeLinecap="round" d="M6 18 18 6M6 6l12 12" /> : <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-slate-200/70 bg-white/95 px-4 py-3 dark:border-white/10 dark:bg-slate-950/95 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={`m-${link.label}-${link.href}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl px-3 py-2 text-sm text-slate-700 dark:text-slate-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={`m-${link.href}`}
                  href={link.href}
                  className={`rounded-xl px-3 py-2 text-sm ${isActive(pathname, link)
                      ? "bg-indigo-100 font-medium text-indigo-700 dark:bg-indigo-500/25 dark:text-indigo-100"
                      : "text-slate-700 dark:text-slate-200"
                    }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </div>
      ) : null}
    </header>
  );
}
