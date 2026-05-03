import type { Metadata } from "next";
import {
  CodeBlock,
  DocH1,
  DocH2,
  DocP,
  DocProse,
  DocsShell,
  EndpointCard,
} from "@/components/docs-shell";

export const metadata: Metadata = {
  title: "API reference",
};

const toc = [
  { id: "conventions", label: "Conventions" },
  { id: "services", label: "Services" },
  { id: "complete", label: "POST /complete" },
  { id: "errors", label: "Errors & limits" },
];

export default function ApiReferencePage() {
  return (
    <DocsShell toc={toc}>
      <DocProse>
        <DocH1>API reference</DocH1>
        <DocP>
          Resource-oriented endpoints for the marketplace. All paths are prefixed with{" "}
          <code className="font-mono text-violet-700 dark:text-violet-300">/v1</code>. Timestamps are
          RFC3339; amounts are in minor
          units where applicable.
        </DocP>

        <DocH2 id="conventions">Conventions</DocH2>
        <DocP>
          Use{" "}
          <code className="font-mono text-slate-800 dark:text-slate-200">Idempotency-Key</code> on
          mutating requests to safely retry from workers. Pagination follows cursor style with{" "}
          <code className="font-mono text-slate-800 dark:text-slate-200">limit</code> and{" "}
          <code className="font-mono text-slate-800 dark:text-slate-200">cursor</code>.
        </DocP>
        <div className="grid gap-3 sm:grid-cols-2">
          <EndpointCard
            method="GET"
            path="/v1/services"
            description="List services available to your workspace with capability tags."
          />
          <EndpointCard
            method="POST"
            path="/v1/complete"
            description="Run a text completion on a selected LLM service."
          />
          <EndpointCard
            method="POST"
            path="/v1/embeddings"
            description="Create embeddings for passages or batched inputs."
          />
          <EndpointCard
            method="GET"
            path="/v1/usage"
            description="Retrieve usage aggregates and per-service spend."
          />
        </div>

        <DocH2 id="services">Services</DocH2>
        <DocP>
          Each service has a stable{" "}
          <code className="font-mono text-slate-800 dark:text-slate-200">service_id</code>, pricing
          tier, and capability manifest (modalities, max context, region hints).
        </DocP>
        <CodeBlock title="GET /v1/services — 200 response (truncated)">
          {`{
  "data": [
    {
      "service_id": "llm.general.v1",
      "provider": "acme-ml",
      "capabilities": ["chat", "json_mode"],
      "max_context_tokens": 128000,
      "regions": ["us-east-1", "eu-west-1"]
    }
  ],
  "next_cursor": null
}`}
        </CodeBlock>

        <DocH2 id="complete">POST /complete</DocH2>
        <DocP>
          Primary inference endpoint for chat-style models. Optional{" "}
          <code className="font-mono text-slate-800 dark:text-slate-200">response_format</code>{" "}
          enforces JSON when the service
          supports structured output.
        </DocP>
        <CodeBlock title="Request body">
          {`{
  "service_id": "llm.general.v1",
  "messages": [
    { "role": "system", "content": "You are a concise assistant." },
    { "role": "user", "content": "Draft a release note." }
  ],
  "temperature": 0.2,
  "max_tokens": 512,
  "response_format": { "type": "json_object" }
}`}
        </CodeBlock>
        <CodeBlock title="Response body">
          {`{
  "id": "cmp_01h2xz3k9q8y9z0",
  "model": "general-v1",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "{\\"title\\":\\"v2.4\\",\\"highlights\\":[\\"Faster cold start\\"]}"
      },
      "finish_reason": "stop"
    }
  ],
  "usage": { "prompt_tokens": 42, "completion_tokens": 118, "total_tokens": 160 }
}`}
        </CodeBlock>

        <DocH2 id="errors">Errors & limits</DocH2>
        <DocP>
          Errors use a unified envelope. Retry on{" "}
          <code className="font-mono text-slate-800 dark:text-slate-200">429</code> and{" "}
          <code className="font-mono text-slate-800 dark:text-slate-200">503</code> with exponential
          backoff; respect the{" "}
          <code className="font-mono text-slate-800 dark:text-slate-200">Retry-After</code> header when
          present.
        </DocP>
        <CodeBlock title="Error object">
          {`{
  "error": {
    "type": "rate_limit_exceeded",
    "message": "Too many requests for this workspace.",
    "param": null,
    "code": "rate_limit"
  }
}`}
        </CodeBlock>
      </DocProse>
    </DocsShell>
  );
}
