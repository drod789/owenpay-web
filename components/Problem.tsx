"use client";

import { Clock, DollarSign, AlertCircle } from "lucide-react";

export default function Problem() {
  return (
    <section className="py-24 md:py-32 bg-plum-900 text-cream-100 relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-50" />

      <div className="container-page relative">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-300 mb-5">
            The problem
          </div>
          <h2 className="font-serif font-medium text-display-lg text-cream-100 text-balance mb-6">
            Cross-border payments are <em className="text-sage-300">stuck in 1973</em>.
          </h2>
          <p className="text-lg text-cream-100/80 leading-relaxed">
            Wire transfers take 3-7 days. Correspondent banks take their cut. FX spreads
            erode payments by 4-7%. Your contractors wait, complain, and eventually
            leave. Your finance team spends hours every cycle reconciling failed
            payments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-cream-100/10 rounded-2xl overflow-hidden">
          <ProblemCard
            icon={<Clock className="w-6 h-6" />}
            stat="3-7 days"
            title="Settlement time"
            description="International wires move through correspondent banks, each adding delay and cost. Your team waits while invoices age."
          />
          <ProblemCard
            icon={<DollarSign className="w-6 h-6" />}
            stat="4-7%"
            title="Lost to fees"
            description="Wire fees, FX markups, intermediary bank charges. By the time money arrives, your contractor has lost a meaningful slice."
          />
          <ProblemCard
            icon={<AlertCircle className="w-6 h-6" />}
            stat="20+ hours"
            title="Per payment cycle"
            description="Manual reconciliation, chasing failed wires, generating tax forms. Your finance team's time disappears into the void."
          />
        </div>
      </div>
    </section>
  );
}

function ProblemCard({
  icon,
  stat,
  title,
  description,
}: {
  icon: React.ReactNode;
  stat: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-plum-900 p-8 md:p-10 hover:bg-plum-800 transition-colors">
      <div className="text-sage-300 mb-6">{icon}</div>
      <div className="font-serif font-medium text-4xl md:text-5xl text-cream-100 mb-2">{stat}</div>
      <div className="text-sm uppercase tracking-wider text-sage-300/80 mb-4">
        {title}
      </div>
      <p className="text-cream-100/60 leading-relaxed text-sm">{description}</p>
    </div>
  );
}
