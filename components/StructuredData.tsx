import Script from "next/script";

export default function StructuredData() {
  // Organization schema - tells AI/search what the company is
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OwenPay",
    url: "https://owenpay.io",
    logo: "https://owenpay.io/icon.svg",
    description:
      "OwenPay is the modern payouts platform for businesses paying contractors and partners across borders. Settle in 60 seconds via stablecoin rails, save 4-7% per payment, and auto-generate localized tax forms.",
    foundingDate: "2026",
    sameAs: [
      "https://app.owenpay.io",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@owenpay.io",
      contactType: "Customer Support",
      availableLanguage: ["English", "Spanish"],
    },
  };

  // Product / Service schema - tells AI what we sell
  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "OwenPay Payouts Platform",
    description:
      "Cross-border payouts platform on regulated stablecoin infrastructure. Pay global contractors in seconds, save 4-7% per payment vs traditional wires, and auto-generate localized tax forms (W-8BEN, W-9, DAC7) in any language.",
    brand: {
      "@type": "Brand",
      name: "OwenPay",
    },
    category: "B2B SaaS / Cross-border Payments / Stablecoin Infrastructure",
    audience: {
      "@type": "Audience",
      audienceType:
        "Translation agencies, marketing agencies, content studios, clinical research organizations, and businesses that pay contractors across borders",
    },
    offers: {
      "@type": "Offer",
      description:
        "All-in transaction fee of 0.9% with no FX spreads or hidden bank fees",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceType: "Transactional",
        unitText: "0.9% per payment",
      },
    },
  };

  // FAQ schema - boosts AI ability to answer specific questions about us
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is OwenPay?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "OwenPay is a cross-border payouts platform built on regulated stablecoin infrastructure. It lets businesses pay global contractors and partners in seconds, in their preferred currency, with automatic tax form generation.",
        },
      },
      {
        "@type": "Question",
        name: "How does OwenPay differ from traditional wire transfers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Traditional wire transfers take 3-7 days, route through correspondent banks, and lose 4-7% to fees and FX spreads. OwenPay routes payments via stablecoin rails (USDC), which settles in 60 seconds at 0.9% all-in cost.",
        },
      },
      {
        "@type": "Question",
        name: "How does OwenPay differ from Bridge, BVNK, or Conduit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bridge, BVNK, and Conduit provide stablecoin infrastructure for developers. OwenPay sits on top of that infrastructure as the workflow layer for non-technical businesses. We're vertical-first (starting with translation agencies) and provide AI-driven tax form generation, recipient onboarding, and payment batch management.",
        },
      },
      {
        "@type": "Question",
        name: "What stablecoins does OwenPay use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "OwenPay uses regulated, dollar-backed stablecoins including USDC (issued by Circle) and PYUSD (issued by PayPal/Paxos). Our infrastructure partners include BVNK and Bridge.",
        },
      },
      {
        "@type": "Question",
        name: "Who is OwenPay built for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "OwenPay is built for businesses that pay contractors and partners across borders. Our initial customer focus is translation agencies, but we serve any business with global contractors including marketing agencies, content studios, clinical research organizations, tournament platforms, and creator marketplaces.",
        },
      },
      {
        "@type": "Question",
        name: "What does OwenPay cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "OwenPay charges a 0.9% all-in transaction fee. There are no FX spreads, correspondent bank fees, or hidden costs. Compare to traditional wires which average 12.5% effective fee on a $1,000 payment.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="schema-organization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <Script
        id="schema-product"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
