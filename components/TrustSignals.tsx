"use client";

import { Lock, Award, Eye } from "lucide-react";

export default function TrustSignals() {
  return (
    <section className="py-24 md:py-32 bg-cream-100 grain">
      <div className="container-page">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-700 mb-5">
            Built on trusted infrastructure
          </div>
          <h2 className="font-serif font-medium text-display-md text-plum-900 text-balance">
            Regulated rails. Bank-grade security. Real compliance.
          </h2>
        </div>

        {/* Infrastructure partners callout */}
        <div className="bg-plum-900 rounded-3xl p-10 md:p-14 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 grain opacity-30" />
          <div className="relative">
            <div className="text-cream-100/60 text-sm uppercase tracking-widest mb-6 text-center">
              Powered by leading stablecoin infrastructure
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity">
              <PartnerLogo name="Bridge" />
              <PartnerLogo name="BVNK" />
              <PartnerLogo name="Circle" />
              <PartnerLogo name="Persona" />
            </div>
            <div className="text-center mt-8 text-cream-100/40 text-xs">
              Partner integrations in progress. Final partner stack confirmed at launch.
            </div>
          </div>
        </div>

        {/* Three trust pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          <TrustCard
            icon={<Lock className="w-5 h-5" />}
            title="SOC 2 ready architecture"
            description="Built from day one with enterprise security standards. Encrypted at rest and in transit. Audit logs on every action."
          />
          <TrustCard
            icon={<Award className="w-5 h-5" />}
            title="Regulated partners"
            description="Money movement happens through FinCEN-registered MSBs and licensed money transmitters across 50 states and globally."
          />
          <TrustCard
            icon={<Eye className="w-5 h-5" />}
            title="Full audit trail"
            description="Every payment, every approval, every status change. Exportable, immutable, ready for your auditors at any moment."
          />
        </div>
      </div>
    </section>
  );
}

function PartnerLogo({ name }: { name: string }) {
  return (
    <div className="font-serif text-2xl md:text-3xl text-cream-100/80">{name}</div>
  );
}

function TrustCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-cream-100 rounded-2xl p-7 border border-plum-900/10">
      <div className="w-10 h-10 rounded-full bg-sage-500/10 text-sage-600 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-serif font-medium text-xl text-plum-900 mb-2">{title}</h3>
      <p className="text-sm text-plum-900/60 leading-relaxed">{description}</p>
    </div>
  );
}
