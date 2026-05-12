"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function RequestAccess() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [vertical, setVertical] = useState("");
  const [volume, setVolume] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const endpoint =
        process.env.NEXT_PUBLIC_FORM_ENDPOINT ||
        "https://api.owenpay.io/request-access";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company, vertical, volume }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError(
        "Something went wrong. Please try again, or email hello@owenpay.io directly."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="request"
      className="py-24 md:py-32 bg-gradient-to-br from-plum-900 to-plum-950 text-cream-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 grain opacity-50" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sage-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-page relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-300 mb-5">
              Request access
            </div>
            <h2 className="font-serif font-medium text-display-lg text-cream-100 text-balance mb-6">
              Ready to <em className="text-sage-300">stop overpaying</em> for
              cross-border payouts?
            </h2>
            <p className="text-cream-100/60 text-lg leading-relaxed max-w-2xl mx-auto">
              We're onboarding design partners now. Tell us about your business and
              we'll be in touch within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="bg-cream-100 rounded-3xl p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-sage-500 flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-cream-100" />
              </div>
              <h3 className="font-serif font-medium text-3xl text-plum-900 mb-3">
                Thanks. You're on the list.
              </h3>
              <p className="text-plum-900/60 leading-relaxed max-w-md mx-auto">
                We'll reach out within 24 hours to schedule a call. Check your inbox
                (and spam folder) for confirmation.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-cream-100 rounded-3xl p-8 md:p-10 space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-plum-900/60 mb-2">
                    Work email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-plum-900/10 text-plum-900 placeholder-plum-900/30 focus:outline-none focus:border-sage-500 focus:ring-2 focus:ring-sage-500/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-plum-900/60 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                    placeholder="Acme Inc"
                    className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-plum-900/10 text-plum-900 placeholder-plum-900/30 focus:outline-none focus:border-sage-500 focus:ring-2 focus:ring-sage-500/20 transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-plum-900/60 mb-2">
                    What kind of business?
                  </label>
                  <select
                    value={vertical}
                    onChange={(e) => setVertical(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-plum-900/10 text-plum-900 focus:outline-none focus:border-sage-500 focus:ring-2 focus:ring-sage-500/20 transition-all"
                  >
                    <option value="">Select one</option>
                    <option value="translation">Translation Agency</option>
                    <option value="medical-tourism">Medical Tourism</option>
                    <option value="clinical-trials">Clinical Trials / CRO</option>
                    <option value="marketing">Marketing Agency</option>
                    <option value="content">Content Studio</option>
                    <option value="tournament">Tournament / Esports</option>
                    <option value="creator">Creator Platform</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-plum-900/60 mb-2">
                    Monthly payout volume
                  </label>
                  <select
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-plum-900/10 text-plum-900 focus:outline-none focus:border-sage-500 focus:ring-2 focus:ring-sage-500/20 transition-all"
                  >
                    <option value="">Select range</option>
                    <option value="under-50k">Under $50K</option>
                    <option value="50k-250k">$50K - $250K</option>
                    <option value="250k-1m">$250K - $1M</option>
                    <option value="1m-5m">$1M - $5M</option>
                    <option value="5m-plus">$5M+</option>
                  </select>
                </div>
              </div>

              {error && (
                <div className="px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">
                  {error}
                </div>
              )}

              <button type="submit" disabled={loading} className="btn-primary w-full">
                {loading ? "Submitting..." : "Request access"}
                {!loading && <ArrowRight className="w-4 h-4" />}
              </button>

              <p className="text-xs text-plum-900/50 text-center">
                We'll never share your information. By submitting, you agree to receive
                updates from OwenPay.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
