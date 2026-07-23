import React from 'react';

// ============================================================
// A short, hand-drawn-looking horizontal line — replaces the
// solid amber bar divider used under headings across the app.
// Renders as black (or a passed-in color), slightly wobbly,
// like it's been sketched rather than a perfect ruled line.
// Width/margin are passed in so each usage can match its old spot.
// ============================================================
export default function SketchDivider({ width = 60, color = '#1a1714', style = {} }) {
  return (
    <svg
      width={width}
      height={10}
      viewBox="0 0 120 10"
      preserveAspectRatio="none"
      style={{ display: 'block', ...style }}
    >
      <path
        d="M2,6.5 C 14,3 22,8.5 34,5 C 46,1.8 56,8 68,4.8 C 80,2 90,7.5 102,5 C 108,3.8 112,5.5 118,4.5"
        fill="none"
        stroke={color}
        strokeWidth={1.6}
        strokeLinecap="round"
      />
    </svg>
  );
}
