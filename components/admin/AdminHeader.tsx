'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Menu, User as UserIcon } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface AdminHeaderProps {
  theme?: 'light' | 'dark';
  onToggleTheme?: () => void;
  onOpenSidebar?: () => void;
}

const titlesMap: Record<string, string> = {
  '/admin/dashboard': 'Dashboard',
  '/admin/profile': 'Profile',
  '/admin/media': 'Media / Gallery',
  '/admin/messages': 'Contact Messages',
  '/admin/settings': 'Settings',
};

export function AdminHeader({
  theme = 'light',
  onToggleTheme,
  onOpenSidebar,
}: AdminHeaderProps) {
  const pathname = usePathname();
  const currentTitle = (pathname && titlesMap[pathname]) || 'Dashboard';

  return (
    <header
      className="sticky top-0 z-30 px-4 sm:px-6 lg:px-8 border-b backdrop-blur-md transition-colors w-full"
      style={{
        backgroundColor: 'var(--card)',
        borderColor: 'var(--border)',
        height: '64px',
        minHeight: '64px',
        maxHeight: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Left: Mobile Menu Trigger + Page Title */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <button
          type="button"
          onClick={onOpenSidebar}
          aria-label="Open sidebar menu"
          className="p-2 -ml-2 rounded-xl lg:hidden hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
          style={{
            color: 'var(--foreground)',
            background: 'transparent',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Menu className="w-5 h-5" />
        </button>

        <span
          style={{
            color: 'var(--foreground)',
            fontSize: '18px',
            fontWeight: 700,
            lineHeight: 1.2,
            margin: 0,
            padding: 0,
            display: 'inline-block',
          }}
        >
          {currentTitle}
        </span>
      </div>

      {/* Right: Theme Toggle & Admin User Area (Pushed completely to the right) */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          marginLeft: 'auto',
        }}
      >
        {/* Theme Toggle Button */}
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />

        {/* Divider */}
        <div
          style={{
            backgroundColor: 'var(--border)',
            width: '1px',
            height: '20px',
            display: 'block',
          }}
        />

        {/* Admin Profile Area */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <div
            className="rounded-full border flex items-center justify-center font-semibold text-xs transition-colors flex-shrink-0"
            style={{
              backgroundColor: 'var(--muted)',
              borderColor: 'var(--border)',
              color: 'var(--foreground)',
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <UserIcon className="w-4 h-4 text-[#aff33e]" />
          </div>
          <div
            className="hidden sm:flex flex-col text-left leading-tight"
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'left',
              lineHeight: 1.2,
            }}
          >
            <span
              style={{
                color: 'var(--foreground)',
                fontSize: '13px',
                fontWeight: 600,
                lineHeight: 1.2,
              }}
            >
              Admin
            </span>
            <span
              style={{
                color: 'var(--muted-foreground)',
                fontSize: '11px',
                lineHeight: 1.2,
              }}
            >
              Superuser
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
