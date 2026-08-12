"use client";

import React from "react";

interface RevealHoverButtonProps {
  defaultText?: string;
  hoverText?: string;
  className?: string;
  onClick?: () => void;
}

export default function RevealHoverButton({
  defaultText = "Hover Me",
  hoverText = "Thanks",
  className = "",
  onClick,
}: RevealHoverButtonProps) {
  return (
    <div id="buttonui" className={`buttonui inline-block ${className}`}>
      <button
        type="button"
        onClick={onClick}
        className="reveal-hover-btn"
        style={{
          position: "relative",
          width: "150px",
          height: "50px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
          overflow: "hidden",
          backgroundColor: "#F5EFE6",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
          transition: "box-shadow 0.5s ease-in-out, transform 0.3s ease",
          outline: "none",
          padding: 0,
          margin: 0,
        }}
      />

      <style jsx global>{`
        .reveal-hover-btn {
          font-family: inherit;
        }

        .reveal-hover-btn:hover {
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35) !important;
        }

        .reveal-hover-btn::before {
          content: "${defaultText}";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #F5EFE6;
          color: #008080;
          font-weight: 700;
          font-size: 16px;
          letter-spacing: 0.02em;
          transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
          transform: translateY(0) scale(1) rotate(0deg);
          transform-origin: center;
          z-index: 2;
        }

        .reveal-hover-btn:hover::before {
          transform: translateY(-50px) scale(0) rotate(120deg);
          opacity: 0;
        }

        .reveal-hover-btn::after {
          content: "${hoverText}";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #008080;
          color: #ffffff;
          font-weight: 700;
          font-size: 16px;
          letter-spacing: 0.02em;
          transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
          transform: translateY(50px) scale(1);
          transform-origin: center;
          z-index: 1;
        }

        .reveal-hover-btn:hover::after {
          transform: translateY(0) scale(1.2);
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
