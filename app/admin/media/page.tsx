import React from 'react';

export default function MediaPage() {
  return (
    <div className="flex flex-col gap-1.5 pt-2">
      <h1
        style={{
          color: 'var(--foreground)',
          fontSize: '24px',
          fontWeight: 700,
          lineHeight: '1.3',
          margin: 0,
          padding: 0,
        }}
      >
        Media / Gallery
      </h1>
      <p
        style={{
          color: 'var(--muted-foreground)',
          fontSize: '14px',
          lineHeight: '1.5',
          margin: 0,
          padding: 0,
        }}
      >
        Manage portfolio images, assets, and media gallery
      </p>
    </div>
  );
}
