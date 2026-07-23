import React from 'react';

const COLORS = { ink: '#1a1714', body: '#4a4238', label: '#8a8076' };

const boxStyle = {
  border: `1px solid ${COLORS.ink}`,
  width: 56,
  height: 56,
};

const labelStyle = {
  fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.05em',
  color: COLORS.ink, marginBottom: 4, textAlign: 'center',
  fontFamily: "'IM Fell English', 'Cormorant Garamond', 'Georgia', serif",
  fontStyle: 'italic',
};

const captionStyle = {
  fontSize: 11, color: COLORS.body, textAlign: 'center',
  marginTop: 6, lineHeight: 1.35, maxWidth: 90,
  // Explicit font-family so this always renders the same regardless of
  // which page's ambient font it's nested inside — without this it was
  // silently inheriting Georgia on the Today page but Cormorant Garamond
  // on the You page, since neither set its own font here.
  fontFamily: "'Georgia', 'Playfair Display', serif",
};

function Slot({ label, caption }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <p style={labelStyle}>{label}</p>
      <div style={boxStyle} />
      <p style={captionStyle}>{caption}</p>
    </div>
  );
}

const DEFAULT_CAPTIONS = {
  guide: 'Shows direction.',
  antipode: 'Shows conflict (growth).',
  birthKin: 'Shows the identity.',
  analog: 'Shows support.',
  occult: 'Shows hidden capacity.',
  tone: 'shows how the entire structure functions.',
  wavespell: 'shows the larger developmental theme.',
};

export default function ChartDiagram({ captions, birthKinLabel = 'Birth Kin' }) {
  const c = { ...DEFAULT_CAPTIONS, ...captions };

  return (
    <div style={{ padding: '8px 0 16px' }}>
      {/* The five Oracle positions, in the same 3x3 cross grid the real chart uses */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, auto)',
        justifyContent: 'center',
        rowGap: 20,
        columnGap: 14,
        marginBottom: 28,
      }}>
        <div />
        <Slot label="Guide" caption={c.guide} />
        <div />

        <Slot label="Antipode" caption={c.antipode} />
        <Slot label={birthKinLabel} caption={c.birthKin} />
        <Slot label="Analog" caption={c.analog} />

        <div />
        <Slot label="Occult" caption={c.occult} />
        <div />
      </div>

      {/* Tone and Wavespell — not boxed on the real chart either, they read as
          plain lines rather than positions on the cross */}
      <div style={{ textAlign: 'center', maxWidth: 320, margin: '0 auto' }}>
        <p style={{ fontSize: 12, color: COLORS.body, marginBottom: 6 }}>
          <strong style={{ color: COLORS.ink }}>Tone</strong> — {c.tone}
        </p>
        <p style={{ fontSize: 12, color: COLORS.body }}>
          <strong style={{ color: COLORS.ink }}>Wavespell</strong> — {c.wavespell}
        </p>
      </div>
    </div>
  );
}
