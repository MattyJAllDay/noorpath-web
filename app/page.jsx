'use client';

import { useState, useEffect, useRef } from 'react';

// ─── Design tokens ──────────────────────────────────────────────────────
const C = {
  bg:       '#FDFCFA',
  bgMuted:  '#F5F0E8',
  bgCard:   '#FFFFFF',
  bgDark:   '#1A1612',
  bgDarkSurf:'#252018',
  turquoise:'#AFE4DE',
  turquoiseDk:'#7BCEC5',
  orange:   '#FF8811',
  espresso: '#291602',
  textSec:  '#7A6E62',
  textTert: '#A89E94',
  textLight:'#F5F0E8',
  border:   '#E8E2D9',
};

const hd = '"Playfair Display", Georgia, serif';
const bd = '"IBM Plex Sans", sans-serif';
const mn = '"IBM Plex Mono", monospace';
const nd = '"Nord", sans-serif';

// ─── Shared card base ───────────────────────────────────────────────────
const cardBase = {
  background: C.bgCard,
  borderRadius: 22,
  border: '1px solid rgba(41,22,2,0.08)',
  boxShadow: '0 2px 16px rgba(41,22,2,0.05)',
  overflow: 'hidden',
  padding: 36,
  position: 'relative',
};

const label = (color = C.textTert) => ({
  fontFamily: nd, fontSize: 10, fontWeight: 400,
  letterSpacing: '0.12em', textTransform: 'uppercase',
  color, marginBottom: 20,
});

// ─── Scroll-reveal hook ─────────────────────────────────────────────────
function useFadeIn(delay = 0) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return {
    ref,
    style: {
      opacity: vis ? 1 : 0,
      transform: vis ? 'translateY(0)' : 'translateY(28px)',
      transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
    },
  };
}

// ─── Countdown hook ─────────────────────────────────────────────────────
function useCountdown() {
  const [countdown, setCountdown] = useState('--:--:--');
  useEffect(() => {
    const now = new Date();
    const target = new Date();
    target.setHours(20, 27, 0, 0);
    if (target <= now) target.setDate(target.getDate() + 1);

    const tick = () => {
      const diff = target - new Date();
      if (diff <= 0) {
        setCountdown('00:00:00');
        return;
      }
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setCountdown(
        String(h).padStart(2, '0') + ':' +
        String(m).padStart(2, '0') + ':' +
        String(s).padStart(2, '0')
      );
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);
  return countdown;
}

// ─── Card data for overlay ──────────────────────────────────────────────
const cardData = {
  countdown: {
    label: 'NEXT PRAYER',
    title: 'Five prayers. Every day.',
    stat: null,
    statLabel: null,
    dark: true,
    body: [
      'NoorPath shows you exactly how long until your next prayer — with your local prayer times calculated for your location.',
      'Tap CHECK IN when you\'ve prayed. That\'s all it takes to maintain your streak.',
      'Prayer times are calculated precisely for your location, using your chosen Islamic method.',
    ],
    list: null,
  },
  streak: {
    label: 'CONSISTENCY',
    title: 'Five prayers. One streak.',
    stat: '11',
    statLabel: 'day streak',
    statColor: C.orange,
    dark: false,
    body: [
      'Every salah you pray is tracked with a single tap. Your streak counts consecutive days where you\'ve prayed all five.',
      'Miss a day? Your streak pauses — not breaks. You can pick up where you left off without shame or guilt.',
      'Consistency is built slowly. NoorPath celebrates every prayer, not just perfect days.',
    ],
    list: null,
  },
  noor: {
    label: 'YOUR NOOR',
    title: 'Your Noor grows as your consistency does.',
    stat: null,
    statLabel: null,
    dark: false,
    body: [
      'Your Noor is a living orb that reflects your spiritual consistency. It starts dim and grows brighter as you build your practice.',
      'It\'s not a score. It\'s not a competition. It\'s a quiet, personal reflection of your journey.',
    ],
    list: ['Dim · Just starting out', 'Bright · Building momentum', 'Radiant · Consistent practice', 'Luminous · Deeply established'],
  },
  quran: {
    label: 'GUIDED READING',
    title: 'Walk through the Quran with purpose.',
    stat: '8',
    statLabel: 'sessions per surah',
    statColor: C.espresso,
    dark: false,
    body: [
      'NoorPath offers structured journeys through key surahs and themes. Each journey is broken into focused sessions you can complete at your own pace.',
      'After each session, a reflection prompt helps you connect with what you\'ve read. Your progress is saved so you always return to the right place.',
      'New guided journeys added monthly — each one a different theme.',
    ],
    list: null,
  },
  privacy: {
    label: 'PRIVACY FIRST',
    title: 'Private by design. Always.',
    stat: '0',
    statLabel: 'data points sent to servers',
    statColor: C.turquoise,
    dark: true,
    body: [
      'Your journal entries, prayer history, cycle data — none of it ever leaves your device. Not to us. Not to anyone.',
      'There is no NoorPath account required. Your data stays on your device. Your spiritual practice belongs to you alone.',
      'We built NoorPath this way deliberately. Your spiritual practice is between you and Allah.',
    ],
    list: ['Zero ad tracking', 'No account required', 'On-device storage only', 'No data harvesting'],
  },
  ads: {
    label: 'BUSINESS MODEL',
    title: 'Zero ads. Ever.',
    stat: null,
    statLabel: null,
    dark: false,
    body: [
      'We don\'t run ads. We don\'t sell your data to advertisers.',
      'NoorPath is sustained by a simple subscription — nothing more. Your prayer time will never be interrupted by an advertisement.',
    ],
    list: null,
  },
  women: {
    label: 'FOR MUSLIM WOMEN',
    title: 'Your streak is protected. Your practice, respected.',
    stat: null,
    statLabel: null,
    dark: false,
    body: [
      'During exempt days, NoorPath automatically pauses your streak — protecting your consistency record without you having to do anything.',
      'No broken chains. No awkward manual adjustments. No app that treats your natural cycle as a failure.',
      'Your full practice is honoured. Your streak resumes exactly where it left off.',
    ],
    list: ['Automatic streak protection', 'Exempt day awareness', 'Fiqh-considered design', 'Stored privately on device'],
  },
  wisdom: {
    label: 'DAILY WISDOM',
    title: 'A quiet reflection. Every day.',
    stat: null,
    statLabel: null,
    dark: false,
    body: [
      'A new hadith or ayah surfaces each day. Quietly. Without notification. There when you open the app.',
      'Drawn from trusted collections. Attributed accurately. Refreshes daily at Fajr.',
    ],
    list: null,
  },
  notifications: {
    label: 'NOTIFICATIONS',
    title: 'Reminders that respect you.',
    stat: '0',
    statLabel: 'guilt-based notifications. Ever.',
    statColor: C.espresso,
    dark: false,
    body: [
      'NoorPath sends a gentle reminder when prayer time approaches. That\'s it.',
      'No "you haven\'t opened the app in 3 days" guilt trips. No aggressive streak-shame alerts. No pressure tactics.',
      'We believe reminders should serve you — not manipulate you.',
    ],
    list: null,
  },
  pricing: {
    label: 'PREMIUM PRICING',
    title: 'Your deen. Every day.',
    stat: null,
    statLabel: null,
    dark: true,
    custom: true,
    body: ['Build a daily practice that outlasts the month.'],
    list: null,
  },
};

// ═════════════════════════════════════════════════════════════════════════
// PRICING OVERLAY CONTENT
// ═════════════════════════════════════════════════════════════════════════
function PricingOverlayContent() {
  const features = [
    ['Monthly Quran Journeys', 'A new guided 7-day journey every month'],
    ['Premium Adhan Collection', 'Four world-class recitations'],
    ['Complete Spiritual History', 'Every prayer, every month, every year'],
    ['Cloud Backup', 'Your streak and progress, always safe'],
    ['Premium Widgets', 'Light orb + full dashboard on your home screen'],
    ['Focus Mode', 'A calm prayer companion screen at every prayer time'],
    ['Cycle-Aware Tracking', 'True consistency, fiqh-considered'],
    ['Dark mode, done beautifully', null],
  ];
  const breakdown = [
    ['Monthly Quran Journeys', '$9.99/mo'],
    ['Premium Adhan Collection', '$1.66/mo'],
    ['Complete Spiritual History', '$2.99/mo'],
    ['Cloud Backup', '$1.99/mo'],
    ['Premium Widgets', '$1.99/mo'],
    ['Focus Mode', '$1.99/mo'],
    ['Cycle Tracking', '$1.99/mo'],
    ['Dark Mode', '$0.99/mo'],
    ['Total value', '$23.59/mo'],
  ];
  const dl = 'rgba(245,240,232,0.08)';
  const dt = 'rgba(245,240,232,0.45)';
  const dm = 'rgba(245,240,232,0.6)';

  return (
    <>
      {/* What's Included */}
      <div style={{ fontFamily:nd, fontSize:10, fontWeight:400, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(175,228,222,0.6)', marginBottom:16 }}>
        WHAT&apos;S INCLUDED
      </div>
      {features.map(([name, desc], i) => (
        <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:12, marginBottom:14 }}>
          <span style={{ color:C.turquoise, fontSize:16, lineHeight:1, marginTop:2 }}>{'\u2713'}</span>
          <div>
            <span style={{ fontFamily:bd, fontSize:15, color:C.textLight, fontWeight:600 }}>{name}</span>
            {desc && <span style={{ fontFamily:bd, fontSize:14, color:dt, marginLeft:8 }}>— {desc}</span>}
          </div>
        </div>
      ))}

      {/* Value breakdown */}
      <div style={{ height:1, background:dl, margin:'24px 0' }}/>
      <div style={{ fontFamily:nd, fontSize:10, fontWeight:400, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(175,228,222,0.6)', marginBottom:16 }}>
        VALUE BREAKDOWN
      </div>
      {breakdown.map(([item, price], i) => {
        const isTotal = i === breakdown.length - 1;
        return (
          <div key={i} style={{
            display:'flex', justifyContent:'space-between', alignItems:'center',
            marginBottom:8, paddingTop: isTotal ? 8 : 0,
            borderTop: isTotal ? `1px solid ${dl}` : 'none',
          }}>
            <span style={{ fontFamily:bd, fontSize:13, color: isTotal ? C.textLight : dt, fontWeight: isTotal ? 600 : 400 }}>{item}</span>
            <span style={{ fontFamily:mn, fontSize:13, color: isTotal ? C.textLight : dt, fontWeight: isTotal ? 700 : 400 }}>{price}</span>
          </div>
        );
      })}

      {/* Plan options */}
      <div style={{ height:1, background:dl, margin:'24px 0' }}/>
      <div style={{
        background:'rgba(175,228,222,0.06)', border:'1px solid rgba(175,228,222,0.15)',
        borderRadius:16, padding:'20px 24px', marginBottom:12, position:'relative',
      }}>
        <span style={{
          position:'absolute', top:12, right:16,
          fontFamily:nd, fontSize:9, fontWeight:400, letterSpacing:'0.1em',
          textTransform:'uppercase', color:C.bgDark, background:C.turquoise,
          borderRadius:999, padding:'3px 10px',
        }}>BEST VALUE</span>
        <div style={{ fontFamily:mn, fontSize:24, fontWeight:700, color:C.textLight, marginBottom:4 }}>$39.99 / year</div>
        <div style={{ fontFamily:bd, fontSize:13, color:dm }}>Only $3.33 per month — save 33% annually</div>
      </div>
      <div style={{
        background:'rgba(245,240,232,0.04)', border:'1px solid rgba(245,240,232,0.06)',
        borderRadius:16, padding:'20px 24px', marginBottom:24,
      }}>
        <div style={{ fontFamily:mn, fontSize:24, fontWeight:700, color:C.textLight, marginBottom:4 }}>$4.99 / month</div>
        <div style={{ fontFamily:bd, fontSize:13, color:dt }}>Full flexibility</div>
      </div>

      {/* Footer */}
      <div style={{ fontFamily:bd, fontSize:13, color:dt, textAlign:'center', marginBottom:6 }}>
        7-day free trial · 30-day money-back guarantee · Cancel anytime
      </div>
      <div style={{ fontFamily:bd, fontSize:12, color:C.turquoiseDk, textAlign:'center' }}>
        Founding member pricing — your rate locks in today
      </div>
    </>
  );
}

// ═════════════════════════════════════════════════════════════════════════
// CARD OVERLAY
// ═════════════════════════════════════════════════════════════════════════
function CardOverlay({ card, onClose }) {
  if (!card) return null;
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0,
      background: 'rgba(41,22,2,0.5)',
      backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
      zIndex: 500,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 24,
      animation: 'fadeIn 0.25s ease forwards',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: card.dark ? C.bgDark : '#FFFFFF',
        borderRadius: 28, padding: 48,
        width: '100%', maxWidth: 680, maxHeight: '85vh',
        overflowY: 'auto', position: 'relative',
        boxShadow: '0 32px 80px rgba(0,0,0,0.3)',
        animation: 'cardZoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        border: card.dark ? '1px solid rgba(175,228,222,0.08)' : '1px solid rgba(41,22,2,0.08)',
      }}>
        <button onClick={onClose} style={{
          position: 'absolute', top: 20, right: 24,
          background: 'none', border: 'none', cursor: 'pointer',
          fontSize: 24, color: card.dark ? 'rgba(245,240,232,0.4)' : C.textTert,
          lineHeight: 1, padding: 4,
        }}>×</button>

        <div style={{
          fontFamily: nd, fontSize: 10, letterSpacing: '0.12em',
          color: card.dark ? 'rgba(175,228,222,0.6)' : C.turquoiseDk,
          marginBottom: 16, textTransform: 'uppercase',
        }}>
          {card.label}
        </div>

        <h2 style={{
          fontFamily: bd, fontSize: 28, fontWeight: 700,
          color: card.dark ? C.textLight : C.espresso,
          lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 20,
        }}>
          {card.title}
        </h2>

        {card.stat && (
          <div style={{
            fontFamily: mn, fontSize: 64, fontWeight: 700, lineHeight: 1,
            color: card.statColor || C.orange, marginBottom: 8,
          }}>
            {card.stat}
          </div>
        )}
        {card.statLabel && (
          <div style={{
            fontFamily: bd, fontSize: 13,
            color: card.dark ? 'rgba(245,240,232,0.4)' : C.textTert,
            marginBottom: 24,
          }}>
            {card.statLabel}
          </div>
        )}

        <div style={{
          height: 1,
          background: card.dark ? 'rgba(245,240,232,0.08)' : 'rgba(41,22,2,0.08)',
          marginBottom: 24,
        }} />

        {card.body.map((para, i) => (
          <p key={i} style={{
            fontFamily: bd, fontSize: 16, lineHeight: 1.75,
            color: card.dark ? 'rgba(245,240,232,0.6)' : C.textSec,
            marginBottom: 16,
          }}>
            {para}
          </p>
        ))}

        {card.custom && <PricingOverlayContent />}

        {!card.custom && card.list && (
          <div style={{ marginTop: 8 }}>
            {card.list.map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12,
              }}>
                <span style={{ color: C.turquoiseDk, fontWeight: 700, marginTop: 2 }}>—</span>
                <span style={{
                  fontFamily: bd, fontSize: 15, lineHeight: 1.6,
                  color: card.dark ? 'rgba(245,240,232,0.55)' : C.textSec,
                }}>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ═════════════════════════════════════════════════════════════════════════
// NAV
// ═════════════════════════════════════════════════════════════════════════
function Nav({ onCTA }) {
  return (
    <nav style={{
      position:'fixed', top:0, width:'100%', zIndex:200,
      background:'rgba(253,252,250,0.92)', backdropFilter:'blur(16px)',
      WebkitBackdropFilter:'blur(16px)',
      borderBottom:`1px solid ${C.border}`,
      padding:'12px 48px', display:'flex', justifyContent:'space-between', alignItems:'center',
    }}>
      <a href="/" style={{ textDecoration:'none', display:'flex', alignItems:'center' }}>
        <img src="/logo.svg" alt="NoorPath" style={{ height:32, width:'auto' }}/>
        <span style={{ marginLeft:10, fontFamily:nd, fontWeight:700, fontSize:16, letterSpacing:3, textTransform:'uppercase', color:C.espresso }}>NOORPATH</span>
      </a>
      <div style={{ display:'flex', alignItems:'center' }}>
        {[['Features','#features'],['Privacy','/privacy'],['Terms','/terms']].map(([t,h])=>(
          <a key={t} href={h} className="nav-link" style={{ fontFamily:nd, fontWeight:400, fontSize:13, letterSpacing:'0.01em', color:C.textSec, textDecoration:'none', marginLeft:28 }}>{t}</a>
        ))}
        <button onClick={onCTA} style={{
          fontFamily:bd, fontSize:14, fontWeight:600,
          background:C.orange, color:'#fff',
          padding:'9px 20px', borderRadius:999, border:'none', cursor:'pointer', marginLeft:28,
        }}>Get Early Access</button>
      </div>
    </nav>
  );
}

// ═════════════════════════════════════════════════════════════════════════
// PRAYER STRIP
// ═════════════════════════════════════════════════════════════════════════
function PrayerStrip() {
  const cd = useCountdown();
  const prayers = [
    { name:'FAJR', done:true },
    { name:'DHUHR', done:true },
    { name:'ASR', done:true },
    { name:'MAGHRIB', done:true },
    { name:'ISHA', done:false },
  ];
  return (
    <div style={{
      position:'sticky', top:64, zIndex:100,
      background:'rgba(253,252,250,0.97)', backdropFilter:'blur(12px)',
      WebkitBackdropFilter:'blur(12px)',
      borderBottom:`1px solid ${C.border}`,
      padding:'12px 48px', display:'flex', justifyContent:'space-between', alignItems:'center',
    }} className="prayer-strip">
      <div className="prayer-dots" style={{ display:'flex', gap:24, alignItems:'center', flexShrink:0 }}>
        {prayers.map(p => (
          <div key={p.name} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:4 }}>
            <span style={{ fontFamily:nd, fontSize:10, fontWeight:400, letterSpacing:'0.12em', color:C.textTert }}>{p.name}</span>
            <span style={{
              width:8, height:8, borderRadius:'50%',
              background: p.done ? C.orange : 'transparent',
              border: p.done ? 'none' : `2px solid ${C.turquoise}`,
              animation: p.done ? 'none' : 'dotPulse 2s infinite',
              display:'inline-block',
            }}/>
          </div>
        ))}
      </div>
      <div className="prayer-countdown" style={{ display:'flex', alignItems:'center', gap:12 }}>
        <span style={{ fontFamily:nd, fontSize:10, fontWeight:400, letterSpacing:'0.12em', color:C.textTert }}>NEXT: ISHA IN</span>
        <span style={{ fontFamily:mn, fontSize:18, fontWeight:700, color:C.espresso, letterSpacing:'-0.02em' }}>{cd}</span>
      </div>
    </div>
  );
}

// ═════════════════════════════════════════════════════════════════════════
// BENTO CARDS
// ═════════════════════════════════════════════════════════════════════════

// ── Card 0: Logo Card ───────────────────────────────────────────────────
function CardLogo() {
  const f = useFadeIn(0);
  return (
    <div ref={f.ref} className="card-hover card-dark" style={{
      ...cardBase, ...f.style,
      gridColumn:'1 / 4', background:C.bgDark,
      border:'1px solid rgba(175,228,222,0.12)', borderRadius:20,
      display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
    }}>
      <img src="/logo.svg" alt="NoorPath" style={{ width:220, height:'auto' }}/>
    </div>
  );
}

// ── Card 1: Hero Headline ───────────────────────────────────────────────
function CardHero({ onCTA }) {
  const f = useFadeIn(0);
  return (
    <div ref={f.ref} className="card-hover card-light" style={{
      ...cardBase, ...f.style,
      gridColumn:'4 / 13', background:C.bg, padding:56, overflow:'hidden',
    }}>
      <div style={{
        position:'absolute', inset:0, pointerEvents:'none', zIndex:0,
        backgroundImage:"url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23AFE4DE' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }}/>
      <div style={{ position:'relative', zIndex:1 }}>
        <div style={label()}>DAILY PRACTICE</div>

        <h1 className="hero-headline" style={{
          fontFamily:hd, fontWeight:400, fontSize:'clamp(38px, 4.5vw, 64px)',
          color:C.espresso, lineHeight:1.05, letterSpacing:'-0.02em', marginBottom:16,
        }}>
          From intention to prayer.{' '}
          <em style={{ fontStyle:'italic', color:C.orange }}>Every day.</em>
        </h1>

        <p style={{ fontFamily:bd, fontSize:16, lineHeight:1.7, color:C.textSec, maxWidth:440, marginBottom:40 }}>
          NoorPath is a calm, private, and ad-free companion for your daily prayers. Built for Muslims who want to show up consistently — without pressure.
        </p>

        <button onClick={onCTA} style={{
          display:'inline-flex', background:C.orange, color:'#fff',
          fontFamily:bd, fontSize:15, fontWeight:700,
          padding:'14px 32px', borderRadius:999, border:'none', cursor:'pointer',
          animation:'softGlow 3s ease-in-out infinite',
        }} className="hero-cta-btn">Get notified</button>
        <div className="hero-sub-text" style={{ fontFamily:bd, fontSize:12, color:C.textTert, marginTop:12 }}>
          <span>Free to download</span><span className="hero-sub-separator"> · </span><span>Premium features from $4.99/month</span>
        </div>
      </div>
    </div>
  );
}

// ── Card 2: Live Prayer Countdown ───────────────────────────────────────
function CardCountdown({ onOpen }) {
  const cd = useCountdown();
  const f = useFadeIn(0);
  return (
    <div ref={f.ref} className="card-hover card-dark" onClick={onOpen} style={{
      ...cardBase, ...f.style,
      gridColumn:'8 / 13', cursor:'pointer',
      background:C.bgDark, border:'1px solid rgba(175,228,222,0.1)',
      boxShadow:'0 2px 16px rgba(41,22,2,0.05), inset 0 1px 0 rgba(245,240,232,0.04)',
      display:'flex', flexDirection:'column', justifyContent:'space-between',
      overflow:'hidden',
    }}>
      <div style={{ position:'absolute', left:0, top:0, bottom:0, width:4, background:`linear-gradient(180deg, ${C.turquoise}, ${C.turquoiseDk})` }}/>
      <div style={{
        position:'absolute', width:200, height:200, borderRadius:'50%',
        background:'radial-gradient(circle, rgba(175,228,222,0.12) 0%, transparent 70%)',
        top:-40, right:-40, pointerEvents:'none',
      }}/>
      <div>
        <div style={{ ...label('rgba(175,228,222,0.6)') }}>NEXT PRAYER</div>
        <div style={{ fontFamily:bd, fontSize:32, fontWeight:800, color:C.orange, lineHeight:1, marginBottom:4 }}>ISHA</div>
        <div style={{ fontFamily:mn, fontSize:'clamp(40px,4vw,64px)', fontWeight:700, color:C.textLight, letterSpacing:'-0.03em', lineHeight:1, marginBottom:12 }}>{cd}</div>
        <div style={{ fontFamily:bd, fontSize:13, color:'rgba(245,240,232,0.35)' }}>Sydney, AU</div>
      </div>
      <div>
        <button style={{
          background:C.orange, color:'#fff', fontFamily:bd, fontSize:13, fontWeight:700,
          padding:'10px 24px', borderRadius:999, border:'none', cursor:'pointer', width:'fit-content',
        }}>CHECK IN</button>
        <div style={{ fontFamily:bd, fontSize:12, color:'rgba(245,240,232,0.25)', marginTop:8 }}>Tap when you&#39;ve prayed</div>
      </div>
    </div>
  );
}

// ── Card 3: Five Prayers Streak ─────────────────────────────────────────
function CardStreak({ onOpen }) {
  const f = useFadeIn(150);
  const [visibleDots, setVisibleDots] = useState(0);

  useEffect(() => {
    if (visibleDots >= 11) return;
    const id = setTimeout(() => setVisibleDots(v => v + 1), 80);
    return () => clearTimeout(id);
  }, [visibleDots]);

  return (
    <div ref={f.ref} className="card-hover card-light" onClick={onOpen} style={{
      ...cardBase, ...f.style, gridColumn:'1 / 5', cursor:'pointer',
    }}>
      <div style={label()}>CONSISTENCY</div>
      <div style={{ fontFamily:mn, fontWeight:700, fontSize:72, color:C.orange, lineHeight:1 }}>11</div>
      <div style={{ fontFamily:bd, fontSize:13, color:C.textTert, marginBottom:12 }}>day streak</div>
      <div style={{ display:'flex', gap:6, alignItems:'center' }}>
        {Array.from({length:14}).map((_,i) => {
          const filled = i < 11;
          const visible = !filled || i < visibleDots;
          return (
            <div key={i} style={{
              width:20, height:20, borderRadius:'50%',
              background: filled && visible ? C.orange : 'transparent',
              border: filled && visible ? 'none' : `2px solid ${C.border}`,
              opacity: filled ? (visible ? 1 : 0) : 1,
              transform: filled ? (visible ? 'scale(1)' : 'scale(0.5)') : 'scale(1)',
              transition: 'opacity 0.3s ease, transform 0.3s ease',
            }}/>
          );
        })}
      </div>
    </div>
  );
}

// ── Card 4: Your Noor ───────────────────────────────────────────────────
function CardNoor({ onOpen }) {
  const f = useFadeIn(230);
  return (
    <div ref={f.ref} className="card-hover card-light" onClick={onOpen} style={{
      ...cardBase, ...f.style,
      gridColumn:'5 / 8', cursor:'pointer',
      display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center',
    }}>
      <div style={label()}>YOUR NOOR</div>
      <div style={{
        width:80, height:80, borderRadius:'50%',
        background:'radial-gradient(circle at 35% 30%, #FFD580, #FF8811 60%, #E67600)',
        animation:'orbPulse 3s ease-in-out infinite, float 4s ease-in-out infinite',
        marginBottom:16,
      }}/>
      <div style={{ fontFamily:mn, fontSize:24, fontWeight:700, color:C.espresso }}>Level 1</div>
      <div style={{ fontFamily:bd, fontSize:13, color:C.textTert }}>0 XP</div>
    </div>
  );
}

// ── Card 5: Quran Journeys ──────────────────────────────────────────────
function CardQuran({ onOpen }) {
  const f = useFadeIn(310);
  const ringRef = useRef(null);

  useEffect(() => {
    const svg = ringRef.current;
    if (!svg) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const circle = svg.querySelector('.progress-ring');
        if (circle) {
          circle.style.transition = 'stroke-dashoffset 1s ease';
          circle.style.strokeDashoffset = '80';
        }
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(svg);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={f.ref} id="features" className="card-hover card-light" onClick={onOpen} style={{
      ...cardBase, ...f.style, gridColumn:'8 / 13', cursor:'pointer',
    }}>
      <div style={label(C.turquoiseDk)}>GUIDED READING</div>
      <div style={{ fontFamily:mn, fontWeight:700, fontSize:64, color:C.espresso, lineHeight:1 }}>8</div>
      <div style={{ fontFamily:bd, fontSize:12, color:C.textTert, marginBottom:16 }}>sessions per surah</div>
      <div style={{ display:'flex', alignItems:'center', gap:16 }}>
        <svg ref={ringRef} width="64" height="64" viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="28" fill="none" stroke={C.border} strokeWidth="6"/>
          <circle className="progress-ring" cx="32" cy="32" r="28" fill="none" stroke={C.turquoise} strokeWidth="6"
            strokeDasharray="176" strokeDashoffset="200" strokeLinecap="round"
            transform="rotate(-90 32 32)"
          />
          <text x="32" y="36" textAnchor="middle" style={{ fontFamily:mn, fontSize:14, fontWeight:700, fill:C.espresso }}>60%</text>
        </svg>
        <div>
          <div style={{ fontFamily:bd, fontSize:15, fontWeight:600, color:C.espresso }}>Al-Baqarah</div>
          <div style={{ fontFamily:bd, fontSize:13, color:C.textTert, marginBottom:6 }}>Session 3 of 8</div>
          <div style={{ height:3, borderRadius:999, background:C.border, width:120 }}>
            <div style={{ width:'60%', height:'100%', borderRadius:999, background:C.turquoise }}/>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Card 6: Private by Design ───────────────────────────────────────────
function CardPrivacy({ onOpen }) {
  const f = useFadeIn(150);
  return (
    <div ref={f.ref} className="card-hover card-dark" onClick={onOpen} style={{
      ...cardBase, ...f.style,
      gridColumn:'1 / 5', cursor:'pointer',
      background:C.bgDark, border:'1px solid rgba(245,240,232,0.06)',
      boxShadow:'0 2px 16px rgba(41,22,2,0.05), inset 0 1px 0 rgba(245,240,232,0.04)',
    }}>
      <div style={label('rgba(175,228,222,0.6)')}>PRIVACY FIRST</div>
      <div style={{ fontFamily:mn, fontWeight:700, fontSize:72, color:C.turquoise, lineHeight:1 }}>0</div>
      <div style={{ fontFamily:bd, fontSize:12, color:'rgba(245,240,232,0.4)', marginBottom:16 }}>data points sent to servers</div>
      {['Zero ad tracking','No account required','On-device storage only'].map(t => (
        <div key={t} style={{ fontFamily:bd, fontSize:13, color:'rgba(245,240,232,0.55)', marginBottom:6 }}>
          <span style={{ color:C.turquoise, marginRight:8 }}>—</span>{t}
        </div>
      ))}
    </div>
  );
}

// ── Card 7: Zero Ads ────────────────────────────────────────────────────
function CardZeroAds({ onOpen }) {
  const f = useFadeIn(230);
  return (
    <div ref={f.ref} className="card-hover card-light" onClick={onOpen} style={{
      ...cardBase, ...f.style,
      gridColumn:'5 / 8', cursor:'pointer',
      background:C.bgMuted, border:`1px solid ${C.border}`,
      display:'flex', flexDirection:'column', justifyContent:'center',
    }}>
      <div style={{ fontFamily:hd, fontWeight:700, fontSize:42, color:C.espresso, lineHeight:1, marginBottom:4 }}>Zero ads.</div>
      <div style={{ fontFamily:hd, fontWeight:700, fontStyle:'italic', fontSize:42, color:C.turquoiseDk, lineHeight:1 }}>Ever.</div>
    </div>
  );
}

// ── Card 8: For Muslim Women ────────────────────────────────────────────
function CardWomen({ onOpen }) {
  const f = useFadeIn(310);
  return (
    <div ref={f.ref} className="card-hover card-light" onClick={onOpen} style={{
      ...cardBase, ...f.style,
      gridColumn:'1 / 13', background:C.bg, cursor:'pointer', overflow:'hidden',
      paddingLeft:36, paddingRight:36, paddingTop:32, paddingBottom:32, alignSelf:'stretch',
    }}>
      <div style={{
        position:'absolute', inset:0, pointerEvents:'none',
        backgroundImage:"url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23AFE4DE' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }}/>
      <div className="women-card-inner" style={{ position:'relative', zIndex:1, display:'flex', alignItems:'stretch', minHeight:160, gap:40 }}>
        <div className="women-card-left" style={{ flex:'1 1 60%', display:'flex', flexDirection:'column', justifyContent:'center' }}>
          <span style={{
            fontFamily:nd, fontSize:10, fontWeight:400, letterSpacing:'0.12em',
            color:C.turquoiseDk, border:'1px solid rgba(175,228,222,0.4)',
            borderRadius:999, padding:'4px 12px', display:'inline-block', marginBottom:16,
          }}>FOR MUSLIM WOMEN</span>
          <div style={{ fontFamily:bd, fontWeight:700, fontSize:20, color:C.espresso, letterSpacing:'-0.01em', lineHeight:1.25, marginBottom:8 }}>
            Your practice<br/>understands you.
          </div>
          <div style={{ fontFamily:bd, fontSize:15, fontWeight:600, color:C.espresso, marginBottom:16 }}>
            Cycle-aware. Streak-protected. Fiqh-considered.
          </div>
          {['Prayers pause on exempt days — automatically','Your streak stays intact throughout','"I prayed today" override, always available'].map(t => (
            <div key={t} style={{ display:'flex', alignItems:'center', gap:10, marginBottom:8 }}>
              <span style={{ width:6, height:6, borderRadius:'50%', background:C.turquoise, flexShrink:0 }}/>
              <span style={{ fontFamily:bd, fontSize:13, color:C.textSec }}>{t}</span>
            </div>
          ))}
          <div style={{ width:48, height:2, background:'#AFE4DE', borderRadius:2, marginTop:24 }} />
        </div>
        <div className="women-card-right" style={{ flex:'0 0 40%', display:'flex', flexDirection:'column', justifyContent:'center', paddingTop:32, paddingLeft:56, paddingRight:48 }}>
          <div style={{ fontFamily:hd, fontStyle:'italic', fontSize:20, fontWeight:400, color:'#291602', marginBottom:12 }}>
            Most apps don&#39;t<br/>know you exist.
          </div>
          <p style={{ fontFamily:bd, fontSize:15, fontWeight:400, color:'#7A6E62', lineHeight:1.6 }}>
            NoorPath tracks your true consistency — the days you could pray, not just the days you did. Predictions, analytics, and a practice that works with your body, not against it.
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Card 9: Daily Wisdom ────────────────────────────────────────────────
function CardWisdom({ onOpen }) {
  const f = useFadeIn(150);
  return (
    <div ref={f.ref} className="card-hover card-light" onClick={onOpen} style={{
      ...cardBase, ...f.style,
      gridColumn:'1 / 6', cursor:'pointer', paddingLeft:40,
    }}>
      <div style={{ position:'absolute', left:0, top:0, bottom:0, width:4, borderRadius:'0 2px 2px 0', background:`linear-gradient(180deg, ${C.turquoise}, ${C.turquoiseDk})` }}/>
      <div style={label(C.turquoiseDk)}>DAILY WISDOM</div>
      <div style={{ fontFamily:hd, fontStyle:'italic', fontWeight:400, fontSize:22, color:C.espresso, lineHeight:1.4 }}>
        &ldquo;A smile on your face for your brother is charity.&rdquo;
      </div>
    </div>
  );
}

// ── Card 10: No Manipulation ────────────────────────────────────────────
function CardNotifications({ onOpen }) {
  const f = useFadeIn(230);
  return (
    <div ref={f.ref} className="card-hover card-light" onClick={onOpen} style={{
      ...cardBase, ...f.style, gridColumn:'6 / 9', cursor:'pointer',
    }}>
      <div style={label()}>NOTIFICATIONS</div>
      <div style={{ fontFamily:mn, fontWeight:700, fontSize:72, color:C.espresso, lineHeight:1 }}>0</div>
      <div style={{ fontFamily:bd, fontSize:12, color:C.textTert }}>guilt-based notifications. Ever.</div>
    </div>
  );
}

// ── Card 11: Pricing ────────────────────────────────────────────────────
function CardPricing({ onOpen }) {
  const f = useFadeIn(310);
  return (
    <div ref={f.ref} className="card-hover card-dark" onClick={onOpen} style={{
      ...cardBase, ...f.style,
      gridColumn:'9 / 13', cursor:'pointer',
      background:C.bgDark, border:'1px solid rgba(175,228,222,0.1)',
      boxShadow:'0 2px 16px rgba(41,22,2,0.05), inset 0 1px 0 rgba(245,240,232,0.04)',
    }}>
      <div style={label()}>PREMIUM PRICING</div>
      <div style={{ fontFamily:mn, fontWeight:700, fontSize:52, color:'#FFFFFF', lineHeight:1, letterSpacing:'-0.02em', marginBottom:8 }}>$3.33</div>
      <div style={{ fontFamily:bd, fontSize:13, color:C.textSec, marginBottom:20 }}>per month, billed annually</div>
      <div style={{ height:1, background:'rgba(255,255,255,0.08)', marginBottom:16 }}/>
      <div style={{ fontFamily:bd, fontSize:13, color:C.textLight, marginBottom:4 }}>Free to start</div>
      <div style={{ fontFamily:bd, fontSize:12, color:C.textSec }}>7-day trial included</div>
    </div>
  );
}

// ── Card 12: Final CTA ──────────────────────────────────────────────────
function CardFinalCTA({ onCTA }) {
  const f = useFadeIn(0);
  return (
    <div ref={f.ref} className="card-hover card-dark" style={{
      ...cardBase, ...f.style,
      gridColumn:'1 / 13',
      background:`linear-gradient(135deg, ${C.bgDark} 0%, ${C.bgDarkSurf} 100%)`,
      border:'1px solid rgba(175,228,222,0.08)',
      boxShadow:'0 2px 16px rgba(41,22,2,0.05), inset 0 1px 0 rgba(245,240,232,0.04)',
      padding:80, textAlign:'center', overflow:'hidden',
    }}>
      <div style={{
        position:'absolute', width:400, height:400, borderRadius:'50%',
        background:'radial-gradient(circle, rgba(175,228,222,0.07) 0%, transparent 70%)',
        top:'50%', left:'50%', transform:'translate(-50%,-50%)', pointerEvents:'none',
      }}/>
      <div style={{ position:'relative', zIndex:1 }}>
        <h2 className="final-cta-headline" style={{
          fontFamily:hd, fontWeight:700, fontSize:'clamp(32px, 5vw, 68px)',
          color:C.textLight, lineHeight:1.1, marginBottom:0,
        }}>Every prayer begins with a first step.</h2>
        <button onClick={onCTA} style={{
          display:'inline-flex', background:C.orange, color:'#fff',
          fontFamily:bd, fontSize:15, fontWeight:700,
          padding:'14px 32px', borderRadius:999, border:'none', cursor:'pointer',
          animation:'softGlow 3s ease-in-out infinite',
          marginTop:48,
        }} className="cta-waitlist-btn">Join the Waitlist</button>
        <div className="cta-subtitle" style={{ fontFamily:bd, fontSize:13, color:'rgba(245,240,232,0.25)', marginTop:16 }}>
          Coming to iOS · Free to download
        </div>
      </div>
    </div>
  );
}

// ═════════════════════════════════════════════════════════════════════════
// MODAL
// ═════════════════════════════════════════════════════════════════════════
function Modal({ open, onClose }) {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  if (!open) return null;
  const submit = async () => {
    if (!email.includes('@')) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error('Failed to join');
      setDone(true);
    } catch {
      setError('Something went wrong — please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div onClick={onClose} style={{
      position:'fixed', inset:0, background:'rgba(41,22,2,0.5)',
      backdropFilter:'blur(8px)', WebkitBackdropFilter:'blur(8px)',
      zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background:C.bg, borderRadius:24, padding:48,
        maxWidth:420, width:'calc(100% - 48px)', position:'relative',
        boxShadow:'0 24px 80px rgba(0,0,0,0.25)',
      }}>
        <button onClick={onClose} style={{
          position:'absolute', top:16, right:20, fontFamily:bd, fontSize:24,
          color:C.textTert, border:'none', background:'none', cursor:'pointer', lineHeight:1,
        }}>×</button>

        <img src="/logo.png" alt="NoorPath" style={{ height:28, width:'auto', marginBottom:20 }}/>

        {!done ? (
          <>
            <h3 style={{ fontFamily:hd, fontWeight:700, fontSize:28, color:C.espresso, marginBottom:8 }}>Your practice starts here.</h3>
            <p style={{ fontFamily:bd, fontSize:15, color:C.textSec, marginBottom:28 }}>One email when NoorPath launches. No spam, ever.</p>
            <input
              type="email" placeholder="Your email address" value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') submit(); }}
              style={{
                width:'100%', padding:'14px 20px', border:`1px solid ${C.border}`, borderRadius:999,
                fontFamily:bd, fontSize:15, color:C.espresso, marginBottom:12, outline:'none',
              }}
              onFocus={e => e.target.style.borderColor = C.turquoise}
              onBlur={e => e.target.style.borderColor = C.border}
            />
            <button onClick={submit} disabled={loading} style={{
              width:'100%', padding:15, background:loading ? C.textTert : C.orange, color:'#fff',
              fontFamily:bd, fontSize:15, fontWeight:700, borderRadius:999, border:'none',
              cursor: loading ? 'default' : 'pointer', animation: loading ? 'none' : 'softGlow 3s infinite',
            }}>{loading ? 'Joining…' : 'Notify Me'}</button>
            {error && <p style={{ fontFamily:bd, fontSize:13, color:'#c0392b', textAlign:'center', marginTop:8 }}>{error}</p>}
            <p style={{ fontFamily:bd, fontSize:13, color:C.textTert, textAlign:'center', marginTop:8 }}>
              No spam. One email when NoorPath launches.
            </p>
          </>
        ) : (
          <div style={{ textAlign:'center', padding:'20px 0' }}>
            <div style={{ fontFamily:hd, fontStyle:'italic', fontSize:18, color:C.espresso }}>
              You&#39;re on the list — JazakAllah khair.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ═════════════════════════════════════════════════════════════════════════
// FOOTER
// ═════════════════════════════════════════════════════════════════════════
function Footer() {
  return (
    <footer style={{
      padding:'32px 48px',
      display:'flex', justifyContent:'space-between', alignItems:'center',
    }}>
      <span style={{ fontFamily:bd, fontSize:13, color:'rgba(41,22,2,0.25)' }}>© 2026 NoorPath</span>
      <div>
        {[['Privacy Policy','/privacy'],['Terms of Service','/terms'],['Contact','mailto:matt@kthg.com.au']].map(([t,h]) => (
          <a key={t} href={h} style={{ fontFamily:bd, fontSize:13, color:'rgba(41,22,2,0.25)', textDecoration:'none', marginLeft:24 }}>{t}</a>
        ))}
      </div>
    </footer>
  );
}

// ═════════════════════════════════════════════════════════════════════════
// PAGE
// ═════════════════════════════════════════════════════════════════════════
export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap');
        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { background:${C.bg}; overflow-x:hidden; -webkit-font-smoothing:antialiased; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes float { 0%,100% { transform:translateY(0px); } 50% { transform:translateY(-8px); } }
        @keyframes orbPulse { 0%,100% { box-shadow:0 4px 24px rgba(255,136,17,0.3); } 50% { box-shadow:0 4px 40px rgba(255,136,17,0.6); } }
        @keyframes softGlow { 0%,100% { box-shadow:0 0 0 0 rgba(255,136,17,0.3); } 50% { box-shadow:0 0 0 12px rgba(255,136,17,0); } }
        @keyframes dotPulse { 0%,100% { opacity:1; } 50% { opacity:0.4; } }
        @keyframes drawRing { from { stroke-dashoffset:176; } to { stroke-dashoffset:70; } }
        @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
        @keyframes cardZoom { from { opacity:0; transform: scale(0.92); } to { opacity:1; transform: scale(1); } }
        .card-hover { transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, filter 0.2s ease; }
        .card-hover.card-light:hover { transform: translateY(-3px) scale(1.005); box-shadow: 0 16px 48px rgba(41,22,2,0.09) !important; filter: brightness(0.98); }
        .card-hover.card-dark:hover { transform: translateY(-3px) scale(1.005); box-shadow: 0 16px 48px rgba(0,0,0,0.4) !important; filter: brightness(1.05); }
        .nav-link:hover { color:${C.espresso} !important; }
        @media (max-width: 768px) {
          nav { padding:0 20px !important; }
          nav .nav-link { display:none !important; }
          .prayer-strip { flex-direction:column !important; gap:8px !important; padding:10px 20px !important; position:relative !important; }
          .prayer-dots { display:flex !important; gap:12px !important; justify-content:center !important; }
          .prayer-dots span { font-size:10px !important; }
          .prayer-countdown { justify-content:center !important; }
          .prayer-countdown span { font-size:13px !important; }
          .hero-headline { font-size:36px !important; }
          .hero-cta-btn { display:block !important; margin:0 auto !important; width:fit-content !important; }
          .hero-sub-text { text-align:center !important; }
          .bento-grid { grid-template-columns:repeat(4,1fr) !important; }
          .bento-grid > div { grid-column:1 / 5 !important; grid-row:auto !important; padding:24px !important; }
          section, footer { padding-left:20px !important; padding-right:20px !important; }
          .women-card-inner { flex-direction:column !important; gap:0 !important; }
          .women-card-left { flex:1 1 100% !important; padding-bottom:2rem !important; }
          .women-card-right { flex:1 1 100% !important; padding-left:0 !important; padding-top:0 !important; padding-right:0 !important; }
          .final-cta-headline { font-size:28px !important; }
          .cta-waitlist-btn { white-space:nowrap !important; width:auto !important; min-width:200px !important; max-width:260px !important; display:block !important; margin:48px auto 0 !important; text-align:center !important; padding:16px 32px !important; }
          .cta-subtitle { white-space:nowrap !important; }
          .hero-sub-text span { display:block !important; text-align:center !important; }
          .hero-sub-separator { display:none !important; }
        }
      `}</style>

      <Nav onCTA={open} />
      <PrayerStrip />

      <div style={{
        maxWidth:1200, margin:'80px auto 0', padding:'0 48px 80px',
        display:'grid', gridTemplateColumns:'repeat(12, 1fr)', gap:20,
      }} className="bento-grid">
        <CardLogo />
        <CardHero onCTA={open} />
        <CardStreak onOpen={() => setActiveCard(cardData.streak)} />
        <CardNoor onOpen={() => setActiveCard(cardData.noor)} />
        <CardCountdown onOpen={() => setActiveCard(cardData.countdown)} />
        <CardPrivacy onOpen={() => setActiveCard(cardData.privacy)} />
        <CardZeroAds onOpen={() => setActiveCard(cardData.ads)} />
        <CardQuran onOpen={() => setActiveCard(cardData.quran)} />
        <CardWomen onOpen={() => setActiveCard(cardData.women)} />
        <CardWisdom onOpen={() => setActiveCard(cardData.wisdom)} />
        <CardNotifications onOpen={() => setActiveCard(cardData.notifications)} />
        <CardPricing onOpen={() => setActiveCard(cardData.pricing)} />
        <CardFinalCTA onCTA={open} />
      </div>

      <Footer />
      <CardOverlay card={activeCard} onClose={() => setActiveCard(null)} />
      <Modal open={modalOpen} onClose={close} />
    </>
  );
}
