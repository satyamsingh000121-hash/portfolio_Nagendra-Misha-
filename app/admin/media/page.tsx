'use client';

import React, { useState, useMemo } from 'react';
import {
  Image as ImageIcon,
  Video,
  Plus,
  Search,
  LayoutGrid,
  List,
  Eye,
  Edit2,
  Trash2,
  X,
  UploadCloud,
  CheckCircle2,
  Filter,
  Layers,
  Calendar,
  Sparkles,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

interface MediaItem {
  id: string;
  title: string;
  type: 'image' | 'video';
  category: string;
  date: string;
  size: string;
  dimensions: string;
  src: string;
}

const initialMediaList: MediaItem[] = [
  {
    id: '1',
    title: 'Business Growth Summit',
    type: 'image',
    category: 'Event',
    date: 'Aug 16, 2026',
    size: '1.4 MB',
    dimensions: '1920 x 1080',
    src: '/images/Building Solutions. Delivering Impact..jpg',
  },
  {
    id: '2',
    title: 'Business Coaching Session',
    type: 'image',
    category: 'Coaching',
    date: 'Aug 14, 2026',
    size: '730 KB',
    dimensions: '1200 x 1200',
    src: '/images/Nagendra mishra.png',
  },
  {
    id: '3',
    title: 'Leadership Workshop',
    type: 'image',
    category: 'Workshop',
    date: 'Aug 12, 2026',
    size: '1.3 MB',
    dimensions: '1920 x 1080',
    src: "/images/Technology is not just about code. It's about creating solutions that make an impact..jpg",
  },
  {
    id: '4',
    title: 'Entrepreneurship Event',
    type: 'image',
    category: 'Event',
    date: 'Aug 10, 2026',
    size: '915 KB',
    dimensions: '1600 x 900',
    src: '/images/new2.png',
  },
  {
    id: '5',
    title: 'Growth Expo',
    type: 'image',
    category: 'Showcase',
    date: 'Aug 08, 2026',
    size: '1.4 MB',
    dimensions: '1920 x 1080',
    src: '/images/253.png',
  },
  {
    id: '6',
    title: 'Business Networking',
    type: 'image',
    category: 'Networking',
    date: 'Aug 05, 2026',
    size: '155 KB',
    dimensions: '1080 x 1080',
    src: '/images/1-Photoroom.png',
  },
  {
    id: '7',
    title: 'Executive Meeting',
    type: 'video',
    category: 'Keynote',
    date: 'Aug 03, 2026',
    size: '24.5 MB',
    dimensions: '1920 x 1080',
    src: '/images/ChatGPT Image Aug 8, 2026, 10_11_43 AM.png',
  },
  {
    id: '8',
    title: 'Keynote Session',
    type: 'video',
    category: 'Keynote',
    date: 'Jul 29, 2026',
    size: '18.2 MB',
    dimensions: '1920 x 1080',
    src: '/images/ChatGPT Image Aug 10, 2026, 10_44_09 PM.png',
  },
  {
    id: '9',
    title: 'Founder Meetup',
    type: 'image',
    category: 'Meetup',
    date: 'Jul 25, 2026',
    size: '19 KB',
    dimensions: '800 x 1200',
    src: '/images/67067870b0addf477a398087_Everything-Is-Figureoutable-Paperback-Book.avif',
  },
  {
    id: '10',
    title: 'Strategic Business Session',
    type: 'image',
    category: 'Strategy',
    date: 'Jul 20, 2026',
    size: '1.0 MB',
    dimensions: '1600 x 900',
    src: '/images/设计 让复杂 变简单 让品牌 更有力量.png',
  },
];

export default function MediaPage() {
  const [mediaList, setMediaList] = useState<MediaItem[]>(initialMediaList);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'image' | 'video'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Interactive Modal States
  const [previewItem, setPreviewItem] = useState<MediaItem | null>(null);
  const [editItem, setEditItem] = useState<MediaItem | null>(null);
  const [deleteItem, setDeleteItem] = useState<MediaItem | null>(null);
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  // Form states for Edit & Upload
  const [editForm, setEditForm] = useState({ title: '', category: 'Event' });
  const [uploadForm, setUploadForm] = useState({
    title: '',
    category: 'Event',
    type: 'image' as 'image' | 'video',
  });

  // UI Toast Feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Filtered & Searched media
  const filteredMedia = useMemo(() => {
    return mediaList.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = filterType === 'all' || item.type === filterType;
      return matchesSearch && matchesType;
    });
  }, [mediaList, searchQuery, filterType]);

  // Statistics calculation
  const totalCount = mediaList.length;
  const imageCount = mediaList.filter((m) => m.type === 'image').length;
  const videoCount = mediaList.filter((m) => m.type === 'video').length;

  // Handlers for Edit
  const openEditModal = (item: MediaItem) => {
    setEditItem(item);
    setEditForm({ title: item.title, category: item.category });
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editItem) return;
    setMediaList((prev) =>
      prev.map((m) =>
        m.id === editItem.id
          ? { ...m, title: editForm.title, category: editForm.category }
          : m
      )
    );
    setEditItem(null);
    showToast('Media details updated successfully');
  };

  // Handlers for Delete
  const handleConfirmDelete = () => {
    if (!deleteItem) return;
    setMediaList((prev) => prev.filter((m) => m.id !== deleteItem.id));
    setDeleteItem(null);
    showToast('Media deleted successfully');
  };

  // Handlers for Upload Simulation
  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: MediaItem = {
      id: Date.now().toString(),
      title: uploadForm.title || 'New Uploaded Media',
      type: uploadForm.type,
      category: uploadForm.category,
      date: 'Today',
      size: uploadForm.type === 'video' ? '12.4 MB' : '1.2 MB',
      dimensions: '1920 x 1080',
      src: '/images/Nagendra mishra.png',
    };
    setMediaList([newItem, ...mediaList]);
    setIsUploadOpen(false);
    setUploadForm({ title: '', category: 'Event', type: 'image' });
    showToast('Media uploaded to gallery');
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
            Media / Gallery
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
            Manage your portfolio images, photography assets, and media showcase.
          </p>
        </div>

        {/* Upload Media Button */}
        <button
          type="button"
          onClick={() => setIsUploadOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-black bg-[#aff33e] hover:bg-[#a2e535] active:scale-95 transition-all shadow-sm cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Upload Media</span>
        </button>
      </div>

      {/* 2. Media Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Total Media Card */}
        <div
          className="flex items-center justify-between p-4 sm:p-5 rounded-2xl border transition-all"
          style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border)',
          }}
        >
          <div>
            <span className="text-xs font-semibold" style={{ color: 'var(--muted-foreground)' }}>
              Total Media
            </span>
            <div
              className="mt-1"
              style={{
                color: 'var(--foreground)',
                fontSize: '24px',
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
            <Layers className="w-5 h-5 text-[#aff33e]" />
          </div>
        </div>

        {/* Images Card */}
        <div
          className="flex items-center justify-between p-4 sm:p-5 rounded-2xl border transition-all"
          style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border)',
          }}
        >
          <div>
            <span className="text-xs font-semibold" style={{ color: 'var(--muted-foreground)' }}>
              Images
            </span>
            <div
              className="mt-1"
              style={{
                color: 'var(--foreground)',
                fontSize: '24px',
                fontWeight: 800,
                lineHeight: 1.1,
              }}
            >
              {imageCount}
            </div>
          </div>
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: 'var(--muted)', color: 'var(--foreground)' }}
          >
            <ImageIcon className="w-5 h-5" />
          </div>
        </div>

        {/* Videos Card */}
        <div
          className="flex items-center justify-between p-4 sm:p-5 rounded-2xl border transition-all"
          style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border)',
          }}
        >
          <div>
            <span className="text-xs font-semibold" style={{ color: 'var(--muted-foreground)' }}>
              Videos
            </span>
            <div
              className="mt-1"
              style={{
                color: 'var(--foreground)',
                fontSize: '24px',
                fontWeight: 800,
                lineHeight: 1.1,
              }}
            >
              {videoCount}
            </div>
          </div>
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: 'var(--muted)', color: 'var(--foreground)' }}
          >
            <Video className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* 3. Search, Filter & View Controls Toolbar */}
      <div
        className="flex flex-col md:flex-row md:items-center justify-between gap-3.5 p-3 sm:p-4 rounded-2xl border"
        style={{
          backgroundColor: 'var(--card)',
          borderColor: 'var(--border)',
        }}
      >
        {/* Left: Search Input */}
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
            placeholder="Search media by title or category..."
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

        {/* Right: Filter Buttons & Grid/List View Toggles */}
        <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap">
          {/* Type Filter Dropdown */}
          <div className="relative flex items-center">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value as any)}
              className="px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#aff33e]"
              style={{
                backgroundColor: 'var(--muted)',
                borderColor: 'var(--border)',
                color: 'var(--foreground)',
              }}
            >
              <option value="all">All Media</option>
              <option value="image">Images Only</option>
              <option value="video">Videos Only</option>
            </select>
          </div>

          {/* Grid / List View Toggle */}
          <div
            className="flex items-center p-1 rounded-xl border ml-auto sm:ml-0"
            style={{
              backgroundColor: 'var(--muted)',
              borderColor: 'var(--border)',
            }}
          >
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              aria-label="Grid View"
              className={`p-2 rounded-lg transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[#aff33e] text-black shadow-sm font-bold'
                  : 'hover:bg-black/5 dark:hover:bg-white/5'
              }`}
              style={
                viewMode !== 'grid' ? { color: 'var(--muted-foreground)' } : {}
              }
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setViewMode('list')}
              aria-label="List View"
              className={`p-2 rounded-lg transition-all cursor-pointer ${
                viewMode === 'list'
                  ? 'bg-[#aff33e] text-black shadow-sm font-bold'
                  : 'hover:bg-black/5 dark:hover:bg-white/5'
              }`}
              style={
                viewMode !== 'list' ? { color: 'var(--muted-foreground)' } : {}
              }
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 4. Gallery Content Display */}
      {filteredMedia.length === 0 ? (
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
            <ImageIcon className="w-7 h-7 text-[#aff33e]" />
          </div>
          <h3
            className="font-bold text-base sm:text-lg mb-1"
            style={{ color: 'var(--foreground)' }}
          >
            No media found
          </h3>
          <p
            className="text-xs sm:text-sm max-w-sm mb-5"
            style={{ color: 'var(--muted-foreground)' }}
          >
            {searchQuery
              ? `No media matches "${searchQuery}". Try clearing search or filters.`
              : 'Upload your first image to start building your portfolio gallery.'}
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setFilterType('all');
              setIsUploadOpen(true);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-black bg-[#aff33e] hover:bg-[#a2e535] transition-all cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Upload Media</span>
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        /* GRID VIEW (4 cols desktop, 2-3 tablet, 1-2 mobile) */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
              }}
            >
              {/* Media Thumbnail Container (16:10 aspect ratio) */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/5 dark:bg-white/5 flex items-center justify-center">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />

                {/* Type Badge */}
                <div className="absolute top-2.5 left-2.5">
                  <span
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold shadow-sm backdrop-blur-md"
                    style={{
                      backgroundColor:
                        item.type === 'video' ? 'rgba(0, 0, 0, 0.75)' : 'rgba(255, 255, 255, 0.85)',
                      color: item.type === 'video' ? '#aff33e' : '#0f172a',
                    }}
                  >
                    {item.type === 'video' ? (
                      <Video className="w-3 h-3 text-[#aff33e]" />
                    ) : (
                      <ImageIcon className="w-3 h-3 text-[#0f172a]" />
                    )}
                    <span className="capitalize">{item.category}</span>
                  </span>
                </div>

                {/* Hover Quick Action Buttons Overlay */}
                <div
                  className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 p-2"
                >
                  {/* View Preview Button */}
                  <button
                    type="button"
                    onClick={() => setPreviewItem(item)}
                    aria-label="Preview Media"
                    className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform shadow-md cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  {/* Edit Button */}
                  <button
                    type="button"
                    onClick={() => openEditModal(item)}
                    aria-label="Edit Media"
                    className="w-8 h-8 rounded-full bg-[#aff33e] text-black flex items-center justify-center hover:scale-110 transition-transform shadow-md cursor-pointer"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>

                  {/* Delete Button */}
                  <button
                    type="button"
                    onClick={() => setDeleteItem(item)}
                    aria-label="Delete Media"
                    className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Media Card Details Footer */}
              <div className="p-3.5 flex flex-col justify-between flex-1">
                <h4
                  className="truncate font-semibold text-xs sm:text-sm leading-snug"
                  style={{ color: 'var(--foreground)' }}
                  title={item.title}
                >
                  {item.title}
                </h4>

                <div
                  className="flex items-center justify-between text-[11px] mt-2 pt-2 border-t"
                  style={{
                    color: 'var(--muted-foreground)',
                    borderColor: 'var(--border)',
                  }}
                >
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                  <span>{item.size}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* LIST VIEW */
        <div
          className="rounded-2xl border overflow-hidden transition-all"
          style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border)',
          }}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead
                className="border-b text-[11px] uppercase tracking-wider font-semibold"
                style={{
                  backgroundColor: 'var(--muted)',
                  borderColor: 'var(--border)',
                  color: 'var(--muted-foreground)',
                }}
              >
                <tr>
                  <th className="py-3 px-4">Thumbnail</th>
                  <th className="py-3 px-4">Media Title</th>
                  <th className="py-3 px-4 hidden sm:table-cell">Category</th>
                  <th className="py-3 px-4 hidden md:table-cell">Type</th>
                  <th className="py-3 px-4 hidden md:table-cell">Date</th>
                  <th className="py-3 px-4 hidden lg:table-cell">Dimensions</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y" style={{ borderColor: 'var(--border)' }}>
                {filteredMedia.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors group"
                  >
                    {/* Thumbnail */}
                    <td className="py-2.5 px-4">
                      <div className="w-12 h-9 rounded-lg overflow-hidden border bg-muted flex-shrink-0">
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>

                    {/* Title */}
                    <td className="py-2.5 px-4 font-semibold" style={{ color: 'var(--foreground)' }}>
                      <div className="max-w-[200px] sm:max-w-xs truncate" title={item.title}>
                        {item.title}
                      </div>
                      <div className="text-[11px] font-normal sm:hidden text-muted-foreground">
                        {item.category} • {item.date}
                      </div>
                    </td>

                    {/* Category */}
                    <td className="py-2.5 px-4 hidden sm:table-cell">
                      <span
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium"
                        style={{
                          backgroundColor: 'var(--muted)',
                          color: 'var(--foreground)',
                        }}
                      >
                        {item.category}
                      </span>
                    </td>

                    {/* Type */}
                    <td className="py-2.5 px-4 hidden md:table-cell capitalize" style={{ color: 'var(--muted-foreground)' }}>
                      {item.type}
                    </td>

                    {/* Date */}
                    <td className="py-2.5 px-4 hidden md:table-cell text-xs" style={{ color: 'var(--muted-foreground)' }}>
                      {item.date}
                    </td>

                    {/* Dimensions */}
                    <td className="py-2.5 px-4 hidden lg:table-cell text-xs" style={{ color: 'var(--muted-foreground)' }}>
                      {item.dimensions}
                    </td>

                    {/* Actions */}
                    <td className="py-2.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          type="button"
                          onClick={() => setPreviewItem(item)}
                          className="p-1.5 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
                          title="Preview"
                          style={{ color: 'var(--foreground)' }}
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => openEditModal(item)}
                          className="p-1.5 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer text-[#78b515] dark:text-[#aff33e]"
                          title="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeleteItem(item)}
                          className="p-1.5 rounded-lg hover:bg-red-500/10 text-red-500 transition-colors cursor-pointer"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 5. MODAL: Image Preview Lightbox */}
      {previewItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setPreviewItem(null)}
        >
          <div
            className="relative max-w-3xl w-full rounded-2xl border overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
            style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              className="flex items-center justify-between px-5 py-3.5 border-b"
              style={{ borderColor: 'var(--border)' }}
            >
              <div>
                <h3 className="font-bold text-sm sm:text-base leading-tight" style={{ color: 'var(--foreground)' }}>
                  {previewItem.title}
                </h3>
                <span className="text-[11px] text-muted-foreground">
                  {previewItem.category} • {previewItem.date}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setPreviewItem(null)}
                className="p-1.5 rounded-xl hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
                style={{ color: 'var(--foreground)' }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Large Image Preview Area */}
            <div className="relative bg-black flex items-center justify-center max-h-[60vh] overflow-hidden">
              <img
                src={previewItem.src}
                alt={previewItem.title}
                className="w-full h-full object-contain max-h-[60vh]"
              />
            </div>

            {/* Modal Footer Info */}
            <div
              className="flex items-center justify-between px-5 py-3 border-t text-xs"
              style={{
                backgroundColor: 'var(--muted)',
                borderColor: 'var(--border)',
                color: 'var(--muted-foreground)',
              }}
            >
              <span>Dimensions: {previewItem.dimensions}</span>
              <span>Size: {previewItem.size}</span>
            </div>
          </div>
        </div>
      )}

      {/* 6. MODAL: Edit Media Details */}
      {editItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setEditItem(null)}
        >
          <div
            className="relative max-w-md w-full rounded-2xl border p-6 shadow-2xl animate-in zoom-in-95 duration-200"
            style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b mb-5" style={{ borderColor: 'var(--border)' }}>
              <h3 className="font-bold text-base" style={{ color: 'var(--foreground)' }}>
                Edit Media
              </h3>
              <button
                type="button"
                onClick={() => setEditItem(null)}
                className="p-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
                style={{ color: 'var(--muted-foreground)' }}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--foreground)' }}>
                  Media Title
                </label>
                <input
                  type="text"
                  value={editForm.title}
                  onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#aff33e]"
                  style={{
                    backgroundColor: 'var(--muted)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)',
                  }}
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--foreground)' }}>
                  Category
                </label>
                <select
                  value={editForm.category}
                  onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#aff33e] cursor-pointer"
                  style={{
                    backgroundColor: 'var(--muted)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)',
                  }}
                >
                  <option value="Event">Event</option>
                  <option value="Coaching">Coaching</option>
                  <option value="Workshop">Workshop</option>
                  <option value="Showcase">Showcase</option>
                  <option value="Networking">Networking</option>
                  <option value="Keynote">Keynote</option>
                  <option value="Strategy">Strategy</option>
                  <option value="Meetup">Meetup</option>
                </select>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t mt-5" style={{ borderColor: 'var(--border)' }}>
                <button
                  type="button"
                  onClick={() => setEditItem(null)}
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
                  className="px-5 py-2 rounded-xl text-xs font-bold text-black bg-[#aff33e] hover:bg-[#a2e535] transition-all cursor-pointer shadow-sm"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 7. MODAL: Delete Confirmation Dialog */}
      {deleteItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setDeleteItem(null)}
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
              Delete Media?
            </h3>
            <p className="text-xs text-muted-foreground mb-6" style={{ color: 'var(--muted-foreground)' }}>
              Are you sure you want to delete <span className="font-bold text-foreground">"{deleteItem.title}"</span>? This action cannot be undone.
            </p>

            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setDeleteItem(null)}
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

      {/* 8. MODAL: Upload Media Dialog */}
      {isUploadOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsUploadOpen(false)}
        >
          <div
            className="relative max-w-lg w-full rounded-2xl border p-6 shadow-2xl animate-in zoom-in-95 duration-200"
            style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b mb-5" style={{ borderColor: 'var(--border)' }}>
              <div className="flex items-center gap-2">
                <UploadCloud className="w-5 h-5 text-[#aff33e]" />
                <h3 className="font-bold text-base" style={{ color: 'var(--foreground)' }}>
                  Upload Media
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsUploadOpen(false)}
                className="p-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
                style={{ color: 'var(--muted-foreground)' }}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleUploadSubmit} className="space-y-4">
              {/* Drag & Drop Area */}
              <div
                className="border-2 border-dashed rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all hover:border-[#aff33e] group"
                style={{
                  backgroundColor: 'var(--muted)',
                  borderColor: 'var(--border)',
                }}
              >
                <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <UploadCloud className="w-6 h-6 text-[#aff33e]" />
                </div>
                <div className="text-sm font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  Drag & drop your media here
                </div>
                <div className="text-xs mb-3" style={{ color: 'var(--muted-foreground)' }}>
                  or click to browse from device (JPG, PNG, WebP, MP4)
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded-full border bg-card text-muted-foreground">
                  Max file size: 50MB
                </span>
              </div>

              {/* Title Input */}
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--foreground)' }}>
                  Media Title
                </label>
                <input
                  type="text"
                  value={uploadForm.title}
                  onChange={(e) => setUploadForm({ ...uploadForm, title: e.target.value })}
                  placeholder="e.g. Annual Growth Summit"
                  className="w-full px-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#aff33e]"
                  style={{
                    backgroundColor: 'var(--muted)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)',
                  }}
                  required
                />
              </div>

              {/* Category & Type Subgrid */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--foreground)' }}>
                    Category
                  </label>
                  <select
                    value={uploadForm.category}
                    onChange={(e) => setUploadForm({ ...uploadForm, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#aff33e] cursor-pointer"
                    style={{
                      backgroundColor: 'var(--muted)',
                      borderColor: 'var(--border)',
                      color: 'var(--foreground)',
                    }}
                  >
                    <option value="Event">Event</option>
                    <option value="Coaching">Coaching</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Showcase">Showcase</option>
                    <option value="Networking">Networking</option>
                    <option value="Keynote">Keynote</option>
                    <option value="Strategy">Strategy</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--foreground)' }}>
                    Media Type
                  </label>
                  <select
                    value={uploadForm.type}
                    onChange={(e) => setUploadForm({ ...uploadForm, type: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#aff33e] cursor-pointer"
                    style={{
                      backgroundColor: 'var(--muted)',
                      borderColor: 'var(--border)',
                      color: 'var(--foreground)',
                    }}
                  >
                    <option value="image">Image Asset</option>
                    <option value="video">Video Asset</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t mt-5" style={{ borderColor: 'var(--border)' }}>
                <button
                  type="button"
                  onClick={() => setIsUploadOpen(false)}
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
                  <Plus className="w-3.5 h-3.5" />
                  <span>Upload</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
