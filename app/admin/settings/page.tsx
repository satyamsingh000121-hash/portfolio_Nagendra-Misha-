'use client';

import React, { useState } from 'react';
import {
  Sliders,
  Palette,
  Bell,
  Shield,
  Globe,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Eye,
  EyeOff,
  Sun,
  Moon,
  Laptop,
  Check,
  Lock,
  Mail,
  User,
  ExternalLink,
  RotateCcw,
  Radio,
  Server
} from 'lucide-react';

type SettingsTab = 'general' | 'appearance' | 'notifications' | 'security' | 'website';

const defaultGeneral = {
  siteName: 'Nagendra Mishra',
  adminName: 'Nagendra Mishra',
  adminEmail: 'hello@example.com',
  websiteUrl: 'https://example.com',
  professionalTitle: 'Business Coach & Entrepreneur',
};

const defaultNotifications = {
  newMessages: true,
  unreadReminder: true,
  portfolioActivity: false,
};

const defaultWebsite = {
  websiteOnline: true,
  maintenanceMode: false,
  publicPortfolio: true,
};

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>('general');

  // Form States
  const [general, setGeneral] = useState(defaultGeneral);
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark' | 'system'>('light');
  const [notifications, setNotifications] = useState(defaultNotifications);
  const [websiteConfig, setWebsiteConfig] = useState(defaultWebsite);

  // Security Form States
  const [passwords, setPasswords] = useState({
    current: '',
    newPass: '',
    confirmPass: '',
  });
  const [showPass, setShowPass] = useState({
    current: false,
    newPass: false,
    confirmPass: false,
  });

  // Modals & Feedback
  const [isResetOpen, setIsResetOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Save All Settings Handler
  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Settings saved successfully.');
  };

  // Password Update Handler
  const handleUpdatePassword = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswords({ current: '', newPass: '', confirmPass: '' });
    showToast('Password updated successfully.');
  };

  // Reset to Defaults Handler
  const handleResetDefaults = () => {
    setGeneral(defaultGeneral);
    setSelectedTheme('light');
    setNotifications(defaultNotifications);
    setWebsiteConfig(defaultWebsite);
    setPasswords({ current: '', newPass: '', confirmPass: '' });
    setIsResetOpen(false);
    showToast('All settings reset to default values.');
  };

  const navItems: { id: SettingsTab; label: string; icon: React.ElementType; description: string }[] = [
    { id: 'general', label: 'General', icon: Sliders, description: 'Site identity & credentials' },
    { id: 'appearance', label: 'Appearance', icon: Palette, description: 'Theme & branding colors' },
    { id: 'notifications', label: 'Notifications', icon: Bell, description: 'Email alerts & reminders' },
    { id: 'security', label: 'Security', icon: Shield, description: 'Password & account protection' },
    { id: 'website', label: 'Website', icon: Globe, description: 'Status & public visibility' },
  ];

  return (
    <div className="space-y-6 sm:space-y-8 pb-12">
      {/* Toast Notification */}
      {toastMessage && (
        <div
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl border animate-in fade-in slide-in-from-bottom-4 duration-300"
          style={{
            backgroundColor: 'var(--card)',
            borderColor: '#aff33e',
            color: 'var(--foreground)',
          }}
        >
          <div className="w-7 h-7 rounded-full bg-[#aff33e] flex items-center justify-center text-black flex-shrink-0 font-bold">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div className="text-xs font-bold leading-tight">{toastMessage}</div>
        </div>
      )}

      {/* 1. Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
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
            Settings
          </h1>
          <p
            className="mt-1"
            style={{
              color: 'var(--muted-foreground)',
              fontSize: '14px',
              lineHeight: '1.4',
              margin: 0,
            }}
          >
            Manage your admin preferences and portfolio website settings.
          </p>
        </div>

        <div
          className="inline-flex items-center gap-2 self-start sm:self-auto px-3.5 py-1.5 rounded-full border text-xs font-bold shadow-sm"
          style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border)',
            color: 'var(--foreground)',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-[#aff33e]" />
          <span>System Healthy</span>
        </div>
      </div>

      {/* 2. Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* LEFT COLUMN: Settings Navigation (4 Columns on Desktop) */}
        <div className="lg:col-span-4 space-y-4">
          <div
            className="rounded-2xl border p-3 sm:p-4 space-y-1"
            style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)',
            }}
          >
            <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider" style={{ color: 'var(--muted-foreground)' }}>
              Preferences Menu
            </div>

            <nav className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-left transition-all cursor-pointer group ${
                      isActive
                        ? 'bg-[#aff33e] text-black font-bold shadow-sm'
                        : 'hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                    style={
                      !isActive ? { color: 'var(--foreground)' } : {}
                    }
                  >
                    <Icon
                      className={`w-4 h-4 flex-shrink-0 transition-transform duration-150 group-hover:scale-110 ${
                        isActive ? 'text-black' : 'text-muted-foreground'
                      }`}
                    />
                    <div className="flex flex-col min-w-0 leading-tight">
                      <span className="text-xs sm:text-sm font-semibold truncate">
                        {item.label}
                      </span>
                      <span
                        className={`text-[10px] truncate ${
                          isActive ? 'text-black/70' : 'text-muted-foreground'
                        }`}
                      >
                        {item.description}
                      </span>
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Quick Help Card */}
          <div
            className="rounded-2xl border p-4 sm:p-5 text-xs hidden lg:block"
            style={{
              backgroundColor: 'var(--muted)',
              borderColor: 'var(--border)',
            }}
          >
            <span className="font-bold block mb-1" style={{ color: 'var(--foreground)' }}>
              Configuration Help
            </span>
            <p className="leading-relaxed mb-0" style={{ color: 'var(--muted-foreground)' }}>
              All configuration changes made here take effect across your portfolio management console immediately.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Active Settings Content (8 Columns on Desktop) */}
        <div className="lg:col-span-8 space-y-6">
          {/* SECTION 1: GENERAL SETTINGS */}
          {activeTab === 'general' && (
            <div
              className="rounded-2xl border p-5 sm:p-7 space-y-6 animate-in fade-in duration-200"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
              }}
            >
              <div className="pb-4 border-b" style={{ borderColor: 'var(--border)' }}>
                <h3 className="font-bold text-base sm:text-lg" style={{ color: 'var(--foreground)' }}>
                  General Settings
                </h3>
                <p className="text-xs sm:text-sm mt-1" style={{ color: 'var(--muted-foreground)' }}>
                  Configure your primary website identity and owner credentials.
                </p>
              </div>

              <form onSubmit={handleSaveSettings} className="space-y-4 sm:space-y-5">
                {/* Site Name */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--foreground)' }}>
                    Site Name
                  </label>
                  <input
                    type="text"
                    value={general.siteName}
                    onChange={(e) => setGeneral({ ...general, siteName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#aff33e]"
                    style={{
                      backgroundColor: 'var(--muted)',
                      borderColor: 'var(--border)',
                      color: 'var(--foreground)',
                    }}
                    required
                  />
                  <p className="text-[11px] mt-1" style={{ color: 'var(--muted-foreground)' }}>
                    This name will be displayed across your portfolio header and metadata.
                  </p>
                </div>

                {/* Admin Name */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--foreground)' }}>
                    Admin Name
                  </label>
                  <input
                    type="text"
                    value={general.adminName}
                    onChange={(e) => setGeneral({ ...general, adminName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#aff33e]"
                    style={{
                      backgroundColor: 'var(--muted)',
                      borderColor: 'var(--border)',
                      color: 'var(--foreground)',
                    }}
                    required
                  />
                  <p className="text-[11px] mt-1" style={{ color: 'var(--muted-foreground)' }}>
                    This name will be displayed across your admin profile and greetings.
                  </p>
                </div>

                {/* Admin Email & Website URL Subgrid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Admin Email */}
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--foreground)' }}>
                      Admin Email
                    </label>
                    <input
                      type="email"
                      value={general.adminEmail}
                      onChange={(e) => setGeneral({ ...general, adminEmail: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#aff33e]"
                      style={{
                        backgroundColor: 'var(--muted)',
                        borderColor: 'var(--border)',
                        color: 'var(--foreground)',
                      }}
                      required
                    />
                  </div>

                  {/* Website URL */}
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--foreground)' }}>
                      Website URL
                    </label>
                    <input
                      type="url"
                      value={general.websiteUrl}
                      onChange={(e) => setGeneral({ ...general, websiteUrl: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#aff33e]"
                      style={{
                        backgroundColor: 'var(--muted)',
                        borderColor: 'var(--border)',
                        color: 'var(--foreground)',
                      }}
                      required
                    />
                  </div>
                </div>

                {/* Professional Title */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--foreground)' }}>
                    Professional Title
                  </label>
                  <input
                    type="text"
                    value={general.professionalTitle}
                    onChange={(e) => setGeneral({ ...general, professionalTitle: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#aff33e]"
                    style={{
                      backgroundColor: 'var(--muted)',
                      borderColor: 'var(--border)',
                      color: 'var(--foreground)',
                    }}
                    required
                  />
                </div>

                {/* Action Buttons Bar */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                  <button
                    type="button"
                    onClick={() => setGeneral(defaultGeneral)}
                    className="px-4 py-2 rounded-xl border text-xs font-semibold hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
                    style={{
                      backgroundColor: 'var(--card)',
                      borderColor: 'var(--border)',
                      color: 'var(--foreground)',
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl text-xs font-bold text-black bg-[#aff33e] hover:bg-[#a2e535] transition-all cursor-pointer shadow-sm flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Save Changes</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* SECTION 2: APPEARANCE SETTINGS */}
          {activeTab === 'appearance' && (
            <div
              className="rounded-2xl border p-5 sm:p-7 space-y-6 animate-in fade-in duration-200"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
              }}
            >
              <div className="pb-4 border-b" style={{ borderColor: 'var(--border)' }}>
                <h3 className="font-bold text-base sm:text-lg" style={{ color: 'var(--foreground)' }}>
                  Appearance Settings
                </h3>
                <p className="text-xs sm:text-sm mt-1" style={{ color: 'var(--muted-foreground)' }}>
                  Customize the interface theme and visual accent color.
                </p>
              </div>

              <div className="space-y-6">
                {/* Theme Selector */}
                <div>
                  <label className="block text-xs font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
                    Interface Theme Mode
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'light', label: 'Light', icon: Sun, desc: 'Clean, high contrast' },
                      { id: 'dark', label: 'Dark', icon: Moon, desc: 'Sleek dark mode' },
                      { id: 'system', label: 'System', icon: Laptop, desc: 'Follows OS preference' },
                    ].map((t) => {
                      const Icon = t.icon;
                      const isSel = selectedTheme === t.id;

                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => {
                            setSelectedTheme(t.id as any);
                            showToast(`Switched theme preview to ${t.label}`);
                          }}
                          className={`p-4 rounded-xl border flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                            isSel
                              ? 'border-[#aff33e] bg-[#aff33e]/10 shadow-sm'
                              : 'hover:bg-black/5 dark:hover:bg-white/5'
                          }`}
                          style={{
                            borderColor: isSel ? '#aff33e' : 'var(--border)',
                          }}
                        >
                          <Icon className={`w-5 h-5 mb-2 ${isSel ? 'text-[#78b515] dark:text-[#aff33e]' : 'text-muted-foreground'}`} />
                          <span className="font-bold text-xs" style={{ color: 'var(--foreground)' }}>
                            {t.label}
                          </span>
                          <span className="text-[10px] mt-0.5 text-muted-foreground">
                            {t.desc}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Accent Color Swatch */}
                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                    Primary Accent Color
                  </label>
                  <div
                    className="flex items-center justify-between p-3.5 rounded-xl border"
                    style={{
                      backgroundColor: 'var(--muted)',
                      borderColor: 'var(--border)',
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#aff33e] border border-black/10 shadow-sm flex items-center justify-center font-bold text-black text-xs">
                        #
                      </div>
                      <div>
                        <span className="font-bold text-xs block" style={{ color: 'var(--foreground)' }}>
                          #aff33e (Neon Lime Accent)
                        </span>
                        <span className="text-[11px]" style={{ color: 'var(--muted-foreground)' }}>
                          Brand identity signature color
                        </span>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#aff33e] text-black">
                      Active
                    </span>
                  </div>
                </div>

                {/* Save Changes */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                  <button
                    type="button"
                    onClick={() => showToast('Appearance preferences updated.')}
                    className="px-5 py-2 rounded-xl text-xs font-bold text-black bg-[#aff33e] hover:bg-[#a2e535] transition-all cursor-pointer shadow-sm"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 3: NOTIFICATION SETTINGS */}
          {activeTab === 'notifications' && (
            <div
              className="rounded-2xl border p-5 sm:p-7 space-y-6 animate-in fade-in duration-200"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
              }}
            >
              <div className="pb-4 border-b" style={{ borderColor: 'var(--border)' }}>
                <h3 className="font-bold text-base sm:text-lg" style={{ color: 'var(--foreground)' }}>
                  Notification Settings
                </h3>
                <p className="text-xs sm:text-sm mt-1" style={{ color: 'var(--muted-foreground)' }}>
                  Manage when and how you receive alerts and visitor contact submissions.
                </p>
              </div>

              <div className="divide-y space-y-1" style={{ borderColor: 'var(--border)' }}>
                {/* Toggle 1: New Contact Messages */}
                <div className="pt-3 pb-4 flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="font-semibold text-xs sm:text-sm block" style={{ color: 'var(--foreground)' }}>
                      New Contact Messages
                    </span>
                    <p className="text-xs" style={{ color: 'var(--muted-foreground)', margin: 0 }}>
                      Receive notifications when someone submits the contact form.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setNotifications({ ...notifications, newMessages: !notifications.newMessages });
                      showToast(`Contact notifications ${!notifications.newMessages ? 'enabled' : 'disabled'}`);
                    }}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      notifications.newMessages ? 'bg-[#aff33e]' : 'bg-muted-foreground/30'
                    }`}
                  >
                    <span
                      className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200 ease-in-out ${
                        notifications.newMessages ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                {/* Toggle 2: Unread Message Reminder */}
                <div className="pt-4 pb-4 flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="font-semibold text-xs sm:text-sm block" style={{ color: 'var(--foreground)' }}>
                      Unread Message Reminder
                    </span>
                    <p className="text-xs" style={{ color: 'var(--muted-foreground)', margin: 0 }}>
                      Show reminders for unread contact messages on the dashboard.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setNotifications({ ...notifications, unreadReminder: !notifications.unreadReminder });
                      showToast(`Unread reminders ${!notifications.unreadReminder ? 'enabled' : 'disabled'}`);
                    }}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      notifications.unreadReminder ? 'bg-[#aff33e]' : 'bg-muted-foreground/30'
                    }`}
                  >
                    <span
                      className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200 ease-in-out ${
                        notifications.unreadReminder ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                {/* Toggle 3: Portfolio Activity */}
                <div className="pt-4 pb-2 flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="font-semibold text-xs sm:text-sm block" style={{ color: 'var(--foreground)' }}>
                      Portfolio Activity
                    </span>
                    <p className="text-xs" style={{ color: 'var(--muted-foreground)', margin: 0 }}>
                      Receive updates about portfolio traffic spikes and milestone views.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setNotifications({ ...notifications, portfolioActivity: !notifications.portfolioActivity });
                      showToast(`Activity updates ${!notifications.portfolioActivity ? 'enabled' : 'disabled'}`);
                    }}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      notifications.portfolioActivity ? 'bg-[#aff33e]' : 'bg-muted-foreground/30'
                    }`}
                  >
                    <span
                      className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200 ease-in-out ${
                        notifications.portfolioActivity ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                <button
                  type="button"
                  onClick={() => showToast('Notification preferences saved.')}
                  className="px-5 py-2 rounded-xl text-xs font-bold text-black bg-[#aff33e] hover:bg-[#a2e535] transition-all cursor-pointer shadow-sm"
                >
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* SECTION 4: SECURITY SETTINGS */}
          {activeTab === 'security' && (
            <div
              className="rounded-2xl border p-5 sm:p-7 space-y-6 animate-in fade-in duration-200"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
              }}
            >
              <div className="pb-4 border-b" style={{ borderColor: 'var(--border)' }}>
                <h3 className="font-bold text-base sm:text-lg" style={{ color: 'var(--foreground)' }}>
                  Security Settings
                </h3>
                <p className="text-xs sm:text-sm mt-1" style={{ color: 'var(--muted-foreground)' }}>
                  Manage your admin console password and account protection credentials.
                </p>
              </div>

              <form onSubmit={handleUpdatePassword} className="space-y-4">
                {/* Current Password */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--foreground)' }}>
                    Current Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPass.current ? 'text' : 'password'}
                      value={passwords.current}
                      onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
                      placeholder="••••••••••••••"
                      className="w-full pl-3.5 pr-10 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#aff33e]"
                      style={{
                        backgroundColor: 'var(--muted)',
                        borderColor: 'var(--border)',
                        color: 'var(--foreground)',
                      }}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass({ ...showPass, current: !showPass.current })}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-muted-foreground hover:text-foreground cursor-pointer"
                    >
                      {showPass.current ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* New Password */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--foreground)' }}>
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPass.newPass ? 'text' : 'password'}
                      value={passwords.newPass}
                      onChange={(e) => setPasswords({ ...passwords, newPass: e.target.value })}
                      placeholder="••••••••••••••"
                      className="w-full pl-3.5 pr-10 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#aff33e]"
                      style={{
                        backgroundColor: 'var(--muted)',
                        borderColor: 'var(--border)',
                        color: 'var(--foreground)',
                      }}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass({ ...showPass, newPass: !showPass.newPass })}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-muted-foreground hover:text-foreground cursor-pointer"
                    >
                      {showPass.newPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Confirm New Password */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--foreground)' }}>
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPass.confirmPass ? 'text' : 'password'}
                      value={passwords.confirmPass}
                      onChange={(e) => setPasswords({ ...passwords, confirmPass: e.target.value })}
                      placeholder="••••••••••••••"
                      className="w-full pl-3.5 pr-10 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#aff33e]"
                      style={{
                        backgroundColor: 'var(--muted)',
                        borderColor: 'var(--border)',
                        color: 'var(--foreground)',
                      }}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass({ ...showPass, confirmPass: !showPass.confirmPass })}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-muted-foreground hover:text-foreground cursor-pointer"
                    >
                      {showPass.confirmPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="p-3 rounded-xl border text-[11px] flex items-center gap-2" style={{ backgroundColor: 'var(--muted)', borderColor: 'var(--border)' }}>
                  <Lock className="w-4 h-4 text-[#aff33e] flex-shrink-0" />
                  <span style={{ color: 'var(--muted-foreground)' }}>
                    Use at least 8 characters with a combination of letters and numbers.
                  </span>
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl text-xs font-bold text-black bg-[#aff33e] hover:bg-[#a2e535] transition-all cursor-pointer shadow-sm"
                  >
                    Update Password
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* SECTION 5: WEBSITE SETTINGS */}
          {activeTab === 'website' && (
            <div
              className="rounded-2xl border p-5 sm:p-7 space-y-6 animate-in fade-in duration-200"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
              }}
            >
              <div className="pb-4 border-b" style={{ borderColor: 'var(--border)' }}>
                <h3 className="font-bold text-base sm:text-lg" style={{ color: 'var(--foreground)' }}>
                  Website Configuration
                </h3>
                <p className="text-xs sm:text-sm mt-1" style={{ color: 'var(--muted-foreground)' }}>
                  Manage live public availability and maintenance modes.
                </p>
              </div>

              <div className="divide-y space-y-1" style={{ borderColor: 'var(--border)' }}>
                {/* Website Online */}
                <div className="pt-3 pb-4 flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="font-semibold text-xs sm:text-sm block" style={{ color: 'var(--foreground)' }}>
                      Website Online
                    </span>
                    <p className="text-xs" style={{ color: 'var(--muted-foreground)', margin: 0 }}>
                      When disabled, the public portfolio can be placed into maintenance mode.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setWebsiteConfig({ ...websiteConfig, websiteOnline: !websiteConfig.websiteOnline });
                      showToast(`Website online status: ${!websiteConfig.websiteOnline ? 'Enabled' : 'Disabled'}`);
                    }}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      websiteConfig.websiteOnline ? 'bg-[#aff33e]' : 'bg-muted-foreground/30'
                    }`}
                  >
                    <span
                      className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200 ease-in-out ${
                        websiteConfig.websiteOnline ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                {/* Maintenance Mode */}
                <div className="pt-4 pb-4 flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="font-semibold text-xs sm:text-sm block" style={{ color: 'var(--foreground)' }}>
                      Maintenance Mode
                    </span>
                    <p className="text-xs" style={{ color: 'var(--muted-foreground)', margin: 0 }}>
                      Temporarily hide the public website while making updates.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setWebsiteConfig({ ...websiteConfig, maintenanceMode: !websiteConfig.maintenanceMode });
                      showToast(`Maintenance mode ${!websiteConfig.maintenanceMode ? 'activated' : 'deactivated'}`);
                    }}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      websiteConfig.maintenanceMode ? 'bg-[#aff33e]' : 'bg-muted-foreground/30'
                    }`}
                  >
                    <span
                      className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200 ease-in-out ${
                        websiteConfig.maintenanceMode ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                {/* Public Portfolio */}
                <div className="pt-4 pb-2 flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="font-semibold text-xs sm:text-sm block" style={{ color: 'var(--foreground)' }}>
                      Public Portfolio
                    </span>
                    <p className="text-xs" style={{ color: 'var(--muted-foreground)', margin: 0 }}>
                      Control whether your portfolio is publicly visible and indexed.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setWebsiteConfig({ ...websiteConfig, publicPortfolio: !websiteConfig.publicPortfolio });
                      showToast(`Public visibility ${!websiteConfig.publicPortfolio ? 'enabled' : 'restricted'}`);
                    }}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      websiteConfig.publicPortfolio ? 'bg-[#aff33e]' : 'bg-muted-foreground/30'
                    }`}
                  >
                    <span
                      className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200 ease-in-out ${
                        websiteConfig.publicPortfolio ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                <button
                  type="button"
                  onClick={() => showToast('Website configuration saved.')}
                  className="px-5 py-2 rounded-xl text-xs font-bold text-black bg-[#aff33e] hover:bg-[#a2e535] transition-all cursor-pointer shadow-sm"
                >
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* DANGER ZONE (Bottom Card) */}
          <div
            className="rounded-2xl border p-5 sm:p-6 transition-all border-red-500/30"
            style={{
              backgroundColor: 'var(--card)',
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center flex-shrink-0 font-bold mt-0.5">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-red-500">
                    Danger Zone
                  </h4>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--muted-foreground)' }}>
                    These actions affect your admin preferences and should be used carefully.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsResetOpen(true)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-red-500 border border-red-500/30 hover:bg-red-500/10 transition-colors cursor-pointer self-start sm:self-auto flex-shrink-0"
              >
                Reset Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. MODAL: Reset Settings Confirmation Dialog */}
      {isResetOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsResetOpen(false)}
        >
          <div
            className="relative max-w-sm w-full rounded-2xl border p-6 shadow-2xl text-center animate-in zoom-in-95 duration-200"
            style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mx-auto mb-4 font-bold">
              <RotateCcw className="w-6 h-6" />
            </div>

            <h3 className="font-bold text-base mb-1" style={{ color: 'var(--foreground)' }}>
              Reset Settings?
            </h3>
            <p className="text-xs text-muted-foreground mb-6" style={{ color: 'var(--muted-foreground)' }}>
              Are you sure you want to reset your current admin settings to default values?
            </p>

            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setIsResetOpen(false)}
                className="px-4 py-2 rounded-xl border text-xs font-semibold hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer flex-1"
                style={{
                  backgroundColor: 'var(--muted)',
                  borderColor: 'var(--border)',
                  color: 'var(--foreground)',
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleResetDefaults}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-all cursor-pointer flex-1 shadow-sm"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
