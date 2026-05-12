"use client";

import {
  Languages,
  HeartPulse,
  FlaskConical,
  Megaphone,
  Camera,
  Trophy,
  Users,
  Building2,
} from "lucide-react";

const verticals = [
  {
    icon: <Languages className="w-5 h-5" />,
    title: "Translation Agencies",
    description:
      "Pay translators in 40+ countries on monthly cycles. Auto-generate W-8BEN forms, multi-language statements.",
  },
  {
    icon: <HeartPulse className="w-5 h-5" />,
    title: "Medical Tourism",
    description:
      "Patients pay US, Mexican, and Costa Rican hospitals same-day. Hospitals receive USD without correspondent banking delays.",
  },
  {
    icon: <FlaskConical className="w-5 h-5" />,
    title: "Clinical Trials",
    description:
      "CROs and sponsors pay international trial sites in seconds, not weeks. Audit-ready documentation auto-generated.",
  },
  {
    icon: <Megaphone className="w-5 h-5" />,
    title: "Marketing Agencies",
    description:
      "Pay your global creative team across copywriters, designers, and strategists. Built for distributed agencies.",
  },
  {
    icon: <Camera className="w-5 h-5" />,
    title: "Content Studios",
    description:
      "Editors, animators, and producers worldwide. Pay them in their preferred currency or stablecoin.",
  },
  {
    icon: <Trophy className="w-5 h-5" />,
    title: "Tournament Operators",
    description:
      "Esports, poker, fishing, pickleball. Pay winners worldwide in 60 seconds. No more 7-day delays.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Creator Platforms",
    description:
      "Pay creators globally on a single rail. Same-day settlement to local accounts or USDC wallets.",
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "And more",
    description:
      "If you pay contractors, partners, or recipients across borders, OwenPay works for you. Talk to us.",
  },
];

export default function WhoItsFor() {
  return (
    <section id="who" className="py-24 md:py-32 bg-cream-100 grain">
      <div className="container-page">
        <div className="max-w-3xl mb-20">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-700 mb-5">
            Who it's for
          </div>
          <h2 className="font-serif font-medium text-display-lg text-plum-900 text-balance">
            Built for teams that work <em className="text-sage-700">across borders</em>.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-plum-900/10 rounded-3xl overflow-hidden border border-plum-900/10">
          {verticals.map((v) => (
            <div
              key={v.title}
              className="bg-cream-100 p-7 hover:bg-plum-50 transition-colors group cursor-default"
            >
              <div className="w-10 h-10 rounded-full bg-sage-500/10 text-sage-600 flex items-center justify-center mb-5 group-hover:bg-sage-500 group-hover:text-cream-100 transition-colors">
                {v.icon}
              </div>
              <h3 className="font-serif font-medium text-xl text-plum-900 mb-2">{v.title}</h3>
              <p className="text-sm text-plum-900/60 leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
