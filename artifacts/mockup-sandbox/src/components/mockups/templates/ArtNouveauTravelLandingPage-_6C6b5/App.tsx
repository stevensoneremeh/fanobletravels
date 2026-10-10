import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { Feather, MapPin, Clock, Flame, ArrowUpRight, Eye, Compass, Moon } from 'lucide-react';

const ARTICLES = [
  {
    id: 1, cat: 'TRESPASS', title: 'The Hotel That Banned Reviews', dek: 'A 9-room ruin in the Carpathians where the owner burns every TripAdvisor printout in the lobby fireplace. Nightly. As ceremony.',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=900&fit=crop', loc: '45.59°N 25.35°E', time: '14 min', issue: 'No. 47',
  },
  {
    id: 2, cat: 'SLOW ROT', title: 'Eat Where the Cooks Are Angry', dek: 'Lisbon\'s last untranslated tasca. No menu, no patience, no mercy for the indecisive.',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop', loc: '38.71°N 9.13°W', time: '8 min', issue: 'No. 46',
  },
  {
    id: 3, cat: 'LIQUID COURAGE', title: 'Absinthe at the Edge of the Map', dek: 'A distillery in the Jura that never registered with anyone, ever, and intends to keep it that way.',
    img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=600&fit=crop', loc: '46.67°N 5.55°E', time: '11 min', issue: 'No. 46',
  },
  {
    id: 4, cat: 'OFF-MAP', title: 'Sleep in the Lighthouse They Condemned', dek: 'The Norwegian coast guard says it\'s structurally unsound. The keeper\'s granddaughter says they\'re cowards.',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop', loc: '67.28°N 14.40°E', time: '17 min', issue: 'No. 45',
  },
  {
    id: 5, cat: 'TRESPASS', title: 'Naples Doesn\'t Want You. Go Anyway.', dek: 'A love letter to the city that refuses to be photogenic, scrubbed, or sorry.',
    img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&h=600&fit=crop', loc: '40.85°N 14.27°E', time: '12 min', issue: 'No. 45',
  },
  {
    id: 6, cat: 'SLOW ROT', title: 'The Vineyard That Hates Wine Critics', dek: 'Georgian qvevri, zero filtration, and a standing invitation for sommeliers to leave.',
    img: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&h=600&fit=crop', loc: '41.92°N 45.47°E', time: '9 min', issue: 'No. 44',
  },
  {
    id: 7, cat: 'OFF-MAP', title: 'Night Trains for People Who Hate Arriving', dek: 'Belgrade to Bar, eleven hours, no Wi-Fi, one window that won\'t close. Perfection.',
    img: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&h=600&fit=crop', loc: '44.79°N 20.45°E', time: '15 min', issue: 'No. 44',
  },
  {
    id: 8, cat: 'LIQUID COURAGE', title: 'Mezcal, Smoke, and the Lie of Authenticity', dek: 'Oaxaca\'s palenqueros are tired of your purity tests. Drink what burns.',
    img: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=800&h=600&fit=crop', loc: '17.07°N 96.72°W', time: '10 min', issue: 'No. 43',
  },
  {
    id: 9, cat: 'TRESPASS', title: 'The Bathhouse Beneath the Opera', dek: 'Budapest keeps its strangest steam behind an unmarked door and a password that changes with the moon.',
    img: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&h=600&fit=crop', loc: '47.50°N 19.04°E', time: '13 min', issue: 'No. 43',
  },
];

const CATS = ['ALL', 'TRESPASS', 'SLOW ROT', 'LIQUID COURAGE', 'OFF-MAP'];

const FIELD_NOTES = [
  { t: '03:12', txt: 'Tbilisi — the sulphur baths smell like rebellion and rotten eggs. Both are good for you.' },
  { t: '11:48', txt: 'Marseille — a fisherman traded us bouillabaisse for a cigarette and an opinion on the mayor.' },
  { t: '17:05', txt: 'Hà Giang — rented the motorbike the hostel told us not to. The hostel was wrong.' },
  { t: '23:59', txt: 'Valparaíso — every wall here argues with the government. The walls are winning.' },
  { t: '06:30', txt: 'Svaneti — the towers were built to survive blood feuds. Our guesthouse host calls them "good fences."' },
];

const Flourish = ({ flip = false, className = '' }) => (
  <svg viewBox="0 0 200 28" className={className} style={{ transform: flip ? 'scaleX(-1)' : 'none' }} fill="none">
    <path d="M2 14 C 30 14, 40 4, 60 4 C 80 4, 80 24, 100 24 C 120 24, 120 4, 140 4 C 160 4, 170 14, 198 14" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="100" cy="14" r="3" stroke="currentColor" strokeWidth="1.2" />
    <path d="M60 4 C 56 1, 52 1, 50 3 M140 4 C 144 1, 148 1, 150 3" stroke="currentColor" strokeWidth="1" />
    <path d="M100 11 C 97 8, 97 5, 100 2 C 103 5, 103 8, 100 11 Z" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const CornerVine = ({ className = '' }) => (
  <svg viewBox="0 0 80 80" className={className} fill="none">
    <path d="M2 78 C 2 40, 10 10, 78 2" stroke="currentColor" strokeWidth="1.2" />
    <path d="M2 78 C 14 60, 30 56, 44 60" stroke="currentColor" strokeWidth="1" />
    <path d="M20 36 C 28 30, 36 30, 42 34 C 36 40, 26 40, 20 36 Z" stroke="currentColor" strokeWidth="1" />
    <path d="M44 60 c 4 -6, 12 -8, 18 -4 c -4 6, -14 8, -18 4 Z" stroke="currentColor" strokeWidth="1" />
    <circle cx="78" cy="2" r="2.5" stroke="currentColor" strokeWidth="1" />
  </svg>
);

export default function App() {
  const [cat, setCat] = useState('ALL');
  const [hovering, setHovering] = useState(false);
  const dotRef = useRef(null);
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);
  const sx = useSpring(ringX, { stiffness: 180, damping: 18, mass: 0.6 });
  const sy = useSpring(ringY, { stiffness: 180, damping: 18, mass: 0.6 });

  useEffect(() => {
    const move = (e) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX - 3}px, ${e.clientY - 3}px, 0)`;
      }
      ringX.set(e.clientX - 22);
      ringY.set(e.clientY - 22);
    };
    const over = (e) => setHovering(!!e.target.closest('[data-cursor]'));
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', over); };
  }, []);

  const filtered = cat === 'ALL' ? ARTICLES : ARTICLES.filter(a => a.cat === cat);

  return (
    <div className="min-h-screen bg-[#10231a] text-[#ecdfbe] selection:bg-[#c2a14d] selection:text-[#10231a]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Yeseva+One&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Cinzel:wght@400;500;600&display=swap" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: `
        * { cursor: none !important; }
        body { background: #10231a; }
        .display { font-family: 'Yeseva One', serif; }
        .label { font-family: 'Cinzel', serif; letter-spacing: 0.18em; }
        .paper-grain { background-image: radial-gradient(rgba(194,161,77,0.07) 0.7px, transparent 0.7px); background-size: 5px 5px; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-track { animation: marquee 38s linear infinite; }
        @keyframes flicker { 0%,100% { opacity: 1; } 50% { opacity: 0.55; } }
        .flicker { animation: flicker 2.6s ease-in-out infinite; }
        .arch { border-radius: 999px 999px 12px 12px / 760px 760px 12px 12px; }
        .gold-frame { box-shadow: 0 0 0 1px #c2a14d, 0 0 0 6px #10231a, 0 0 0 7px rgba(194,161,77,0.55); }
        .article-card:hover .article-img { filter: sepia(0.35) saturate(1.1) contrast(1.05); transform: scale(1.05); }
        .article-card:hover .read-arrow { transform: translate(3px,-3px); opacity: 1; }
        ::-webkit-scrollbar { width: 9px; }
        ::-webkit-scrollbar-track { background: #0b1a13; }
        ::-webkit-scrollbar-thumb { background: #c2a14d; border-radius: 0; border: 2px solid #0b1a13; }
        .dropcap::first-letter { font-family: 'Yeseva One', serif; font-size: 3.6em; float: left; line-height: 0.78; padding: 0.06em 0.12em 0 0; color: #c2a14d; }
      `}} />

      {/* ——— custom cursor ——— */}
      <div ref={dotRef} className="fixed top-0 left-0 w-[6px] h-[6px] rounded-full bg-[#c2a14d] z-[100] pointer-events-none" />
      <motion.div
        className="fixed top-0 left-0 z-[99] pointer-events-none"
        style={{ x: sx, y: sy }}
      >
        <motion.svg
          width="44" height="44" viewBox="0 0 44 44" fill="none"
          animate={{ scale: hovering ? 1.7 : 1, rotate: hovering ? 90 : 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        >
          <circle cx="22" cy="22" r="16" stroke="#c2a14d" strokeWidth="1" opacity="0.85" />
          <path d="M22 6 C 19 10, 19 14, 22 18 C 25 14, 25 10, 22 6 Z" stroke="#c2a14d" strokeWidth="0.8" opacity="0.9" />
          <path d="M22 38 C 19 34, 19 30, 22 26 C 25 30, 25 34, 22 38 Z" stroke="#c2a14d" strokeWidth="0.8" opacity="0.9" />
          <path d="M6 22 C 10 19, 14 19, 18 22 C 14 25, 10 25, 6 22 Z" stroke="#c2a14d" strokeWidth="0.8" opacity="0.9" />
          <path d="M38 22 C 34 19, 30 19, 26 22 C 30 25, 34 25, 38 22 Z" stroke="#c2a14d" strokeWidth="0.8" opacity="0.9" />
        </motion.svg>
      </motion.div>

      {/* ——— marquee strip ——— */}
      <div className="overflow-hidden border-b border-[#c2a14d]/50 bg-[#6e2b25] text-[#ecdfbe]">
        <div className="marquee-track flex whitespace-nowrap py-1.5">
          {[0, 1].map(i => (
            <div key={i} className="flex shrink-0">
              {['BURN THE GUIDEBOOK', 'TOURISM IS A CAGE', 'GET LOST PROPERLY', 'NO STARS, NO MASTERS', 'THE ITINERARY IS A LIE', 'GO WHERE THE WI-FI DIES'].map((s, j) => (
                <span key={j} className="label text-[10px] tracking-[0.3em] mx-6 flex items-center gap-6">
                  {s} <span className="text-[#c2a14d]">❧</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ——— masthead ——— */}
      <header className="paper-grain border-b border-[#c2a14d]/50">
        <div className="max-w-[1500px] mx-auto px-4 md:px-6 pt-5 pb-3">
          <div className="flex items-end justify-between gap-4">
            <div className="hidden md:block label text-[10px] text-[#c2a14d]/80 leading-relaxed">
              VOL. IX — DISPATCH 47<br />ÉDITION FÉRALE · MMXXV
            </div>
            <div className="text-center flex-1">
              <div className="flex items-center justify-center gap-3 mb-1">
                <Flourish className="w-28 text-[#c2a14d]" />
                <Moon className="w-3.5 h-3.5 text-[#c2a14d] flicker" strokeWidth={1.2} />
                <Flourish flip className="w-28 text-[#c2a14d]" />
              </div>
              <h1 className="display text-[clamp(2.4rem,6vw,4.8rem)] leading-[0.95] tracking-tight" data-cursor>
                Hôtel <span className="text-[#c2a14d] italic">Sauvage</span>
              </h1>
              <p className="label text-[10px] md:text-[11px] text-[#ecdfbe]/70 mt-2">DISPATCHES FROM THE UNBEATEN PATH · A JOURNAL OF BEAUTIFUL DISOBEDIENCE</p>
            </div>
            <div className="hidden md:block label text-[10px] text-[#c2a14d]/80 text-right leading-relaxed">
              PRINTED NOWHERE<br />READ EVERYWHERE
            </div>
          </div>

          <nav className="mt-4 border-t border-[#c2a14d]/40 pt-2 flex flex-wrap items-center justify-center gap-x-1 gap-y-1">
            {CATS.map(c => (
              <button
                key={c} data-cursor onClick={() => setCat(c)}
                className={`label text-[11px] px-4 py-1.5 transition-colors border ${cat === c ? 'bg-[#c2a14d] text-[#10231a] border-[#c2a14d]' : 'border-transparent text-[#ecdfbe]/80 hover:text-[#c2a14d] hover:border-[#c2a14d]/40'}`}
              >
                {c === 'ALL' ? 'EVERYTHING' : c}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-[1500px] mx-auto">
        {/* ——— hero ——— */}
        <section className="grid grid-cols-12 border-b border-[#c2a14d]/50">
          {/* manifesto rail */}
          <aside className="hidden lg:flex col-span-2 border-r border-[#c2a14d]/40 flex-col">
            <div className="px-4 py-3 border-b border-[#c2a14d]/40 flex items-center gap-2">
              <Flame className="w-3.5 h-3.5 text-[#c2a14d]" strokeWidth={1.5} />
              <span className="label text-[10px] text-[#c2a14d]">THE MANIFESTO</span>
            </div>
            {[
              'Never trust a place with a queue.',
              'The best hotels are slightly haunted.',
              'Translation apps are surrender.',
              'Eat the thing you cannot pronounce.',
              'Five stars is four too many.',
              'Arrive uninvited. Leave adored.',
              'Comfort is the enemy of memory.',
            ].map((m, i) => (
              <div key={i} data-cursor className="px-4 py-[10px] border-b border-[#c2a14d]/20 flex gap-3 items-baseline hover:bg-[#c2a14d]/10 transition-colors">
                <span className="display text-[#c2a14d] text-sm">{['I','II','III','IV','V','VI','VII'][i]}</span>
                <p className="text-[14px] leading-snug italic text-[#ecdfbe]/85">{m}</p>
              </div>
            ))}
            <div className="mt-auto px-4 py-3 text-center">
              <Flourish className="w-full text-[#c2a14d]/60" />
            </div>
          </aside>

          {/* hero feature */}
          <div className="col-span-12 lg:col-span-7 relative paper-grain px-5 md:px-8 py-7 border-r border-[#c2a14d]/40">
            <CornerVine className="absolute top-2 left-2 w-16 text-[#c2a14d]/50" />
            <CornerVine className="absolute bottom-2 right-2 w-16 text-[#c2a14d]/50 rotate-180" />
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="label text-[10px] bg-[#6e2b25] text-[#ecdfbe] px-3 py-1">DISPATCH No. 47</span>
                  <span className="label text-[10px] text-[#c2a14d]">FEATURE · TRESPASS</span>
                </div>
                <h2 className="display text-[clamp(1.9rem,3.4vw,3.1rem)] leading-[1.02]" data-cursor>
                  Tourism Is Dead.<br />
                  <span className="italic text-[#c2a14d]">Long Live</span> the Trespasser.
                </h2>
                <p className="dropcap mt-4 text-[17px] leading-[1.55] text-[#ecdfbe]/85">
                  Somewhere between the all-inclusive wristband and the rooftop infinity pool, travel forgot how to misbehave.
                  This issue we check into the Carpathian hotel that bans reviews, drink with distillers who never registered,
                  and sleep in a lighthouse the government condemned. None of it is sensible. All of it is necessary.
                </p>
                <div className="mt-5 flex items-center gap-5 text-[13px] text-[#ecdfbe]/65">
                  <span className="flex items-center gap-1.5"><Feather className="w-3.5 h-3.5 text-[#c2a14d]" strokeWidth={1.5} /> Odette Marchetti</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#c2a14d]" strokeWidth={1.5} /> 22 min</span>
                  <span className="flex items-center gap-1.5"><Eye className="w-3.5 h-3.5 text-[#c2a14d]" strokeWidth={1.5} /> 18,402</span>
                </div>
                <button data-cursor className="mt-5 group inline-flex items-center gap-2 label text-[11px] border border-[#c2a14d] px-5 py-2.5 text-[#c2a14d] hover:bg-[#c2a14d] hover:text-[#10231a] transition-colors">
                  READ THE DISPATCH <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
              <div className="relative" data-cursor>
                <div className="arch gold-frame overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=1000&fit=crop" alt="The hotel that banned reviews" className="w-full h-[330px] md:h-[420px] object-cover" />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#10231a] border border-[#c2a14d] px-4 py-1 label text-[9px] text-[#c2a14d] whitespace-nowrap">
                  CARPATHIA · 45.59°N 25.35°E
                </div>
              </div>
            </div>
          </div>

          {/* field notes rail */}
          <aside className="hidden lg:flex col-span-3 flex-col">
            <div className="px-4 py-3 border-b border-[#c2a14d]/40 flex items-center justify-between">
              <span className="label text-[10px] text-[#c2a14d] flex items-center gap-2"><Compass className="w-3.5 h-3.5" strokeWidth={1.5} /> FIELD NOTES — LIVE WIRE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#6e2b25] flicker" />
            </div>
            {FIELD_NOTES.map((n, i) => (
              <div key={i} data-cursor className="px-4 py-[11px] border-b border-[#c2a14d]/20 hover:bg-[#c2a14d]/10 transition-colors">
                <span className="label text-[9px] text-[#c2a14d]">{n.t} HRS</span>
                <p className="text-[14.5px] leading-snug mt-0.5 text-[#ecdfbe]/85">{n.txt}</p>
              </div>
            ))}
            <div className="grid grid-cols-3 border-b border-[#c2a14d]/40">
              {[['847','guidebooks burned'],['31','borders blurred'],['0','apologies issued']].map(([n, l], i) => (
                <div key={i} className={`px-2 py-3 text-center ${i < 2 ? 'border-r border-[#c2a14d]/30' : ''}`}>
                  <div className="display text-2xl text-[#c2a14d]">{n}</div>
                  <div className="label text-[8px] text-[#ecdfbe]/60 mt-1">{l.toUpperCase()}</div>
                </div>
              ))}
            </div>
            <div className="px-4 py-4 bg-[#0b1a13] flex-1">
              <p className="text-[15px] italic leading-relaxed text-[#ecdfbe]/75">
                "We do not review hotels. We confess to them."
              </p>
              <p className="label text-[9px] text-[#c2a14d] mt-2">— THE EDITOR, ROOM 9, 4 A.M.</p>
            </div>
          </aside>
        </section>

        {/* ——— dense article grid ——— */}
        <section className="px-4 md:px-6 py-5">
          <div className="flex items-center gap-4 mb-4">
            <h3 className="display text-xl md:text-2xl">The <span className="text-[#c2a14d] italic">Archive</span> of Bad Decisions</h3>
            <div className="flex-1 h-px bg-[#c2a14d]/40" />
            <span className="label text-[10px] text-[#ecdfbe]/60">{filtered.length} DISPATCHES · {cat === 'ALL' ? 'ALL VICES' : cat}</span>
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-[#c2a14d]/35 border border-[#c2a14d]/35">
              {filtered.map((a, i) => (
                <motion.article
                  key={a.id} layout data-cursor
                  initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="article-card bg-[#10231a] paper-grain p-3 group relative"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`label text-[9px] px-2 py-0.5 ${a.cat === 'TRESPASS' ? 'bg-[#6e2b25]' : a.cat === 'LIQUID COURAGE' ? 'bg-[#3a4d2c]' : 'bg-[#1c3a4d]'} text-[#ecdfbe]`}>{a.cat}</span>
                    <span className="label text-[9px] text-[#c2a14d]">{a.issue}</span>
                  </div>
                  <div className="overflow-hidden border border-[#c2a14d]/50">
                    <img src={a.img} alt={a.title} className="article-img w-full h-40 object-cover transition-all duration-700" />
                  </div>
                  <h4 className="display text-[19px] leading-tight mt-3 group-hover:text-[#c2a14d] transition-colors">{a.title}</h4>
                  <p className="text-[14.5px] leading-snug mt-1.5 text-[#ecdfbe]/75 italic">{a.dek}</p>
                  <div className="mt-3 pt-2 border-t border-[#c2a14d]/25 flex items-center justify-between text-[11px] text-[#ecdfbe]/60">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[#c2a14d]" strokeWidth={1.5} /> {a.loc}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[#c2a14d]" strokeWidth={1.5} /> {a.time}</span>
                    <ArrowUpRight className="read-arrow w-3.5 h-3.5 text-[#c2a14d] opacity-0 transition-all" />
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </section>

        {/* ——— subscribe band ——— */}
        <section className="border-t border-[#c2a14d]/50 bg-[#6e2b25] paper-grain">
          <div className="px-4 md:px-6 py-6 grid md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-2 hidden md:block">
              <Flourish className="w-full text-[#ecdfbe]/70" />
            </div>
            <div className="md:col-span-6">
              <h3 className="display text-2xl md:text-3xl leading-tight">Letters from the wrong side of the velvet rope.</h3>
              <p className="text-[15px] italic text-[#ecdfbe]/80 mt-1">One dispatch a fortnight. No deals, no listicles, no forgiveness.</p>
            </div>
            <div className="md:col-span-4 flex">
              <input data-cursor type="email" placeholder="your most disreputable email"
                className="flex-1 bg-transparent border border-[#ecdfbe]/60 px-4 py-2.5 text-[15px] italic placeholder:text-[#ecdfbe]/50 focus:outline-none focus:border-[#c2a14d]" />
              <button data-cursor className="label text-[11px] bg-[#ecdfbe] text-[#6e2b25] px-5 hover:bg-[#c2a14d] hover:text-[#10231a] transition-colors">JOIN</button>
            </div>
          </div>
        </section>
      </main>

      {/* ——— footer ——— */}
      <footer className="border-t border-[#c2a14d]/50 px-4 md:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-[#ecdfbe]/60">
        <span className="label text-[9px]">HÔTEL SAUVAGE © MMXXV — NO RIGHTS RESERVED, TAKE WHAT YOU NEED</span>
        <Flourish className="w-32 text-[#c2a14d]/60" />
        <span className="label text-[9px]">WRITTEN BY HAND · POSTED FROM A BORROWED CONNECTION</span>
      </footer>
    </div>
  );
}