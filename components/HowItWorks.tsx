"use client";

import { Upload, Zap, Globe, FileCheck } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: <Upload className="w-5 h-5" />,
    title: "Upload your payment batch",
    description:
      "Drop a CSV or connect your accounting system. We extract recipient details, amounts, and currencies. Our AI handles tax form requirements automatically.",
  },
  {
    num: "02",
    icon: <Zap className="w-5 h-5" />,
    title: "Fund in seconds",
    description:
      "Wire or ACH from your existing bank to your OwenPay account. We convert to USDC behind the scenes. You never touch crypto if you don't want to.",
  },
  {
    num: "03",
    icon: <Globe className="w-5 h-5" />,
    title: "Recipients get paid worldwide",
    description:
      "Local bank deposit (CLABE in Mexico, PIX in Brazil, IBAN in Europe), USDC wallet, or local stablecoin. Recipients choose. Funds arrive in 60 seconds.",
  },
  {
    num: "04",
    icon: <FileCheck className="w-5 h-5" />,
    title: "Compliance, automated",
    description:
      "W-8BEN, 1099-equivalents, tax statements, audit trails. All generated, multi-language, e-filed where applicable. Your finance team gets time back.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 md:py-32 bg-cream-100 relative grain"
    >
      <div className="container-page relative">
        <div className="max-w-3xl mb-20">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-700 mb-5">
            How it works
          </div>
          <h2 className="font-serif font-medium text-display-lg text-plum-900 text-balance">
            From batch upload to <em className="text-sage-700">global settlement</em>,
            in under a minute.
          </h2>
        </div>

        <div className="space-y-px">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="group grid md:grid-cols-12 gap-6 md:gap-8 py-10 md:py-12 border-t border-plum-900/10 hover:bg-plum-900/[0.015] transition-colors"
            >
              <div className="md:col-span-1">
                <div className="font-serif font-semibold text-2xl text-sage-700">{step.num}</div>
              </div>
              <div className="md:col-span-1">
                <div className="w-10 h-10 rounded-full bg-plum-900/5 flex items-center justify-center text-plum-900 group-hover:bg-sage-500 group-hover:text-cream-100 transition-colors">
                  {step.icon}
                </div>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-serif font-medium text-2xl md:text-3xl text-plum-900 mb-2">
                  {step.title}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-plum-900/75 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
