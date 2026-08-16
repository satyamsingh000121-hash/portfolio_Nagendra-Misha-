'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, Clock } from 'lucide-react';

interface MessageItem {
  id: string;
  name: string;
  preview: string;
  time: string;
  status: 'Unread' | 'Read';
  initial: string;
}

const dummyMessages: MessageItem[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    preview: 'Interested in business coaching',
    time: 'Today, 10:32 AM',
    status: 'Unread',
    initial: 'R',
  },
  {
    id: '2',
    name: 'Priya Mehta',
    preview: 'Request for speaking event',
    time: 'Today, 09:18 AM',
    status: 'Read',
    initial: 'P',
  },
  {
    id: '3',
    name: 'Amit Patel',
    preview: 'Business consultation inquiry',
    time: 'Yesterday',
    status: 'Unread',
    initial: 'A',
  },
  {
    id: '4',
    name: 'Neha Kapoor',
    preview: 'Event collaboration',
    time: 'Yesterday',
    status: 'Read',
    initial: 'N',
  },
];

export function RecentMessages() {
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
            <Mail className="w-4 h-4 text-[#aff33e]" />
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
              Recent Messages
            </h3>
            <p
              style={{
                color: 'var(--muted-foreground)',
                fontSize: '12px',
                lineHeight: '1.3',
                margin: 0,
              }}
            >
              Latest inquiries from portfolio visitors
            </p>
          </div>
        </div>

        <Link
          href="/admin/messages"
          className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold hover:underline text-[#aff33e] transition-colors group"
        >
          <span>View all</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      {/* Message List */}
      <div className="divide-y flex-1 py-1" style={{ borderColor: 'var(--border)' }}>
        {dummyMessages.map((msg) => {
          const isUnread = msg.status === 'Unread';

          return (
            <div
              key={msg.id}
              className="py-3.5 flex items-center justify-between gap-3 hover:bg-black/5 dark:hover:bg-white/5 rounded-xl px-2.5 -mx-2.5 transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                {/* Avatar Initial */}
                <div
                  className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-xs"
                  style={{
                    backgroundColor: isUnread ? '#aff33e' : 'var(--muted)',
                    color: isUnread ? '#000000' : 'var(--foreground)',
                  }}
                >
                  {msg.initial}
                </div>

                {/* Sender Info & Preview */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span
                      className="truncate font-semibold"
                      style={{
                        color: 'var(--foreground)',
                        fontSize: '14px',
                        lineHeight: '1.2',
                      }}
                    >
                      {msg.name}
                    </span>
                    {isUnread && (
                      <span className="w-2 h-2 rounded-full bg-[#aff33e] flex-shrink-0" />
                    )}
                  </div>
                  <p
                    className="truncate text-xs mt-0.5"
                    style={{
                      color: 'var(--muted-foreground)',
                      fontSize: '12px',
                      lineHeight: '1.3',
                      margin: 0,
                    }}
                  >
                    {msg.preview}
                  </p>
                </div>
              </div>

              {/* Timestamp & Status Badge */}
              <div className="flex flex-col items-end gap-1 flex-shrink-0">
                <span
                  className="text-[11px] flex items-center gap-1"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  <Clock className="w-3 h-3" />
                  {msg.time}
                </span>
                <span
                  className="px-2 py-0.5 rounded-full text-[10px] font-semibold"
                  style={{
                    backgroundColor: isUnread ? 'rgba(175, 243, 62, 0.2)' : 'var(--muted)',
                    color: isUnread ? 'var(--foreground)' : 'var(--muted-foreground)',
                  }}
                >
                  {msg.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Footer Link */}
      <div className="pt-3 border-t sm:hidden" style={{ borderColor: 'var(--border)' }}>
        <Link
          href="/admin/messages"
          className="flex items-center justify-center gap-1.5 w-full py-2 rounded-xl text-xs font-semibold text-center hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          style={{ color: '#aff33e' }}
        >
          <span>View all messages</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

export default RecentMessages;
