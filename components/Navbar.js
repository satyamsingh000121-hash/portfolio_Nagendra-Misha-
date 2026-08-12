'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass" style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
        {/* Brand Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '1.75rem', fontWeight: '800', color: '#0F172A', tracking: '-0.03em' }}>
            MARIE<span style={{ color: '#FF2E63' }}>FORLEO</span>
          </span>
          <span style={{ background: '#FF2E63', color: '#fff', fontSize: '0.65rem', fontWeight: '700', padding: '2px 8px', borderRadius: '12px', textTransform: 'uppercase' }}>
            NEXT.JS
          </span>
        </Link>

        {/* Desktop Links */}
        <nav style={{ display: 'none', gap: '32px', alignItems: 'center' }} className="desktop-nav">
          <Link href="#about" style={linkStyle}>About</Link>
          <Link href="#bschool" style={linkStyle}>B-School</Link>
          <Link href="#programs" style={linkStyle}>Programs</Link>
          <Link href="#marietv" style={linkStyle}>MarieTV</Link>
          <Link href="#podcast" style={linkStyle}>Podcast</Link>
        </nav>

        {/* CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link href="#start" className="btn btn-primary" style={{ padding: '10px 22px', fontSize: '0.9rem' }}>
            <Sparkles size={16} /> Free Training
          </Link>
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', color: '#0F172A' }}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{ background: '#FFFFFF', padding: '20px 24px', borderBottom: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Link href="#about" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle}>About</Link>
          <Link href="#bschool" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle}>B-School</Link>
          <Link href="#programs" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle}>Programs</Link>
          <Link href="#marietv" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle}>MarieTV</Link>
          <Link href="#podcast" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle}>Podcast</Link>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}

const linkStyle = {
  textDecoration: 'none',
  color: '#475569',
  fontWeight: '600',
  fontSize: '0.95rem',
  transition: 'color 0.2s',
};

const mobileLinkStyle = {
  textDecoration: 'none',
  color: '#0F172A',
  fontWeight: '600',
  fontSize: '1.1rem',
};
