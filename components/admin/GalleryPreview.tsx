'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Image as ImageIcon, Sparkles } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  date: string;
  src?: string;
}

const dummyGallery: GalleryItem[] = [
  {
    id: '1',
    title: 'Portrait Session',
    category: 'Profile',
    date: 'Aug 14',
    src: '/images/Nagendra mishra.png',
  },
  {
    id: '2',
    title: 'Solutions Blueprint',
    category: 'Showcase',
    date: 'Aug 10',
    src: '/images/Building Solutions. Delivering Impact..jpg',
  },
  {
    id: '3',
    title: 'Impact Design',
    category: 'Editorial',
    date: 'Aug 08',
    src: '/images/Technology is not just about code. It\'s about creating solutions that make an impact..jpg',
  },
  {
    id: '4',
    title: 'Brand Visuals',
    category: 'Featured',
    date: 'Aug 04',
    src: '/images/new2.png',
  },
];

export function GalleryPreview() {
  return (
    <div
      className="flex flex-col h-full rounded-2xl border p-5 sm:p-6 transition-all"
      style={{
        backgroundColor: 'var(--card)',
        borderColor: 'var(--border)',
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: 'rgba(175, 243, 62, 0.15)' }}
          >
            <ImageIcon className="w-4 h-4 text-[#aff33e]" />
          </div>
          <div>
            <h3
              style={{
                color: 'var(--foreground)',
                fontSize: '16px',
                fontWeight: 700,
                lineHeight: '1.2',
                margin: 0,
              }}
            >
              Recent Media
            </h3>
            <p
              style={{
                color: 'var(--muted-foreground)',
                fontSize: '12px',
                lineHeight: '1.3',
                margin: 0,
              }}
            >
              Latest assets and portfolio visuals
            </p>
          </div>
        </div>

        <Link
          href="/admin/media"
          className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold hover:underline text-[#aff33e] transition-colors group"
        >
          <span>View gallery</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-3.5 flex-1 py-4">
        {dummyGallery.map((item) => (
          <div
            key={item.id}
            className="group relative flex flex-col rounded-xl border overflow-hidden transition-all duration-200 hover:shadow-md hover:border-[#aff33e]/50"
            style={{
              backgroundColor: 'var(--muted)',
              borderColor: 'var(--border)',
            }}
          >
            {/* Image Thumbnail Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-black/5 dark:bg-white/5 flex items-center justify-center">
              {item.src ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to placeholder block if image fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              ) : null}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-2"
              >
                <span className="text-[10px] text-white font-medium">
                  {item.category}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-2.5 flex flex-col justify-between flex-1">
              <span
                className="truncate font-semibold leading-tight"
                style={{
                  color: 'var(--foreground)',
                  fontSize: '12px',
                }}
              >
                {item.title}
              </span>
              <div className="flex items-center justify-between text-[10px] mt-1" style={{ color: 'var(--muted-foreground)' }}>
                <span>{item.category}</span>
                <span>{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Footer Link */}
      <div className="pt-3 border-t sm:hidden" style={{ borderColor: 'var(--border)' }}>
        <Link
          href="/admin/media"
          className="flex items-center justify-center gap-1.5 w-full py-2 rounded-xl text-xs font-semibold text-center hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          style={{ color: '#aff33e' }}
        >
          <span>View gallery</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

export default GalleryPreview;
