import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE: [number, number, number, number] = [0.16, 0.78, 0.24, 1];

/* ------------------------------------------------------------------ */
/*  HANKO — the seal. Hand-drawn frame, broken ink, wobble in the path */
/* ------------------------------------------------------------------ */
export function Seal({
  className = "",
  glyph = "鋼",
  tone = "#c8361f",
}: {
  className?: string;
  glyph?: string;
  tone?: string;
}) {
  return (
    <span
      className={`relative inline-grid place-items-center select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full overflow-visible"
        fill="none"
        role="presentation"
      >
        <path
          d="M7.5 6.2 L49 5.4 L92.6 6.8 L94.2 48 L93.4 92.4 L51 94.1 L6.8 92.6 L5.6 52 Z"
          stroke={tone}
          strokeWidth="6"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeDasharray="64 2.5 52 3 74 2 44 2.5"
          opacity="0.94"
        />
        <path
          d="M18 20 L82 18.6 M19.5 81.6 L81.4 83"
          stroke={tone}
          strokeWidth="2.4"
          strokeLinecap="round"
          opacity="0.42"
        />
        <text
          x="50"
          y="50"
          dy="0.35em"
          textAnchor="middle"
          fill={tone}
          stroke="none"
          style={{ fontFamily: "var(--font-jp)", fontWeight: 600, fontSize: "46px" }}
        >
          {glyph}
        </text>
      </svg>
    </span>
  );
}

export function Wordmark({
  className = "",
  tone = "currentColor",
}: {
  className?: string;
  tone?: string;
}) {
  return (
    <span
      className={`font-display leading-none tracking-[0.34em] ${className}`}
      style={{ color: tone, fontWeight: 500 }}
    >
      HAGANE
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Motion primitives — everything settles, nothing bounces            */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  delay = 0,
  y = 14,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "tr";
}) {
  const reduce = useReducedMotion();
  const p = {
    className,
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.75, delay, ease: EASE },
  };
  if (as === "section") return <motion.section {...p}>{children}</motion.section>;
  if (as === "li") return <motion.li {...p}>{children}</motion.li>;
  if (as === "tr") return <motion.tr {...p}>{children}</motion.tr>;
  return <motion.div {...p}>{children}</motion.div>;
}

/** A hairline that draws itself left → right when it enters view. */
export function DrawRule({
  className = "",
  tone = "currentColor",
  delay = 0,
}: {
  className?: string;
  tone?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`rule-draw h-px w-full ${className}`}
      style={{ background: tone }}
      initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.1, delay, ease: [0.16, 0.78, 0.24, 1] }}
    />
  );
}

/** Tracked micro-label sitting on a rule — the site's typographic signature. */
export function Label({
  children,
  tone = "text-ash",
  className = "",
}: {
  children: ReactNode;
  tone?: string;
  className?: string;
}) {
  return <span className={`label ${tone} ${className}`}>{children}</span>;
}
