// Letter Drop — Originkit (Native Web Animations API implementation without GSAP dependency)
"use client";

import * as React from "react";
import { useCallback, useEffect, useRef } from "react";

type FontStyle = React.CSSProperties;

type TransitionValue = {
    type?: string;
    duration?: number;
    delay?: number;
    ease?: string | number[];
    staggerChildren?: number;
};

type StaggerFrom = "start" | "center" | "end" | "random";
type TextTag =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "p"
    | "span"
    | "div"
    | "section";

type Props = {
    text?: string;
    font?: FontStyle;
    color?: string;
    className?: string;

    startY?: number;
    startOpacity?: number;
    staggerFrom?: StaggerFrom;

    tag?: TextTag;

    transition?: TransitionValue;
};

export default function MatrixRain({
    text = "Letter Drop",
    font = {
        fontFamily: "Inter, system-ui, sans-serif",
        fontSize: "120px",
        fontWeight: 600,
        letterSpacing: "-0.025em",
        lineHeight: "1.1em",
        textAlign: "left",
    },
    color = "#ffffff",
    className = "",

    startY = -115,
    startOpacity = 0,
    staggerFrom = "start",

    tag = "h1",

    transition = {
        type: "tween",
        duration: 0.5,
        delay: 0,
        ease: "easeOut",
        staggerChildren: 0.05,
    },
}: Props) {
    const containerRef = useRef<HTMLElement>(null);

    const playAnimation = useCallback(() => {
        if (!containerRef.current) return;

        const chars = containerRef.current.querySelectorAll(".char");
        chars.forEach((char, index) => {
            const htmlChar = char as HTMLElement;
            const staggerDelay = (transition.delay ?? 0) + index * (transition.staggerChildren ?? 0.05);
            htmlChar.animate(
                [
                    { transform: `translateY(${startY}px)`, opacity: startOpacity / 100 },
                    { transform: 'translateY(0)', opacity: 1 }
                ],
                {
                    duration: (transition.duration ?? 0.5) * 1000,
                    delay: staggerDelay * 1000,
                    easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                    fill: 'forwards'
                }
            );
        });
    }, [startY, startOpacity, transition]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        playAnimation();
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );

        observer.observe(el);

        return () => {
            observer.disconnect();
        };
    }, [text, playAnimation]);

    return React.createElement(
        tag,
        {
            ref: containerRef,
            className: className,
            style: {
                margin: 0,
                display: "block",
                width: "100%",
                whiteSpace: "pre-wrap",
                color,
                ...font,
            },
        },
        text.split("").map((char, index) => {
            if (char === "\n") {
                return <br key={index} />;
            }
            return (
                <span
                    key={index}
                    className="char"
                    style={{
                        display: "inline-block",
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            );
        })
    );
}
