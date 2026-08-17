'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

const footerLink: React.CSSProperties = {
  textDecoration: 'none',
  color: '#94A3B8',
  transition: 'color 0.2s',
};

export default function Footer(): React.ReactElement {
  const scrollToTop = (): void => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer style={{ background: '#0F172A', color: '#94A3B8', padding: '60px 0 30px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', marginBottom: '48px' }}>
          
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '16px' }}>
              MARIE<span style={{ color: '#FF2E63' }}>FORLEO</span>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
              Empowering creators and business leaders worldwide with tools, mindset, and strategy.
            </p>
          </div>

          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', marginBottom: '16px' }}>Programs</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li><Link href="#bschool" style={footerLink}>B-School</Link></li>
              <li><Link href="#timegenius" style={footerLink}>Time Genius</Link></li>
              <li><Link href="#copycure" style={footerLink}>The Copy Cure</Link></li>
              <li><Link href="#free-tools" style={footerLink}>Free Tools</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', marginBottom: '16px' }}>Explore</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li><Link href="#about" style={footerLink}>About Marie</Link></li>
              <li><Link href="#marietv" style={footerLink}>MarieTV</Link></li>
              <li><Link href="#podcast" style={footerLink}>Podcast</Link></li>
              <li><Link href="#blog" style={footerLink}>Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', marginBottom: '16px' }}>Legal</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li><Link href="#privacy" style={footerLink}>Privacy Policy</Link></li>
              <li><Link href="#terms" style={footerLink}>Terms of Service</Link></li>
              <li><Link href="#ccpa" style={footerLink}>CCPA Policy</Link></li>
            </ul>
          </div>

        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px', fontSize: '0.85rem' }}>
          <div>
            © {new Date().getFullYear()} Marie Forleo International. Rebuilt with Next.js App Router.
          </div>
          <button 
            onClick={scrollToTop} 
            style={{ background: 'rgba(255,255,255,0.08)', border: 'none', color: '#fff', padding: '8px 16px', borderRadius: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
