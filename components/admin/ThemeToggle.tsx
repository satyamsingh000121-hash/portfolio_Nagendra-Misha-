'use client';

import React from 'react';

interface ThemeToggleProps {
  theme?: 'light' | 'dark';
  onToggle?: () => void;
}

export function ThemeToggle({ theme = 'light', onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark';

  return (
    <div
      className="power-toggle-wrapper"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <style>{`
        .power-toggle-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .power-toggle-wrapper .power-checkbox {
          display: none;
        }

        .power-toggle-wrapper .switch {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          user-select: none;
          background-color: var(--card, #ffffff);
          border: 2px solid var(--border, #e2e8f0);
          box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.08);
          margin: 0;
          padding: 0;
          overflow: visible;
        }

        .power-toggle-wrapper .switch .power-icon {
          width: 20px;
          height: 20px;
          stroke: var(--muted-foreground, #64748b);
          stroke-width: 2.6px;
          stroke-linecap: round;
          stroke-linejoin: round;
          fill: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: block;
          overflow: visible;
        }

        /* BRIGHT HIGH-INTENSITY GLOW ON ACTIVE/CHECKED */
        .power-toggle-wrapper .power-checkbox:checked + .switch {
          background-color: #060d1b;
          border-color: #aff33e;
          box-shadow:
            0 0 10px #aff33e,
            0 0 20px #aff33e,
            0 0 35px rgba(175, 243, 62, 0.65),
            0 0 50px rgba(175, 243, 62, 0.35),
            inset 0 0 8px #aff33e,
            inset 0 0 16px rgba(175, 243, 62, 0.4);
        }

        .power-toggle-wrapper .power-checkbox:checked + .switch .power-icon {
          stroke: #aff33e;
          filter: drop-shadow(0 0 5px #aff33e) drop-shadow(0 0 10px #aff33e);
        }

        .power-toggle-wrapper .switch:hover {
          transform: scale(1.08);
        }

        .power-toggle-wrapper .power-checkbox:checked + .switch:hover {
          box-shadow:
            0 0 14px #aff33e,
            0 0 28px #aff33e,
            0 0 45px rgba(175, 243, 62, 0.8),
            0 0 65px rgba(175, 243, 62, 0.45),
            inset 0 0 10px #aff33e,
            inset 0 0 20px rgba(175, 243, 62, 0.5);
        }

        .power-toggle-wrapper .switch:active {
          transform: scale(0.94);
        }
      `}</style>

      <input
        type="checkbox"
        id="checkbox"
        className="power-checkbox"
        checked={isDark}
        onChange={onToggle}
        aria-label="Toggle Dark/Light Mode"
      />
      <label htmlFor="checkbox" className="switch">
        <svg
          viewBox="0 0 24 24"
          className="power-icon"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top power vertical line */}
          <line x1="12" y1="2" x2="12" y2="12" />
          {/* Complete, unbroken smooth circular ring */}
          <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
        </svg>
      </label>
    </div>
  );
}

export default ThemeToggle;
