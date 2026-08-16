'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminHeader } from '@/components/admin/AdminHeader';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('admin_theme') as 'light' | 'dark' | null;
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('admin_theme', nextTheme);
  };

  const isDark = theme === 'dark';

  const themeVariables = isDark
    ? ({
        '--background': '#020617',
        '--foreground': '#f8fafc',
        '--card': '#0f172a',
        '--sidebar': '#020617',
        '--primary': '#aff33e',
        '--border': '#1e293b',
        '--muted': '#1e293b',
        '--muted-foreground': '#94a3b8',
      } as React.CSSProperties)
    : ({
        '--background': '#fbfcf8',
        '--foreground': '#0f172a',
        '--card': '#ffffff',
        '--sidebar': '#ffffff',
        '--primary': '#aff33e',
        '--border': '#e2e8f0',
        '--muted': '#f1f5f9',
        '--muted-foreground': '#64748b',
      } as React.CSSProperties);

  const isLoginPage = pathname === '/admin/login';

  return (
    <div
      className={`admin-shell min-h-screen antialiased transition-colors duration-200 ${
        isDark ? 'dark' : ''
      }`}
      style={{
        ...themeVariables,
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
        minHeight: '100vh',
      }}
    >
      <style>{`
        .admin-shell {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
          -webkit-font-smoothing: antialiased;
          box-sizing: border-box;
        }
        .admin-shell *,
        .admin-shell *::before,
        .admin-shell *::after {
          box-sizing: border-box;
        }
        .admin-shell h1,
        .admin-shell h2,
        .admin-shell h3,
        .admin-shell h4,
        .admin-shell p,
        .admin-shell span,
        .admin-shell a,
        .admin-shell button,
        .admin-shell input {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
          letter-spacing: normal !important;
        }
        .admin-shell h1,
        .admin-shell h2,
        .admin-shell h3,
        .admin-shell h4,
        .admin-shell p {
          margin: 0;
          padding: 0;
        }
      `}</style>

      {isLoginPage ? (
        /* Standalone Login Screen */
        <div className="min-h-screen w-full flex flex-col justify-center items-center">
          {children}
        </div>
      ) : (
        /* Standard Admin Layout with Sidebar + Header */
        <>
          <AdminSidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

          <div className="flex flex-col min-h-screen lg:pl-64 transition-all duration-300">
            <AdminHeader
              theme={theme}
              onToggleTheme={toggleTheme}
              onOpenSidebar={() => setSidebarOpen(true)}
            />

            <main className="flex-1 w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
              {children}
            </main>
          </div>
        </>
      )}
    </div>
  );
}
