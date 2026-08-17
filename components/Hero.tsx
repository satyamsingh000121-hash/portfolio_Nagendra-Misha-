'use client';

import React from 'react';

export interface HeroProps {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  imageUrl?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function Hero({
  eyebrow = "HEYA!",
  titleLine1 = "I'M",
  titleLine2 = "Nagendra Mishra.",
  description = "My hunch is someone you trust mentioned my name, or you stumbled upon one of my videos, quotes or articles online. Whatever path you took, I'm really glad you're here.",
  imageUrl = "/images/Gemini_Generated_Image_3p38tr3p38tr3p38-Photoroom.png",
  ctaText = "Learn More",
  ctaLink = "#about"
}: HeroProps): React.ReactElement {
  return (
    <>
      {/* Import Google Serif Font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@500;700&display=swap');
      `}</style>

      <section
        style={{
          backgroundColor: '#EAE3DA',
          color: '#1C1A1A',
          minHeight: '80vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          padding: '80px 5%',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          boxSizing: 'border-box',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'flex-end'
          }}
        >
          {/* Left Text Block */}
          <div style={{ flex: '1', maxWidth: '650px' }}>
            {/* Eyebrow badge / sub-title */}
            <div
              style={{
                color: '#8C4A38',
                fontWeight: '700',
                fontSize: '1.1rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                marginBottom: '24px'
              }}
            >
              {eyebrow}
            </div>

            {/* Main Serif Heading */}
            <h1
              style={{
                fontFamily: "'Playfair Display', Didot, 'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(4.2rem, 11vw, 8.5rem)',
                fontWeight: '400',
                lineHeight: '0.92',
                letterSpacing: '-0.02em',
                color: '#1C1A1A',
                margin: '0 0 32px 0',
                textTransform: 'uppercase'
              }}
            >
              <div>{titleLine1}</div>
              <div>{titleLine2}</div>
            </h1>

            {/* Subtext / Description */}
            {description && (
              <p
                style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  color: '#3A3635',
                  maxWidth: '520px',
                  marginBottom: '36px',
                  fontWeight: '400'
                }}
              >
                {description}
              </p>
            )}

            {/* Action CTA */}
            {ctaText && (
              <a
                href={ctaLink}
                style={{
                  display: 'inline-block',
                  padding: '16px 36px',
                  backgroundColor: '#1C1A1A',
                  color: '#FFFFFF',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  letterSpacing: '0.05em',
                  transition: 'transform 0.2s ease, background-color 0.2s ease'
                }}
                onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.currentTarget.style.backgroundColor = '#8C4A38';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.currentTarget.style.backgroundColor = '#1C1A1A';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {ctaText}
              </a>
            )}
          </div>

          {/* Right Image Block (Optional) */}
          {imageUrl && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                position: 'relative'
              }}
            >
              <img
                src={imageUrl}
                alt="Marie Hero"
                style={{
                  maxWidth: '100%',
                  maxHeight: '650px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.08))'
                }}
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  // Fallback in case local image path isn't present
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
