// ============================================================
// KIN260 CORE LOGIC — single source of truth
// Extracted verbatim from the verified production calculator.
// Both the birth-chart calculator and the daily 'Today' screen
// import from here, so there is only ever one copy of the math.
// ============================================================

export const SEALS = [
  { n: 1, name: 'Red Dragon', color: 'Red' },
  { n: 2, name: 'White Wind', color: 'White' },
  { n: 3, name: 'Blue Night', color: 'Blue' },
  { n: 4, name: 'Yellow Seed', color: 'Yellow' },
  { n: 5, name: 'Red Serpent', color: 'Red' },
  { n: 6, name: 'White Worldbridger', color: 'White' },
  { n: 7, name: 'Blue Hand', color: 'Blue' },
  { n: 8, name: 'Yellow Star', color: 'Yellow' },
  { n: 9, name: 'Red Moon', color: 'Red' },
  { n: 10, name: 'White Dog', color: 'White' },
  { n: 11, name: 'Blue Monkey', color: 'Blue' },
  { n: 12, name: 'Yellow Human', color: 'Yellow' },
  { n: 13, name: 'Red Skywalker', color: 'Red' },
  { n: 14, name: 'White Wizard', color: 'White' },
  { n: 15, name: 'Blue Eagle', color: 'Blue' },
  { n: 16, name: 'Yellow Warrior', color: 'Yellow' },
  { n: 17, name: 'Red Earth', color: 'Red' },
  { n: 18, name: 'White Mirror', color: 'White' },
  { n: 19, name: 'Blue Storm', color: 'Blue' },
  { n: 20, name: 'Yellow Sun', color: 'Yellow' },
];

export const TONES = [
  { n: 1, name: 'Magnetic' },
  { n: 2, name: 'Lunar' },
  { n: 3, name: 'Electric' },
  { n: 4, name: 'Self-Existing' },
  { n: 5, name: 'Overtone' },
  { n: 6, name: 'Rhythmic' },
  { n: 7, name: 'Resonant' },
  { n: 8, name: 'Galactic' },
  { n: 9, name: 'Solar' },
  { n: 10, name: 'Planetary' },
  { n: 11, name: 'Spectral' },
  { n: 12, name: 'Crystal' },
  { n: 13, name: 'Cosmic' },
];

// Guide offset by tone, per The Mayan Signs.pdf colour-group rule
const GUIDE_OFFSET = {
  1: 0, 6: 0, 11: 0,      // magnetic, rhythmic, spectral: same seal
  2: 3, 7: 3, 12: 3,      // lunar, resonant, crystal: +3 in colour group
  3: 1, 8: 1, 13: 1,      // electric, galactic, cosmic: +1 in colour group
  4: 4, 9: 4,             // self-existing, solar: +4 in colour group
  5: 2, 10: 2,            // overtone, planetary: +2 in colour group
};

export const SEAL_TRAITS = {
  'Red Dragon': {
    coreLine: 'the original nurturing force, primal and instinctive, the intelligence that knows how to feed, hold, and protect before strategy gets involved',
    giftLine: 'primal nourishment, safety built the way a real home is built',
    shadowLine: 'overgiving until there\'s nothing left, mistaking being needed for being loved',
  },
  'White Wind': {
    coreLine: 'the messenger, moving breath and voice through everything, giving shape to what\'s been felt but never said',
    giftLine: 'transmission, moving real spirit through voice until it changes the room',
    shadowLine: 'scattered and over talkative, more concerned with being understood than being honest',
  },
  'Blue Night': {
    coreLine: 'the dreamer, carrying the hidden realm of symbols, memory, and inner richness',
    giftLine: 'inner abundance, sensing what wants to be created before it has a name',
    shadowLine: 'withdrawn and secretive, lost in a fantasy it never risks making real',
  },
  'Yellow Seed': {
    coreLine: 'growth and intention, understanding that everything begins invisibly before it becomes visible',
    giftLine: 'cultivation, tending an idea into something real without forcing the outcome',
    shadowLine: 'controlling and perfectionistic, digging itself up to check if the roots are growing',
  },
  'Red Serpent': {
    coreLine: 'instinct and life force, the raw intelligence of the body before the mind explains it',
    giftLine: 'aliveness, bringing heat and presence into rooms that have gone numb',
    shadowLine: 'reactive and possessive, ruled by whatever it\'s feeling before it understands it',
  },
  'Blue Hand': {
    coreLine: 'healing and completion, the hand that learns through doing rather than thinking',
    giftLine: 'embodied knowledge, turning pain into wisdom and practice into mastery',
    shadowLine: 'controlling and over-helpful, trying to repair people who never asked to be repaired',
  },
  'Yellow Star': {
    coreLine: 'beauty and harmony as structure, not decoration, a form of deep love for the world',
    giftLine: 'making harmony visible, turning feeling into something you can touch and see',
    shadowLine: 'its own harshest critic, an eye for beauty curdled into an eye for what\'s wrong',
  },
  'Red Moon': {
    coreLine: 'purification and flow, always finding the lowest place, impossible to hold still',
    giftLine: 'a healing presence that doesn\'t require technique, just willingness to be present',
    shadowLine: 'overwhelmed and reactive, flooded by sensation faster than it can process',
  },
  'White Dog': {
    coreLine: 'unconditional love, refusing to believe anyone is unworthy of being loved fully',
    giftLine: 'healing presence, unconditional warmth freely given as its own kind of medicine',
    shadowLine: 'clingy and possessive without recognising it, because from the inside it feels like love',
  },
  'Blue Monkey': {
    coreLine: 'the divine child, refusing to let life calcify into something heavy and unplayable',
    giftLine: 'transformation, shifting the entire energy of a room without lying about what\'s there',
    shadowLine: 'restless and chaotic, using a joke instead of saying the real thing out loud',
  },
  'Yellow Human': {
    coreLine: 'lived intelligence, refusing to believe something until it\'s actually been felt',
    giftLine: 'conscious influence, moving people by being lived rather than forced on them',
    shadowLine: 'easily influenced and indecisive, absorbing other people\'s beliefs as its own truth',
  },
  'Red Skywalker': {
    coreLine: 'exploration and awakening, refusing to live inside inherited limits nobody questioned',
    giftLine: 'expanding what other people thought was possible, just by existing near them',
    shadowLine: 'restless and avoidant, mistaking movement for growth and distance for freedom',
  },
  'White Wizard': {
    coreLine: 'presence and receptivity, power that listens instead of forcing or chasing',
    giftLine: 'enchantment, bringing people back into contact with how sacred ordinary life already is',
    shadowLine: 'passive and withholding, confusing surrender with doing nothing at all',
  },
  'Blue Eagle': {
    coreLine: 'vision, rising above the moment to see the larger pattern forming underneath it',
    giftLine: 'clarity, handing back a pattern and a way through without losing compassion',
    shadowLine: 'distant and critical, seeing the system perfectly while missing the person in it',
  },
  'Yellow Warrior': {
    coreLine: 'questioning and inner authority, refusing to accept anything blindly',
    giftLine: 'fearless inquiry, asking the question everyone else was too afraid to say',
    shadowLine: 'defensive and suspicious, turning every conversation into something to win',
  },
  'Red Earth': {
    coreLine: 'navigation and synchronicity, trusting the intelligence running through timing and place',
    giftLine: 'navigation, sensing exactly when to move and when to simply wait',
    shadowLine: 'anxious and stuck, allergic to moving without total certainty first',
  },
  'White Mirror': {
    coreLine: 'truth and reflection, showing what\'s there without softening or decorating it',
    giftLine: 'clean reflection used in service of love rather than ego',
    shadowLine: 'cold and critical, mistaking clarity for superiority and detachment for wisdom',
  },
  'Blue Storm': {
    coreLine: 'transformation and disruption, breaking open what\'s gone stagnant or too small',
    giftLine: 'self generation, rebuilding itself again and again, growing stronger through what cracked it',
    shadowLine: 'chaotic and reactive, a little addicted to its own upheaval',
  },
  'Yellow Sun': {
    coreLine: 'illumination and wholeness, having arrived without needing to prove anything',
    giftLine: 'warmth other people can genuinely rest inside, without performing positivity',
    shadowLine: 'too pleased with how far it\'s come, performing positivity instead of feeling it',
  },
  'White Worldbridger': {
    coreLine: 'the bridge standing between one version of a life and the next',
    giftLine: 'sacred surrender, knowing some doors need to close before something truer opens',
    shadowLine: 'going cold without noticing, leaving emotionally long before leaving physically',
  },
};

export const TONE_WORDS = {
  'Cosmic': { essence: 'Presence', power: 'Endure', action: 'Transcend' },
  'Crystal': { essence: 'Cooperation', power: 'Universalise', action: 'Dedicate' },
  'Electric': { essence: 'Service', power: 'Activate', action: 'Bond' },
  'Galactic': { essence: 'Integrity', power: 'Harmonise', action: 'Model' },
  'Lunar': { essence: 'Challenge', power: 'Polarise', action: 'Stabalise' },
  'Magnetic': { essence: 'Purpose', power: 'Unify', action: 'Attract' },
  'Overtone': { essence: 'Radiance', power: 'Empower', action: 'Command' },
  'Planetary': { essence: 'Manifestation', power: 'Reflect', action: 'Produce' },
  'Resonant': { essence: 'Attunement', power: 'Channel', action: 'Inspire' },
  'Rhythmic': { essence: 'Equality', power: 'Organise', action: 'Balance' },
  'Self-Existing': { essence: 'Form', power: 'Define', action: 'easure' },
  'Solar': { essence: 'Intention', power: 'Pulse', action: 'Realise' },
  'Spectral': { essence: 'Liberation', power: 'Dissolve', action: 'Release' },
};

const ANCHOR_DATE = new Date(Date.UTC(1987, 5, 23)); // June 23 1987, reverse-solved Kin 1 — see header notes, contradicts Founder Bible's stated July 26

export function seal1to20(n) {
  // wraps to 1..20
  let m = n % 20;
  if (m <= 0) m += 20;
  return m;
}

export function tone1to13(n) {
  let m = n % 13;
  if (m <= 0) m += 13;
  return m;
}

export function getSeal(n) {
  return SEALS.find(s => s.n === seal1to20(n));
}

export function calcOracle(sealNum, toneNum) {
  // CONFIRMED against READ_TzolkinandYou.pdf worked example (Kin 233)
  const analogSeal = seal1to20(19 - sealNum);

  // UNVERIFIED — no confirmed example found, carried from The Mayan
  // Signs.pdf table pattern only
  const antipodeSeal = seal1to20(sealNum + 10);

  // PARTIALLY VERIFIED — matches the one worked example available,
  // but that example didn't discriminate this from at least one
  // other candidate formula. True rule per source is actually a
  // TONE-sum-of-14 relationship, not implemented here.
  const occultSeal = seal1to20(21 - sealNum);

  // Guide: find position within same-colour group, offset by tone
  const colour = getSeal(sealNum).color;
  const colourGroup = SEALS.filter(s => s.color === colour).map(s => s.n);
  const idxInGroup = colourGroup.indexOf(seal1to20(sealNum));
  const offset = GUIDE_OFFSET[toneNum] ?? 0;
  const guideIdx = (idxInGroup + offset) % colourGroup.length;
  const guideSeal = colourGroup[guideIdx];

  return {
    analog: getSeal(analogSeal),
    antipode: getSeal(antipodeSeal),
    occult: getSeal(occultSeal),
    guide: getSeal(guideSeal),
  };
}

export function calcWavespell(kin) {
  // CONFIRMED against Julian Casablancas (Kin 157 -> Wavespell 13, Red
  // Earth) — matched exactly. Not part of the original locked formula
  // set; derived and verified when the Wavespell content layer was built.
  const wavespellNum = Math.floor((kin - 1) / 13) + 1;
  const firstKinOfWavespell = (wavespellNum - 1) * 13 + 1;
  return { number: wavespellNum, seal: seal1to20(firstKinOfWavespell) };
}

function toneClause(toneName) {
  const t = TONE_WORDS[toneName];
  return `carrying ${t.essence.toLowerCase()}, it works to ${t.power.toLowerCase()} until it can ${t.action.toLowerCase()}`;
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function toneSealTitle(toneName, sealName) {
  // Correct Dreamspell order is Colour + Tone + Seal name, e.g.
  // "Blue Cosmic Night" — not Tone + full Seal name ("Cosmic Blue Night").
  const [colour, ...rest] = sealName.split(' ');
  return `${colour} ${toneName} ${rest.join(' ')}`;
}

export function generateChartText(kin, sealNum, toneNum, oracle, wavespell) {
  const seal = getSeal(sealNum);
  const toneName = TONES.find(t => t.n === toneNum).name;
  const traits = SEAL_TRAITS[seal.name];
  const clause = toneClause(toneName);

  const guideSeal = getSeal(oracle.guide.n);
  const analogSeal = getSeal(oracle.analog.n);
  const antipodeSeal = getSeal(oracle.antipode.n);
  const occultSeal = getSeal(oracle.occult.n);
  const wavespellSeal = getSeal(wavespell.seal);

  const guideTraits = SEAL_TRAITS[guideSeal.name];
  const analogTraits = SEAL_TRAITS[analogSeal.name];
  const antipodeTraits = SEAL_TRAITS[antipodeSeal.name];
  const occultTraits = SEAL_TRAITS[occultSeal.name];

  return {
    header: `Kin ${kin} - ${toneSealTitle(toneName, seal.name)}`,
    birthKin: `${seal.name}. ${capitalize(traits.coreLine)}, ${clause}. This is the structure underneath everything else in the chart.`,
    guide: `${guideSeal.name}. The direction back to yourself when you've drifted. Its signature: ${guideTraits.giftLine}.`,
    analog: `${analogSeal.name}. What comes without resistance. Access to ${analogTraits.giftLine} requires no struggle here.`,
    antipode: `${antipodeSeal.name}. The friction point. ${capitalize(antipodeTraits.shadowLine)} surfaces here, unresolved until it's faced.`,
    occult: `${occultSeal.name}. The power operating beneath awareness. ${capitalize(occultTraits.giftLine)} runs the system whether it's named or not.`,
    wavespell: `${wavespellSeal.name} governs this cycle. The terrain everything else in the chart moves across.`,
  };
}

export function calculateKin(dateStr) {
  // dateStr format: YYYY-MM-DD
  // Leap method LOCKED to "skip" — confirmed via two real data points,
  // see header notes. Feb 29 does not advance the Kin count.
  const [y, m, d] = dateStr.split('-').map(Number);
  const inputDate = new Date(Date.UTC(y, m - 1, d));

  let dayDiff = Math.round((inputDate - ANCHOR_DATE) / 86400000);

  let leapDaysPassed = 0;
  const start = ANCHOR_DATE < inputDate ? ANCHOR_DATE : inputDate;
  const end = ANCHOR_DATE < inputDate ? inputDate : ANCHOR_DATE;
  for (let yr = start.getUTCFullYear(); yr <= end.getUTCFullYear(); yr++) {
    const feb29 = new Date(Date.UTC(yr, 1, 29));
    if (feb29.getUTCMonth() === 1 && feb29.getUTCDate() === 29) {
      if (feb29 > start && feb29 <= end) leapDaysPassed++;
    }
  }
  dayDiff = dayDiff >= 0 ? dayDiff - leapDaysPassed : dayDiff + leapDaysPassed;

  let kin = ((dayDiff % 260) + 260) % 260 + 1; // 1..260
  const sealNum = seal1to20(kin);
  const toneNum = tone1to13(kin);

  return { kin, sealNum, toneNum, dayDiff };
}

// ============================================================
// COMBINED KIN — relationship calculation.
// CONFIRMED formula, pulled verbatim from the tested relationship
// calculator (tested across 4 independent cases including single and
// double wraparound, 2-person and 5-person groups):
//   Combined Kin = (sum of all individual Kins) mod 260
// The result then runs through the exact same Kin -> Seal -> Tone ->
// Oracle -> chart-text pipeline as any individual chart.
// ============================================================
export function calculateCombinedKin(dateStrings) {
  const validDates = dateStrings.filter((d) => d && d.trim() !== '');
  const individualKins = validDates.map((d) => calculateKin(d).kin);
  const sum = individualKins.reduce((a, b) => a + b, 0);
  let combinedKin = sum % 260;
  if (combinedKin === 0) combinedKin = 260;

  const sealNum = seal1to20(combinedKin);
  const toneNum = tone1to13(combinedKin);
  const seal = getSeal(sealNum);
  const tone = TONES.find((t) => t.n === toneNum);
  const oracle = calcOracle(sealNum, toneNum);
  const wavespell = calcWavespell(combinedKin);
  const chart = generateChartText(combinedKin, sealNum, toneNum, oracle, wavespell);

  return {
    kin: combinedKin,
    seal, tone, oracle, wavespell, chart, sealNum, toneNum,
    peopleCount: validDates.length,
    individualKins,
  };
}
