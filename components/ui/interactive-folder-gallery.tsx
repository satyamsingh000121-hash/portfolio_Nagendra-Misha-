"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export interface GalleryPhoto {
  id: string | number;
  image: string;
}

const defaultPhotos: GalleryPhoto[] = [
  { id: 2, image: "/images/设计 让复杂 变简单 让品牌 更有力量.png" },
  { id: 3, image: "/images/Nagendra mishra.png" },
  { id: 4, image: "/images/Building Solutions. Delivering Impact..jpg" },
  { id: 5, image: "/images/Technology is not just about code. It's about creating solutions that make an impact..jpg" },
  { id: 6, image: "/images/ChatGPT%20Image%20Aug%2010,%202026,%2010_44_09%20PM.png" },
];

export interface InteractiveFolderGalleryProps {
  photos?: GalleryPhoto[];
  folderName?: string;
  dragHintText?: string;      
  className?: string;
}

export function InteractiveFolderGallery({
  photos = defaultPhotos,
  folderName = "MarieTV Vault",
  dragHintText = "Drag any photo down to close",
  className
}: InteractiveFolderGalleryProps) {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [hoverFolder, setHoverFolder] = useState(false);

  return (
    <div className={`w-full py-0 relative flex items-center justify-center ${className || ""}`}>
      <div className="relative w-full max-w-[360px] min-h-[310px] flex flex-col items-center justify-center">
        <div className="relative w-[300px] sm:w-[340px] h-[310px] flex justify-center pointer-events-none z-0">
          <motion.div
            className="absolute bottom-4 w-64 sm:w-72 h-44 sm:h-48 drop-shadow-2xl"
            animate={{ opacity: isFolderOpen ? 0 : 1, scale: isFolderOpen ? 0.9 : 1 }}
          >
            <div className="absolute top-0 left-0 w-32 h-10 bg-gradient-to-t from-[#1D1B1C] to-[#2A2728] rounded-t-xl border-t border-l border-r border-[#E4F58E]/30" />
            <div className="absolute top-8 left-0 right-0 bottom-0 bg-gradient-to-b from-[#2A2728] to-[#121112] rounded-b-xl rounded-tr-xl border border-white/10 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]" />
            <div className="absolute top-10 left-2 right-2 bottom-2 bg-[#0C0B0C] rounded-lg shadow-inner pointer-events-none" />
          </motion.div>

          <div className="absolute bottom-10 z-10 flex justify-center">
            {photos.map((photo, i) => {
              const offset = i - Math.floor(photos.length / 2);
              const stackY = hoverFolder ? offset * -8 - 32 : offset * -4;
              const stackX = hoverFolder ? offset * 22 : offset * 3;
              const stackRotate = hoverFolder ? offset * 7 : offset * 3;
              const stackScale = 1 - Math.abs(offset) * 0.03;
              const openY = -110;
              const openX = offset * 62;
              const openRotate = offset * 4;
              const openScale = 1.02;

              return (
                <motion.div
                  key={photo.id}
                  drag={isFolderOpen ? true : false}
                  dragSnapToOrigin={true}
                  onDragEnd={(e, info) => {
                    if (Math.abs(info.offset.y) > 70 && isFolderOpen) {
                      setIsFolderOpen(false);
                      setHoverFolder(false);
                    }
                  }}
                  className={`absolute bottom-0 w-44 sm:w-50 h-58 sm:h-64 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden border border-white/30 origin-bottom ${isFolderOpen ? "cursor-grab active:cursor-grabbing pointer-events-auto" : "pointer-events-none"}`}
                  animate={!isFolderOpen ? {
                    y: stackY, x: stackX, rotate: stackRotate, scale: stackScale, zIndex: i + 10
                  } : {
                    y: openY, x: openX, rotate: openRotate, scale: openScale, zIndex: 50
                  }}
                  whileHover={isFolderOpen ? { scale: openScale + 0.05, zIndex: 100 } : {}}
                  whileDrag={isFolderOpen ? { scale: openScale + 0.1, rotate: 5, zIndex: 150 } : {}}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                >
                  <img src={photo.image} alt="MarieTV Gallery item" className="w-full h-full object-cover pointer-events-none" />
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="absolute bottom-0 w-[290px] sm:w-[330px] h-40 sm:h-44  cursor-pointer z-20 pointer-events-auto"
            style={{ transformOrigin: "bottom" }}
            animate={{
              opacity: isFolderOpen ? 0 : 1,
              rotateX: hoverFolder ? -25 : 0,
              y: hoverFolder ? 10 : 0,
              pointerEvents: isFolderOpen ? "none" : "auto"
            }}
            onMouseEnter={() => setHoverFolder(true)}
            onMouseLeave={() => setHoverFolder(false)}
            onClick={() => setIsFolderOpen(true)}
          >
            <div className="w-full h-full bg-gradient-to-b from-[#2A2728] to-[#121112] rounded-2xl border border-[#E4F58E]/30 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)] relative overflow-hidden flex items-end justify-center pb-8">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E4F58E]/50 to-transparent" />
              <div className="px-5 py-2 bg-[#121112] rounded-full border border-[#E4F58E]/40 shadow-lg flex items-center gap-2 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#E4F58E] animate-pulse" />
                <span className="text-[#F8F1E9] text-sm font-semibold tracking-wide">
                  {folderName}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ opacity: isFolderOpen ? 1 : 0, y: isFolderOpen ? 0 : 40 }}
          className="absolute -bottom-1 px-5 py-2 rounded-full bg-[#1D1B1C] text-[#E4F58E] border border-[#E4F58E]/40 backdrop-blur-md text-xs font-semibold uppercase tracking-widest pointer-events-none z-30 shadow-2xl"
        >
          {dragHintText}
        </motion.div>
      </div>
    </div>
  );
}
