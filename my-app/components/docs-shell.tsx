import Link from "next/link";

export type DocsTocItem = { id: string; label: string };

const DOC_LINKS = [
  { href: "/docs", label: "Getting started" },
  { href: "/docs/api-reference", label: "API reference" },
] as const;

export function DocsShell({
  children,
  toc,
}: {
  children: React.ReactNode;
  toc: DocsTocItem[];
}) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 gap-10 px-4 py-10 sm:px-6 lg:gap-12">
      <aside className="hidden w-52 shrink-0 lg:block">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Documentation
        </p>
        <nav className="flex flex-col gap-1 border-l border-slate-300/80 pl-4 dark:border-white/10">
          {DOC_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-600 transition hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="min-w-0 flex-1">{children}</main>

      <aside className="hidden w-44 shrink-0 xl:block">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          On this page
        </p>
        <nav className="flex flex-col gap-2 border-l border-slate-300/80 pl-4 dark:border-white/10">
          {toc.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-slate-600 transition hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-300"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </div>
  );
}

export function DocProse({ children }: { children: React.ReactNode }) {
  return (
    <div className="doc-prose space-y-8 text-slate-700 dark:text-slate-300">{children}</div>
  );
}

export function DocH1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
      {children}
    </h1>
  );
}

export function DocH2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 border-b border-slate-300/80 pb-2 text-xl font-semibold tracking-tight text-slate-900 dark:border-white/10 dark:text-white"
    >
      {children}
    </h2>
  );
}

export function DocP({ children }: { children: React.ReactNode }) {
  return <p className="leading-7 text-slate-600 dark:text-slate-400">{children}</p>;
}

export function CodeBlock({
  title,
  children,
}: {
  title?: string;
  children: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-300/80 bg-slate-50 shadow-[0_16px_42px_-28px_rgba(99,102,241,0.45)] dark:border-white/10 dark:bg-slate-900/50 dark:shadow-[0_0_40px_-12px_rgba(139,92,246,0.25)]">
      {title ? (
        <div className="border-b border-slate-300/80 bg-white px-4 py-2 text-xs font-medium text-violet-700 dark:border-white/10 dark:bg-slate-900/80 dark:text-violet-300/90">
          {title}
        </div>
      ) : null}
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-slate-800 dark:text-slate-200">
        <code className="font-mono">{children}</code>
      </pre>
    </div>
  );
}

export function EndpointCard({
  method,
  path,
  description,
}: {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  description: string;
}) {
  const methodColors: Record<string, string> = {
    GET: "bg-emerald-500/15 text-emerald-700 border-emerald-500/30 dark:text-emerald-300",
    POST: "bg-sky-500/15 text-sky-700 border-sky-500/30 dark:text-sky-300",
    PUT: "bg-amber-500/15 text-amber-700 border-amber-500/30 dark:text-amber-300",
    DELETE: "bg-rose-500/15 text-rose-700 border-rose-500/30 dark:text-rose-300",
  };
  return (
    <div className="rounded-xl border border-slate-300/80 bg-white/75 p-4 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.02]">
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span className={`rounded-md border px-2 py-0.5 text-xs font-semibold ${methodColors[method]}`}>
          {method}
        </span>
        <code className="font-mono text-sm text-violet-700 dark:text-violet-200">{path}</code>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
    </div>
  );
}
