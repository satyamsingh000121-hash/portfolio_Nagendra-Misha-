import './globals.css';
import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Marie Forleo | #1 NYT Bestselling Author & Founder of B-School',
  description: 'Marie Forleo, named by Oprah as a thought leader for the next generation, helps entrepreneurs achieve financial freedom, impact & success worldwide.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  // Try test111 folder first (local dev with scraped files), then fallback to public/css
  const cssPathTest111 = path.join(
    process.cwd(),
    'test111',
    'cdn.prod.website-files.com',
    '5f2ae813361eff3ad9282b29',
    'css',
    'mfi-site-test.shared.1bb282399.min.css'
  );
  const cssPathPublic = path.join(process.cwd(), 'public', 'css', 'mfi-site.min.css');

  const cssContent = fs.existsSync(cssPathTest111)
    ? fs.readFileSync(cssPathTest111, 'utf-8')
    : fs.existsSync(cssPathPublic)
      ? fs.readFileSync(cssPathPublic, 'utf-8')
      : '';

  return (
    <html lang="en" className="w-mod-js w-mod-ix">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Prata&family=Italiana&family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Oswald:wght@200..700&family=Raleway:ital,wght@0,300..700;1,300..700&display=swap"
          rel="stylesheet"
        />
        <script src="/api/asset?path=use.typekit.net/pye4ydo.js" async />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{Typekit.load();}catch(e){}`,
          }}
        />
        <style dangerouslySetInnerHTML={{ __html: cssContent }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
