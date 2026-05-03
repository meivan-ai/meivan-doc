import type { Metadata } from "next";
import {
  CodeBlock,
  DocH1,
  DocH2,
  DocP,
  DocProse,
  DocsShell,
} from "@/components/docs-shell";

export const metadata: Metadata = {
  title: "Getting started",
};

const toc = [
  { id: "overview", label: "Overview" },
  { id: "authentication", label: "Authentication" },
  { id: "first-request", label: "First request" },
  { id: "sdks", label: "SDKs & examples" },
];

export default function DocsGettingStartedPage() {
  return (
    <DocsShell toc={toc}>
      <DocProse>
        <DocH1>Getting started</DocH1>
        <DocP>
          The Meivan API marketplace exposes provider capabilities through one consistent surface.
          Use your API key to list services, run inference, and manage usage — without juggling
          separate dashboards per vendor.
        </DocP>

        <DocH2 id="overview">Overview</DocH2>
        <DocP>
          Base URL for all requests is{" "}
          <code className="font-mono text-violet-700 dark:text-violet-300">
            https://api.meivan.example/v1
          </code>
          . Responses are JSON with predictable error shapes so you can handle retries and rate
          limits in one place.
        </DocP>
        <CodeBlock title="Environment">
          {`MEIVAN_API_KEY=mk_live_...
MEIVAN_BASE_URL=https://api.meivan.example/v1`}
        </CodeBlock>

        <DocH2 id="authentication">Authentication</DocH2>
        <DocP>
          Send your secret key in the{" "}
          <code className="font-mono text-slate-800 dark:text-slate-200">Authorization</code> header
          as a Bearer token. Keys are scoped to a workspace; rotate them from the console without
          downtime.
        </DocP>
        <CodeBlock title="cURL">
          {`curl -sS "$MEIVAN_BASE_URL/services" \\
  -H "Authorization: Bearer $MEIVAN_API_KEY" \\
  -H "Content-Type: application/json"`}
        </CodeBlock>

        <DocH2 id="first-request">First request</DocH2>
        <DocP>
          List available marketplace services, then invoke one by{" "}
          <code className="font-mono text-slate-800 dark:text-slate-200">service_id</code>.
          The example below uses the generative completion surface; swap the body for vision or
          embeddings as needed.
        </DocP>
        <CodeBlock title="Node (fetch)">
          {`const res = await fetch(\`\${process.env.MEIVAN_BASE_URL}/complete\`, {
  method: "POST",
  headers: {
    Authorization: \`Bearer \${process.env.MEIVAN_API_KEY}\`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    service_id: "llm.general.v1",
    messages: [{ role: "user", content: "Summarize this doc in 3 bullets." }],
    max_tokens: 256,
  }),
});

if (!res.ok) {
  const err = await res.json();
  throw new Error(err.error?.message ?? res.statusText);
}

const data = await res.json();
console.log(data.choices[0].message.content);`}
        </CodeBlock>

        <DocH2 id="sdks">SDKs & examples</DocH2>
        <DocP>
          Official TypeScript and Python SDKs wrap retries, timeouts, and typed request builders.
          For quick experiments, the REST examples in this guide are sufficient — see the API
          reference for every field and enum.
        </DocP>
        <CodeBlock title="TypeScript (conceptual)">
          {`import { Meivan } from "@meivan/sdk";

const client = new Meivan({ apiKey: process.env.MEIVAN_API_KEY! });

const out = await client.complete({
  serviceId: "llm.general.v1",
  messages: [{ role: "user", content: "Hello!" }],
});

console.log(out.text);`}
        </CodeBlock>
      </DocProse>
    </DocsShell>
  );
}
