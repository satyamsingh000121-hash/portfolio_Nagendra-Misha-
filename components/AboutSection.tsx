'use client';

import React from 'react';
import { Quote, Check } from 'lucide-react';

export default function AboutSection(): React.ReactElement {
  return (
    <section id="about" style={{ padding: '90px 0', background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'center' }} className="about-grid">
          
          {/* Left Quote Card */}
          <div className="glass-dark" style={{ padding: '40px', borderRadius: '24px', position: 'relative' }}>
            <Quote size={48} color="#FF2E63" style={{ opacity: 0.6, marginBottom: '20px' }} />
            <p style={{ fontSize: '1.4rem', lineHeight: '1.6', fontWeight: '500', marginBottom: '24px', color: '#F1F5F9' }}>
              &quot;Everything is figureoutable. No matter what obstacle stands in your way, you have the power, intelligence, and grit to create the life you desire.&quot;
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#FF2E63', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '1.2rem' }}>
                MF
              </div>
              <div>
                <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>Marie Forleo</div>
                <div style={{ fontSize: '0.85rem', color: '#94A3B8' }}>#1 NYT Bestselling Author of Everything is Figureoutable</div>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div>
            <span style={{ color: '#08D9D6', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              MEET MARIE
            </span>
            <h2 style={{ fontSize: '2.4rem', marginTop: '8px', marginBottom: '20px', lineHeight: '1.2' }}>
              Helping millions build a business &amp; life they love.
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '28px' }}>
              From waitressing and bartending to building an award-winning digital empire, Marie has dedicated her life to helping creators, entrepreneurs, and dreamers achieve true financial freedom and impact.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', color: '#E2E8F0' }}>
                <Check size={18} color="#08D9D6" /> Award-winning MarieTV host
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', color: '#E2E8F0' }}>
                <Check size={18} color="#08D9D6" /> Oprah&apos;s Next-Gen Thought Leader
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', color: '#E2E8F0' }}>
                <Check size={18} color="#08D9D6" /> Philanthropist &amp; Activist
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', color: '#E2E8F0' }}>
                <Check size={18} color="#08D9D6" /> Global Mentor &amp; Speaker
              </div>
            </div>
          </div>

        </div>

      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
