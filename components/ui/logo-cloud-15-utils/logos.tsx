import React from "react";

export function Logo01(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-11 sm:h-12 md:h-14 w-auto" {...props}>
      <defs>
        <linearGradient id="forbesGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#EF4444" />
        </linearGradient>
      </defs>
      <rect x="2" y="6" width="28" height="28" rx="7" fill="url(#forbesGrad)" />
      <text x="8" y="27" fontSize="19" fontWeight="900" fontFamily="sans-serif" fill="#FFFFFF">F</text>
      <text x="36" y="27" fontSize="22" fontWeight="900" fontFamily="sans-serif" fill="url(#forbesGrad)">Forbes</text>
    </svg>
  );
}

export function Logo02(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 190 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-11 sm:h-12 md:h-14 w-auto" {...props}>
      <defs>
        <linearGradient id="nytGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#E0F2FE" />
        </linearGradient>
      </defs>
      <text x="5" y="27" fontSize="19" fontWeight="bold" fontFamily="serif" fill="url(#nytGrad)">The New York Times</text>
    </svg>
  );
}

export function Logo03(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-11 sm:h-12 md:h-14 w-auto" {...props}>
      <defs>
        <linearGradient id="goopGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F43F5E" />
          <stop offset="100%" stopColor="#FB7185" />
        </linearGradient>
      </defs>
      <text x="5" y="28" fontSize="26" fontWeight="900" fontFamily="sans-serif" letterSpacing="2" fill="url(#goopGrad)">goop</text>
    </svg>
  );
}

export function Logo04(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-11 sm:h-12 md:h-14 w-auto" {...props}>
      <defs>
        <linearGradient id="todayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#FBBF24" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="13" stroke="url(#todayGrad)" strokeWidth="4" fill="none" />
      <circle cx="20" cy="20" r="5.5" fill="url(#todayGrad)" />
      <text x="44" y="27" fontSize="21" fontWeight="900" fontFamily="sans-serif" letterSpacing="1.5" fill="url(#todayGrad)">TODAY</text>
    </svg>
  );
}

export function Logo05(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-11 sm:h-12 md:h-14 w-auto" {...props}>
      <defs>
        <linearGradient id="oprahGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <text x="5" y="28" fontSize="25" fontWeight="900" fontFamily="serif" fontStyle="italic" fill="url(#oprahGrad)">Oprah</text>
    </svg>
  );
}

export function Logo06(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-11 sm:h-12 md:h-14 w-auto" {...props}>
      <rect x="4" y="6" width="28" height="28" rx="5" fill="#EF4444" />
      <text x="11" y="27" fontSize="18" fontWeight="900" fill="#FFFFFF" fontFamily="sans-serif">B</text>
      <rect x="40" y="6" width="28" height="28" rx="5" fill="#EF4444" />
      <text x="47" y="27" fontSize="18" fontWeight="900" fill="#FFFFFF" fontFamily="sans-serif">B</text>
      <rect x="76" y="6" width="28" height="28" rx="5" fill="#EF4444" />
      <text x="83" y="27" fontSize="18" fontWeight="900" fill="#FFFFFF" fontFamily="sans-serif">C</text>
    </svg>
  );
}

export function Logo07(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-11 sm:h-12 md:h-14 w-auto" {...props}>
      <defs>
        <linearGradient id="bazaarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#67E8F9" />
        </linearGradient>
      </defs>
      <text x="5" y="27" fontSize="20" fontWeight="900" fontFamily="serif" letterSpacing="2.5" fill="url(#bazaarGrad)">BAZAAR</text>
    </svg>
  );
}

export function Logo08(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-11 sm:h-12 md:h-14 w-auto" {...props}>
      <defs>
        <linearGradient id="successGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#34D399" />
        </linearGradient>
      </defs>
      <text x="5" y="27" fontSize="21" fontWeight="900" fontFamily="sans-serif" letterSpacing="2.5" fill="url(#successGrad)">SUCCESS</text>
    </svg>
  );
}
