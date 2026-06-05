import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Privacy Policy - OwenPay",
  description:
    "How OwenPay collects, uses, and shares information about visitors and customers, including third-party analytics and visitor identification.",
};

const LAST_UPDATED = "June 5, 2026";

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="bg-cream-100 text-plum-900">
        <div className="container-page py-20 max-w-3xl">
          <h1 className="font-serif text-4xl md:text-5xl mb-3">Privacy Policy</h1>
          <p className="text-sm text-plum-900/50 mb-12">
            Last updated: {LAST_UPDATED}
          </p>

          <div className="space-y-8 text-plum-900/80 leading-relaxed">
            <section>
              <p>
                This Privacy Policy explains how OwenPay, Inc. ("OwenPay," "we,"
                "us") collects, uses, and shares information when you visit
                owenpay.io and our related web properties (the "Site"). It does
                not cover information processed inside the OwenPay application
                under a separate customer agreement.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-3 text-plum-900">
                Information we collect
              </h2>
              <p className="mb-3">
                We collect information in three ways: information you give us,
                information collected automatically, and information we receive
                from third parties.
              </p>
              <p className="mb-3">
                <strong>Information you provide.</strong> When you request
                access, contact us, or otherwise submit a form, we collect the
                information you enter, such as your name, business email,
                company, and any message content.
              </p>
              <p className="mb-3">
                <strong>Information collected automatically.</strong> When you
                use the Site, we and our service providers automatically collect
                technical data including your IP address, browser type, device
                information, pages viewed, referring URLs, and timestamps. We
                collect this using cookies and similar technologies.
              </p>
              <p>
                <strong>Information from third parties.</strong> We use a
                third-party visitor identification service that matches your
                device and network information against its own data sources to
                identify the individual or company associated with a visit. This
                means we may learn the identity, employer, and professional
                profile of visitors who have not submitted a form. This
                processing is described further below.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-3 text-plum-900">
                Analytics and visitor identification
              </h2>
              <p className="mb-3">
                <strong>Google Analytics.</strong> We use Google Analytics to
                understand how visitors use the Site. Google Analytics uses
                cookies and collects usage data, which is processed by Google.
                You can learn about Google's practices at
                policies.google.com/privacy and opt out using the Google
                Analytics Opt-out Browser Add-on.
              </p>
              <p>
                <strong>Visitor identification (RB2B).</strong> We use RB2B, a
                third-party service that performs visitor identification. RB2B
                may use your IP address and device data, combined with its own
                identity data, to identify individual visitors and their
                associated companies. We use this information for sales and
                marketing, including follow-up outreach. RB2B's processing is
                governed by its own privacy practices.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-3 text-plum-900">
                How we use information
              </h2>
              <p>
                We use the information we collect to operate and improve the
                Site, respond to inquiries, evaluate and contact prospective
                customers, conduct sales and marketing, measure performance, and
                comply with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-3 text-plum-900">
                How we share information
              </h2>
              <p>
                We share information with service providers who process data on
                our behalf, including analytics and visitor identification
                providers described above. We may share information to comply
                with law, enforce our terms, or in connection with a business
                transaction. We do not sell your personal information for money.
                Some sharing with identification and advertising partners may be
                considered a "sale" or "sharing" under certain U.S. state
                privacy laws, and you have the right to opt out as described
                below.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-3 text-plum-900">
                Your choices and rights
              </h2>
              <p className="mb-3">
                Depending on where you live, you may have rights to access,
                correct, or delete your personal information, and to opt out of
                certain processing.
              </p>
              <p className="mb-3">
                <strong>California (CCPA/CPRA).</strong> California residents may
                request access to or deletion of their personal information and
                may opt out of the "sale" or "sharing" of personal information.
                To exercise these rights, email us at the address below.
              </p>
              <p>
                <strong>EEA and UK (GDPR).</strong> If you are located in the
                European Economic Area or the United Kingdom, you may have rights
                of access, rectification, erasure, restriction, and objection
                regarding your personal data. To exercise these rights, contact
                us at the address below.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-3 text-plum-900">
                Cookies
              </h2>
              <p>
                We use cookies and similar technologies for analytics and
                visitor identification. Most browsers let you refuse or delete
                cookies through their settings. Disabling cookies may affect how
                the Site functions.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-3 text-plum-900">
                Data retention
              </h2>
              <p>
                We retain personal information for as long as necessary to
                fulfill the purposes described in this policy, unless a longer
                retention period is required or permitted by law.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-3 text-plum-900">
                Changes to this policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. When we do,
                we will revise the "Last updated" date above.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-3 text-plum-900">
                Contact us
              </h2>
              <p>
                For questions or to exercise your privacy rights, contact us at{" "}
                <a
                  href="mailto:hello@owenpay.io"
                  className="text-sage-700 underline hover:no-underline"
                >
                  hello@owenpay.io
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
