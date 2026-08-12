'use client';

import { BookOpen, Zap, Award, ArrowUpRight, Sparkles } from 'lucide-react';

const programsList = [
  {
    title: 'B-School',
    subtitle: 'Business Foundation',
    description: 'The ultimate online training program for building a profitable, meaningful online business.',
    icon: BookOpen,
    badge: 'Flagship',
    color: '#FF2E63'
  },
  {
    title: 'Time Genius',
    subtitle: 'Productivity & Focus',
    description: 'Double your creative output, eliminate overwhelm, and reclaim 20+ hours a week.',
    icon: Zap,
    badge: 'Popular',
    color: '#08D9D6'
  },
  {
    title: 'The Copy Cure',
    subtitle: 'Marketing & Copywriting',
    description: 'Write copy that sells without feeling sleazy or salesy. Turn readers into buyers.',
    icon: Award,
    badge: 'Masterclass',
    color: '#FF9F43'
  }
];

export default function Programs() {
  return (
    <section id="programs" style={{ padding: '80px 0', background: '#FFFFFF' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 60px auto' }}>
          <span style={{ color: '#FF2E63', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            WORLD CLASS LEARNING
          </span>
          <h2 style={{ fontSize: '2.5rem', color: '#0F172A', marginTop: '8px', marginBottom: '16px' }}>
            Programs built to get you results.
          </h2>
          <p style={{ color: '#64748B', fontSize: '1.1rem' }}>
            Whether starting out or scaling up, choose the training that fits your goals.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {programsList.map((prog, idx) => {
            const IconComponent = prog.icon;
            return (
              <div 
                key={idx}
                style={{
                  background: '#FAFAFB',
                  borderRadius: '20px',
                  padding: '36px 28px',
                  border: '1px solid #E2E8F0',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
                className="program-card"
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <div style={{ background: `${prog.color}15`, color: prog.color, padding: '14px', borderRadius: '16px' }}>
                      <IconComponent size={28} />
                    </div>
                    <span style={{ background: '#0F172A', color: '#fff', fontSize: '0.75rem', fontWeight: '700', padding: '4px 12px', borderRadius: '20px' }}>
                      {prog.badge}
                    </span>
                  </div>

                  <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {prog.subtitle}
                  </span>
                  <h3 style={{ fontSize: '1.6rem', color: '#0F172A', marginTop: '4px', marginBottom: '12px' }}>
                    {prog.title}
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '24px' }}>
                    {prog.description}
                  </p>
                </div>

                <a href="#learn-more" style={{ textDecoration: 'none', color: '#0F172A', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.95rem' }}>
                  Learn More <ArrowUpRight size={18} />
                </a>
              </div>
            );
          })}
        </div>

      </div>

      <style jsx>{`
        .program-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.08);
          border-color: #CBD5E1;
        }
      `}</style>
    </section>
  );
}
