"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              MARIE<span className="text-pink-500">FORLEO</span>
            </span>
            <span className="hidden md:inline-block bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full uppercase">
              NEXT.JS
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-slate-600 font-semibold hover:text-slate-900">About</Link>
            <Link href="#bschool" className="text-slate-600 font-semibold hover:text-slate-900">B-School</Link>
            <Link href="#programs" className="text-slate-600 font-semibold hover:text-slate-900">Programs</Link>
            <Link href="#marietv" className="text-slate-600 font-semibold hover:text-slate-900">MarieTV</Link>
            <Link href="#podcast" className="text-slate-600 font-semibold hover:text-slate-900">Podcast</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link href="#start" className="hidden md:inline-flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-md text-sm font-semibold">
              <Sparkles size={16} /> Free Training
            </Link>

            <button
              className="md:hidden p-2 text-slate-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-4 pb-6 flex flex-col gap-4">
            <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="text-slate-900 font-semibold">About</Link>
            <Link href="#bschool" onClick={() => setMobileMenuOpen(false)} className="text-slate-900 font-semibold">B-School</Link>
            <Link href="#programs" onClick={() => setMobileMenuOpen(false)} className="text-slate-900 font-semibold">Programs</Link>
            <Link href="#marietv" onClick={() => setMobileMenuOpen(false)} className="text-slate-900 font-semibold">MarieTV</Link>
            <Link href="#podcast" onClick={() => setMobileMenuOpen(false)} className="text-slate-900 font-semibold">Podcast</Link>
            <Link href="#start" onClick={() => setMobileMenuOpen(false)} className="mt-2 inline-flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-md text-sm font-semibold">
              <Sparkles size={14} /> Free Training
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
