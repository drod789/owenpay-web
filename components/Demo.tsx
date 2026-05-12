"use client";

import { useState, useEffect } from "react";
import {
  Upload,
  Check,
  ArrowRight,
  Globe,
  Zap,
  FileText,
  Play,
  RotateCcw,
  Download,
  Sparkles,
  FileCheck,
} from "lucide-react";

type Stage =
  | "idle"
  | "uploading"
  | "processing"
  | "routing"
  | "complete"
  | "generating-docs"
  | "docs-complete";

const recipients = [
  {
    name: "Sofía Mendoza",
    country: "Mexico",
    flag: "🇲🇽",
    amount: 1250,
    method: "CLABE",
    taxForm: "W-8BEN",
    language: "Español",
    formNote: "Formulario W-8BEN generado en español",
  },
  {
    name: "João Silva",
    country: "Brazil",
    flag: "🇧🇷",
    amount: 980,
    method: "PIX",
    taxForm: "W-8BEN",
    language: "Português",
    formNote: "Formulário W-8BEN gerado em português",
  },
  {
    name: "Anna Kowalska",
    country: "Poland",
    flag: "🇵🇱",
    amount: 1100,
    method: "SEPA",
    taxForm: "W-8BEN + DAC7",
    language: "Polski",
    formNote: "Formularz W-8BEN i raport DAC7 wygenerowane",
  },
  {
    name: "Maria Santos",
    country: "Argentina",
    flag: "🇦🇷",
    amount: 850,
    method: "USDC",
    taxForm: "W-8BEN",
    language: "Español",
    formNote: "Formulario W-8BEN generado en español",
  },
  {
    name: "Lucia Rossi",
    country: "Spain",
    flag: "🇪🇸",
    amount: 1400,
    method: "SEPA",
    taxForm: "W-8BEN + DAC7",
    language: "Español",
    formNote: "Formulario W-8BEN y reporte DAC7 generados",
  },
  {
    name: "Mark Tan",
    country: "Philippines",
    flag: "🇵🇭",
    amount: 720,
    method: "GCash",
    taxForm: "W-8BEN",
    language: "English",
    formNote: "W-8BEN form generated, BIR-ready",
  },
];

export default function Demo() {
  const [stage, setStage] = useState<Stage>("idle");
  const [progress, setProgress] = useState(0);
  const [paidCount, setPaidCount] = useState(0);
  const [docsGenerated, setDocsGenerated] = useState(0);

  useEffect(() => {
    if (stage === "uploading") {
      const t = setTimeout(() => setStage("processing"), 1200);
      return () => clearTimeout(t);
    }
    if (stage === "processing") {
      const interval = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            clearInterval(interval);
            setStage("routing");
            return 100;
          }
          return p + 8;
        });
      }, 80);
      return () => clearInterval(interval);
    }
    if (stage === "routing") {
      const interval = setInterval(() => {
        setPaidCount((c) => {
          if (c >= recipients.length) {
            clearInterval(interval);
            setTimeout(() => setStage("complete"), 600);
            return recipients.length;
          }
          return c + 1;
        });
      }, 280);
      return () => clearInterval(interval);
    }
    if (stage === "generating-docs") {
      const interval = setInterval(() => {
        setDocsGenerated((d) => {
          if (d >= recipients.length) {
            clearInterval(interval);
            setTimeout(() => setStage("docs-complete"), 500);
            return recipients.length;
          }
          return d + 1;
        });
      }, 320);
      return () => clearInterval(interval);
    }
  }, [stage]);

  const start = () => {
    setProgress(0);
    setPaidCount(0);
    setDocsGenerated(0);
    setStage("uploading");
  };

  const reset = () => {
    setStage("idle");
    setProgress(0);
    setPaidCount(0);
    setDocsGenerated(0);
  };

  const generateDocs = () => {
    setDocsGenerated(0);
    setStage("generating-docs");
  };

  const total = recipients.reduce((sum, r) => sum + r.amount, 0);
  const showDocsPanel = ["generating-docs", "docs-complete"].includes(stage);

  return (
    <section id="demo" className="py-24 md:py-32 bg-plum-900 relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sage-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-page relative">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-300 mb-5">
            See it in action
          </div>
          <h2 className="font-serif font-medium text-display-lg text-cream-100 text-balance mb-6">
            Watch a payment batch settle <em className="text-sage-300">in real time</em>.
          </h2>
          <p className="text-cream-100/75 text-lg leading-relaxed">
            This is a live simulation of how OwenPay processes a batch of 6 contractor
            payments to 6 countries, then auto-generates tax forms in each recipient's
            language. In production, the entire flow happens via API in under 60 seconds.
          </p>
        </div>

        <div className="bg-cream-100 rounded-3xl p-6 md:p-10 shadow-2xl shadow-plum-900/30 max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 pb-6 border-b border-plum-900/10">
            <div>
              <div className="text-xs uppercase tracking-wider text-plum-900/50 mb-1">
                Payment batch
              </div>
              <div className="font-serif font-medium text-2xl text-plum-900">
                Lexica Translations · January
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs uppercase tracking-wider text-plum-900/50 mb-1">
                Total volume
              </div>
              <div className="font-serif font-medium text-3xl text-plum-900">
                ${total.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Stage indicator */}
          <div className="grid grid-cols-5 gap-2 mb-8">
            <StageIndicator
              icon={<Upload className="w-4 h-4" />}
              label="Upload"
              active={stage === "uploading"}
              done={["processing", "routing", "complete", "generating-docs", "docs-complete"].includes(stage)}
            />
            <StageIndicator
              icon={<Zap className="w-4 h-4" />}
              label="Convert"
              active={stage === "processing"}
              done={["routing", "complete", "generating-docs", "docs-complete"].includes(stage)}
            />
            <StageIndicator
              icon={<Globe className="w-4 h-4" />}
              label="Route"
              active={stage === "routing"}
              done={["complete", "generating-docs", "docs-complete"].includes(stage)}
            />
            <StageIndicator
              icon={<Check className="w-4 h-4" />}
              label="Settle"
              active={stage === "complete"}
              done={["complete", "generating-docs", "docs-complete"].includes(stage)}
            />
            <StageIndicator
              icon={<FileCheck className="w-4 h-4" />}
              label="Docs"
              active={stage === "generating-docs"}
              done={stage === "docs-complete"}
            />
          </div>

          {/* Progress bar during processing */}
          {stage === "processing" && (
            <div className="mb-6">
              <div className="flex justify-between text-xs text-plum-900/60 mb-2">
                <span>Converting USD to USDC via stablecoin rails</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full h-1.5 bg-plum-900/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-sage-500 transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Recipient list */}
          <div className="space-y-2">
            {recipients.map((r, i) => {
              const isPaid =
                stage === "routing"
                  ? i < paidCount
                  : ["complete", "generating-docs", "docs-complete"].includes(stage);
              const isProcessing = stage === "routing" && i === paidCount;
              return (
                <div
                  key={r.name}
                  className={`grid grid-cols-12 gap-3 items-center py-3 px-4 rounded-xl transition-all duration-300 ${
                    isPaid
                      ? "bg-sage-50 border border-sage-200"
                      : isProcessing
                      ? "bg-plum-50 border border-plum-200 animate-pulse"
                      : "bg-cream-50 border border-transparent"
                  }`}
                >
                  <div className="col-span-1 text-2xl">{r.flag}</div>
                  <div className="col-span-4">
                    <div className="font-medium text-plum-900 text-sm">{r.name}</div>
                    <div className="text-xs text-plum-900/50">{r.country}</div>
                  </div>
                  <div className="col-span-3">
                    <div className="text-xs text-plum-900/50 uppercase tracking-wider">
                      Method
                    </div>
                    <div className="text-sm text-plum-900 font-medium">{r.method}</div>
                  </div>
                  <div className="col-span-2 text-right">
                    <div className="font-serif font-medium text-lg text-plum-900">
                      ${r.amount.toLocaleString()}
                    </div>
                  </div>
                  <div className="col-span-2 text-right">
                    {isPaid ? (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sage-500 text-cream-100 text-xs font-medium">
                        <Check className="w-3 h-3" />
                        Paid
                      </div>
                    ) : isProcessing ? (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-plum-100 text-plum-900 text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-plum-900 animate-pulse" />
                        Routing
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-plum-900/5 text-plum-900/50 text-xs font-medium">
                        Pending
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer with stats and CTA (settlement phase) */}
          {!showDocsPanel && (
            <div className="mt-8 pt-6 border-t border-plum-900/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {stage === "complete" ? (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sage-500 flex items-center justify-center">
                    <Check className="w-5 h-5 text-cream-100" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-plum-900">
                      All 6 payments settled
                    </div>
                    <div className="text-xs text-plum-900/60">
                      Total saved vs traditional wires: $387 · Time saved: 4 days
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-sm text-plum-900/60">
                  {stage === "idle" && "Ready to simulate batch processing"}
                  {stage === "uploading" && "Reading payment batch..."}
                  {stage === "processing" && "Converting funds via stablecoin rails..."}
                  {stage === "routing" && `Settling payment ${paidCount + 1} of 6...`}
                </div>
              )}

              {stage === "idle" && (
                <button onClick={start} className="btn-sage text-sm">
                  <Play className="w-4 h-4" />
                  Start simulation
                </button>
              )}
              {stage === "complete" && (
                <button onClick={generateDocs} className="btn-primary text-sm">
                  <Sparkles className="w-4 h-4" />
                  Generate tax forms
                </button>
              )}
            </div>
          )}
        </div>

        {/* Tax form generation panel */}
        {showDocsPanel && (
          <div className="bg-cream-100 rounded-3xl p-6 md:p-10 shadow-2xl shadow-plum-900/30 max-w-5xl mx-auto mt-6 animate-fade-in-up">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 pb-6 border-b border-plum-900/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-plum-900 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-cream-100" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-plum-900/50 mb-1">
                    Compliance documents
                  </div>
                  <div className="font-serif font-medium text-2xl text-plum-900">
                    AI-generated tax forms
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs uppercase tracking-wider text-plum-900/50 mb-1">
                  Forms generated
                </div>
                <div className="font-serif font-medium text-3xl text-plum-900">
                  {docsGenerated}
                  <span className="text-plum-900/30 text-2xl">/{recipients.length}</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              {recipients.map((r, i) => {
                const isGenerated = i < docsGenerated;
                const isCurrent = stage === "generating-docs" && i === docsGenerated;
                return (
                  <div
                    key={r.name}
                    className={`relative rounded-xl p-4 border transition-all duration-300 ${
                      isGenerated
                        ? "bg-sage-50 border-sage-200"
                        : isCurrent
                        ? "bg-plum-50 border-plum-200 animate-pulse"
                        : "bg-cream-50 border-plum-900/5 opacity-50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {/* Mock form preview thumbnail */}
                      <div
                        className={`relative flex-shrink-0 w-12 h-16 rounded border flex flex-col p-1.5 ${
                          isGenerated
                            ? "bg-cream-100 border-sage-300"
                            : "bg-cream-100 border-plum-900/10"
                        }`}
                      >
                        <div className="text-[6px] font-bold text-plum-900 mb-1 leading-none">
                          {r.taxForm.split(" + ")[0]}
                        </div>
                        <div className="space-y-0.5 flex-1">
                          <div className="h-0.5 bg-plum-900/20 rounded w-full" />
                          <div className="h-0.5 bg-plum-900/20 rounded w-3/4" />
                          <div className="h-0.5 bg-plum-900/20 rounded w-full" />
                          <div className="h-0.5 bg-plum-900/20 rounded w-2/3" />
                          <div className="h-0.5 bg-plum-900/20 rounded w-full" />
                          <div className="h-0.5 bg-plum-900/20 rounded w-1/2" />
                        </div>
                        {isGenerated && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-sage-500 flex items-center justify-center">
                            <Check className="w-2.5 h-2.5 text-cream-100" />
                          </div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-base">{r.flag}</span>
                          <span className="font-medium text-plum-900 text-sm truncate">
                            {r.name}
                          </span>
                        </div>
                        <div className="text-xs text-plum-900/60 mb-2">
                          {r.taxForm} · {r.language}
                        </div>
                        <div className="text-xs text-plum-900/70 italic leading-relaxed">
                          {isGenerated || isCurrent ? r.formNote : "Awaiting generation..."}
                        </div>
                        {isGenerated && (
                          <button className="mt-2 inline-flex items-center gap-1 text-xs text-sage-700 hover:text-sage-800 font-medium">
                            <Download className="w-3 h-3" />
                            Download PDF
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer for docs panel */}
            <div className="mt-8 pt-6 border-t border-plum-900/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {stage === "docs-complete" ? (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sage-500 flex items-center justify-center">
                    <Check className="w-5 h-5 text-cream-100" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-plum-900">
                      All 6 forms generated and ready to e-file
                    </div>
                    <div className="text-xs text-plum-900/60">
                      Localized in 4 languages · Audit trail saved · Estimated time saved: 6 hours
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-sm text-plum-900/60">
                  <Sparkles className="w-4 h-4 text-plum-900/40" />
                  Generating localized tax form for {recipients[docsGenerated]?.country}...
                </div>
              )}
              {stage === "docs-complete" && (
                <button onClick={reset} className="btn-secondary text-sm">
                  <RotateCcw className="w-4 h-4" />
                  Run again
                </button>
              )}
            </div>
          </div>
        )}

        {/* Below demo callout */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <p className="text-cream-100/70 text-sm">
            Want to see the full platform with your own data?
          </p>
          <a
            href="#request"
            className="inline-flex items-center gap-2 mt-3 text-cream-100 hover:text-sage-300 transition-colors"
          >
            <span className="font-medium">Request a private demo</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function StageIndicator({
  icon,
  label,
  active,
  done,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  done: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 p-3 rounded-xl transition-all ${
        done
          ? "bg-sage-500 text-cream-100"
          : active
          ? "bg-plum-100 text-plum-900 border border-plum-300"
          : "bg-cream-100 text-plum-900/40 border border-plum-900/10"
      }`}
    >
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center ${
          done ? "bg-cream-100/20" : active ? "bg-plum-900/10" : "bg-plum-900/5"
        }`}
      >
        {done ? <Check className="w-3 h-3" /> : icon}
      </div>
      <span className="text-xs font-medium uppercase tracking-wider hidden sm:block">
        {label}
      </span>
    </div>
  );
}
