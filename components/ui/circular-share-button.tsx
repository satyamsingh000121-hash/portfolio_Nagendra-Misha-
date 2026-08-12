"use client";

import React, { useState } from "react";

interface SocialIcon {
  id: string;
  name: string;
  brandColor: string;
  brandShadow: string;
  angle: number; // Angle in degrees for radial layout
  svgPath: React.ReactNode;
}

const socialIcons: SocialIcon[] = [
  {
    id: "twitter",
    name: "Twitter",
    brandColor: "#1DA1F2",
    brandShadow: "rgba(29, 161, 242, 0.45)",
    angle: -90, // Top
    svgPath: (
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
    ),
  },
  {
    id: "facebook",
    name: "Facebook",
    brandColor: "#1877F2",
    brandShadow: "rgba(24, 119, 242, 0.45)",
    angle: -45, // Top-Right
    svgPath: (
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    ),
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    brandColor: "#25D366",
    brandShadow: "rgba(37, 211, 102, 0.45)",
    angle: 0, // Right
    svgPath: (
      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.758.459 3.474 1.33 4.982L2 22l5.146-1.348a9.96 9.96 0 004.864 1.258h.004c5.507 0 9.99-4.478 9.99-9.985 0-2.667-1.039-5.176-2.927-7.062A9.925 9.925 0 0012.012 2zm5.832 14.156c-.244.686-1.42 1.309-1.96 1.365-.503.052-1.156.074-3.694-.972-3.25-1.338-5.328-4.654-5.489-4.87-.162-.217-1.31-1.745-1.31-3.328 0-1.584.831-2.363 1.127-2.684.296-.322.647-.403.863-.403.216 0 .432.002.621.011.201.009.471-.077.737.562.27.649.919 2.241.999 2.404.081.163.135.352.027.568-.108.217-.162.352-.324.542-.162.189-.34.423-.486.568-.162.162-.332.338-.143.662.189.324.84 1.387 1.802 2.244 1.238 1.103 2.282 1.444 2.606 1.606.324.162.513.135.702-.081.189-.216.811-.945 1.027-1.269.216-.324.432-.27.729-.162.297.108 1.891.891 2.215 1.053.324.162.54.243.621.378.081.135.081.783-.163 1.469z" />
    ),
  },
  {
    id: "discord",
    name: "Discord",
    brandColor: "#5865F2",
    brandShadow: "rgba(88, 101, 242, 0.45)",
    angle: 45, // Bottom-Right
    svgPath: (
      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 01.077-.01 13.882 13.882 0 0012.154 0 .075.075 0 01.078.01c.12.098.246.195.373.288a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    ),
  },
  {
    id: "pinterest",
    name: "Pinterest",
    brandColor: "#E60023",
    brandShadow: "rgba(230, 0, 35, 0.45)",
    angle: 90, // Bottom
    svgPath: (
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
    ),
  },
  {
    id: "dribbble",
    name: "Dribbble",
    brandColor: "#EA4C89",
    brandShadow: "rgba(234, 76, 137, 0.45)",
    angle: 135, // Bottom-Left
    svgPath: (
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm9.849 11.025c-.273-.045-2.646-.42-5.385.127a33.393 33.393 0 00-1.74-3.645c2.97-1.26 4.29-2.94 4.395-3.083 1.635 1.77 2.655 4.095 2.73 6.601zm-4.755-7.77c-.12.15-1.395 1.74-4.245 2.91-1.08-1.92-2.28-3.675-2.52-4.02a9.92 9.92 0 016.765 1.11zM7.875 3.015c.255.36 1.44 2.1 2.505 4-3.465 1.035-6.735 1.02-7.05 1.02a9.99 9.99 0 014.545-5.02zM2.085 10.14c.315 0 3.24 0 6.495-.915a37.28 37.28 0 011.695 3.66c-4.425 1.245-8.49 1.185-8.895 1.17a9.96 9.96 0 01.705-3.915zm2.145 6.06c.39.015 4.035.06 8.16-1.08a28.46 28.46 0 011.395 4.305c-3.135 1.545-6.42 1.35-6.75 1.32a9.96 9.96 0 01-2.805-4.545zm11.385 4.77a28.98 28.98 0 00-1.35-4.2c2.505-.54 4.74-.21 5.01-.165a9.96 9.96 0 01-3.66 4.365z" />
    ),
  },
  {
    id: "github",
    name: "GitHub",
    brandColor: "#24292E",
    brandShadow: "rgba(36, 41, 46, 0.45)",
    angle: 180, // Left
    svgPath: (
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    ),
  },
  {
    id: "reddit",
    name: "Reddit",
    brandColor: "#FF4500",
    brandShadow: "rgba(255, 69, 0, 0.45)",
    angle: 225, // Top-Left
    svgPath: (
      <path d="M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 01-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 01.042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.363.043-.539A1.748 1.748 0 014 12.001c0-.968.786-1.754 1.754-1.754.463 0 .88.18 1.186.476 1.187-.847 2.828-1.405 4.637-1.487l.91-4.265a.4.4 0 01.474-.306l3.05.642a1.247 1.247 0 011.00-.563zm-7.61 7.257c-.779 0-1.41.632-1.41 1.41 0 .778.631 1.41 1.41 1.41.778 0 1.41-.632 1.41-1.41 0-.778-.632-1.41-1.41-1.41zm5.2 0c-.778 0-1.41.632-1.41 1.41 0 .778.632 1.41 1.41 1.41.779 0 1.41-.632 1.41-1.41 0-.778-.631-1.41-1.41-1.41zm-4.323 3.65c-.2 0-.376.125-.443.315-.067.19-.007.404.148.532.846.697 2.054 1.055 3.328 1.055 1.275 0 2.482-.358 3.328-1.055.155-.128.215-.342.148-.532a.465.465 0 00-.443-.315H10.277z" />
    ),
  },
];

export default function CircularShareButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIconId, setHoveredIconId] = useState<string | null>(null);
  const radius = 82; // Radial fan out distance in pixels

  return (
    <div
      id="uisection"
      className="uisection share-button-container"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        setIsOpen(false);
        setHoveredIconId(null);
      }}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "200px",
        height: "200px",
      }}
    >
      {/* 8 Radial Social Icons */}
      {socialIcons.map((icon, index) => {
        const rad = (icon.angle * Math.PI) / 180;
        const x = Math.round(Math.cos(rad) * radius);
        const y = Math.round(Math.sin(rad) * radius);

        const isItemHovered = hoveredIconId === icon.id;
        const staggerDelay = 0.03 * (index + 1);

        return (
          <a
            key={icon.id}
            href={`#share-${icon.id}`}
            title={`Share on ${icon.name}`}
            onMouseEnter={() => setHoveredIconId(icon.id)}
            onMouseLeave={() => setHoveredIconId(null)}
            style={{
              position: "absolute",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: isItemHovered ? icon.brandColor : "#ffffff",
              boxShadow: isItemHovered
                ? `0 10px 20px -4px ${icon.brandShadow}, 0 4px 12px rgba(0,0,0,0.15)`
                : isOpen
                ? "0 6px 16px rgba(0, 0, 0, 0.14)"
                : "0 3px 10px rgba(0, 0, 0, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              cursor: "pointer",
              opacity: isOpen ? 1 : 0,
              visibility: isOpen ? "visible" : "hidden",
              transform: isOpen
                ? `translate(${x}px, ${y}px) scale(${isItemHovered ? 1.2 : 1})`
                : `translate(0px, 0px) scale(0.2)`,
              transition: `transform 0.38s cubic-bezier(0.34, 1.56, 0.64, 1) ${
                isOpen ? staggerDelay : 0
              }s, opacity 0.3s ease ${
                isOpen ? staggerDelay : 0
              }s, visibility 0.3s, background-color 0.25s ease, box-shadow 0.25s ease`,
              zIndex: isItemHovered ? 40 : isOpen ? 20 : 1,
            }}
          >
            <svg
              viewBox="0 0 24 24"
              style={{
                width: "17px",
                height: "17px",
                fill: isItemHovered ? "#ffffff" : icon.brandColor,
                transition: "fill 0.25s ease, transform 0.25s ease",
                transform: isItemHovered ? "scale(1.1)" : "scale(1)",
              }}
            >
              {icon.svgPath}
            </svg>
          </a>
        );
      })}

      {/* Main Gradient Share Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Share"
        className="main-share-pill"
        style={{
          position: "relative",
          zIndex: 30,
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: isOpen
            ? "#ffffff"
            : "linear-gradient(135deg, #03a9f4 0%, #3fb4e9 100%)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: isOpen
            ? "0 10px 24px rgba(3, 169, 244, 0.38), 0 3px 10px rgba(0, 0, 0, 0.12)"
            : "0 6px 20px rgba(3, 169, 244, 0.45), 0 2px 6px rgba(0, 0, 0, 0.1)",
          transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: isOpen ? "scale(1.08)" : "scale(1)",
        }}
      >
        {/* Send / Paper Plane Icon */}
        <svg
          viewBox="0 0 24 24"
          style={{
            width: "20px",
            height: "20px",
            fill: isOpen ? "#03a9f4" : "#ffffff",
            transform: isOpen ? "rotate(45deg) scale(1.1)" : "rotate(0deg)",
            transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      </button>
    </div>
  );
}
