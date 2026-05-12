"use client";

import { Zap, Wallet, Sparkles, Globe2, Languages, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "60-second settlement",
    description:
      "Stablecoin rails settle in seconds, not days. Your contractors are paid before they finish their coffee.",
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "Under 1% per payment",
    description:
      "No correspondent bank fees. No FX markups. No PayPal cuts. Real savings that compound across every cycle.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "AI-powered compliance",
    description:
      "Our AI generates W-8BEN, 1099-equivalents, and audit trails automatically. Tax forms in any language, e-filed where applicable.",
  },
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: "Truly global reach",
    description:
      "150+ countries with local rails. Mexico CLABE, Brazil PIX, EU SEPA, Philippines GCash, India UPI. We meet recipients where they are.",
  },
  {
    icon: <Languages className="w-6 h-6" />,
    title: "Multilingual by default",
    description:
      "Recipient experience in Spanish, Portuguese, English, and more. No translation gymnastics, just native UX.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Regulated infrastructure",
    description:
      "Built on partners with FinCEN MSB registration and global money transmitter licenses. Your payments are compliant by default.",
  },
];

export default function WhyOwen() {
  return (
    <section id="why" className="py-24 md:py-32 bg-plum-50 relative grain">
      <div className="container-page relative">
        <div className="max-w-3xl mb-20">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-700 mb-5">
            Why OwenPay
          </div>
          <h2 className="font-serif font-medium text-display-lg text-plum-900 text-balance">
            The only payouts platform that's
            <br />
            <em className="text-sage-700">global, instant, and intelligent</em>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-cream-100 rounded-2xl p-7 border border-plum-900/5 hover:shadow-xl hover:shadow-plum-900/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-plum-900 text-cream-100 flex items-center justify-center mb-5">
                {r.icon}
              </div>
              <h3 className="font-serif font-medium text-2xl text-plum-900 mb-3">{r.title}</h3>
              <p className="text-plum-900/60 leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
