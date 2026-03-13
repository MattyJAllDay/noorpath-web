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

// ─── Shared card base ───────────────────────────────────────────────────
const cardBase = {
  background: C.bgCard,
  borderRadius: 20,
  border: `1px solid ${C.border}`,
  boxShadow: '0 2px 16px rgba(41,22,2,0.05)',
  overflow: 'hidden',
  padding: 32,
};

const label = (color = C.textTert) => ({
  fontFamily: bd, fontSize: 10, fontWeight: 600,
  letterSpacing: '0.1em', textTransform: 'uppercase',
  color, marginBottom: 16,
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
      transform: vis ? 'translateY(0)' : 'translateY(16px)',
      transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
    },
  };
}

// ─── Countdown hook ─────────────────────────────────────────────────────
function useCountdown() {
  const [target] = useState(() => Date.now() + 1 * 3600000 + 2 * 60000 + 47 * 1000);
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const d = Math.max(0, target - now);
  const h = String(Math.floor(d / 3600000)).padStart(2, '0');
  const m = String(Math.floor((d % 3600000) / 60000)).padStart(2, '0');
  const s = String(Math.floor((d % 60000) / 1000)).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

// ═════════════════════════════════════════════════════════════════════════
// NAV
// ═════════════════════════════════════════════════════════════════════════
function Nav({ onCTA }) {
  return (
    <nav style={{
      position:'fixed', top:0, width:'100%', height:64, zIndex:200,
      background:'rgba(253,252,250,0.92)', backdropFilter:'blur(16px)',
      WebkitBackdropFilter:'blur(16px)',
      borderBottom:`1px solid ${C.border}`,
      padding:'0 48px', display:'flex', justifyContent:'space-between', alignItems:'center',
    }}>
      <div style={{ display:'flex', alignItems:'center' }}>
        <img src="/logo.png" alt="NoorPath" style={{ height:32, width:'auto' }}/>
        <span style={{ fontFamily:'"Nord", sans-serif', fontWeight:400, fontSize:18, color:C.espresso, letterSpacing:'0.02em', marginLeft:10 }}>NoorPath</span>
      </div>
      <div style={{ display:'flex', alignItems:'center' }}>
        {[['Features','#features'],['Privacy','/privacy'],['Terms','/terms']].map(([t,h])=>(
          <a key={t} href={h} className="nav-link" style={{ fontFamily:bd, fontSize:14, color:C.textSec, textDecoration:'none', marginLeft:28 }}>{t}</a>
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
      background:'rgba(253,252,250,0.95)', backdropFilter:'blur(12px)',
      WebkitBackdropFilter:'blur(12px)',
      borderBottom:`1px solid ${C.border}`,
      padding:'12px 48px', display:'flex', justifyContent:'space-between', alignItems:'center',
    }}>
      <div className="prayer-dots" style={{ display:'flex', gap:24, alignItems:'center' }}>
        {prayers.map(p => (
          <div key={p.name} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:4 }}>
            <span style={{ fontFamily:bd, fontSize:10, fontWeight:600, letterSpacing:'0.08em', color:C.textTert }}>{p.name}</span>
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
      <div style={{ display:'flex', alignItems:'center', gap:12 }}>
        <span style={{ fontFamily:bd, fontSize:11, fontWeight:600, letterSpacing:'0.08em', color:C.textTert }}>NEXT: ISHA IN</span>
        <span style={{ fontFamily:mn, fontSize:20, fontWeight:700, color:C.espresso, letterSpacing:'-0.02em' }}>{cd}</span>
      </div>
    </div>
  );
}

// ═════════════════════════════════════════════════════════════════════════
// BENTO CARDS
// ═════════════════════════════════════════════════════════════════════════

// ── Card 1: Hero Headline ───────────────────────────────────────────────
function CardHero({ onCTA }) {
  const f = useFadeIn(0);
  return (
    <div ref={f.ref} className="card-hover" style={{
      ...cardBase, ...f.style,
      gridColumn:'1 / 8', background:C.bg, padding:48, position:'relative', overflow:'hidden',
    }}>
      <div style={{
        position:'absolute', inset:0, pointerEvents:'none', zIndex:0,
        backgroundImage:"url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23AFE4DE' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }}/>
      <div style={{ position:'relative', zIndex:1 }}>
        <div style={{
          display:'inline-flex', alignItems:'center', gap:6,
          border:`1px solid ${C.border}`, borderRadius:999, padding:'6px 16px', marginBottom:24,
          fontFamily:bd, fontSize:11, fontWeight:600, letterSpacing:'0.08em', color:C.textSec,
        }}>
          <span style={{ width:6, height:6, borderRadius:'50%', background:C.turquoise, display:'inline-block', animation:'dotPulse 2s infinite' }}/>
          Coming to the App Store
        </div>

        <h1 style={{
          fontFamily:hd, fontWeight:700, fontSize:'clamp(32px, 3.5vw, 52px)',
          color:C.espresso, lineHeight:1.05, letterSpacing:'-0.02em', marginBottom:16,
        }}>
          From intention to consistent salah —{' '}
          <em style={{ fontStyle:'italic', color:C.turquoiseDk }}>gently.</em>
        </h1>

        <p style={{ fontFamily:bd, fontSize:16, lineHeight:1.7, color:C.textSec, maxWidth:440, marginBottom:32 }}>
          NoorPath is a calm, private, and ad-free companion for your daily prayers. Built for Muslims who want to show up consistently — without pressure.
        </p>

        <button onClick={onCTA} style={{
          display:'inline-flex', background:C.orange, color:'#fff',
          fontFamily:bd, fontSize:15, fontWeight:700,
          padding:'14px 32px', borderRadius:999, border:'none', cursor:'pointer',
          animation:'softGlow 3s ease-in-out infinite',
        }}>Get Early Access</button>
      </div>
    </div>
  );
}

// ── Card 2: Live Prayer Countdown ───────────────────────────────────────
function CardCountdown() {
  const cd = useCountdown();
  const f = useFadeIn(80);
  return (
    <div ref={f.ref} className="card-hover" style={{
      ...cardBase, ...f.style,
      gridColumn:'8 / 13',
      background:C.bgDark, border:'1px solid rgba(175,228,222,0.1)',
      display:'flex', flexDirection:'column', justifyContent:'space-between',
      position:'relative', overflow:'hidden',
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
        <div style={{ fontFamily:mn, fontSize:'clamp(40px,4vw,64px)', fontWeight:700, color:C.textLight, letterSpacing:'-0.03em', lineHeight:1, marginBottom:16 }}>{cd}</div>
        <div style={{ fontFamily:bd, fontSize:13, color:'rgba(245,240,232,0.35)', marginBottom:24 }}>📍 Sydney, AU</div>
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
function CardStreak() {
  const f = useFadeIn(0);
  return (
    <div ref={f.ref} className="card-hover" style={{ ...cardBase, ...f.style, gridColumn:'1 / 5' }}>
      <div style={label()}>CONSISTENCY</div>
      <div style={{ fontFamily:hd, fontWeight:700, fontSize:22, color:C.espresso, marginBottom:8 }}>Five prayers. One streak.</div>
      <p style={{ fontFamily:bd, fontSize:14, lineHeight:1.6, color:C.textSec, marginBottom:24 }}>
        Every salah tracked. Every day celebrated. Miss one — pick up where you left off.
      </p>
      <div style={{ display:'flex', gap:6, alignItems:'center', marginBottom:8 }}>
        {Array.from({length:14}).map((_,i) => (
          <div key={i} style={{
            width:20, height:20, borderRadius:'50%',
            background: i < 11 ? C.orange : 'transparent',
            border: i < 11 ? 'none' : `2px solid ${C.border}`,
          }}/>
        ))}
      </div>
      <div style={{ fontFamily:mn, fontSize:13, fontWeight:600, color:C.orange }}>11 day streak</div>
      <div style={{ fontFamily:bd, fontSize:12, color:C.textTert }}>Keep going.</div>
    </div>
  );
}

// ── Card 4: Your Noor ───────────────────────────────────────────────────
function CardNoor() {
  const f = useFadeIn(80);
  return (
    <div ref={f.ref} className="card-hover" style={{
      ...cardBase, ...f.style,
      gridColumn:'5 / 8',
      display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center',
    }}>
      <div style={label()}>YOUR NOOR</div>
      <div style={{
        width:80, height:80, borderRadius:'50%',
        background:'radial-gradient(circle at 35% 30%, #FFD580, #FF8811 60%, #E67600)',
        animation:'orbPulse 3s ease-in-out infinite, float 4s ease-in-out infinite',
        marginBottom:16,
      }}/>
      <div style={{ fontFamily:bd, fontSize:12, color:C.textTert, letterSpacing:'0.02em', marginBottom:8 }}>Dim → Bright → Radiant → Luminous</div>
      <div style={{ fontFamily:bd, fontSize:14, lineHeight:1.5, color:C.textSec }}>Your Noor grows as your consistency does.</div>
    </div>
  );
}

// ── Card 5: Quran Journeys ──────────────────────────────────────────────
function CardQuran() {
  const f = useFadeIn(160);
  return (
    <div id="features" ref={f.ref} className="card-hover" style={{ ...cardBase, ...f.style, gridColumn:'8 / 13' }}>
      <div style={label(C.turquoiseDk)}>GUIDED READING</div>
      <div style={{ fontFamily:hd, fontWeight:700, fontSize:22, color:C.espresso, lineHeight:1.2, marginBottom:8 }}>Walk through the Quran with purpose.</div>
      <p style={{ fontFamily:bd, fontSize:14, lineHeight:1.6, color:C.textSec, marginBottom:24 }}>
        Structured journeys through key surahs. Reflect after each session. Return where you left off.
      </p>
      <div style={{ display:'flex', alignItems:'center', gap:16 }}>
        <svg width="64" height="64" viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="28" fill="none" stroke={C.border} strokeWidth="6"/>
          <circle cx="32" cy="32" r="28" fill="none" stroke={C.turquoise} strokeWidth="6"
            strokeDasharray="176" strokeDashoffset="70" strokeLinecap="round"
            transform="rotate(-90 32 32)"
            style={{ animation:'drawRing 1.5s ease forwards' }}
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
function CardPrivacy() {
  const f = useFadeIn(0);
  return (
    <div ref={f.ref} className="card-hover" style={{
      ...cardBase, ...f.style,
      gridColumn:'1 / 5',
      background:C.bgDark, border:'1px solid rgba(245,240,232,0.06)',
    }}>
      <div style={label('rgba(175,228,222,0.6)')}>PRIVACY FIRST</div>
      <div style={{ fontFamily:hd, fontWeight:700, fontSize:22, color:C.textLight, marginBottom:8 }}>Private by design. Always.</div>
      <p style={{ fontFamily:bd, fontSize:14, lineHeight:1.6, color:'rgba(245,240,232,0.45)', marginBottom:24 }}>
        Your journal, cycle data, and prayer history never leave your device. Not to us. Not to anyone.
      </p>
      {['Zero ad tracking','No account required','On-device storage only'].map(t => (
        <div key={t} style={{ fontFamily:bd, fontSize:13, color:'rgba(245,240,232,0.55)', marginBottom:6 }}>
          <span style={{ color:C.turquoise, marginRight:8 }}>—</span>{t}
        </div>
      ))}
    </div>
  );
}

// ── Card 7: Zero Ads ────────────────────────────────────────────────────
function CardZeroAds() {
  const f = useFadeIn(80);
  return (
    <div ref={f.ref} className="card-hover" style={{
      ...cardBase, ...f.style,
      gridColumn:'5 / 8',
      background:C.bgMuted, border:`1px solid ${C.border}`,
      display:'flex', flexDirection:'column', justifyContent:'center',
    }}>
      <div style={{ fontFamily:hd, fontWeight:700, fontSize:36, color:C.espresso, lineHeight:1, marginBottom:4 }}>Zero ads.</div>
      <div style={{ fontFamily:hd, fontWeight:700, fontStyle:'italic', fontSize:36, color:C.turquoiseDk, lineHeight:1, marginBottom:16 }}>Ever.</div>
      <p style={{ fontFamily:bd, fontSize:14, lineHeight:1.6, color:C.textSec }}>
        Your prayer time will never be interrupted by an advertisement. We don&#39;t sell attention. We protect it.
      </p>
    </div>
  );
}

// ── Card 8: For Muslim Women ────────────────────────────────────────────
function CardWomen() {
  const f = useFadeIn(160);
  return (
    <div ref={f.ref} className="card-hover" style={{
      ...cardBase, ...f.style,
      gridColumn:'8 / 13', position:'relative', overflow:'hidden',
    }}>
      <div style={{
        position:'absolute', inset:0, pointerEvents:'none',
        backgroundImage:"url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23AFE4DE' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }}/>
      <div style={{ position:'relative', zIndex:1 }}>
        <span style={{
          fontFamily:bd, fontSize:10, fontWeight:600, letterSpacing:'0.1em',
          color:C.turquoiseDk, border:'1px solid rgba(175,228,222,0.4)',
          borderRadius:999, padding:'4px 12px', display:'inline-block', marginBottom:16,
        }}>FOR MUSLIM WOMEN</span>
        <div style={{ fontFamily:hd, fontWeight:700, fontSize:20, color:C.espresso, lineHeight:1.25, marginBottom:8 }}>
          Your streak is protected. Your practice, respected.
        </div>
        <p style={{ fontFamily:bd, fontSize:14, lineHeight:1.6, color:C.textSec, marginBottom:20 }}>
          During exempt days, your streak pauses — not breaks. NoorPath honours the full rhythm of your practice.
        </p>
        <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
          {['Streak protection','Exempt day awareness','Fiqh-considered'].map(t => (
            <span key={t} style={{
              fontFamily:bd, fontSize:12, color:C.espresso,
              border:`1px solid ${C.border}`, borderRadius:999,
              padding:'5px 14px', background:'#fff',
            }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Card 9: Daily Wisdom ────────────────────────────────────────────────
function CardWisdom() {
  const f = useFadeIn(0);
  return (
    <div ref={f.ref} className="card-hover" style={{
      ...cardBase, ...f.style,
      gridColumn:'1 / 6', position:'relative', paddingLeft:40,
    }}>
      <div style={{ position:'absolute', left:0, top:0, bottom:0, width:4, borderRadius:'0 2px 2px 0', background:`linear-gradient(180deg, ${C.turquoise}, ${C.turquoiseDk})` }}/>
      <div style={label(C.turquoiseDk)}>DAILY WISDOM</div>
      <div style={{ fontFamily:hd, fontStyle:'italic', fontWeight:400, fontSize:22, color:C.espresso, lineHeight:1.4, marginBottom:8 }}>
        &ldquo;A smile on your face for your brother is charity.&rdquo;
      </div>
      <div style={{ fontFamily:bd, fontSize:13, color:C.textTert }}>Jami at-Tirmidhi · Refreshes daily</div>
    </div>
  );
}

// ── Card 10: No Manipulation ────────────────────────────────────────────
function CardNotifications() {
  const f = useFadeIn(80);
  return (
    <div ref={f.ref} className="card-hover" style={{ ...cardBase, ...f.style, gridColumn:'6 / 9' }}>
      <div style={label()}>NOTIFICATIONS</div>
      <div style={{ fontFamily:hd, fontWeight:700, fontSize:20, color:C.espresso, marginBottom:8 }}>Reminders that respect you.</div>
      <p style={{ fontFamily:bd, fontSize:14, lineHeight:1.6, color:C.textSec }}>
        Gentle nudges when it&#39;s time to pray. Never guilt. Never pressure. Never noise.
      </p>
    </div>
  );
}

// ── Card 11: Pricing ────────────────────────────────────────────────────
function CardPricing() {
  const f = useFadeIn(160);
  return (
    <div ref={f.ref} className="card-hover" style={{
      ...cardBase, ...f.style,
      gridColumn:'9 / 13',
      background:C.bgDark, border:'1px solid rgba(175,228,222,0.1)',
    }}>
      <div style={label('rgba(175,228,222,0.6)')}>PRICING</div>
      <div style={{ fontFamily:hd, fontWeight:700, fontSize:22, color:C.textLight, marginBottom:4 }}>Free to start.</div>
      <div style={{ fontFamily:hd, fontWeight:700, fontSize:22, color:C.orange, marginBottom:16 }}>$39.99/year to grow.</div>
      <div style={{ height:1, background:'rgba(245,240,232,0.08)', marginBottom:16 }}/>
      <div style={{ fontFamily:bd, fontSize:13, color:'rgba(245,240,232,0.45)', marginBottom:4 }}>Core features — Always free</div>
      <div style={{ fontFamily:bd, fontSize:13, color:'rgba(245,240,232,0.45)', marginBottom:4 }}>Full experience — $4.99/month</div>
      <div style={{ fontFamily:bd, fontSize:12, color:C.turquoiseDk, marginBottom:16 }}>7-day free trial included</div>
      <a href="#" style={{ fontFamily:bd, fontSize:13, color:'rgba(175,228,222,0.6)', textDecoration:'underline', cursor:'pointer' }}>Learn more</a>
    </div>
  );
}

// ── Card 12: Final CTA ──────────────────────────────────────────────────
function CardFinalCTA({ onCTA }) {
  const f = useFadeIn(0);
  return (
    <div ref={f.ref} className="card-hover" style={{
      ...cardBase, ...f.style,
      gridColumn:'1 / 13',
      background:`linear-gradient(135deg, ${C.bgDark} 0%, ${C.bgDarkSurf} 100%)`,
      border:'1px solid rgba(175,228,222,0.08)',
      padding:64, textAlign:'center', position:'relative', overflow:'hidden',
    }}>
      <div style={{
        position:'absolute', width:400, height:400, borderRadius:'50%',
        background:'radial-gradient(circle, rgba(175,228,222,0.07) 0%, transparent 70%)',
        top:'50%', left:'50%', transform:'translate(-50%,-50%)', pointerEvents:'none',
      }}/>
      <div style={{ position:'relative', zIndex:1 }}>
        <h2 style={{
          fontFamily:hd, fontWeight:700, fontSize:'clamp(28px, 4vw, 52px)',
          color:C.textLight, lineHeight:1.1, marginBottom:16,
        }}>Every prayer begins with a first step.</h2>
        <p style={{ fontFamily:bd, fontSize:17, color:'rgba(245,240,232,0.4)', marginBottom:40 }}>
          NoorPath is coming to the App Store. Be first.
        </p>
        <button onClick={onCTA} style={{
          display:'inline-flex', background:C.orange, color:'#fff',
          fontFamily:bd, fontSize:15, fontWeight:700,
          padding:'14px 32px', borderRadius:999, border:'none', cursor:'pointer',
          animation:'softGlow 3s ease-in-out infinite',
        }}>Join the Waitlist</button>
      </div>
    </div>
  );
}

// ═════════════════════════════════════════════════════════════════════════
// STICKY BOTTOM BAR
// ═════════════════════════════════════════════════════════════════════════
function BottomBar() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const submit = () => { if (email.includes('@')) setDone(true); };

  return (
    <div style={{
      position:'fixed', bottom:0, left:0, right:0, zIndex:150,
      background:'rgba(253,252,250,0.95)', backdropFilter:'blur(16px)',
      WebkitBackdropFilter:'blur(16px)',
      borderTop:`1px solid ${C.border}`,
      padding:'12px 48px', display:'flex', justifyContent:'space-between', alignItems:'center',
    }}>
      <div className="bottom-left" style={{ display:'flex', alignItems:'center' }}>
        <span style={{ fontFamily:bd, fontSize:13, fontWeight:600, color:C.espresso }}>NoorPath · Coming to iOS</span>
        <span style={{ fontFamily:bd, fontSize:13, color:C.textSec, marginLeft:16 }}>Be first to know when we launch.</span>
      </div>
      <div className="bottom-right" style={{ display:'flex', alignItems:'center' }}>
        {!done ? (
          <>
            <input
              type="email" placeholder="Your email" value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') submit(); }}
              style={{
                padding:'10px 20px', border:`1px solid ${C.border}`, borderRadius:999,
                fontFamily:bd, fontSize:14, color:C.espresso, width:240, marginRight:8, outline:'none',
              }}
              onFocus={e => e.target.style.borderColor = C.turquoise}
              onBlur={e => e.target.style.borderColor = C.border}
            />
            <button onClick={submit} style={{
              background:C.orange, color:'#fff', fontFamily:bd, fontSize:14, fontWeight:700,
              padding:'10px 24px', borderRadius:999, border:'none', cursor:'pointer',
              animation:'softGlow 3s ease-in-out infinite',
            }}>Notify Me</button>
          </>
        ) : (
          <span style={{ fontFamily:bd, fontSize:13, color:C.turquoiseDk }}>You&#39;re on the list — JazakAllah khair</span>
        )}
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
  if (!open) return null;
  const submit = () => { if (email.includes('@')) setDone(true); };

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
            <h3 style={{ fontFamily:hd, fontWeight:700, fontSize:28, color:C.espresso, marginBottom:8 }}>Be first to walk your noor.</h3>
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
            <button onClick={submit} style={{
              width:'100%', padding:15, background:C.orange, color:'#fff',
              fontFamily:bd, fontSize:15, fontWeight:700, borderRadius:999, border:'none',
              cursor:'pointer', animation:'softGlow 3s infinite',
            }}>Notify Me</button>
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
      padding:'24px 48px', borderTop:`1px solid ${C.border}`,
      display:'flex', justifyContent:'space-between', alignItems:'center',
      flexWrap:'wrap', gap:16, marginBottom:60,
    }}>
      <span style={{ fontFamily:bd, fontSize:13, color:C.textTert }}>© 2026 NoorPath</span>
      <div>
        {[['Privacy Policy','/privacy'],['Terms of Service','/terms'],['Contact','mailto:matt@kthg.com.au']].map(([t,h]) => (
          <a key={t} href={h} style={{ fontFamily:bd, fontSize:13, color:C.textTert, textDecoration:'none', marginLeft:24 }}>{t}</a>
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
        .card-hover { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .card-hover:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(41,22,2,0.1) !important; }
        .nav-link:hover { color:${C.espresso} !important; }
        @media (max-width: 768px) {
          nav { padding:0 20px !important; }
          nav .nav-link { display:none !important; }
          .prayer-dots { display:none !important; }
          .bento-grid { grid-template-columns:repeat(4,1fr) !important; }
          .bento-grid > div { grid-column:1 / 5 !important; grid-row:auto !important; }
          .bottom-left span:last-child { display:none; }
          .bottom-right { flex-direction:column; width:100%; }
          .bottom-right input { width:100% !important; margin-bottom:8px; margin-right:0 !important; }
          .bottom-right button { width:100%; }
          section, footer { padding-left:20px !important; padding-right:20px !important; }
        }
      `}</style>

      <Nav onCTA={open} />
      <PrayerStrip />

      <div style={{
        maxWidth:1200, margin:'0 auto', padding:'40px 48px 120px',
        display:'grid', gridTemplateColumns:'repeat(12, 1fr)', gap:12,
      }} className="bento-grid">
        <CardHero onCTA={open} />
        <CardCountdown />
        <CardStreak />
        <CardNoor />
        <CardQuran />
        <CardPrivacy />
        <CardZeroAds />
        <CardWomen />
        <CardWisdom />
        <CardNotifications />
        <CardPricing />
        <CardFinalCTA onCTA={open} />
      </div>

      <Footer />
      <BottomBar />
      <Modal open={modalOpen} onClose={close} />
    </>
  );
}
