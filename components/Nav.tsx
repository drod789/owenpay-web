"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream-100/85 backdrop-blur-md border-b border-plum-900/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-page py-5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-plum-900 flex items-center justify-center transition-transform group-hover:rotate-12">
            <span className="text-cream-100 font-serif text-lg italic">O</span>
          </div>
          <span className="font-serif text-2xl text-plum-900">OwenPay</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="/#how-it-works"
            className="text-sm text-plum-900/70 hover:text-plum-900 transition-colors"
          >
            How it works
          </a>
          <a
            href="/#who"
            className="text-sm text-plum-900/70 hover:text-plum-900 transition-colors"
          >
            Who it's for
          </a>
          <a
            href="/#why"
            className="text-sm text-plum-900/70 hover:text-plum-900 transition-colors"
          >
            Why OwenPay
          </a>
          <a
            href="/blog"
            className="text-sm text-plum-900/70 hover:text-plum-900 transition-colors"
          >
            Blog
          </a>
        </div>

        <div className="flex items-center gap-1 sm:gap-3">
          <a
            href="https://app.owenpay.io"
            className="text-sm text-plum-900/70 hover:text-plum-900 transition-colors px-2 sm:px-3 py-2"
          >
            Sign in
          </a>
          <a
            href="/#request"
            className="btn-primary text-sm py-2 px-3 sm:py-2.5 sm:px-5"
          >
            <span className="hidden sm:inline">Request access</span>
            <span className="sm:hidden">Request</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}
