'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  User,
  Image as ImageIcon,
  MessageSquare,
  Settings,
  LogOut,
  X,
  Sparkles
} from 'lucide-react';

interface AdminSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const navItems = [
  {
    name: 'Dashboard',
    href: '/admin/dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'Profile',
    href: '/admin/profile',
    icon: User,
  },
  {
    name: 'Media / Gallery',
    href: '/admin/media',
    icon: ImageIcon,
  },
  {
    name: 'Contact Messages',
    href: '/admin/messages',
    icon: MessageSquare,
  },
  {
    name: 'Settings',
    href: '/admin/settings',
    icon: Settings,
  },
];

export function AdminSidebar({ isOpen = false, onClose }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-50 flex flex-col w-64 border-r transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          backgroundColor: 'var(--sidebar)',
          borderColor: 'var(--border)',
          color: 'var(--foreground)',
        }}
      >
        {/* Brand Header */}
        <div
          className="flex items-center justify-between h-16 px-6 border-b"
          style={{ borderColor: 'var(--border)' }}
        >
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-2.5 font-bold tracking-tight text-lg group"
            onClick={onClose}
          >
            <div className="w-8 h-8 rounded-lg bg-[#aff33e] flex items-center justify-center text-black font-black text-sm shadow-sm transition-transform duration-200 group-hover:scale-105">
              A
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-wide" style={{ color: 'var(--foreground)' }}>
                PORTFOLIO
              </span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-[#aff33e]">
                Admin Panel
              </span>
            </div>
          </Link>

          {/* Close button on Mobile */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close sidebar"
            className="p-1.5 rounded-lg lg:hidden hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            style={{ color: 'var(--muted-foreground)' }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Section */}
        <div className="flex-1 px-4 py-6 overflow-y-auto space-y-1.5">
          <div className="px-3 mb-2 text-[11px] font-semibold uppercase tracking-wider" style={{ color: 'var(--muted-foreground)' }}>
            Navigation
          </div>

          <nav className="space-y-1" aria-label="Admin Navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || (item.href !== '/admin/dashboard' && pathname?.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 group ${
                    isActive
                      ? 'bg-[#aff33e] text-black shadow-sm font-semibold'
                      : 'hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                  style={
                    isActive
                      ? { backgroundColor: '#aff33e', color: '#000000' }
                      : { color: 'var(--muted-foreground)' }
                  }
                >
                  <Icon
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-150 group-hover:scale-110 ${
                      isActive ? 'text-black' : ''
                    }`}
                  />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer / Logout Button */}
        <div
          className="p-4 border-t mt-auto"
          style={{ borderColor: 'var(--border)' }}
        >
          <button
            type="button"
            className="flex items-center gap-3 w-full px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors hover:bg-red-500/10 hover:text-red-600 dark:hover:text-red-400 cursor-pointer text-left"
            style={{ color: 'var(--muted-foreground)' }}
            onClick={() => {
              // Visual logout button only (no backend/auth implemented)
            }}
          >
            <LogOut className="w-4 h-4 flex-shrink-0" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}

export default AdminSidebar;
