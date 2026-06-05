"use client";

export default function Footer() {
  return (
    <footer className="bg-plum-950 text-cream-100/60 py-16 grain">
      <div className="container-page">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-cream-100 flex items-center justify-center">
                <span className="text-plum-900 font-serif text-lg italic">O</span>
              </div>
              <span className="font-serif text-2xl text-cream-100">OwenPay</span>
            </div>
            <p className="text-sm text-cream-100/50 leading-relaxed max-w-md">
              Cross-border payouts, instantly. Built on regulated stablecoin
              infrastructure for businesses that work across borders.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-cream-100/40 mb-4">
              Product
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/#how-it-works" className="hover:text-cream-100 transition-colors">
                  How it works
                </a>
              </li>
              <li>
                <a href="/#who" className="hover:text-cream-100 transition-colors">
                  Who it's for
                </a>
              </li>
              <li>
                <a href="/#why" className="hover:text-cream-100 transition-colors">
                  Why OwenPay
                </a>
              </li>
              <li>
                <a href="/#demo" className="hover:text-cream-100 transition-colors">
                  See demo
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-cream-100 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-cream-100/40 mb-4">
              Contact
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:hello@owenpay.io"
                  className="hover:text-cream-100 transition-colors"
                >
                  hello@owenpay.io
                </a>
              </li>
              <li>
                <a href="/#request" className="hover:text-cream-100 transition-colors">
                  Request access
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-cream-100/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-cream-100/40">
          <div>© {new Date().getFullYear()} OwenPay, Inc. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-cream-100/70 transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
