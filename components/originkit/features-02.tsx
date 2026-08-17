"use client";

import "./presence-01.css";
import RotatingEarth from "@/components/ui/wireframe-dotted-globe";
import OrbitControls from "@/components/originkit/ui/features-02/orbit-controls";

const METRICS = [
  { value: "15000 +", label: "Project delivered" },
  { value: "15 +", label: "Business running" },
  { value: "16 +", label: "Years of Experience" },
] as const;

const Presence01 = () => {
  return (
    <section id="global-presence" className="relative w-full overflow-hidden bg-[#FFFFFF] px-4 text-[#111827] sm:px-6 pt-12 pb-24 sm:pt-16 sm:pb-32 border-t border-neutral-100">
      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center">
        
        {/* Top 3D Earth Globe with Orbiting Rings */}
        <div className="relative flex flex-col items-center justify-center w-full">
          <div className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] flex items-center justify-center">
            
            {/* Ambient Radial Soft Glow */}
            <div className="pointer-events-none absolute inset-0 -m-8 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.04)_0%,transparent_70%)]" />

            {/* Orbit animation rings */}
            <OrbitControls />

            {/* Interactive Dotted Rotating Earth */}
            <div className="relative w-full h-full cursor-grab active:cursor-grabbing z-10 touch-none flex items-center justify-center">
              <RotatingEarth
                width={350}
                height={350}
                className="w-full h-full flex items-center justify-center"
              />
            </div>
            
            {/* Smooth bottom fade mask to blend lower earth into white background */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white via-white/80 to-transparent z-15" />
          </div>
        </div>

        {/* Overlay Content (Pulled UP over the lower half of the earth sphere) */}
        <div className="relative z-20 flex flex-col items-center gap-3.5 px-4 text-center -mt-28 sm:-mt-36 md:-mt-40">
          
          {/* Global Presence Badge sitting over lower earth */}
          <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap px-3.5 py-1.5 rounded-full border border-neutral-200/80 bg-white/90 shadow-sm backdrop-blur-md">
            <svg
              style={{ width: '18px', height: '18px', minWidth: '18px', maxWidth: '18px', flexShrink: 0, display: 'inline-block' }}
              width="18"
              height="18"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 2.0625C9.23233 2.0625 7.50436 2.58668 6.03459 3.56874C4.56483 4.55081 3.41929 5.94665 2.74283 7.57977C2.06637 9.21288 1.88938 11.0099 2.23423 12.7436C2.57909 14.4773 3.4303 16.0698 4.68023 17.3198C5.93017 18.5697 7.52268 19.4209 9.25638 19.7658C10.9901 20.1106 12.7871 19.9336 14.4202 19.2572C16.0533 18.5807 17.4492 17.4352 18.4313 15.9654C19.4133 14.4956 19.9375 12.7677 19.9375 11C19.935 8.6304 18.9926 6.35856 17.317 4.683C15.6414 3.00743 13.3696 2.065 11 2.0625ZM18.5625 11C18.5633 11.9702 18.3765 12.9314 18.0125 13.8308L14.1711 11.4684C14.0078 11.3676 13.8251 11.3023 13.6348 11.2767L11.6737 11.012C11.4035 10.9768 11.1289 11.0221 10.8843 11.1423C10.6397 11.2624 10.436 11.4521 10.2987 11.6875H9.54938L9.22281 11.012C9.13253 10.8239 9.00041 10.659 8.83656 10.5299C8.6727 10.4007 8.48147 10.3108 8.2775 10.267L7.59 10.1183L8.26203 8.9375H9.69805C9.93042 8.93704 10.1589 8.87793 10.3623 8.76562L11.4151 8.18469C11.5076 8.13313 11.594 8.07145 11.6729 8.00078L13.9855 5.90906C14.2173 5.70128 14.3714 5.42066 14.4224 5.11351C14.4733 4.80637 14.418 4.49103 14.2656 4.21953L14.2347 4.16367C15.5287 4.77726 16.6222 5.74526 17.3883 6.95531C18.1543 8.16537 18.5615 9.56785 18.5625 11ZM3.4375 11C3.43635 9.87595 3.68713 8.76594 4.17141 7.75156L5.14594 10.3529C5.22715 10.5683 5.36114 10.7598 5.53561 10.91C5.71008 11.1641 6.14453 11.2123L7.98617 11.6084L8.31359 12.2891C8.42722 12.5206 8.60333 12.7157 8.822 12.8523C9.04068 12.989 9.29322 13.0618 9.55109 13.0625H9.67828L9.05695 14.4573C8.94748 14.7029 8.91241 14.9752 8.9561 15.2405C8.99978 15.5058 9.1203 15.7525 9.30273 15.95L9.31477 15.962L11 17.698L10.8333 18.5573C8.85829 18.5114 6.97946 17.6954 5.59773 16.2835C4.216 14.8715 3.44078 12.9755 3.4375 11Z"
                fill="#22c55e"
              />
            </svg>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-neutral-800 whitespace-nowrap">
              Global Presence
            </span>
          </div>

          {/* Heading overlapping the lower half of Earth with Serif Display Font */}
          <h2
            className="text-3xl sm:text-5xl md:text-6xl text-[#111827] mt-1 text-center"
            style={{
              fontFamily: 'ivypresto-display, "Cormorant Garamond", "Bodoni Moda", "Playfair Display", "Prata", Didot, Canela, Georgia, serif',
              fontWeight: 200,
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              lineHeight: 1.15,
            }}
          >
            Connecting Worldwide Teams
          </h2>

          {/* Subtitle */}
          <p className="max-w-xl text-sm sm:text-base md:text-lg text-neutral-600 font-normal leading-relaxed mt-1">
            Empowering teams across the globe to collaborate seamlessly,
            driving innovation and success everywhere.
          </p>
        </div>

        {/* Metrics Grid with Vertical Dividers */}
        <div className="mt-14 sm:mt-20 w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-neutral-200 z-20">
          {METRICS.map((metric) => (
            <div
              key={metric.value}
              className="flex flex-col items-center text-center px-6 py-2"
            >
              <span
                className="text-4xl sm:text-5xl md:text-6xl text-[#111827] mb-2 tabular-nums"
                style={{
                  fontFamily: 'ivypresto-display, "Cormorant Garamond", "Bodoni Moda", "Playfair Display", "Prata", Didot, Canela, Georgia, serif',
                  fontWeight: 200,
                  letterSpacing: '0.01em',
                }}
              >
                {metric.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-neutral-500 max-w-[200px] leading-snug">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Presence01;
