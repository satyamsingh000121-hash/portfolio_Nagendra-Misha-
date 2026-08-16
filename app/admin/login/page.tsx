'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Sparkles,
  Loader2,
  AlertCircle,
  CheckCircle2,
  X,
  ArrowRight,
  ShieldCheck,
  KeyRound
} from 'lucide-react';
import { ThemeToggle } from '@/components/admin/ThemeToggle';

export default function LoginPage() {
  const router = useRouter();

  // Form State
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('admin123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Status & Validation States
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);

  // Field validation errors
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; password?: string }>({});

  const validateForm = () => {
    const errors: { email?: string; password?: string } = {};

    if (!email.trim()) {
      errors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!password) {
      errors.password = 'Password is required.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate login verification with demo credentials
    setTimeout(() => {
      if (email.trim().toLowerCase() === 'admin@example.com' && password === 'admin123') {
        setIsSuccess(true);
        setTimeout(() => {
          router.push('/admin/dashboard');
        }, 800);
      } else {
        setIsLoading(false);
        setErrorMessage('Invalid email or password. Please check your credentials and try again.');
      }
    }, 900);
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center p-4 relative overflow-hidden">
      {/* Background Decorative Accent Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full pointer-events-none opacity-20 dark:opacity-10 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #aff33e 0%, rgba(175,243,62,0) 70%)',
        }}
      />

      {/* Top Navigation Bar with Theme Toggle & Return Link */}
      <div className="absolute top-5 right-5 sm:top-8 sm:right-8 z-20 flex items-center gap-3">
        <ThemeToggle />
      </div>

      <div className="absolute top-5 left-5 sm:top-8 sm:left-8 z-20">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold hover:underline transition-colors"
          style={{ color: 'var(--muted-foreground)' }}
        >
          <span>← Back to Website</span>
        </Link>
      </div>

      {/* Main Login Card (400px - 460px) */}
      <div
        className="relative z-10 w-full max-w-[420px] rounded-3xl border p-7 sm:p-9 shadow-xl backdrop-blur-md transition-all duration-300"
        style={{
          backgroundColor: 'var(--card)',
          borderColor: 'var(--border)',
        }}
      >
        {/* Brand Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#aff33e] flex items-center justify-center text-black font-black text-xl shadow-md mb-3 transition-transform hover:scale-105">
            A
          </div>
          <h2
            className="text-xl sm:text-2xl font-bold tracking-tight"
            style={{ color: 'var(--foreground)' }}
          >
            Welcome Back
          </h2>
          <p
            className="text-xs sm:text-sm mt-1 max-w-xs"
            style={{ color: 'var(--muted-foreground)' }}
          >
            Sign in to your portfolio admin management panel.
          </p>
        </div>

        {/* Demo Credentials Hint Box */}
        <div
          className="mb-5 p-3.5 rounded-xl border text-xs"
          style={{
            backgroundColor: 'var(--muted)',
            borderColor: 'var(--border)',
          }}
        >
          <div className="flex items-center gap-1.5 font-bold mb-1" style={{ color: 'var(--foreground)' }}>
            <KeyRound className="w-3.5 h-3.5 text-[#78b515] dark:text-[#aff33e]" />
            <span>Demo Access Credentials</span>
          </div>
          <div className="flex flex-col gap-0.5 text-[11px]" style={{ color: 'var(--muted-foreground)' }}>
            <div>
              <strong className="text-foreground font-semibold">Email:</strong> admin@example.com
            </div>
            <div>
              <strong className="text-foreground font-semibold">Password:</strong> admin123
            </div>
          </div>
        </div>

        {/* Error Alert Message */}
        {errorMessage && (
          <div
            className="mb-5 p-3 rounded-xl border text-xs flex items-start gap-2.5 bg-red-500/10 border-red-500/30 text-red-600 dark:text-red-400 animate-in fade-in duration-200"
          >
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span className="leading-snug">{errorMessage}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLoginSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold mb-1.5"
              style={{ color: 'var(--foreground)' }}
            >
              Email Address
            </label>
            <div className="relative">
              <div
                className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none"
                style={{ color: 'var(--muted-foreground)' }}
              >
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: undefined });
                }}
                placeholder="admin@example.com"
                className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#aff33e] ${
                  fieldErrors.email ? 'border-red-500' : ''
                }`}
                style={{
                  backgroundColor: 'var(--muted)',
                  borderColor: fieldErrors.email ? 'rgb(239, 68, 68)' : 'var(--border)',
                  color: 'var(--foreground)',
                }}
              />
            </div>
            {fieldErrors.email && (
              <p className="text-[11px] text-red-500 mt-1">{fieldErrors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-xs font-semibold mb-1.5"
              style={{ color: 'var(--foreground)' }}
            >
              Password
            </label>
            <div className="relative">
              <div
                className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none"
                style={{ color: 'var(--muted-foreground)' }}
              >
                <Lock className="w-4 h-4" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (fieldErrors.password) setFieldErrors({ ...fieldErrors, password: undefined });
                }}
                placeholder="••••••••••••"
                className={`w-full pl-10 pr-10 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#aff33e] ${
                  fieldErrors.password ? 'border-red-500' : ''
                }`}
                style={{
                  backgroundColor: 'var(--muted)',
                  borderColor: fieldErrors.password ? 'rgb(239, 68, 68)' : 'var(--border)',
                  color: 'var(--foreground)',
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center cursor-pointer transition-colors"
                style={{ color: 'var(--muted-foreground)' }}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {fieldErrors.password && (
              <p className="text-[11px] text-red-500 mt-1">{fieldErrors.password}</p>
            )}
          </div>

          {/* Remember Me & Forgot Password Row */}
          <div className="flex items-center justify-between text-xs pt-1">
            <label className="flex items-center gap-2 cursor-pointer select-none" style={{ color: 'var(--foreground)' }}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-[#aff33e] focus:ring-[#aff33e] cursor-pointer"
              />
              <span>Remember me</span>
            </label>

            <button
              type="button"
              onClick={() => setIsForgotModalOpen(true)}
              className="text-xs font-semibold text-[#78b515] dark:text-[#aff33e] hover:underline cursor-pointer"
            >
              Forgot password?
            </button>
          </div>

          {/* Submit Sign In Button */}
          <button
            type="submit"
            disabled={isLoading || isSuccess}
            className="w-full py-3 px-4 rounded-xl text-sm font-bold text-black bg-[#aff33e] hover:bg-[#a2e535] active:scale-[0.98] transition-all duration-150 shadow-md cursor-pointer flex items-center justify-center gap-2 mt-2 disabled:opacity-75"
          >
            {isSuccess ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-black" />
                <span>Login successful! Redirecting...</span>
              </>
            ) : isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-black" />
                <span>Signing in...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Sign In</span>
              </>
            )}
          </button>
        </form>

        {/* Footer info */}
        <div className="mt-6 text-center text-[11px] border-t pt-4" style={{ borderColor: 'var(--border)', color: 'var(--muted-foreground)' }}>
          Admin Portal • Portfolio Management System
        </div>
      </div>

      {/* Forgot Password Modal (UI Only) */}
      {isForgotModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsForgotModalOpen(false)}
        >
          <div
            className="relative max-w-sm w-full rounded-2xl border p-6 shadow-2xl text-center animate-in zoom-in-95 duration-200"
            style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 rounded-full bg-[#aff33e]/15 flex items-center justify-center mx-auto mb-4 font-bold">
              <KeyRound className="w-6 h-6 text-[#78b515] dark:text-[#aff33e]" />
            </div>

            <h3 className="font-bold text-base mb-1" style={{ color: 'var(--foreground)' }}>
              Password Reset
            </h3>
            <p className="text-xs text-muted-foreground mb-6 leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              Password recovery will be available once production database authentication is connected. For now, use the demo credentials provided on the login card.
            </p>

            <button
              type="button"
              onClick={() => setIsForgotModalOpen(false)}
              className="w-full py-2.5 rounded-xl text-xs font-bold text-black bg-[#aff33e] hover:bg-[#a2e535] transition-all cursor-pointer shadow-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
