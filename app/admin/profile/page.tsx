'use client';

import React, { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Camera,
  Globe,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  CheckCircle2,
  Sparkles,
  Info,
  RotateCcw
} from 'lucide-react';

const initialFormData = {
  fullName: 'Nagendra Mishra',
  title: 'Business Coach & Entrepreneur',
  email: 'hello@example.com',
  phone: '+91 98765 43210',
  location: 'Mumbai, India',
  bio: 'Nagendra Mishra is a business coach, entrepreneur and business event leader focused on helping entrepreneurs grow their businesses through strategy, leadership and meaningful business connections.',
  website: 'https://example.com',
  linkedin: 'https://linkedin.com/in/nagendramishra',
  instagram: 'https://instagram.com/nagendramishra',
  facebook: 'https://facebook.com/nagendramishra',
  youtube: 'https://youtube.com/@nagendramishra',
};

export default function ProfilePage() {
  const [formData, setFormData] = useState(initialFormData);
  const [showSavedToast, setShowSavedToast] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSavedToast(true);
    setTimeout(() => {
      setShowSavedToast(false);
    }, 3500);
  };

  const handleCancel = () => {
    setFormData(initialFormData);
  };

  return (
    <div className="space-y-6 sm:space-y-8 pb-12">
      {/* Toast Notification for Save Action */}
      {showSavedToast && (
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
          <div>
            <div className="text-xs font-bold leading-tight">Changes Saved</div>
            <div className="text-[11px]" style={{ color: 'var(--muted-foreground)' }}>
              Profile information updated successfully.
            </div>
          </div>
        </div>
      )}

      {/* 1. Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-2">
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
            Profile
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
            Manage your portfolio profile information and public presence.
          </p>
        </div>

        <div
          className="inline-flex items-center gap-2 self-start sm:self-auto px-3 py-1.5 rounded-full border text-xs font-semibold"
          style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border)',
            color: 'var(--foreground)',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-[#aff33e]" />
          <span>Public Profile Ready</span>
        </div>
      </div>

      {/* Main Profile Form */}
      <form onSubmit={handleSave} className="space-y-6 sm:space-y-8">
        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT COLUMN: Profile Photo & Status & Bio (4 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Profile Photo Card */}
            <div
              className="rounded-2xl border p-5 sm:p-6 transition-all flex flex-col items-center text-center"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
              }}
            >
              <div className="w-full text-left pb-4 border-b mb-5" style={{ borderColor: 'var(--border)' }}>
                <h3
                  style={{
                    color: 'var(--foreground)',
                    fontSize: '16px',
                    fontWeight: 700,
                    margin: 0,
                  }}
                >
                  Profile Photo
                </h3>
                <p
                  style={{
                    color: 'var(--muted-foreground)',
                    fontSize: '12px',
                    margin: '2px 0 0 0',
                  }}
                >
                  Your public profile portrait
                </p>
              </div>

              {/* Photo Avatar Container */}
              <div className="relative group my-2">
                <div
                  className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 p-1 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    borderColor: 'rgba(175, 243, 62, 0.4)',
                    backgroundColor: 'var(--muted)',
                  }}
                >
                  <img
                    src="/images/Nagendra mishra.png"
                    alt="Profile Avatar"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      // Fallback if image not found
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>

                {/* Camera Overlay Icon */}
                <button
                  type="button"
                  aria-label="Upload photo"
                  className="absolute bottom-1 right-1 w-9 h-9 rounded-full bg-[#aff33e] text-black flex items-center justify-center shadow-md border-2 border-white dark:border-slate-900 transition-transform duration-200 hover:scale-110 cursor-pointer"
                >
                  <Camera className="w-4 h-4" />
                </button>
              </div>

              {/* Change Photo Button (UI Only) */}
              <div className="mt-4 w-full">
                <button
                  type="button"
                  className="w-full py-2.5 px-4 rounded-xl border text-xs font-bold transition-all duration-150 hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
                  style={{
                    backgroundColor: 'var(--muted)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)',
                  }}
                >
                  Change Photo
                </button>
                <p
                  className="text-[11px] mt-2"
                  style={{ color: 'var(--muted-foreground)', margin: '8px 0 0 0' }}
                >
                  Recommended: JPG, PNG, WebP (Max 5MB)
                </p>
              </div>

              {/* Profile Status Box */}
              <div
                className="w-full mt-6 p-4 rounded-xl border text-left"
                style={{
                  backgroundColor: 'var(--muted)',
                  borderColor: 'var(--border)',
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold" style={{ color: 'var(--foreground)' }}>
                    Profile Status
                  </span>
                  <span className="text-xs font-bold text-[#78b515] dark:text-[#aff33e]">
                    85% Complete
                  </span>
                </div>

                {/* Progress Bar */}
                <div
                  className="w-full h-2 rounded-full overflow-hidden mb-2 bg-black/10 dark:bg-white/10"
                >
                  <div
                    className="h-full rounded-full bg-[#aff33e] transition-all duration-500"
                    style={{ width: '85%' }}
                  />
                </div>

                <p
                  className="text-[11px] leading-relaxed"
                  style={{ color: 'var(--muted-foreground)', margin: 0 }}
                >
                  Your profile is looking good. Complete the remaining details to reach 100%.
                </p>
              </div>
            </div>

            {/* About / Bio Card */}
            <div
              className="rounded-2xl border p-5 sm:p-6 transition-all"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
              }}
            >
              <div className="pb-4 border-b mb-4" style={{ borderColor: 'var(--border)' }}>
                <h3
                  style={{
                    color: 'var(--foreground)',
                    fontSize: '16px',
                    fontWeight: 700,
                    margin: 0,
                  }}
                >
                  About / Bio
                </h3>
                <p
                  style={{
                    color: 'var(--muted-foreground)',
                    fontSize: '12px',
                    margin: '2px 0 0 0',
                  }}
                >
                  Summary displayed on your homepage & bio section
                </p>
              </div>

              <div className="space-y-2">
                <textarea
                  id="bio"
                  name="bio"
                  rows={5}
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Write a brief professional introduction..."
                  className="w-full p-3.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#aff33e] focus:border-[#aff33e] resize-y"
                  style={{
                    backgroundColor: 'var(--muted)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)',
                    fontFamily: 'inherit',
                  }}
                />
                <div className="flex justify-between items-center text-[11px]" style={{ color: 'var(--muted-foreground)' }}>
                  <span>Brief overview of your expertise</span>
                  <span>{formData.bio.length} characters</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Personal Info & Social Links (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Personal Information Card */}
            <div
              className="rounded-2xl border p-5 sm:p-6 transition-all"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
              }}
            >
              <div className="pb-4 border-b mb-5" style={{ borderColor: 'var(--border)' }}>
                <h3
                  style={{
                    color: 'var(--foreground)',
                    fontSize: '16px',
                    fontWeight: 700,
                    margin: 0,
                  }}
                >
                  Personal Information
                </h3>
                <p
                  style={{
                    color: 'var(--muted-foreground)',
                    fontSize: '12px',
                    margin: '2px 0 0 0',
                  }}
                >
                  Basic identification and contact credentials
                </p>
              </div>

              <div className="space-y-4">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-semibold mb-1.5"
                    style={{ color: 'var(--foreground)' }}
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none" style={{ color: 'var(--muted-foreground)' }}>
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Nagendra Mishra"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#aff33e] focus:border-[#aff33e]"
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
                  <label
                    htmlFor="title"
                    className="block text-xs font-semibold mb-1.5"
                    style={{ color: 'var(--foreground)' }}
                  >
                    Professional Title
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none" style={{ color: 'var(--muted-foreground)' }}>
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="e.g. Business Coach & Entrepreneur"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#aff33e] focus:border-[#aff33e]"
                      style={{
                        backgroundColor: 'var(--muted)',
                        borderColor: 'var(--border)',
                        color: 'var(--foreground)',
                      }}
                      required
                    />
                  </div>
                </div>

                {/* Email & Phone Subgrid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold mb-1.5"
                      style={{ color: 'var(--foreground)' }}
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none" style={{ color: 'var(--muted-foreground)' }}>
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="hello@example.com"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#aff33e] focus:border-[#aff33e]"
                        style={{
                          backgroundColor: 'var(--muted)',
                          borderColor: 'var(--border)',
                          color: 'var(--foreground)',
                        }}
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold mb-1.5"
                      style={{ color: 'var(--foreground)' }}
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none" style={{ color: 'var(--muted-foreground)' }}>
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#aff33e] focus:border-[#aff33e]"
                        style={{
                          backgroundColor: 'var(--muted)',
                          borderColor: 'var(--border)',
                          color: 'var(--foreground)',
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label
                    htmlFor="location"
                    className="block text-xs font-semibold mb-1.5"
                    style={{ color: 'var(--foreground)' }}
                  >
                    Location / Headquarters
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none" style={{ color: 'var(--muted-foreground)' }}>
                      <MapPin className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Mumbai, India"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#aff33e] focus:border-[#aff33e]"
                      style={{
                        backgroundColor: 'var(--muted)',
                        borderColor: 'var(--border)',
                        color: 'var(--foreground)',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Website & Social Links Card */}
            <div
              className="rounded-2xl border p-5 sm:p-6 transition-all"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
              }}
            >
              <div className="pb-4 border-b mb-5" style={{ borderColor: 'var(--border)' }}>
                <h3
                  style={{
                    color: 'var(--foreground)',
                    fontSize: '16px',
                    fontWeight: 700,
                    margin: 0,
                  }}
                >
                  Website & Social Links
                </h3>
                <p
                  style={{
                    color: 'var(--muted-foreground)',
                    fontSize: '12px',
                    margin: '2px 0 0 0',
                  }}
                >
                  Connect your primary web platforms and social channels
                </p>
              </div>

              <div className="space-y-4">
                {/* Primary Website */}
                <div>
                  <label
                    htmlFor="website"
                    className="block text-xs font-semibold mb-1.5"
                    style={{ color: 'var(--foreground)' }}
                  >
                    Primary Website
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none" style={{ color: 'var(--muted-foreground)' }}>
                      <Globe className="w-4 h-4" />
                    </div>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://example.com"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#aff33e] focus:border-[#aff33e]"
                      style={{
                        backgroundColor: 'var(--muted)',
                        borderColor: 'var(--border)',
                        color: 'var(--foreground)',
                      }}
                    />
                  </div>
                </div>

                {/* Social 2x2 Subgrid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  {/* LinkedIn */}
                  <div>
                    <label
                      htmlFor="linkedin"
                      className="block text-xs font-semibold mb-1.5"
                      style={{ color: 'var(--foreground)' }}
                    >
                      LinkedIn Profile
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none" style={{ color: 'var(--muted-foreground)' }}>
                        <Linkedin className="w-4 h-4" />
                      </div>
                      <input
                        type="url"
                        id="linkedin"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleChange}
                        placeholder="https://linkedin.com/in/..."
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#aff33e] focus:border-[#aff33e]"
                        style={{
                          backgroundColor: 'var(--muted)',
                          borderColor: 'var(--border)',
                          color: 'var(--foreground)',
                        }}
                      />
                    </div>
                  </div>

                  {/* Instagram */}
                  <div>
                    <label
                      htmlFor="instagram"
                      className="block text-xs font-semibold mb-1.5"
                      style={{ color: 'var(--foreground)' }}
                    >
                      Instagram Profile
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none" style={{ color: 'var(--muted-foreground)' }}>
                        <Instagram className="w-4 h-4" />
                      </div>
                      <input
                        type="url"
                        id="instagram"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleChange}
                        placeholder="https://instagram.com/..."
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#aff33e] focus:border-[#aff33e]"
                        style={{
                          backgroundColor: 'var(--muted)',
                          borderColor: 'var(--border)',
                          color: 'var(--foreground)',
                        }}
                      />
                    </div>
                  </div>

                  {/* Facebook */}
                  <div>
                    <label
                      htmlFor="facebook"
                      className="block text-xs font-semibold mb-1.5"
                      style={{ color: 'var(--foreground)' }}
                    >
                      Facebook Profile
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none" style={{ color: 'var(--muted-foreground)' }}>
                        <Facebook className="w-4 h-4" />
                      </div>
                      <input
                        type="url"
                        id="facebook"
                        name="facebook"
                        value={formData.facebook}
                        onChange={handleChange}
                        placeholder="https://facebook.com/..."
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#aff33e] focus:border-[#aff33e]"
                        style={{
                          backgroundColor: 'var(--muted)',
                          borderColor: 'var(--border)',
                          color: 'var(--foreground)',
                        }}
                      />
                    </div>
                  </div>

                  {/* YouTube */}
                  <div>
                    <label
                      htmlFor="youtube"
                      className="block text-xs font-semibold mb-1.5"
                      style={{ color: 'var(--foreground)' }}
                    >
                      YouTube Channel
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none" style={{ color: 'var(--muted-foreground)' }}>
                        <Youtube className="w-4 h-4" />
                      </div>
                      <input
                        type="url"
                        id="youtube"
                        name="youtube"
                        value={formData.youtube}
                        onChange={handleChange}
                        placeholder="https://youtube.com/@..."
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#aff33e] focus:border-[#aff33e]"
                        style={{
                          backgroundColor: 'var(--muted)',
                          borderColor: 'var(--border)',
                          color: 'var(--foreground)',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Action Buttons Bar */}
        <div
          className="flex items-center justify-end gap-3.5 pt-4 border-t"
          style={{ borderColor: 'var(--border)' }}
        >
          {/* Cancel Button */}
          <button
            type="button"
            onClick={handleCancel}
            className="px-5 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-150 hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
            style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)',
              color: 'var(--foreground)',
            }}
          >
            Cancel
          </button>

          {/* Save Changes Button */}
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl text-sm font-bold text-black bg-[#aff33e] hover:bg-[#a2e535] active:scale-95 transition-all duration-150 shadow-md cursor-pointer flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Save Changes</span>
          </button>
        </div>
      </form>
    </div>
  );
}
