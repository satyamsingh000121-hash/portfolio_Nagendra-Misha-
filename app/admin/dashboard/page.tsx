'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  User,
  Image as ImageIcon,
  MessageSquare,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Calendar,
  Activity
} from 'lucide-react';
import { DashboardStats } from '@/components/admin/DashboardStats';
import { RecentMessages } from '@/components/admin/RecentMessages';
import { GalleryPreview } from '@/components/admin/GalleryPreview';

const chartData = [
  { day: 'Mon', views: 820, heightPct: 62 },
  { day: 'Tue', views: 960, heightPct: 72 },
  { day: 'Wed', views: 740, heightPct: 56 },
  { day: 'Thu', views: 1100, heightPct: 83 },
  { day: 'Fri', views: 980, heightPct: 74 },
  { day: 'Sat', views: 1240, heightPct: 93 },
  { day: 'Sun', views: 1320, heightPct: 100 },
];

export default function DashboardPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(6); // Default highlight Sunday

  const totalViews = chartData.reduce((acc, curr) => acc + curr.views, 0);

  return (
    <div className="space-y-6 sm:space-y-8 pb-10">
      {/* 1. Welcome Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1
              style={{
                color: 'var(--foreground)',
                fontSize: '26px',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: '1.2',
                margin: 0,
              }}
            >
              Welcome back, Admin
            </h1>
            <span className="hidden sm:inline-block text-xl">👋</span>
          </div>
          <p
            className="mt-1"
            style={{
              color: 'var(--muted-foreground)',
              fontSize: '14px',
              lineHeight: '1.4',
              margin: 0,
            }}
          >
            Manage and monitor your portfolio website from one place.
          </p>
        </div>

        {/* Live Status & Date Pill */}
        <div className="flex items-center gap-2.5 self-start sm:self-auto">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold shadow-sm"
            style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)',
              color: 'var(--foreground)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#aff33e] animate-pulse" />
            <span>Live Portfolio Online</span>
          </div>
        </div>
      </div>

      {/* 2. Top Statistics Cards */}
      <DashboardStats />

      {/* 3. Middle Section: Portfolio Analytics + Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
        {/* Left: 7-Day Portfolio Analytics Card (8 Columns) */}
        <div
          className="lg:col-span-8 flex flex-col justify-between rounded-2xl border p-5 sm:p-6 transition-all"
          style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border)',
          }}
        >
          {/* Chart Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b" style={{ borderColor: 'var(--border)' }}>
            <div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#aff33e]" />
                <h3
                  style={{
                    color: 'var(--foreground)',
                    fontSize: '16px',
                    fontWeight: 700,
                    lineHeight: '1.2',
                    margin: 0,
                  }}
                >
                  Portfolio Overview
                </h3>
              </div>
              <p
                style={{
                  color: 'var(--muted-foreground)',
                  fontSize: '12px',
                  lineHeight: '1.3',
                  margin: '4px 0 0 0',
                }}
              >
                7-day traffic and page view performance
              </p>
            </div>

            {/* Total Metric Highlight */}
            <div className="flex items-baseline gap-2">
              <span
                style={{
                  color: 'var(--foreground)',
                  fontSize: '22px',
                  fontWeight: 800,
                }}
              >
                {totalViews.toLocaleString()}
              </span>
              <span
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#78b515] dark:text-[#aff33e]"
              >
                <TrendingUp className="w-3.5 h-3.5" />
                +14.2% this week
              </span>
            </div>
          </div>

          {/* SVG Smooth Clean Interactive Area Chart */}
          <div className="py-6">
            <div className="relative h-48 sm:h-56 w-full">
              {/* Background Horizontal Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-30">
                <div className="border-b border-dashed" style={{ borderColor: 'var(--border)' }} />
                <div className="border-b border-dashed" style={{ borderColor: 'var(--border)' }} />
                <div className="border-b border-dashed" style={{ borderColor: 'var(--border)' }} />
                <div className="border-b" style={{ borderColor: 'var(--border)' }} />
              </div>

              {/* Pure SVG Wave Chart with #aff33e Gradient */}
              <svg
                viewBox="0 0 700 200"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full"
              >
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#aff33e" stopOpacity="0.35" />
                    <stop offset="80%" stopColor="#aff33e" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="#aff33e" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Smooth Area Fill */}
                <path
                  d="M 50,135 C 100,105 110,105 150,105 C 190,105 210,150 250,150 C 290,150 310,75 350,75 C 390,75 410,100 450,100 C 490,100 510,45 550,45 C 590,45 610,25 650,25 L 650,195 L 50,195 Z"
                  fill="url(#chartGradient)"
                />

                {/* Smooth Line Stroke */}
                <path
                  d="M 50,135 C 100,105 110,105 150,105 C 190,105 210,150 250,150 C 290,150 310,75 350,75 C 390,75 410,100 450,100 C 490,100 510,45 550,45 C 590,45 610,25 650,25"
                  fill="none"
                  stroke="#aff33e"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Data Points on the line */}
                {[
                  { cx: 50, cy: 135, i: 0 },
                  { cx: 150, cy: 105, i: 1 },
                  { cx: 250, cy: 150, i: 2 },
                  { cx: 350, cy: 75, i: 3 },
                  { cx: 450, cy: 100, i: 4 },
                  { cx: 550, cy: 45, i: 5 },
                  { cx: 650, cy: 25, i: 6 },
                ].map((pt) => {
                  const isHovered = hoveredIndex === pt.i;
                  return (
                    <g key={pt.i} className="transition-all duration-200">
                      {isHovered && (
                        <>
                          {/* Vertical Guide Line */}
                          <line
                            x1={pt.cx}
                            y1={pt.cy}
                            x2={pt.cx}
                            y2={195}
                            stroke="#aff33e"
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                            opacity="0.6"
                          />
                          {/* Outer Pulse Ring */}
                          <circle
                            cx={pt.cx}
                            cy={pt.cy}
                            r="10"
                            fill="#aff33e"
                            opacity="0.3"
                          />
                        </>
                      )}
                      {/* Inner Dot */}
                      <circle
                        cx={pt.cx}
                        cy={pt.cy}
                        r={isHovered ? '6' : '4'}
                        fill="#020617"
                        stroke="#aff33e"
                        strokeWidth={isHovered ? '3' : '2'}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Hover Zones & Tooltip */}
              <div className="absolute inset-0 flex items-stretch justify-between px-2 sm:px-6">
                {chartData.map((d, index) => {
                  const isHovered = hoveredIndex === index;
                  return (
                    <div
                      key={d.day}
                      className="relative flex-1 flex flex-col items-center justify-start cursor-pointer group"
                      onMouseEnter={() => setHoveredIndex(index)}
                    >
                      {/* Floating Tooltip */}
                      {isHovered && (
                        <div
                          className="absolute -top-3 transform -translate-y-full flex flex-col items-center pointer-events-none z-10 transition-all"
                        >
                          <div
                            className="px-2.5 py-1 rounded-lg border text-[11px] font-bold shadow-md whitespace-nowrap"
                            style={{
                              backgroundColor: 'var(--card)',
                              borderColor: '#aff33e',
                              color: 'var(--foreground)',
                            }}
                          >
                            <span className="text-[#78b515] dark:text-[#aff33e] mr-1">{d.day}:</span>
                            <span>{d.views.toLocaleString()} views</span>
                          </div>
                          <div
                            className="w-1.5 h-1.5 rotate-45 -mt-1"
                            style={{
                              backgroundColor: 'var(--card)',
                              borderRight: '1px solid #aff33e',
                              borderBottom: '1px solid #aff33e',
                            }}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* X-Axis Day Labels */}
            <div className="flex items-center justify-between px-3 sm:px-8 pt-3 border-t mt-1" style={{ borderColor: 'var(--border)' }}>
              {chartData.map((d, index) => (
                <button
                  key={d.day}
                  type="button"
                  onClick={() => setHoveredIndex(index)}
                  className="text-xs transition-colors cursor-pointer py-1 px-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5"
                  style={{
                    color: hoveredIndex === index ? '#78b515' : 'var(--muted-foreground)',
                    fontWeight: hoveredIndex === index ? 700 : 500,
                  }}
                >
                  {d.day}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Quick Actions + Profile Status (4 Columns) */}
        <div className="lg:col-span-4 flex flex-col gap-5 sm:gap-6">
          {/* Quick Actions Card */}
          <div
            className="rounded-2xl border p-5 sm:p-6 transition-all"
            style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)',
            }}
          >
            <div className="flex items-center justify-between pb-3 border-b" style={{ borderColor: 'var(--border)' }}>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#aff33e]" />
                <h3
                  style={{
                    color: 'var(--foreground)',
                    fontSize: '16px',
                    fontWeight: 700,
                    lineHeight: '1.2',
                    margin: 0,
                  }}
                >
                  Quick Actions
                </h3>
              </div>
            </div>

            <div className="space-y-2.5 mt-3.5">
              {/* Action 1: Edit Profile */}
              <Link
                href="/admin/profile"
                className="group flex items-center justify-between p-3 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:border-[#aff33e]/50 hover:shadow-sm"
                style={{
                  backgroundColor: 'var(--muted)',
                  borderColor: 'var(--border)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors group-hover:bg-[#aff33e] group-hover:text-black"
                    style={{ backgroundColor: 'var(--card)', color: 'var(--foreground)' }}
                  >
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-xs leading-tight" style={{ color: 'var(--foreground)' }}>
                      Edit Profile
                    </span>
                    <span className="text-[11px] leading-tight" style={{ color: 'var(--muted-foreground)' }}>
                      Update your portfolio profile
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#aff33e] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </Link>

              {/* Action 2: Manage Gallery */}
              <Link
                href="/admin/media"
                className="group flex items-center justify-between p-3 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:border-[#aff33e]/50 hover:shadow-sm"
                style={{
                  backgroundColor: 'var(--muted)',
                  borderColor: 'var(--border)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors group-hover:bg-[#aff33e] group-hover:text-black"
                    style={{ backgroundColor: 'var(--card)', color: 'var(--foreground)' }}
                  >
                    <ImageIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-xs leading-tight" style={{ color: 'var(--foreground)' }}>
                      Manage Gallery
                    </span>
                    <span className="text-[11px] leading-tight" style={{ color: 'var(--muted-foreground)' }}>
                      Add or organize media
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#aff33e] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </Link>

              {/* Action 3: View Messages */}
              <Link
                href="/admin/messages"
                className="group flex items-center justify-between p-3 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:border-[#aff33e]/50 hover:shadow-sm"
                style={{
                  backgroundColor: 'var(--muted)',
                  borderColor: 'var(--border)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors group-hover:bg-[#aff33e] group-hover:text-black"
                    style={{ backgroundColor: 'var(--card)', color: 'var(--foreground)' }}
                  >
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-xs leading-tight" style={{ color: 'var(--foreground)' }}>
                      View Messages
                    </span>
                    <span className="text-[11px] leading-tight" style={{ color: 'var(--muted-foreground)' }}>
                      Check contact inquiries
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#aff33e] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </Link>
            </div>
          </div>

          {/* Profile Status Card */}
          <div
            className="rounded-2xl border p-5 transition-all"
            style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)',
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold" style={{ color: 'var(--muted-foreground)' }}>
                Profile Status
              </span>
              <span className="text-xs font-bold text-[#78b515] dark:text-[#aff33e]">
                85% Completed
              </span>
            </div>

            {/* Progress Bar */}
            <div
              className="w-full h-2 rounded-full overflow-hidden mb-2.5"
              style={{ backgroundColor: 'var(--muted)' }}
            >
              <div
                className="h-full rounded-full transition-all duration-500 bg-[#aff33e]"
                style={{ width: '85%' }}
              />
            </div>

            <p
              className="text-xs leading-relaxed"
              style={{ color: 'var(--muted-foreground)', margin: 0 }}
            >
              Your portfolio profile is looking great. Complete your remaining social links for maximum impact.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Bottom Row: Recent Messages + Gallery Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
        <RecentMessages />
        <GalleryPreview />
      </div>
    </div>
  );
}
