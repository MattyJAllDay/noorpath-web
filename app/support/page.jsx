'use client';

const hd = '"Playfair Display", Georgia, serif';
const bd = '"IBM Plex Sans", sans-serif';
const nd = '"Nord", sans-serif';

const C = {
  bg: '#FDFCFA',
  espresso: '#291602',
  textSec: '#7A6E62',
  textTert: '#A89E94',
  turquoise: '#AFE4DE',
  turquoiseDk: '#7BCEC5',
  accent: '#FF8811',
  border: '#E8E2D9',
};

export default function Support() {
  return (
    <div style={{ background: C.bg, minHeight: '100vh' }}>
      {/* Header */}
      <header style={{
        padding: '16px 48px',
        borderBottom: `1px solid ${C.border}`,
        background: 'rgba(253,252,250,0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}>
        <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', width: 'fit-content' }}>
          <img src="/logo.svg" alt="NoorPath" width={28} height={28} style={{ height: 28, width: 'auto' }} />
          <span style={{ marginLeft: 10, fontFamily: nd, fontWeight: 700, fontSize: 14, letterSpacing: 3, textTransform: 'uppercase', color: C.espresso }}>NoorPath</span>
        </a>
      </header>

      {/* Content */}
      <main style={{
        maxWidth: 720,
        margin: '0 auto',
        padding: '64px 32px 80px',
      }}>
        <div style={{ marginBottom: 48 }}>
          <h1 style={{
            fontFamily: hd, fontWeight: 700, fontSize: 42,
            color: C.espresso, lineHeight: 1.15, marginBottom: 12,
          }}>
            Support
          </h1>
          <p style={{ fontFamily: bd, fontSize: 14, color: C.textTert }}>
            We&apos;re here to help
          </p>
        </div>

        <p style={intro}>
          Have a question or a problem? Email us - we read every message. Below are answers to
          the things people ask most.
        </p>

        <Section title="Contact us">
          <Para>
            Email us at <a href="mailto:support@noorpath.app" style={link}>support@noorpath.app</a>. We
            usually reply within a few business days. It helps if you tell us your device and iOS version.
          </Para>
          <a href="mailto:support@noorpath.app" style={cta}>Email support</a>
        </Section>

        <Section title="Common questions">
          <SubHead>Prayer times or Qibla look off?</SubHead>
          <Para>
            This usually comes down to your location or calculation method. In Settings, check your
            location is right, then pick the calculation method and madhab your local mosque uses.
          </Para>

          <SubHead>Backing up or moving to a new device</SubHead>
          <Para>
            Cloud Backup is a Premium feature. Create an account and turn it on in Settings, and your
            prayer history and streaks are saved so you can get them back on a new device.
          </Para>

          <SubHead>Managing your subscription</SubHead>
          <Para>
            Apple handles billing. To change or cancel, open the iOS Settings app, tap your name, then
            Subscriptions. To restore a past purchase, use NoorPath&apos;s Settings.
          </Para>

          <SubHead>Exporting or deleting your data</SubHead>
          <Para>
            You can export or delete your data in the app&apos;s Settings. Need a hand? Email{' '}
            <a href="mailto:support@noorpath.app" style={link}>support@noorpath.app</a> and we&apos;ll sort it out.
          </Para>
        </Section>

        <Section title="Privacy &amp; terms">
          <Para>
            For how we handle your data, see our{' '}
            <a href="/legal/privacy" style={link}>Privacy Policy</a> and{' '}
            <a href="/legal/terms" style={link}>Terms of Service</a>.
          </Para>
        </Section>
      </main>

      {/* Footer */}
      <footer style={{
        padding: '32px 48px',
        borderTop: `1px solid ${C.border}`,
        textAlign: 'center',
      }}>
        <span style={{ fontFamily: bd, fontSize: 13, color: C.textTert }}>
          © 2026 NoorPath
        </span>
      </footer>
    </div>
  );
}

const intro = {
  fontFamily: bd, fontSize: 17, lineHeight: 1.8,
  color: C.textSec, marginBottom: 48,
};

const link = {
  color: C.turquoiseDk, textDecoration: 'none',
};

const cta = {
  display: 'inline-block',
  marginTop: 4,
  background: C.accent,
  color: '#FFFFFF',
  fontFamily: bd, fontWeight: 600, fontSize: 16,
  padding: '14px 28px',
  borderRadius: 9999,
  textDecoration: 'none',
  boxShadow: '0 2px 8px rgba(41, 22, 2, 0.06)',
};

function Section({ title, children }) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2 style={{
        fontFamily: bd, fontWeight: 700, fontSize: 20,
        color: C.espresso, marginBottom: 16,
        paddingBottom: 8,
        borderBottom: `2px solid ${C.turquoise}`,
        display: 'inline-block',
      }}>
        {title}
      </h2>
      <div style={{ marginTop: 12 }}>
        {children}
      </div>
    </section>
  );
}

function SubHead({ children }) {
  return (
    <h3 style={{
      fontFamily: bd, fontWeight: 600, fontSize: 16,
      color: C.espresso, marginTop: 20, marginBottom: 8,
    }}>
      {children}
    </h3>
  );
}

function Para({ children }) {
  return (
    <p style={{
      fontFamily: bd, fontSize: 15, lineHeight: 1.8,
      color: C.textSec, marginBottom: 16,
    }}>
      {children}
    </p>
  );
}
