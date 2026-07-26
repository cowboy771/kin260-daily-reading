import React, { useEffect, useRef } from 'react';
import { GlyphPlaceholder } from './OracleDisplay';
import { POSITION_INFO as DAILY_POSITION_INFO, SEAL_POSITION_TEXT as DAILY_SEAL_POSITION_TEXT } from './lib/dailyInfoContent';

// ============================================================
// WHY THIS DOESN'T USE position: fixed
// ============================================================
// Earlier versions tried to detect "desktop vs mobile" (first via
// browser viewport, then via the calculator's own container width) and
// used position: fixed for a full-screen dimmed modal on mobile. That
// kept landing in the wrong spot on the Squarespace embed no matter how
// the breakpoint was tuned — the real problem was position: fixed
// itself. Squarespace pages commonly apply a CSS transform to section
// wrappers for scroll animations, and ANY transformed ancestor silently
// turns position: fixed into something that behaves like
// position: absolute relative to that ancestor instead of the real
// browser viewport. That's a standard CSS trap, and it made the modal's
// position effectively unpredictable on the live site regardless of
// which breakpoint we picked.
//
// Fix: don't fight it. The card is always position: absolute, anchored
// to the calculator's own position: relative wrapper (set up in
// KinCalculator.jsx / RelationshipCalculator.jsx), pinned near the top
// of that wrapper rather than centred — and the instant it opens, it
// scrolls itself into view. This works identically regardless of
// container width, viewport width, iframe embedding, or transformed
// ancestors, because it never relies on position: fixed at all.
// ============================================================

const sealColorMap = {
  Red: '#8B0000',
  White: '#A8A0A0',
  Blue: '#1B2A8A',
  Yellow: '#D4A017',
};

// Fixed glyph size across every card, regardless of position —
// Guide, Analog, Antipode, Occult and Birth Kin all render the
// same size so the cards feel like one consistent set.
const GLYPH_SIZE = 96;

export default function InfoCard({
  positionKey,
  seal,
  onClose,
  // Defaults to the Daily content so nothing changes for existing callers;
  // the You page passes personInfoContent's POSITION_INFO/SEAL_POSITION_TEXT instead.
  positionInfo = DAILY_POSITION_INFO,
  sealPositionText = DAILY_SEAL_POSITION_TEXT,
  // Small badge above the title making it obvious which chart this card
  // belongs to, e.g. "Today's Chart" or "Your Chart".
  contextLabel,
  // Optional — the hero glyph column's measured left offset and width
  // (relative to the same position:relative wrapper this card is
  // absolutely positioned against). When provided, the card sits
  // exactly above that column instead of centred across the whole
  // width — covering the glyph but leaving the cross grid visible on
  // desktop. On mobile, where that column is full-width, this
  // naturally makes the card full-width too. Undefined for existing
  // callers (You/Today in the app) keeps the original centred layout.
  anchorLeft,
  anchorWidth,
}) {
  const cardRef = useRef(null);

  // Bring the card to the top of the screen the moment it opens —
  // regardless of how far down the page the person tapped a glyph from.
  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [positionKey, seal]);

  if (!positionKey || !seal) return null;

  const info = positionInfo[positionKey];
  const paragraphs = sealPositionText[seal.name]?.[positionKey] || [];

  return (
    <div
      onClick={onClose}
      style={{
        position: 'absolute',
        inset: 0,
        minHeight: '100%',
        background: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '20px 20px 60px',
        zIndex: 200,
      }}
    >
      <div
        ref={cardRef}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: anchorLeft !== undefined ? 'absolute' : 'static',
          top: anchorLeft !== undefined ? 24 : undefined,
          left: anchorLeft !== undefined ? anchorLeft : undefined,
          marginTop: anchorLeft !== undefined ? undefined : 24,
          width: anchorLeft !== undefined ? anchorWidth : '100%',
          maxWidth: anchorLeft !== undefined ? anchorWidth : 380,
          maxHeight: '80vh',
          overflowY: 'auto',
          boxSizing: 'border-box',
          background: '#F5F0E4',
          color: '#1a1714',
          fontFamily: "'Cormorant Garamond', 'Georgia', serif",
          padding: '28px 26px 32px',
          border: '1.2px solid #1a1714',
          boxShadow: '0 12px 32px rgba(26, 23, 20, 0.22)',
          borderRadius: 0,
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: 14,
            right: 16,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: 20,
            lineHeight: 1,
            color: '#1a1714',
            padding: 0,
          }}
        >
          ×
        </button>

        {contextLabel && (
          <div style={{ textAlign: 'center', marginBottom: 10 }}>
            <span style={{
              display: 'inline-block',
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#D4A017',
              border: '1px solid #D4A017',
              borderRadius: 999,
              padding: '3px 12px',
            }}>
              {contextLabel}
            </span>
          </div>
        )}

        <div style={{ textAlign: 'center' }}>
          <h2 style={{
            fontFamily: "'IM Fell English', 'Cormorant Garamond', 'Georgia', serif",
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 40,
            margin: '4px 0 0',
            lineHeight: 1.1,
          }}>
            {info.title}
          </h2>
          <div style={{
            fontFamily: "'IM Fell English', 'Cormorant Garamond', 'Georgia', serif",
            fontStyle: 'italic',
            fontSize: 20,
            marginTop: 2,
            marginBottom: 14,
          }}>
            {info.subtitle}
          </div>
          <p style={{
            fontFamily: "'Cormorant Garamond', 'Georgia', serif",
            fontWeight: 600,
            letterSpacing: '0.02em',
            fontSize: 14,
            textTransform: 'uppercase',
            lineHeight: 1.5,
            margin: '0 0 20px',
          }}>
            {info.description}
          </p>

          <div style={{
            fontFamily: "'IM Fell English', 'Cormorant Garamond', 'Georgia', serif",
            fontStyle: 'italic',
            fontSize: 20,
            textDecoration: 'underline',
            textUnderlineOffset: 4,
            marginBottom: 14,
          }}>
            {seal.name}
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 20,
          }}>
            <GlyphPlaceholder seal={seal} colorMap={sealColorMap} size={GLYPH_SIZE} />
          </div>
        </div>

        <div style={{ textAlign: 'left' }}>
          {paragraphs.map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontSize: 15,
                lineHeight: 1.6,
                margin: i === 0 ? '0 0 16px' : '0',
              }}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
