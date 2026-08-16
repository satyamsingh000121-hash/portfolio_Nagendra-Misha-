'use client';

import React from 'react';
import { Eye, Image as ImageIcon, MessageSquare, Bell, TrendingUp, Sparkles } from 'lucide-react';

interface StatItem {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'neutral' | 'attention';
  icon: React.ElementType;
}

const statsData: StatItem[] = [
  {
    id: 'views',
    title: 'Portfolio Views',
    value: '12,540',
    change: '+12.5% from last month',
    trend: 'up',
    icon: Eye,
  },
  {
    id: 'gallery',
    title: 'Gallery Images',
    value: '48',
    change: '+4 this month',
    trend: 'up',
    icon: ImageIcon,
  },
  {
    id: 'messages',
    title: 'Total Messages',
    value: '126',
    change: '+8 this week',
    trend: 'up',
    icon: MessageSquare,
  },
  {
    id: 'unread',
    title: 'Unread Messages',
    value: '12',
    change: 'Needs attention',
    trend: 'attention',
    icon: Bell,
  },
];

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full">
      {statsData.map((stat) => {
        const Icon = stat.icon;
        const isAttention = stat.trend === 'attention';

        return (
          <div
            key={stat.id}
            className="group relative flex flex-col justify-between p-5 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)',
            }}
          >
            {/* Header: Title & Icon */}
            <div className="flex items-center justify-between gap-2">
              <span
                style={{
                  color: 'var(--muted-foreground)',
                  fontSize: '13px',
                  fontWeight: 500,
                  lineHeight: '1.3',
                }}
              >
                {stat.title}
              </span>
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors group-hover:scale-105"
                style={{
                  backgroundColor: isAttention ? 'rgba(175, 243, 62, 0.15)' : 'var(--muted)',
                  color: isAttention ? '#000000' : 'var(--foreground)',
                }}
              >
                <Icon
                  className="w-4 h-4"
                  style={{
                    color: isAttention ? '#78b515' : 'var(--foreground)',
                  }}
                />
              </div>
            </div>

            {/* Metric Value */}
            <div className="my-3">
              <div
                style={{
                  color: 'var(--foreground)',
                  fontSize: '28px',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  lineHeight: '1.1',
                }}
              >
                {stat.value}
              </div>
            </div>

            {/* Footer / Trend Indicator */}
            <div className="flex items-center gap-1.5 pt-1">
              {isAttention ? (
                <span
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold"
                  style={{
                    backgroundColor: 'rgba(175, 243, 62, 0.2)',
                    color: 'var(--foreground)',
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#aff33e] animate-pulse" />
                  {stat.change}
                </span>
              ) : (
                <span
                  className="inline-flex items-center gap-1 text-[12px] font-medium"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  <TrendingUp className="w-3.5 h-3.5 text-[#aff33e]" />
                  {stat.change}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DashboardStats;
