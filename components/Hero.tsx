"use client";

import { ArrowRight, Globe2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-36 md:pt-44 pb-24 md:pb-32 grain gradient-mesh overflow-hidden">
      {/* Decorative orbital element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-sage-200/40 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-20 left-0 -translate-x-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-plum-200/30 to-transparent blur-3xl pointer-events-none" />

      <div className="container-page relative">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-plum-900/5 border border-plum-900/10 mb-8 animate-fade-in">
            <Globe2 className="w-3.5 h-3.5 text-sage-600" />
            <span className="text-xs font-medium text-plum-900/80 tracking-wide">
              Built on regulated stablecoin infrastructure
            </span>
          </div>

          <h1 className="font-serif font-medium text-display-xl text-plum-900 text-balance mb-8 animate-fade-in-up">
            Pay your global team
            <br />
            in <em className="text-sage-700">seconds</em>, not days.
          </h1>

          <p className="text-lg md:text-xl text-plum-900/70 max-w-2xl leading-relaxed mb-10 animate-fade-in-up">
            OwenPay is the modern payouts platform for businesses with contractors and
            partners across borders. Settle in 60 seconds, save 4-7% per payment, and
            let your team receive funds in their preferred currency or wallet.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up">
            <a href="#request" className="btn-primary">
              Request access
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#demo" className="btn-secondary">
              See how it works
            </a>
          </div>

          {/* Stats strip */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl">
            <Stat value="60s" label="Average settlement" />
            <Stat value="<1%" label="Per-payment cost" />
            <Stat value="150+" label="Countries supported" />
            <Stat value="24/7" label="Always-on rails" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l-2 border-sage-400 pl-4">
      <div className="font-serif font-medium text-3xl md:text-4xl text-plum-900 mb-1">
        {value}
      </div>
      <div className="text-xs text-plum-900/60 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
