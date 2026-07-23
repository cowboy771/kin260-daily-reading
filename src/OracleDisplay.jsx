import React, { useState } from 'react';
import { getSeal } from './lib/kinLogic';

const COLORS = {
  crimson: '#8B0000',
  cobalt: '#1B2A8A',
  amber: '#D4A017',
  cream: '#F5F0E4',
  jungle: '#2C4A2E',
};

const sealColorMap = {
  Red: COLORS.crimson,
  White: '#A8A0A0',
  Blue: COLORS.cobalt,
  Yellow: COLORS.amber,
};

const ACTIVE_LABELS = {
  birthKin: 'Birth Kin',
  guide: 'Guide',
  analog: 'Analog',
  antipode: 'Antipode',
  occult: 'Occult',
  wavespell: 'Wavespell',
};

// Generic meaning of each position itself, independent of which Seal
// occupies it — shown as a brief line before the Seal-specific reading.
const POSITION_DESCRIPTIONS = {
  birthKin: 'Your core identity and life path.',
  guide: 'The energy that guides you back to yourself.',
  analog: 'The energy that naturally supports and stabilises you.',
  antipode: 'The energy that challenges and triggers you toward growth.',
  occult: 'The unconscious power source running underneath everything.',
  wavespell: 'The larger story.',
};

import SketchDivider from './SketchDivider';

export function GlyphPlaceholder({ seal, colorMap, size = 56 }) {
  const [failed, setFailed] = useState(false);
  const initial = seal.name.split(' ').map((w) => w[0]).join('');

  if (!failed) {
    return (
      <img
        src={`/glyphs/${seal.name}.webp`}
        alt={seal.name}
        width={size}
        height={size}
        onError={() => setFailed(true)}
        style={{
          width: size,
          height: size,
          objectFit: 'contain',
          flexShrink: 0,
          display: 'block',
        }}
      />
    );
  }

  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: 8,
      background: colorMap[seal.color],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontWeight: 500,
      fontFamily: "'Cormorant Garamond', 'Georgia', serif",
      fontSize: size * 0.3,
      flexShrink: 0,
    }}>
      {initial}
    </div>
  );
}

export function CrossCard({ label, seal, colorMap, large, active, onEnter, onLeave, onTap, supportsHover }) {
  return (
    <div
      onMouseEnter={supportsHover ? onEnter : undefined}
      onMouseLeave={supportsHover ? onLeave : undefined}
      onClick={onTap}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'transform 0.15s ease, opacity 0.15s ease',
        transform: active ? 'scale(1.06)' : 'scale(1)',
        opacity: active ? 1 : 0.9,
      }}
    >
      <div style={{
        fontSize: 10,
        color: '#1a1714',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        marginBottom: 8,
        fontStyle: 'italic',
        fontFamily: "'IM Fell English', 'Cormorant Garamond', 'Georgia', serif",
      }}>
        {label}
      </div>
      <div style={{
        borderRadius: 0,
        boxShadow: active ? '0 0 0 2px #1a1714' : 'none',
        transition: 'box-shadow 0.15s ease',
      }}>
        <GlyphPlaceholder seal={seal} colorMap={colorMap} size={large ? 130 : 84} />
      </div>
      <div style={{
        fontSize: large ? 15 : 11,
        fontWeight: 500,
        color: '#1a1714',
        marginTop: 8,
        lineHeight: 1.25,
        fontFamily: "'Cormorant Garamond', 'Georgia', serif",
      }}>
        {seal.name}
      </div>
    </div>
  );
}

// The full interactive hero-glyph + cross-grid + reading-text block.
// Used identically by both the birth chart calculator and the Today
// screen, so hover/tap behavior and layout never drift apart between
// the two.
export default function OracleDisplay({
  kin, seal, tone, oracle, wavespell, chart, headerLeft, headerRight,
  // dailyMode + onPositionSelect are opt-in — only the Today page passes
  // these. Every other screen (You, Relationship, birth chart calculator)
  // is untouched and keeps the original inline tap-to-reveal behavior.
  dailyMode = false,
  onPositionSelect,
  // Optional — lets the parent measure the hero glyph column's actual
  // rendered position/width (via getBoundingClientRect / offsetLeft),
  // so InfoCard can be sized to sit exactly above it rather than
  // guessing pixel values. Undefined for every existing caller that
  // doesn't need this (You/Today pages in the app).
  heroColumnRef,
  // Optional — ref to the cross-grid column, so the parent can compare
  // its position against heroColumnRef to directly detect whether the
  // layout is actually side-by-side or stacked, instead of guessing a
  // width threshold that may not match the real flex-wrap point.
  crossColumnRef,
}) {
  const [activeKey, setActiveKey] = useState(null);
  const [supportsHover, setSupportsHover] = useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    setSupportsHover(mq.matches);
  }, []);

  const heroSeal =
    activeKey === 'guide' ? oracle.guide :
    activeKey === 'analog' ? oracle.analog :
    activeKey === 'antipode' ? oracle.antipode :
    activeKey === 'occult' ? oracle.occult :
    activeKey === 'wavespell' ? getSeal(wavespell.seal) :
    seal;

  const sealForKey = (key) => (
    key === 'guide' ? oracle.guide :
    key === 'analog' ? oracle.analog :
    key === 'antipode' ? oracle.antipode :
    key === 'occult' ? oracle.occult :
    key === 'birthKin' ? seal :
    null
  );

  // In dailyMode, tapping a position still swaps the hero glyph (so the
  // visual feels the same) but opens the Info Card modal for the reading
  // instead of expanding the inline text panel below.
  const handleTap = (key) => {
    if (dailyMode) {
      setActiveKey(key);
      if (onPositionSelect) onPositionSelect(key, sealForKey(key));
    } else {
      setActiveKey(activeKey === key ? null : key);
    }
  };

  return (
    <div>
      <style>{`
        @media (max-width: 700px) {
          .kin260-header-row {
            flex-direction: column;
            align-items: center !important;
            text-align: center;
          }
          .kin260-main-row {
            flex-direction: column;
            align-items: center !important;
            gap: 16px !important;
          }
        }
      `}</style>

      {(headerLeft || headerRight) && (
        <div className="kin260-header-row" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: 16,
          marginBottom: 32,
        }}>
          <div>{headerLeft}</div>
          <div>{headerRight}</div>
        </div>
      )}

      <div className="kin260-main-row" style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 48,
        marginBottom: 40,
      }}>
        <div ref={heroColumnRef} style={{
          flex: '1 1 260px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <SketchDivider width={60} style={{ marginBottom: 24 }} />
          <div
            onMouseEnter={supportsHover && !dailyMode ? () => setActiveKey('birthKin') : undefined}
            onMouseLeave={supportsHover && !dailyMode ? () => setActiveKey(null) : undefined}
            onClick={() => handleTap('birthKin')}
            style={{
              cursor: 'pointer',
              transition: 'transform 0.15s ease',
              transform: activeKey === 'birthKin' ? 'scale(1.05)' : 'scale(1)',
            }}
          >
            <GlyphPlaceholder seal={heroSeal} colorMap={sealColorMap} size={238} />
          </div>

          <div style={{
            marginTop: 28,
            maxWidth: 380,
            textAlign: 'center',
            fontFamily: "'Cormorant Garamond', 'Georgia', serif",
          }}>
            {dailyMode ? (
              !activeKey && (
                <p style={{ fontSize: 16, color: '#1a1714', fontStyle: 'italic' }}>
                  Tap a glyph to read its meaning.
                </p>
              )
            ) : activeKey ? (
              <>
                <div style={{
                  fontSize: 22,
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontFamily: "'IM Fell English', 'Cormorant Garamond', 'Georgia', serif",
                  fontStyle: 'italic',
                  color: '#1a1714',
                  marginBottom: 8,
                }}>
                  {ACTIVE_LABELS[activeKey]}
                </div>
                <p style={{
                  fontSize: 22,
                  color: '#1a1714',
                  fontStyle: 'italic',
                  marginBottom: 14,
                }}>
                  {POSITION_DESCRIPTIONS[activeKey]}
                </p>
                <p style={{ fontSize: 19, lineHeight: 1.6, color: '#1a1714' }}>
                  <strong>{chart[activeKey].slice(0, heroSeal.name.length)}</strong>
                  {chart[activeKey].slice(heroSeal.name.length)}
                </p>
              </>
            ) : (
              <p style={{ fontSize: 16, color: '#1a1714', fontStyle: 'italic' }}>
                {supportsHover ? 'Hover over a glyph to read its meaning.' : 'Tap a glyph to read its meaning.'}
              </p>
            )}
          </div>
        </div>

        <div ref={crossColumnRef} className="kin260-cross-wrap" style={{ flex: '1 1 280px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridTemplateRows: 'auto auto auto',
            gap: 22,
            maxWidth: 380,
          }}>
            <div />
            <CrossCard
              label="Guide" seal={oracle.guide} colorMap={sealColorMap}
              supportsHover={supportsHover && !dailyMode}
              active={activeKey === 'guide'}
              onEnter={() => setActiveKey('guide')} onLeave={() => setActiveKey(null)}
              onTap={() => handleTap('guide')}
            />
            <div />

            <CrossCard
              label="Antipode" seal={oracle.antipode} colorMap={sealColorMap}
              supportsHover={supportsHover && !dailyMode}
              active={activeKey === 'antipode'}
              onEnter={() => setActiveKey('antipode')} onLeave={() => setActiveKey(null)}
              onTap={() => handleTap('antipode')}
            />
            <CrossCard
              label="Birth Kin" seal={seal} colorMap={sealColorMap}
              supportsHover={supportsHover && !dailyMode}
              active={activeKey === 'birthKin'}
              onEnter={() => setActiveKey('birthKin')} onLeave={() => setActiveKey(null)}
              onTap={() => handleTap('birthKin')}
            />
            <CrossCard
              label="Analog" seal={oracle.analog} colorMap={sealColorMap}
              supportsHover={supportsHover && !dailyMode}
              active={activeKey === 'analog'}
              onEnter={() => setActiveKey('analog')} onLeave={() => setActiveKey(null)}
              onTap={() => handleTap('analog')}
            />

            <div />
            <CrossCard
              label="Occult" seal={oracle.occult} colorMap={sealColorMap}
              supportsHover={supportsHover && !dailyMode}
              active={activeKey === 'occult'}
              onEnter={() => setActiveKey('occult')} onLeave={() => setActiveKey(null)}
              onTap={() => handleTap('occult')}
            />
            <div />
          </div>

          <div style={{
            marginTop: 20,
            maxWidth: 380,
            textAlign: 'center',
            fontFamily: "'Cormorant Garamond', 'Georgia', serif",
          }}>
            <span style={{
              fontSize: 11,
              color: '#1a1714',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontFamily: "'IM Fell English', 'Cormorant Garamond', 'Georgia', serif",
              fontStyle: 'italic',
            }}>
              Tone
            </span>
            <span style={{ fontSize: 14, color: '#1a1714', marginLeft: 8 }}>
              {tone.name}
            </span>
          </div>

          <div
            onMouseEnter={supportsHover ? () => setActiveKey('wavespell') : undefined}
            onMouseLeave={supportsHover ? () => setActiveKey(null) : undefined}
            onClick={() => setActiveKey(activeKey === 'wavespell' ? null : 'wavespell')}
            style={{
              marginTop: 8,
              maxWidth: 380,
              textAlign: 'center',
              cursor: 'pointer',
              fontFamily: "'Cormorant Garamond', 'Georgia', serif",
            }}
          >
            <span style={{
              fontSize: 11,
              color: '#1a1714',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontFamily: "'IM Fell English', 'Cormorant Garamond', 'Georgia', serif",
              fontStyle: 'italic',
            }}>
              Wavespell
            </span>
            <span style={{ fontSize: 14, color: '#1a1714', marginLeft: 8 }}>
              {getSeal(wavespell.seal).name} · #{wavespell.number}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
