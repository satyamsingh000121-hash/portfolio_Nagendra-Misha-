// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

import "../../presence-01.css";

type OrbitRing = {
  diameter: number;
  positionY: number;
};

const DESKTOP_RINGS: OrbitRing[] = [
  { diameter: 318, positionY: 0 },
  { diameter: 355, positionY: 0 },
  { diameter: 393, positionY: 0 },
  { diameter: 432, positionY: 0 },
  { diameter: 470, positionY: 0 },
];

const MOBILE_RINGS: OrbitRing[] = [
  { diameter: 280, positionY: 0 },
  { diameter: 310, positionY: 0 },
  { diameter: 340, positionY: 0 },
  { diameter: 370, positionY: 0 },
  { diameter: 400, positionY: 0 },
];

const ORBIT_LINE_RINGS = 2;
const ORBIT_LINE_DURATIONS = ["12s", "18s"] as const;
const ORBIT_LINE_WIDTH = 2.5;

const OrbitLine = ({ duration }: { duration: string }) => {
  const ringMask = `radial-gradient(farthest-side, transparent calc(100% - ${ORBIT_LINE_WIDTH}px), #000 calc(100% - ${ORBIT_LINE_WIDTH}px))`;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-visible"
      style={{
        maskImage:
          "radial-gradient(ellipse 72% 58% at 50% 38%, #000 0%, #000 42%, rgba(0,0,0,0.35) 68%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 72% 58% at 50% 38%, #000 0%, #000 42%, rgba(0,0,0,0.35) 68%, transparent 100%)",
      }}
    >
      <div
        className="absolute inset-0 rounded-full will-change-transform animate-globe-orbit motion-reduce:animate-none"
        style={{
          animationDuration: duration,
          background:
            "conic-gradient(from 0deg, transparent 0deg, transparent 250deg, rgba(0,0,0,0.02) 280deg, rgba(0,0,0,0.08) 310deg, rgba(0,0,0,0.2) 335deg, rgba(0,0,0,0.45) 350deg, rgba(0,0,0,0.8) 357deg, #111827 360deg)",
          maskImage: ringMask,
          WebkitMaskImage: ringMask,
        }}
      />
    </div>
  );
};

const OrbitLayer = ({
  rings,
  className,
}: {
  rings: OrbitRing[];
  className: string;
}) => {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none ${className}`}
    >
      {rings.map((ring, index) => (
        <div
          key={ring.diameter}
          style={{
            width: `${ring.diameter}px`,
            height: `${ring.diameter}px`,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          className="absolute pointer-events-none"
        >
          <div
            className="absolute inset-0 rounded-full border border-dashed border-neutral-900/25"
            style={{ opacity: 0.5 - index * 0.08 }}
          />

          {index < ORBIT_LINE_RINGS ? (
            <OrbitLine duration={ORBIT_LINE_DURATIONS[index]} />
          ) : null}
        </div>
      ))}
    </div>
  );
};

const OrbitControls = () => {
  return (
    <>
      <OrbitLayer rings={DESKTOP_RINGS} className="hidden sm:block" />
      <OrbitLayer rings={MOBILE_RINGS} className="sm:hidden" />
    </>
  );
};

export default OrbitControls;
