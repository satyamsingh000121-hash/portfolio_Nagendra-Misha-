"use client";

import { useAnimationFrame } from "framer-motion";
import { useRef } from "react";
import {
  Logo01,
  Logo02,
  Logo03,
  Logo04,
  Logo05,
  Logo06,
  Logo07,
  Logo08,
} from "./logo-cloud-15-utils/logos";
import { Marquee } from "./logo-cloud-15-utils/marquee";
import { BorderBeam } from "./logo-cloud-15-utils/border-beam";

const BEAM_DURATION = 8; // must match BorderBeam duration prop
const BEAM_SIZE = 100; // must match BorderBeam size prop

const LogoCloud = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const waveSpanRef = useRef<HTMLSpanElement>(null);
  const startTimeRef = useRef<number | null>(null);

  useAnimationFrame((time) => {
    if (!(cardRef.current && textRef.current && waveSpanRef.current)) return;

    if (startTimeRef.current === null) {
      startTimeRef.current = time;
    }

    // Beam progress: 0–100 along the perimeter, linear, same clock as BorderBeam
    const elapsed = ((time - startTimeRef.current) / 1000) % BEAM_DURATION;
    const beamOffset = (elapsed / BEAM_DURATION) * 100;

    const cardRect = cardRef.current.getBoundingClientRect();
    const textRect = textRef.current.getBoundingClientRect();

    const W = cardRect.width;
    const H = cardRect.height;
    const perimeter = 2 * (W + H);

    // Text horizontal bounds on the top edge, relative to card left
    const textLeft = Math.max(0, textRect.left - cardRect.left);
    const textRight = Math.min(W, textRect.right - cardRect.left);

    // Convert pixel positions to perimeter percentages
    const textStartPercent = (textLeft / perimeter) * 100;
    const textEndPercent = (textRight / perimeter) * 100;

    const span = waveSpanRef.current;

    if (beamOffset >= textStartPercent && beamOffset <= textEndPercent) {
      // Beam is behind the text.
      // Map t (0→1) to backgroundPosition (95%→5%):
      //   at 95%: wave is 25% past the left edge, invisible
      //   at  5%: wave is 25% past the right edge, invisible
      // Both boundary values show only currentColor so there's no flash.
      const t =
        (beamOffset - textStartPercent) / (textEndPercent - textStartPercent);
      span.style.backgroundPosition = `${95 - t * 90}% center`;
    } else if (beamOffset < textStartPercent) {
      // Beam hasn't reached text yet — wave parked to the right (gradient 0–40% visible = currentColor)
      span.style.backgroundPosition = "0% center";
    } else {
      // Beam has passed text — wave parked to the left (gradient 60–100% visible = currentColor)
      span.style.backgroundPosition = "100% center";
    }
  });

  return (
    <div className="w-full py-0">
      <div
        className="relative w-full border-y border-neutral-700 bg-[#242424] py-8 md:py-10 shadow-2xl backdrop-blur-md"
        ref={cardRef}
      >
        <BorderBeam
          className="isolate -z-1"
          duration={BEAM_DURATION}
          size={BEAM_SIZE}
        />

        <div className="flex w-full items-center justify-center pt-2 pb-4 px-4">
          <p
            className="bg-neutral-900/90 px-6 py-2 text-center font-bold text-white text-lg sm:text-2xl tracking-tight rounded-full border border-neutral-600 shadow-xl backdrop-blur-sm"
            ref={textRef}
          >
            <span
              ref={waveSpanRef}
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #ffffff 0%, #ffffff 45%, #ffaa40 47%, #9c40ff 50%, #ffaa40 53%, #ffffff 55%, #ffffff 100%)",
                backgroundSize: "250% 100%",
                backgroundRepeat: "no-repeat",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundPosition: "0% center",
              }}
            >
              You Might Have Seen Me On{" "}
              <span className="max-sm:hidden">Around The World</span>
            </span>
          </p>
        </div>

        <div className="w-full overflow-hidden">
          <div className="flex w-full items-center justify-center p-2 pt-6">
            <Marquee
              className="w-full mask-x-from-75% [--duration:22s] [&_svg]:mr-20 [&_svg]:h-12 md:[&_svg]:h-14"
              pauseOnHover
            >
              <Logo01 />
              <Logo02 />
              <Logo03 />
              <Logo04 />
              <Logo05 />
              <Logo06 />
              <Logo07 />
              <Logo08 />
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
