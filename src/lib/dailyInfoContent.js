// ============================================================
// Daily-page-only info card content.
//
// This is deliberately separate from generateChartText() in
// kinLogic.js, which still powers the You / Relationship charts.
// Do not use this file to change anything outside the Today page.
//
// Two layers, matching Jack & Ruby's Canva card drafts:
//   1. POSITION_INFO — fixed title/subtitle/description for each
//      of the 5 positions. Identical every day, regardless of seal.
//   2. SEAL_POSITION_TEXT — the seal-specific reading for that
//      seal IN that position (20 seals x 5 positions = 100 cards).
// ============================================================

export const POSITION_INFO = {
  analog: {
    title: 'Analog',
    subtitle: 'The Natural Support',
    description: 'The energy that works easily alongside the main Kin. It shows what can support, soften or (and) strengthen the day.',
  },
  antipode: {
    title: 'Antipode',
    subtitle: 'The Growth Edge',
    description: 'The energy that challenges, stretches or corrects the day. It may create tension, but it also prevents the main Kin from becoming limited or unbalanced.',
  },
  guide: {
    title: 'Guide',
    subtitle: 'The Higher Direction',
    description: 'The quality leading the day forward. It reveals what to trust, strengthen or follow in order to express the main Kin well.',
  },
  occult: {
    title: 'Occult',
    subtitle: 'The Hidden Power',
    description: 'The energy working beneath the surface of the day. It often appears unexpectedly, revealing a deeper strength, insight or possibility when it is needed most.',
  },
  birthKin: {
    title: 'Birth Kin',
    subtitle: 'The Core Energy',
    description: 'The central theme of the day. This is the energy asking to be embodied, understood and expressed.',
  },
};

export const SEAL_POSITION_TEXT = {
  'Red Dragon': {
    analog: [
      'Red Dragon brings balance through nourishment, rest and simple acts of care. Making yourself a proper meal, slowing down or spending time somewhere that feels safe can help settle the day.',
      'Sometimes the most productive thing you can do is look after yourself properly.',
    ],
    antipode: [
      'Red Dragon can bring up feelings of neediness, dependence or not being supported in the way you hoped. You may also notice yourself giving too much to other people while ignoring your own needs.',
      'The challenge is to ask for what you need without expecting someone else to make everything feel okay.',
    ],
    guide: [
      'Red Dragon guides you to take care of what is most essential first. Eat well, rest when you need to and give your attention to what makes you feel grounded.',
      'You do not need to have everything figured out before taking the next step.',
    ],
    occult: [
      'Red Dragon may work quietly through unexpected care or support. Someone may offer you exactly what you need, or you may suddenly realise what has been missing.',
      'Stay open to receiving help rather than assuming you have to carry everything alone.',
    ],
    birthKin: [
      'Today brings your attention back to the basics. Your body, your needs and the parts of life that help you feel safe and supported may need more care than usual.',
      'Before pushing ahead, ask yourself what would genuinely nourish you today.',
    ],
  },

  'White Wind': {
    analog: [
      'White Wind brings balance through expression. Writing things down, talking to someone you trust or even taking a few slow breaths can help clear your head.',
      'You do not need to have the perfect words. You may just need to let something move through you.',
    ],
    antipode: [
      'White Wind can bring up overthinking, mixed messages or the feeling that people are not understanding you properly. You may talk around what you really mean or react too quickly.',
      'The challenge is to pause, get clear and choose your words with more care.',
    ],
    guide: [
      'White Wind guides you through communication. A conversation, piece of writing or moment of honesty may help you understand what to do next.',
      'Say what you mean, but also leave enough space to listen.',
    ],
    occult: [
      'White Wind may work quietly through something said at exactly the right time. A passing comment, unexpected conversation or sudden thought could shift the way you see things.',
      'Pay attention to the words that stay with you.',
    ],
    birthKin: [
      'Today may bring more thoughts, conversations or things you feel you need to say. Try not to fill every silence.',
      'The clearest message usually comes through when you slow down enough to hear what is actually going on underneath the noise.',
    ],
  },

  'Blue Night': {
    analog: [
      'Blue Night brings balance through rest, imagination and time away from outside noise. Journalling, daydreaming or spending time somewhere quiet may help you reconnect with what you actually want.',
      'A little space can make things feel possible again.',
    ],
    antipode: [
      'Blue Night can bring up fear around money, security or whether there will be enough. You may get stuck focusing on what is missing or assume that the things you want are too far away.',
      'The challenge is to notice where fear is closing down your imagination.',
    ],
    guide: [
      'Blue Night guides you through your inner world. Notice the ideas, images and quiet desires that keep returning.',
      'You do not need to know exactly how they will happen yet. For now, let yourself see what is possible.',
    ],
    occult: [
      'Blue Night may work quietly through dreams, sudden ideas or a feeling that there is more available to you than you first thought. Something imagined today could become more important later.',
      'Pay attention to what appears when your mind is relaxed.',
    ],
    birthKin: [
      'Today may draw your attention inward. You could feel more reflective, dreamy or aware of what you want your life to become.',
      'Give yourself some space to imagine beyond what is already in front of you.',
    ],
  },

  'Yellow Seed': {
    analog: [
      'Yellow Seed brings balance through simple acts of growth. Starting something small, clearing a space, spending time in nature or returning to a habit you have neglected may help you feel more focused.',
      'You do not need a perfect plan, just one useful step.',
    ],
    antipode: [
      'Yellow Seed can bring up impatience, self doubt or frustration that something is not happening quickly enough. You may compare your progress to someone else\u2019s or feel pressure to prove yourself.',
      'The challenge is to keep tending to your own path without rushing the process.',
    ],
    guide: [
      'Yellow Seed guides you to be more intentional with your energy. Notice what you are giving your time to and whether it is helping something meaningful grow.',
      'Small, consistent choices may take you further than one big push.',
    ],
    occult: [
      'Yellow Seed may work quietly through an idea, opportunity or connection that has more potential than it first appears. Something small could begin to take root today.',
      'Pay attention to what feels worth nurturing, even if you cannot see where it will lead yet.',
    ],
    birthKin: [
      'Today may bring your attention to growth, patience and the things you are trying to build. You do not need to force everything to happen at once.',
      'Focus on what needs your care now and let the rest develop in its own time.',
    ],
  },

  'Red Serpent': {
    analog: [
      'Red Serpent brings balance through movement, touch and connection with the body. Stretching, dancing, swimming, walking or doing something physical can help move stuck energy.',
      'It may be easier to think clearly once your body has had a chance to release some tension.',
    ],
    antipode: [
      'Red Serpent can bring up tension, defensiveness or the feeling that you need to protect yourself. You may react quickly or find it hard to settle.',
      'The challenge is to work out whether something is genuinely unsafe or whether your body is holding onto stress from somewhere else.',
    ],
    guide: [
      'Red Serpent guides you to trust your instincts and respond to what is happening in the moment. Pay attention to what gives you energy, what drains you and where your body naturally wants to move.',
      'You may know more than you think before you have the words for it.',
    ],
    occult: [
      'Red Serpent may work quietly through a strong gut feeling, physical sensation or sudden burst of energy.',
      'Your body may notice something before your mind does. Pay attention to the signals that keep returning.',
    ],
    birthKin: [
      'Today may bring more awareness to your body, instincts and physical energy. You might feel more alert, sensitive or reactive than usual.',
      'Try to notice what your body is telling you before your mind starts explaining it away.',
    ],
  },

  'White Worldbridger': {
    analog: [
      'White Worldbridger brings balance through clearing space and finishing what is complete. Cleaning out a drawer, cancelling something that no longer feels right or having an honest conversation may help the day feel lighter.',
      'Sometimes release begins with one small decision.',
    ],
    antipode: [
      'White Worldbridger can bring up fear around loss, change or not being in control. You may hold onto a person, plan or version of yourself because the unknown feels uncomfortable.',
      'The challenge is to notice when attachment is making the transition harder than it needs to be.',
    ],
    guide: [
      'White Worldbridger guides you to loosen your grip on how things should unfold. A change of plan, ending or shift in perspective may be helping you move into something new.',
      'You do not need to know what comes next before making room for it.',
    ],
    occult: [
      'White Worldbridger may work quietly through an unexpected ending, chance meeting or change of direction. Something leaving your life could make space for a connection or opportunity you could not see before.',
      'Try not to decide too quickly that a change is a bad thing.',
    ],
    birthKin: [
      'Today may bring your attention to endings, release and the things you are ready to move on from. Something may need to be accepted rather than fixed.',
      'Letting go can create more space than trying to hold everything together.',
    ],
  },

  'Blue Hand': {
    analog: [
      'Blue Hand brings balance through making, fixing or completing something. Cleaning, cooking, drawing, gardening or finishing a small task may help you feel clearer and more capable.',
      'Sometimes healing begins by doing one simple thing properly.',
    ],
    antipode: [
      'Blue Hand can bring up frustration with yourself or the feeling that you should already know how to fix something. You may focus too much on what is wrong or take responsibility for problems that are not yours to solve.',
      'The challenge is to help without trying to control the outcome.',
    ],
    guide: [
      'Blue Hand guides you through practical action and experience.',
      'You may not be able to think your way into clarity, but doing something with your hands or taking one useful step could show you what comes next.',
    ],
    occult: [
      'Blue Hand may work quietly through a small breakthrough, useful skill or moment of understanding. Something you have been struggling with may suddenly make more sense once you begin working with it.',
      'Pay attention to what your own experience is teaching you.',
    ],
    birthKin: [
      'Today may bring your attention to healing, learning and the things that need to be worked through. You might feel drawn to fix, finish or better understand something.',
      'Focus on what you can actually do today, rather than everything that is still unresolved.',
    ],
  },

  'Yellow Star': {
    analog: [
      'Yellow Star brings balance through beauty, creativity and your surroundings. Getting dressed in something you love, rearranging a room, listening to music or making something with your hands may help you feel more like yourself.',
      'Beauty does not have to be useful to be worthwhile.',
    ],
    antipode: [
      'Yellow Star can bring up perfectionism, comparison or the feeling that you are not doing enough. You may become overly focused on how something looks or whether other people approve of it.',
      'The challenge is to create from enjoyment rather than trying to prove your worth.',
    ],
    guide: [
      'Yellow Star guides you through creativity and a sense of harmony. Notice what feels good to wear, make, arrange or spend time around.',
      'Bringing a little more beauty into the day may help you feel clearer about where to go next.',
    ],
    occult: [
      'Yellow Star may work quietly through a creative idea, an image or something beautiful that catches your attention. A small detail may inspire you or remind you of a part of yourself that has been neglected.',
      'Pay attention to what makes you stop and look twice.',
    ],
    birthKin: [
      'Today may bring your attention to beauty, creativity and the way things feel around you. You might feel more aware of what is out of place or drawn to make something look, feel or work better.',
      'Let yourself care about the details without needing everything to be perfect.',
    ],
  },

  'Red Moon': {
    analog: [
      'Red Moon brings balance through water, rest and emotional release. Having a bath, going for a swim, drinking more water or letting yourself cry may help shift what feels stuck.',
      'You do not always need to understand a feeling before allowing it to pass.',
    ],
    antipode: [
      'Red Moon can bring up emotional overwhelm, moodiness or the feeling that you are carrying too much. You may absorb the atmosphere around you or struggle to separate your feelings from someone else\u2019s.',
      'The challenge is to feel what is there without letting it take over the whole day.',
    ],
    guide: [
      'Red Moon guides you to work with how you feel, rather than trying to stay in control of it. Notice what feels heavy, what brings relief and where you may need to soften.',
      'The way forward may become clearer once you let some emotion move through.',
    ],
    occult: [
      'Red Moon may work quietly through a sudden emotional release or a feeling you did not realise was sitting underneath everything. Something may soften once it is finally felt.',
      'Pay attention to what leaves you feeling lighter afterwards.',
    ],
    birthKin: [
      'Today may bring more emotion to the surface. You could feel more sensitive, tired or in need of some kind of release. Rather than pushing the feeling away, give it space to move.',
      'A cry, swim, shower or honest conversation may help clear what has been building.',
    ],
  },

  'White Dog': {
    analog: [
      'White Dog brings balance through affection, closeness and time with the people or animals you love. Calling a friend, cooking for someone, hugging your partner or spending time with a pet may help you feel more settled.',
      'Small acts of love can bring you back to yourself.',
    ],
    antipode: [
      'White Dog can bring up hurt, jealousy, disappointment or fear of being left out. You may become more aware of where you have been giving too much or expecting someone to meet a need they cannot meet.',
      'The challenge is to stay open without abandoning yourself.',
    ],
    guide: [
      'White Dog guides you through the heart. Notice who you feel comfortable around, what helps you soften and where care is being returned.',
      'The right direction may become clearer through an honest conversation or time with someone you trust.',
    ],
    occult: [
      'White Dog may work quietly through unexpected care, loyalty or emotional honesty. Someone may show up for you in a way you did not expect, or you may realise how much a certain connection means to you.',
      'Pay attention to the love that is already present.',
    ],
    birthKin: [
      'Today may bring your attention to love, loyalty and the people you feel closest to. You might notice where a relationship feels safe and genuine, or where something has started to feel off.',
      'Let the day show you which connections feel mutual.',
    ],
  },

  'Blue Monkey': {
    analog: [
      'Blue Monkey brings balance through play, laughter and doing something without needing it to be productive. Spend time with someone who makes you laugh, make something just for fun or change the way you usually approach a problem.',
      'A lighter attitude may help things move again.',
    ],
    antipode: [
      'Blue Monkey can bring up immaturity, distraction or the urge to avoid anything uncomfortable. You may joke your way out of a serious conversation or lose focus when something starts to feel difficult.',
      'The challenge is to stay light without becoming careless.',
    ],
    guide: [
      'Blue Monkey guides you through curiosity and play. Follow what feels interesting, funny or a little unexpected.',
      'You may find the next step by loosening up, trying something different or letting yourself enjoy the day more.',
    ],
    occult: [
      'Blue Monkey may work quietly through a surprise, coincidence or moment that breaks your usual way of thinking. Something that first seems silly or unimportant could reveal a deeper truth.',
      'Pay attention to what makes you laugh and then makes you think.',
    ],
    birthKin: [
      'Today may feel lighter, stranger or less predictable than expected. Blue Monkey brings attention to play, humour and the stories you tell yourself. Try not to take every problem at face value.',
      'A different perspective may change the whole mood.',
    ],
  },

  'Yellow Human': {
    analog: [
      'Yellow Human brings balance through making one clear and conscious choice. Saying no, changing your mind or stepping away from other people\u2019s opinions may help you feel more like yourself.',
      'You do not need everyone to understand your decision for it to be right for you.',
    ],
    antipode: [
      'Yellow Human can bring up indecision, people pleasing or the feeling that someone else has too much influence over you. You may second guess yourself or agree to something you do not really want.',
      'The challenge is to listen to advice without giving away your own judgement.',
    ],
    guide: [
      'Yellow Human guides you to make your own choice, even when other people have strong opinions. Notice where you are looking outside yourself for permission.',
      'The right direction may become clearer once you stop trying to please everyone.',
    ],
    occult: [
      'Yellow Human may work quietly through a choice that seems small but changes more than you expected. You may suddenly see how much an old belief or another person\u2019s opinion has been shaping you.',
      'Pay attention to the moments when you feel yourself thinking more freely.',
    ],
    birthKin: [
      'Today may bring your attention to choice, influence and the way other people affect your thinking. You may feel pulled in different directions or more aware of what everyone else expects from you.',
      'Try to come back to what feels true for you.',
    ],
  },

  'Red Skywalker': {
    analog: [
      'Red Skywalker brings balance through space, movement and new experiences. Going somewhere different, spending time outside or changing your usual routine may help clear your head.',
      'Even a small adventure can shift the way the day feels.',
    ],
    antipode: [
      'Red Skywalker can bring up restlessness, avoidance or the feeling that life is happening somewhere else. You may want to escape your responsibilities or keep moving so you do not have to sit with what is uncomfortable.',
      'The challenge is to explore without running away.',
    ],
    guide: [
      'Red Skywalker guides you to step outside what feels familiar. Take a different route, ask a new question or go somewhere you have not been before.',
      'Sometimes the next direction only becomes clear once you leave your usual point of view.',
    ],
    occult: [
      'Red Skywalker may work quietly through an unexpected place, person or experience that opens your mind. Something outside your normal world could show you a possibility you had not considered.',
      'Pay attention to what makes life feel bigger.',
    ],
    birthKin: [
      'Today may bring a desire for more space, freedom or a change of scenery. You might feel restless with the usual routine or curious about what else is possible.',
      'Let yourself explore without needing to know exactly where it will lead.',
    ],
  },

  'White Wizard': {
    analog: [
      'White Wizard brings balance through slowing down and giving something your full attention. Meditation, reading, sitting in the sun or spending time without your phone may help you feel more settled.',
      'Sometimes the most powerful thing you can do is stop rushing.',
    ],
    antipode: [
      'White Wizard can bring up impatience, control or the feeling that things should be happening faster. You may try to influence the outcome or become frustrated when other people do not respond the way you hoped.',
      'The challenge is to stay present without trying to manage everything.',
    ],
    guide: [
      'White Wizard guides you through patience, presence and quiet attention. You do not need to force the next step.',
      'Give things time, notice what feels calm and let the answer come to you rather than chasing it.',
    ],
    occult: [
      'White Wizard may work quietly through a strong feeling, subtle connection or moment that seems to hold more meaning than usual. Someone may have a surprising effect on you, or time may seem to slow down around an important moment.',
      'Pay attention to what draws you in.',
    ],
    birthKin: [
      'Today may ask you to slow down and become more present. You could feel more sensitive to the mood around you or more aware of what is happening beneath the surface.',
      'Try not to rush past what the moment is showing you.',
    ],
  },

  'Blue Eagle': {
    analog: [
      'Blue Eagle brings balance through perspective, creativity and looking beyond the immediate problem. Making a mood board, writing down your ideas or spending time somewhere with a wide view may help clear your mind.',
      'Sometimes you need to see the whole picture before knowing what to do next.',
    ],
    antipode: [
      'Blue Eagle can bring up overthinking, judgement or frustration that reality does not match the picture in your head. You may become too focused on the future or critical of how things are unfolding.',
      'The challenge is to hold the vision without disconnecting from where you are now.',
    ],
    guide: [
      'Blue Eagle guides you to step back and look at things from a wider perspective. A problem may feel different once you stop focusing only on what is happening right now.',
      'Give yourself space to imagine where this could lead.',
    ],
    occult: [
      'Blue Eagle may work quietly through a sudden insight or a glimpse of what could be possible. An idea may arrive fully formed, or you may briefly see your situation from a completely different angle.',
      'Pay attention to the visions that feel both exciting and true.',
    ],
    birthKin: [
      'Today may bring a clearer view of the bigger picture. You could feel more aware of where your life is heading, what needs to change or what you want to create next.',
      'Try not to get lost in every small detail.',
    ],
  },

  'Yellow Warrior': {
    analog: [
      'Yellow Warrior brings balance through asking better questions and doing something that makes you feel brave. Speak up, look into something properly or take one step towards what has been intimidating you.',
      'Confidence often grows after you begin.',
    ],
    antipode: [
      'Yellow Warrior can bring up doubt, defensiveness or the need to prove that you are right. You may overthink a decision or keep questioning yourself until you feel stuck.',
      'The challenge is to stay open without letting fear run the whole conversation.',
    ],
    guide: [
      'Yellow Warrior guides you through courage and curiosity. Ask what you really want to know, even if the answer feels uncomfortable.',
      'You may find your direction by being honest about what no longer makes sense.',
    ],
    occult: [
      'Yellow Warrior may work quietly through a question that stays with you or a moment that changes what you thought you knew. Something may challenge your usual way of thinking.',
      'Pay attention to the ideas that make you curious instead of certain.',
    ],
    birthKin: [
      'Today may bring more questions than answers. You could feel drawn to understand something properly, challenge an old belief or face something you have been avoiding. Try not to rush yourself into certainty.',
      'The right question may be more useful than a quick answer.',
    ],
  },

  'Red Earth': {
    analog: [
      'Red Earth brings balance through movement, fresh surroundings and contact with the physical world.',
      'Going for a walk, taking a different route or trying something new may help shift stagnant energy. You may also feel the desire to travel or be somewhere else, even if you can only honour it in a small way today.',
    ],
    antipode: [
      'Red Earth can bring up restlessness or the feeling that you need to be somewhere else. You may want to rush ahead, change plans or escape what is in front of you.',
      'Before making a big move, take a moment to work out whether you are being genuinely pulled forward or simply trying to get away.',
    ],
    guide: [
      'Red Earth guides you to work with the natural flow of the day, rather than trying to plan every part of it.',
      'Notice what comes up, where you feel drawn and whether a change of direction feels right. Sometimes you find the way forward simply by getting moving.',
    ],
    occult: [
      'Red Earth may work through small coincidences or changes of plan today. A conversation, delay or unexpected invitation could point you in a direction you had not considered.',
      'Stay open to the idea that not everything meaningful will arrive in the way you expected.',
    ],
    birthKin: [
      'Today may bring a need for movement, change or a clearer sense of direction. Try to stay present with where you actually are, rather than getting too caught up in where you think you should be.',
      'Notice what keeps drawing your attention. It may be showing you where to go next.',
    ],
  },

  'White Mirror': {
    analog: [
      'White Mirror brings balance through simplicity, order and clear boundaries. Cleaning your space, finishing something properly or saying a direct no may help you feel more settled.',
      'Removing what is unnecessary can make the next step easier to see.',
    ],
    antipode: [
      'White Mirror can bring up criticism, conflict or the need to prove that you are right. You may become focused on someone else\u2019s flaws or feel uncomfortable with what is being reflected back to you.',
      'The challenge is to be honest without becoming harsh.',
    ],
    guide: [
      'White Mirror guides you through honesty and clear reflection. Pay attention to what keeps showing up in your conversations, reactions and relationships.',
      'The answer may be in the pattern you are already seeing.',
    ],
    occult: [
      'White Mirror may work quietly through a person or situation that shows you something about yourself. A reaction, repeated pattern or uncomfortable truth could reveal more than it first appears.',
      'Pay attention to what feels strangely familiar.',
    ],
    birthKin: [
      'Today may make things feel clearer than usual. You could notice what is working, what is not and where something has become hard to ignore.',
      'Try to see the truth of the situation without turning it into a judgement of yourself or someone else.',
    ],
  },

  'Blue Storm': {
    analog: [
      'Blue Storm brings balance through movement, release and doing something that helps clear built up energy. Exercise, cleaning, crying, dancing or finishing something you have been avoiding may help.',
      'Sometimes you need to move the energy before you can understand it.',
    ],
    antipode: [
      'Blue Storm can bring up overwhelm, emotional intensity or the feeling that everything is happening at once. You may try to force a breakthrough or react before you have had time to settle.',
      'The challenge is to let change happen without creating more chaos than necessary.',
    ],
    guide: [
      'Blue Storm guides you through change. Notice what feels ready to move, clear or be done differently.',
      'You may not need a perfect plan. Taking one honest step can be enough to shift the energy.',
    ],
    occult: [
      'Blue Storm may work quietly through a sudden change, emotional release or breakthrough you did not expect. Something that first feels disruptive could end up clearing the way for you.',
      'Pay attention to what feels different afterwards.',
    ],
    birthKin: [
      'Today may feel intense, fast moving or harder to control than usual. Something could be shifting beneath the surface, even if you cannot see the outcome yet. Try not to resist every change.',
      'Some things need to break open before they can move forward.',
    ],
  },

  'Yellow Sun': {
    analog: [
      'Yellow Sun brings balance through warmth, sunlight and simple enjoyment. Spending time outside, resting in the sun or doing something that makes you feel alive may help reset the day.',
      'Sometimes feeling better begins with letting yourself enjoy what is already here.',
    ],
    antipode: [
      'Yellow Sun can bring up pressure to stay positive or pretend everything is fine. You may ignore something difficult because you want to move past it quickly.',
      'The challenge is to be honest about what you feel without letting it block the good that is still there.',
    ],
    guide: [
      'Yellow Sun guides you towards clarity. Notice what feels open, honest and easy to understand.',
      'You may not need to keep analysing the situation. The right direction could be the one that brings the most lightness.',
    ],
    occult: [
      'Yellow Sun may work quietly through a moment of clarity, joy or relief that arrives when you need it. Something may suddenly feel much simpler than it did before.',
      'Pay attention to what brings you back to yourself.',
    ],
    birthKin: [
      'Today may bring your attention to what feels clear, warm and life giving. You could feel more aware of what lifts you up and what drains your energy.',
      'Try to keep things simple and give your time to what genuinely feels good.',
    ],
  },
};
