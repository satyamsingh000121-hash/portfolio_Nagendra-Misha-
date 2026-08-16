'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme?: 'light' | 'dark';
  onToggle?: () => void;
}

export function ThemeToggle({ theme = 'light', onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="relative transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#aff33e]"
      style={{
        backgroundColor: 'var(--card)',
        borderColor: 'var(--border)',
        color: 'var(--foreground)',
        width: '36px',
        height: '36px',
        borderRadius: '10px',
        border: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        padding: 0,
      }}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-[#aff33e] transition-transform duration-200 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-[#0f172a] transition-transform duration-200 hover:-rotate-12" />
      )}
    </button>
  );
}

export default ThemeToggle;
