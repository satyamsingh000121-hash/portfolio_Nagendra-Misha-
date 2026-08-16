'use client';

import React, { useState, useMemo } from 'react';
import {
  Mail,
  MailOpen,
  MessageSquare,
  Search,
  CheckCircle2,
  Trash2,
  X,
  Clock,
  ArrowRight,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Inbox,
  Filter,
  ArrowUpDown,
  Send,
  User
} from 'lucide-react';

interface MessageItem {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  time: string;
  status: 'unread' | 'read';
  isThisWeek: boolean;
  initial: string;
}

const initialMessages: MessageItem[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    email: 'rahul@example.com',
    subject: 'Interested in Business Coaching',
    message:
      'Hello Nagendra,\n\nI have been following your work and would like to discuss your business coaching programs and availability for a 1-on-1 strategic mentorship session.\n\nLooking forward to hearing from you.\n\nBest regards,\nRahul Sharma',
    date: 'Aug 16, 2026',
    time: '10:32 AM',
    status: 'unread',
    isThisWeek: true,
    initial: 'R',
  },
  {
    id: '2',
    name: 'Priya Mehta',
    email: 'priya@example.com',
    subject: 'Speaking Event Request',
    message:
      'Hi Nagendra,\n\nWe are organizing our annual Women in Leadership & Entrepreneurship Summit in Mumbai next month, and we would love to invite you as a keynote speaker.\n\nPlease let us know if you would be open to discussing dates and logistics.\n\nWarm regards,\nPriya Mehta',
    date: 'Aug 16, 2026',
    time: '09:18 AM',
    status: 'read',
    isThisWeek: true,
    initial: 'P',
  },
  {
    id: '3',
    name: 'Amit Patel',
    email: 'amit@example.com',
    subject: 'Business Consultation Inquiry',
    message:
      'Dear Mr. Mishra,\n\nOur company is scaling our retail business model across Maharashtra. We need advisory on organizational growth and leadership alignment.\n\nCould we schedule an exploratory consultation call this week?\n\nThanks,\nAmit Patel',
    date: 'Aug 15, 2026',
    time: '04:45 PM',
    status: 'unread',
    isThisWeek: true,
    initial: 'A',
  },
  {
    id: '4',
    name: 'Neha Kapoor',
    email: 'neha@example.com',
    subject: 'Event Collaboration',
    message:
      'Hello Nagendra,\n\nI represent a global venture studio. We are hosting an exclusive founder roundtable in Mumbai and would love to explore a co-hosting collaboration with your network.\n\nBest,\nNeha Kapoor',
    date: 'Aug 15, 2026',
    time: '01:20 PM',
    status: 'read',
    isThisWeek: true,
    initial: 'N',
  },
  {
    id: '5',
    name: 'Arjun Verma',
    email: 'arjun@example.com',
    subject: 'Growth Expo Inquiry',
    message:
      'Hi Nagendra,\n\nCould you please share more information about your upcoming business events and delegate registration passes for the Growth Expo?\n\nRegards,\nArjun Verma',
    date: 'Aug 14, 2026',
    time: '11:15 AM',
    status: 'unread',
    isThisWeek: true,
    initial: 'A',
  },
  {
    id: '6',
    name: 'Sneha Shah',
    email: 'sneha@example.com',
    subject: 'Workshop Inquiry',
    message:
      'Dear Nagendra,\n\nI would like to know more about your workshops and corporate training programs for our senior executive team.\n\nKindly share the brochure and scheduling options.\n\nBest,\nSneha Shah',
    date: 'Aug 13, 2026',
    time: '03:50 PM',
    status: 'read',
    isThisWeek: true,
    initial: 'S',
  },
  {
    id: '7',
    name: 'Vikram Singh',
    email: 'vikram@example.com',
    subject: 'Partnership Opportunity',
    message:
      'Hello Mr. Mishra,\n\nWe are building a business intelligence platform for mid-market founders and would like to explore a strategic knowledge partnership with your leadership academy.\n\nLooking forward to your thoughts.\n\nWarmly,\nVikram Singh',
    date: 'Aug 12, 2026',
    time: '06:10 PM',
    status: 'read',
    isThisWeek: true,
    initial: 'V',
  },
  {
    id: '8',
    name: 'Ananya Mehta',
    email: 'ananya@example.com',
    subject: 'General Inquiry',
    message:
      'Hi Nagendra,\n\nI have a few questions regarding your business consulting process, deliverables, and onboarding timeline.\n\nThank you,\nAnanya Mehta',
    date: 'Aug 11, 2026',
    time: '02:30 PM',
    status: 'read',
    isThisWeek: true,
    initial: 'A',
  },
];

export default function MessagesPage() {
  const [messages, setMessages] = useState<MessageItem[]>(initialMessages);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'unread' | 'read'>('all');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMessage, setSelectedMessage] = useState<MessageItem | null>(null);
  const [deleteConfirmItem, setDeleteConfirmItem] = useState<MessageItem | null>(null);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Dynamic Metrics Calculation
  const totalCount = messages.length + 118; // 126 representation
  const unreadCount = messages.filter((m) => m.status === 'unread').length + 9;
  const readCount = totalCount - unreadCount;
  const thisWeekCount = messages.filter((m) => m.isThisWeek).length;

  // Filter & Search & Sort
  const filteredMessages = useMemo(() => {
    let result = messages.filter((m) => {
      const matchesSearch =
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.message.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus =
        statusFilter === 'all' ? true : m.status === statusFilter;
      return matchesSearch && matchesStatus;
    });

    if (sortOrder === 'oldest') {
      result = [...result].reverse();
    }
    return result;
  }, [messages, searchQuery, statusFilter, sortOrder]);

  // Handlers for Message Actions
  const handleToggleRead = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setMessages((prev) =>
      prev.map((m) => {
        if (m.id === id) {
          const nextStatus = m.status === 'unread' ? 'read' : 'unread';
          showToast(
            nextStatus === 'read' ? 'Marked as read' : 'Marked as unread'
          );
          return { ...m, status: nextStatus };
        }
        return m;
      })
    );
    if (selectedMessage && selectedMessage.id === id) {
      setSelectedMessage((prev) =>
        prev
          ? {
              ...prev,
              status: prev.status === 'unread' ? 'read' : 'unread',
            }
          : null
      );
    }
    setOpenMenuId(null);
  };

  const handleOpenMessage = (msg: MessageItem) => {
    setSelectedMessage(msg);
    // Automatically mark as read when opened if unread
    if (msg.status === 'unread') {
      setMessages((prev) =>
        prev.map((m) => (m.id === msg.id ? { ...m, status: 'read' } : m))
      );
    }
    setOpenMenuId(null);
  };

  const handleConfirmDelete = () => {
    if (!deleteConfirmItem) return;
    setMessages((prev) => prev.filter((m) => m.id !== deleteConfirmItem.id));
    if (selectedMessage && selectedMessage.id === deleteConfirmItem.id) {
      setSelectedMessage(null);
    }
    setDeleteConfirmItem(null);
    setOpenMenuId(null);
    showToast('Message deleted successfully');
  };

  return (
    <div className="space-y-6 sm:space-y-8 pb-12">
      {/* Action Toast Feedback */}
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
            Contact Messages
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
            Manage inquiries and messages received from your portfolio website.
          </p>
        </div>

        {/* Compact Count Badge */}
        <div
          className="inline-flex items-center gap-2 self-start sm:self-auto px-3.5 py-1.5 rounded-full border text-xs font-bold shadow-sm"
          style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border)',
            color: 'var(--foreground)',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-[#aff33e] animate-pulse" />
          <span>{totalCount} Messages</span>
        </div>
      </div>

      {/* 2. Message Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {/* Total Messages */}
        <div
          className="flex items-center justify-between p-4 sm:p-5 rounded-2xl border transition-all"
          style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border)',
          }}
        >
          <div>
            <span className="text-xs font-semibold" style={{ color: 'var(--muted-foreground)' }}>
              Total Messages
            </span>
            <div
              className="mt-1"
              style={{
                color: 'var(--foreground)',
                fontSize: '26px',
                fontWeight: 800,
                lineHeight: 1.1,
              }}
            >
              {totalCount}
            </div>
          </div>
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: 'rgba(175, 243, 62, 0.15)' }}
          >
            <Inbox className="w-5 h-5 text-[#aff33e]" />
          </div>
        </div>

        {/* Unread Messages */}
        <div
          className="flex items-center justify-between p-4 sm:p-5 rounded-2xl border transition-all"
          style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border)',
          }}
        >
          <div>
            <span className="text-xs font-semibold" style={{ color: 'var(--muted-foreground)' }}>
              Unread
            </span>
            <div
              className="mt-1"
              style={{
                color: 'var(--foreground)',
                fontSize: '26px',
                fontWeight: 800,
                lineHeight: 1.1,
              }}
            >
              {unreadCount}
            </div>
          </div>
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: 'rgba(175, 243, 62, 0.2)' }}
          >
            <Mail className="w-5 h-5 text-[#78b515] dark:text-[#aff33e]" />
          </div>
        </div>

        {/* Read Messages */}
        <div
          className="flex items-center justify-between p-4 sm:p-5 rounded-2xl border transition-all"
          style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border)',
          }}
        >
          <div>
            <span className="text-xs font-semibold" style={{ color: 'var(--muted-foreground)' }}>
              Read
            </span>
            <div
              className="mt-1"
              style={{
                color: 'var(--foreground)',
                fontSize: '26px',
                fontWeight: 800,
                lineHeight: 1.1,
              }}
            >
              {readCount}
            </div>
          </div>
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: 'var(--muted)', color: 'var(--foreground)' }}
          >
            <MailOpen className="w-5 h-5" />
          </div>
        </div>

        {/* This Week */}
        <div
          className="flex items-center justify-between p-4 sm:p-5 rounded-2xl border transition-all"
          style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border)',
          }}
        >
          <div>
            <span className="text-xs font-semibold" style={{ color: 'var(--muted-foreground)' }}>
              This Week
            </span>
            <div
              className="mt-1"
              style={{
                color: 'var(--foreground)',
                fontSize: '26px',
                fontWeight: 800,
                lineHeight: 1.1,
              }}
            >
              {thisWeekCount}
            </div>
          </div>
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: 'var(--muted)', color: 'var(--foreground)' }}
          >
            <Clock className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* 3. Search and Filter Toolbar */}
      <div
        className="flex flex-col md:flex-row md:items-center justify-between gap-3.5 p-3 sm:p-4 rounded-2xl border"
        style={{
          backgroundColor: 'var(--card)',
          borderColor: 'var(--border)',
        }}
      >
        {/* Search Input */}
        <div className="relative flex-1">
          <div
            className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none"
            style={{ color: 'var(--muted-foreground)' }}
          >
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search messages by name, email, or subject..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs sm:text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#aff33e] focus:border-[#aff33e]"
            style={{
              backgroundColor: 'var(--muted)',
              borderColor: 'var(--border)',
              color: 'var(--foreground)',
            }}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter & Sort Controls */}
        <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap">
          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
            className="px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#aff33e]"
            style={{
              backgroundColor: 'var(--muted)',
              borderColor: 'var(--border)',
              color: 'var(--foreground)',
            }}
          >
            <option value="all">All Messages</option>
            <option value="unread">Unread Only</option>
            <option value="read">Read Only</option>
          </select>

          {/* Sort Filter */}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as any)}
            className="px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#aff33e]"
            style={{
              backgroundColor: 'var(--muted)',
              borderColor: 'var(--border)',
              color: 'var(--foreground)',
            }}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>

      {/* 4. Messages List Content */}
      {filteredMessages.length === 0 ? (
        /* Empty State */
        <div
          className="flex flex-col items-center justify-center p-12 text-center rounded-2xl border border-dashed"
          style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border)',
          }}
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
            style={{ backgroundColor: 'rgba(175, 243, 62, 0.15)' }}
          >
            <MessageSquare className="w-7 h-7 text-[#aff33e]" />
          </div>
          <h3
            className="font-bold text-base sm:text-lg mb-1"
            style={{ color: 'var(--foreground)' }}
          >
            No messages found
          </h3>
          <p
            className="text-xs sm:text-sm max-w-sm mb-5"
            style={{ color: 'var(--muted-foreground)' }}
          >
            {searchQuery
              ? `No messages matched "${searchQuery}". Try changing your search or filter.`
              : 'Your inbox is currently clear.'}
          </p>
          {(searchQuery || statusFilter !== 'all') && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setStatusFilter('all');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-black bg-[#aff33e] hover:bg-[#a2e535] transition-all cursor-pointer"
            >
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      ) : (
        /* Messages List View */
        <div className="space-y-3">
          {filteredMessages.map((msg) => {
            const isUnread = msg.status === 'unread';

            return (
              <div
                key={msg.id}
                onClick={() => handleOpenMessage(msg)}
                className={`group relative flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer hover:-translate-y-0.5 hover:shadow-md ${
                  isUnread ? 'border-l-4 border-l-[#aff33e]' : ''
                }`}
                style={{
                  backgroundColor: isUnread
                    ? 'var(--card)'
                    : 'var(--card)',
                  borderColor: 'var(--border)',
                }}
              >
                {/* Left Info: Avatar + Details */}
                <div className="flex items-start sm:items-center gap-3.5 min-w-0 flex-1">
                  {/* Sender Avatar */}
                  <div
                    className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-xs shadow-sm mt-0.5 sm:mt-0"
                    style={{
                      backgroundColor: isUnread ? '#aff33e' : 'var(--muted)',
                      color: isUnread ? '#000000' : 'var(--foreground)',
                    }}
                  >
                    {msg.initial}
                  </div>

                  {/* Sender Name, Subject & Preview */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className={`font-semibold text-sm leading-tight ${
                          isUnread ? 'font-bold' : ''
                        }`}
                        style={{ color: 'var(--foreground)' }}
                      >
                        {msg.name}
                      </span>
                      <span
                        className="text-xs truncate"
                        style={{ color: 'var(--muted-foreground)' }}
                      >
                        &lt;{msg.email}&gt;
                      </span>
                      {isUnread && (
                        <span
                          className="px-2 py-0.5 rounded-full text-[10px] font-bold"
                          style={{
                            backgroundColor: 'rgba(175, 243, 62, 0.2)',
                            color: 'var(--foreground)',
                          }}
                        >
                          Unread
                        </span>
                      )}
                    </div>

                    <div
                      className="font-medium text-xs sm:text-sm mt-1 truncate"
                      style={{ color: 'var(--foreground)' }}
                    >
                      {msg.subject}
                    </div>

                    <p
                      className="text-xs truncate mt-0.5 line-clamp-1"
                      style={{
                        color: 'var(--muted-foreground)',
                        margin: 0,
                      }}
                    >
                      {msg.message.replace(/\n+/g, ' ')}
                    </p>
                  </div>
                </div>

                {/* Right Info: Timestamp & Actions */}
                <div className="flex items-center justify-between sm:justify-end gap-3 flex-shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0" style={{ borderColor: 'var(--border)' }}>
                  <span
                    className="text-[11px] flex items-center gap-1"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    <Clock className="w-3 h-3" />
                    {msg.date} • {msg.time}
                  </span>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-1.5 relative">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenMessage(msg);
                      }}
                      className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold text-[#78b515] dark:text-[#aff33e] hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      <span>View</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {/* Three-Dot Menu Trigger */}
                    <div className="relative">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenMenuId(openMenuId === msg.id ? null : msg.id);
                        }}
                        aria-label="Message options"
                        className="p-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
                        style={{ color: 'var(--muted-foreground)' }}
                      >
                        <MoreVertical className="w-4 h-4" />
                      </button>

                      {/* Dropdown Menu */}
                      {openMenuId === msg.id && (
                        <div
                          className="absolute right-0 top-full mt-1 w-40 rounded-xl border shadow-xl py-1 z-30 animate-in fade-in zoom-in-95 duration-150"
                          style={{
                            backgroundColor: 'var(--card)',
                            borderColor: 'var(--border)',
                          }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <button
                            type="button"
                            onClick={() => handleOpenMessage(msg)}
                            className="w-full text-left px-3 py-2 text-xs font-medium hover:bg-black/5 dark:hover:bg-white/5 flex items-center gap-2 cursor-pointer"
                            style={{ color: 'var(--foreground)' }}
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>View Message</span>
                          </button>
                          <button
                            type="button"
                            onClick={(e) => handleToggleRead(msg.id, e)}
                            className="w-full text-left px-3 py-2 text-xs font-medium hover:bg-black/5 dark:hover:bg-white/5 flex items-center gap-2 cursor-pointer"
                            style={{ color: 'var(--foreground)' }}
                          >
                            <MailOpen className="w-3.5 h-3.5 text-[#aff33e]" />
                            <span>
                              {isUnread ? 'Mark as Read' : 'Mark as Unread'}
                            </span>
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setDeleteConfirmItem(msg);
                              setOpenMenuId(null);
                            }}
                            className="w-full text-left px-3 py-2 text-xs font-medium text-red-500 hover:bg-red-500/10 flex items-center gap-2 cursor-pointer border-t"
                            style={{ borderColor: 'var(--border)' }}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Delete</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 5. Pagination Controls UI */}
      {filteredMessages.length > 0 && (
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t"
          style={{ borderColor: 'var(--border)' }}
        >
          <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
            Showing 1–{filteredMessages.length} of {totalCount} messages
          </span>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-xl border text-xs font-medium disabled:opacity-40 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                color: 'var(--foreground)',
              }}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {[1, 2, 3].map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setCurrentPage(p)}
                className={`w-8 h-8 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  currentPage === p
                    ? 'bg-[#aff33e] text-black shadow-sm'
                    : 'border hover:bg-black/5 dark:hover:bg-white/5'
                }`}
                style={
                  currentPage !== p
                    ? {
                        backgroundColor: 'var(--card)',
                        borderColor: 'var(--border)',
                        color: 'var(--foreground)',
                      }
                    : {}
                }
              >
                {p}
              </button>
            ))}

            <span className="px-1 text-xs text-muted-foreground">...</span>

            <button
              type="button"
              onClick={() => setCurrentPage(16)}
              className="w-8 h-8 rounded-xl border text-xs font-bold hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                color: 'var(--foreground)',
              }}
            >
              16
            </button>

            <button
              type="button"
              onClick={() => setCurrentPage(Math.min(16, currentPage + 1))}
              className="p-2 rounded-xl border text-xs font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                color: 'var(--foreground)',
              }}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* 6. MODAL: Message Detail Dialog */}
      {selectedMessage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedMessage(null)}
        >
          <div
            className="relative max-w-2xl w-full rounded-2xl border shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
            style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              className="flex items-center justify-between px-6 py-4 border-b"
              style={{ borderColor: 'var(--border)' }}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(175, 243, 62, 0.15)' }}
                >
                  <MessageSquare className="w-4 h-4 text-[#aff33e]" />
                </div>
                <h3 className="font-bold text-base" style={{ color: 'var(--foreground)' }}>
                  Message Details
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedMessage(null)}
                className="p-1.5 rounded-xl hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
                style={{ color: 'var(--muted-foreground)' }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
              {/* Sender Credentials Box */}
              <div
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl border"
                style={{
                  backgroundColor: 'var(--muted)',
                  borderColor: 'var(--border)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm bg-[#aff33e] text-black shadow-sm"
                  >
                    {selectedMessage.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm" style={{ color: 'var(--foreground)' }}>
                      {selectedMessage.name}
                    </h4>
                    <a
                      href={`mailto:${selectedMessage.email}`}
                      className="text-xs text-[#78b515] dark:text-[#aff33e] hover:underline"
                    >
                      {selectedMessage.email}
                    </a>
                  </div>
                </div>

                <div className="text-left sm:text-right text-xs" style={{ color: 'var(--muted-foreground)' }}>
                  <div className="flex items-center sm:justify-end gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{selectedMessage.date}</span>
                  </div>
                  <div className="text-[11px] mt-0.5">{selectedMessage.time}</div>
                </div>
              </div>

              {/* Subject Title */}
              <div>
                <span className="text-xs font-semibold block mb-1" style={{ color: 'var(--muted-foreground)' }}>
                  Subject
                </span>
                <h4
                  className="text-base sm:text-lg font-bold"
                  style={{ color: 'var(--foreground)' }}
                >
                  {selectedMessage.subject}
                </h4>
              </div>

              {/* Message Content */}
              <div>
                <span className="text-xs font-semibold block mb-1.5" style={{ color: 'var(--muted-foreground)' }}>
                  Message
                </span>
                <div
                  className="p-4 rounded-xl border text-sm leading-relaxed whitespace-pre-line"
                  style={{
                    backgroundColor: 'var(--muted)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)',
                  }}
                >
                  {selectedMessage.message}
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div
              className="flex items-center justify-between px-6 py-4 border-t"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
              }}
            >
              {/* Delete Trigger */}
              <button
                type="button"
                onClick={() => {
                  setDeleteConfirmItem(selectedMessage);
                }}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold text-red-500 hover:bg-red-500/10 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Trash2 className="w-4 h-4" />
                <span>Delete</span>
              </button>

              {/* Right Action: Toggle Read / Reply simulation */}
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => handleToggleRead(selectedMessage.id)}
                  className="px-4 py-2 rounded-xl border text-xs font-semibold hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer flex items-center gap-1.5"
                  style={{
                    backgroundColor: 'var(--card)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)',
                  }}
                >
                  <MailOpen className="w-3.5 h-3.5 text-[#aff33e]" />
                  <span>
                    {selectedMessage.status === 'unread'
                      ? 'Mark as Read'
                      : 'Mark as Unread'}
                  </span>
                </button>

                <a
                  href={`mailto:${selectedMessage.email}?subject=Re: ${encodeURIComponent(selectedMessage.subject)}`}
                  className="px-5 py-2 rounded-xl text-xs font-bold text-black bg-[#aff33e] hover:bg-[#a2e535] transition-all cursor-pointer shadow-sm flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Reply via Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 7. MODAL: Delete Confirmation Dialog */}
      {deleteConfirmItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setDeleteConfirmItem(null)}
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
              <Trash2 className="w-6 h-6" />
            </div>

            <h3 className="font-bold text-base mb-1" style={{ color: 'var(--foreground)' }}>
              Delete Message?
            </h3>
            <p className="text-xs text-muted-foreground mb-6" style={{ color: 'var(--muted-foreground)' }}>
              Are you sure you want to delete the message from <span className="font-bold text-foreground">"{deleteConfirmItem.name}"</span>? This action cannot be undone.
            </p>

            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setDeleteConfirmItem(null)}
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
                onClick={handleConfirmDelete}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-all cursor-pointer flex-1 shadow-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
