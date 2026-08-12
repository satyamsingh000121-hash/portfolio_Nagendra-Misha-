import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const assetPath = searchParams.get('path');

  if (!assetPath) {
    return new NextResponse('Asset not specified', { status: 400 });
  }

  // Prevent path traversal
  const safePath = path.normalize(assetPath).replace(/^(\.\.[\/\\])+/, '');
  const fullPath = path.join(process.cwd(), 'test111', safePath);

  if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
    const fileBuffer = fs.readFileSync(fullPath);
    
    // Determine content type
    const ext = path.extname(fullPath).toLowerCase();
    let contentType = 'application/octet-stream';
    if (ext === '.css') contentType = 'text/css';
    else if (ext === '.js') contentType = 'application/javascript';
    else if (ext === '.png') contentType = 'image/png';
    else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
    else if (ext === '.gif') contentType = 'image/gif';
    else if (ext === '.svg') contentType = 'image/svg+xml';
    else if (ext === '.woff' || ext === '.woff2') contentType = 'font/woff2';

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000',
      },
    });
  }

  return new NextResponse('Asset not found', { status: 404 });
}
