import React, { useState, useRef, useEffect } from 'react';

// ============================================================
// HOME DAILY CHART — website homepage version
// ============================================================
// Mirrors the app's Today.jsx: same date display, same OracleDisplay
// cross layout in dailyMode, same tap-to-reveal InfoCard (using the
// free, short dailyInfoContent blurbs), same "How To Read The Chart
// Of The Day" diagram underneath.
//
// Deliberately DOES NOT include TodayDailyReading — that's the long-
// form editorial essay per Kin, which is Pro/paywalled content in the
// app. Showing it for free on the public homepage would undercut the
// paywall, so this component stops right after the diagram, same as
// everything above the PremiumGate line in Today.jsx.
//
// Also deliberately simpler than Today.jsx in one way: no day
// swiping/prev-next navigation. This is a homepage marketing
// component showing "today's energy", not the interactive app screen
// — always shows the current day. (Easy to add back if wanted later.)
// ============================================================

import {
  calculateKin, getSeal, calcOracle, calcWavespell, generateChartText, TONES, toneSealTitle,
} from './lib/kinLogic';
import OracleDisplay from './OracleDisplay';
import InfoCard from './InfoCard';
import ChartDiagram from './ChartDiagram';

const COLORS = { cream: '#F5F0E4', ink: '#1a1714', label: '#8a8076' };

// Same reframing Today.jsx uses for the "How To Read" diagram — a
// Guide/Analog/etc. in a birth chart describes a person; the same
// position on a given day describes the day's collective energy.
const DAILY_CAPTIONS = {
  guide: 'Shows the energy leading the day forward.',
  antipode: 'Shows where friction may show up today.',
  birthKin: 'Shows the central theme of the day.',
  analog: 'Shows what supports today with ease.',
  occult: "Shows what's working quietly beneath the day.",
  tone: "shows how today's energy moves and behaves.",
  wavespell: 'shows the bigger theme this day sits inside.',
};

function todayDateStr() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

export default function HomeDailyChart() {
  const [infoCard, setInfoCard] = useState(null); // { key, seal } | null

  const dateStr = todayDateStr();
  const { kin, sealNum, toneNum } = calculateKin(dateStr);
  const seal = getSeal(sealNum);
  const tone = TONES.find((t) => t.n === toneNum);
  const oracle = calcOracle(sealNum, toneNum);
  const wavespell = calcWavespell(kin);
  const chart = generateChartText(kin, sealNum, toneNum, oracle, wavespell);

  const displayDate = new Date().toLocaleDateString('en-GB', {
    weekday: 'short', day: 'numeric', month: 'short', year: 'numeric',
  });

  // Measures the hero glyph column's actual rendered position/width so
  // InfoCard can sit exactly above it — comparing the hero column's and
  // cross-grid's actual rendered vertical position directly (rather
  // than guessing a pixel width) to detect whether the layout has
  // genuinely stacked. See the matching note in KinCalculator.jsx (the
  // personal calculator repo).
  const wrapperRef = useRef(null);
  const heroColumnRef = useRef(null);
  const crossColumnRef = useRef(null);
  const [anchor, setAnchor] = useState({ left: 0, width: '100%' });

  useEffect(() => {
    const wrapperEl = wrapperRef.current;
    const heroEl = heroColumnRef.current;
    const crossEl = crossColumnRef.current;
    if (!wrapperEl || !heroEl || !crossEl) return;

    const measure = () => {
      const stacked = crossEl.offsetTop - heroEl.offsetTop > 20;
      if (stacked) {
        setAnchor({ left: 0, width: wrapperEl.offsetWidth });
      } else {
        setAnchor({ left: heroEl.offsetLeft, width: heroEl.offsetWidth });
      }
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(wrapperEl);
    observer.observe(heroEl);
    observer.observe(crossEl);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Georgia', 'Playfair Display', serif",
        background: COLORS.cream,
        padding: '40px 24px 24px',
        color: COLORS.ink,
      }}
    >
      <div ref={wrapperRef} style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 8 }}>
          <div style={{
            fontSize: 22, fontStyle: 'italic', fontWeight: 400,
            fontFamily: "'IM Fell English', 'Georgia', serif",
            color: COLORS.ink, marginBottom: 6,
          }}>
            Today
          </div>

          <div style={{
            fontSize: 20, fontWeight: 700, color: COLORS.ink,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            fontFamily: "'Cormorant Garamond', 'Georgia', serif",
            marginBottom: 4,
          }}>
            {displayDate}
          </div>

          <div style={{
            fontSize: 16, color: COLORS.ink, marginTop: 6,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            fontFamily: "'Cormorant Garamond', 'Georgia', serif", marginBottom: 12,
          }}>
            Kin Number {kin}
          </div>
          <h2 style={{
            fontSize: 32, fontWeight: 400, fontStyle: 'italic',
            fontFamily: "'IM Fell English', 'Cormorant Garamond', 'Georgia', serif",
            color: COLORS.ink, lineHeight: 1.1,
          }}>
            {toneSealTitle(tone.name, seal.name)}
          </h2>
        </div>

        <OracleDisplay
          kin={kin}
          seal={seal}
          tone={tone}
          oracle={oracle}
          wavespell={wavespell}
          chart={chart}
          dailyMode
          onPositionSelect={(key, tappedSeal) => setInfoCard({ key, seal: tappedSeal })}
          heroColumnRef={heroColumnRef}
          crossColumnRef={crossColumnRef}
        />

        {infoCard && (
          <InfoCard
            positionKey={infoCard.key}
            seal={infoCard.seal}
            onClose={() => setInfoCard(null)}
            contextLabel="Today's Chart"
            anchorLeft={anchor.left}
            anchorWidth={anchor.width}
          />
        )}

        <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
          <h2 style={{
            fontFamily: "'IM Fell English', 'Cormorant Garamond', 'Georgia', serif",
            fontStyle: 'italic', fontWeight: 400, fontSize: 22, marginBottom: 10,
            color: COLORS.ink, textAlign: 'center',
          }}>
            How To Read The Chart Of The Day
          </h2>
          <p style={{
            fontSize: 14, lineHeight: 1.6, color: COLORS.ink, textAlign: 'center',
            maxWidth: 420, margin: '0 auto 8px', fontFamily: "'Cormorant Garamond', 'Georgia', serif",
          }}>
            On a birth chart, these positions describe a person. On a given day, they describe
            the collective energy available to everyone — not a personal trait, but a mood the
            day itself is carrying.
          </p>
          <ChartDiagram captions={DAILY_CAPTIONS} />
        </div>

        {/* RITUAL — placeholder slot, carried over from the previous
            homepage version. Content intentionally not built yet; a
            draft template was discussed but not approved:
            "Today's ritual: [Tone Power], then let it [Color mode]."
            Color modes: Red=initiate, White=refine, Blue=transform,
            Yellow=ripen. Replace the paragraph below when ready. */}
        <div style={{
          borderTop: '1px solid #1a171422',
          marginTop: 40,
          paddingTop: 28,
          textAlign: 'center',
          fontFamily: "'Cormorant Garamond', 'Georgia', serif",
        }}>
          <div style={{
            fontSize: 13,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontStyle: 'italic',
            fontFamily: "'IM Fell English', 'Cormorant Garamond', 'Georgia', serif",
            marginBottom: 8,
          }}>
            Ritual
          </div>
          <p style={{ fontSize: 15, color: COLORS.label, fontStyle: 'italic' }}>
            Coming soon.
          </p>
        </div>

        {/* CTA — carried over from the previous homepage version.
            TODO: point this at the real booking page URL once the
            booking setup is live. */}
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <a
            href="#"
            style={{
              display: 'inline-block',
              padding: '16px 40px',
              fontSize: 14,
              fontWeight: 500,
              fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              background: '#1a1714',
              color: COLORS.cream,
              borderRadius: 999,
              cursor: 'pointer',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Book a Kin260 Reading
          </a>
        </div>
      </div>
    </div>
  );
}
