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
  border: '#E8E2D9',
};

export default function PrivacyPolicy() {
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
          <img src="/logo.svg" alt="NoorPath" style={{ height: 28, width: 'auto' }} />
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
            Privacy Policy
          </h1>
          <p style={{
            fontFamily: bd, fontSize: 14, color: C.textTert,
          }}>
            Last updated: March 2026
          </p>
        </div>

        <p style={intro}>
          Your privacy matters to us. This policy explains what information NoorPath collects, how we use it, and the choices you have.
        </p>

        <Section n="1" title="Information We Collect">
          <SubHead>Information you provide:</SubHead>
          <List items={[
            'Your chosen display name and avatar, stored locally on your device',
            'Prayer check-in records and streak data',
            'Reflection entries you write within the app',
            'Cycle tracking information, if you choose to enable this feature',
            'Your email address, if you sign up for updates or communications',
          ]} />

          <SubHead>Information collected automatically:</SubHead>
          <List items={[
            'Your device location, used solely to calculate prayer times and Qibla direction. This calculation happens entirely on your device. Your location coordinates are never transmitted to our servers.',
          ]} />

          <SubHead>What we do not collect:</SubHead>
          <List items={[
            'We do not collect behavioural analytics, advertising identifiers, crash diagnostics linked to your identity, or any form of usage tracking. We do not build profiles on our users.',
          ]} />
        </Section>

        <Section n="2" title="How We Use Your Information">
          <List items={[
            'Prayer data, streaks, and history are stored on your device and, for Premium subscribers with Cloud Backup enabled, securely backed up to encrypted cloud storage.',
            'Your email address is used only for communications you have opted into. It is never used for advertising or shared with third parties.',
            'Cycle tracking data is stored on your device only and is never transmitted externally.',
          ]} />
        </Section>

        <Section n="3" title="Data Storage and Security">
          <Para>Most NoorPath data is stored locally on your device and does not leave it. Premium subscribers who enable Cloud Backup have their prayer history and streak data encrypted and stored with a trusted cloud infrastructure provider. Adhan audio is bundled within the app. Widget data is shared only between the app and your home screen via your device's secure App Group — it does not leave your device.</Para>
        </Section>

        <Section n="4" title="Third-Party Services">
          <Para>NoorPath uses a small number of trusted third-party services to operate:</Para>
          <List items={[
            'Secure cloud storage (Premium Cloud Backup)',
            'Email delivery (waitlist and communications only)',
            'Payment processing (managed by Apple for all in-app purchases)',
          ]} />
          <Para>We do not use advertising networks, social media trackers, or analytics platforms.</Para>
        </Section>

        <Section n="5" title="Children's Privacy">
          <Para>NoorPath is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided us with personal information, please contact us and we will investigate promptly and take appropriate action.</Para>
        </Section>

        <Section n="6" title="Your Rights">
          <Para>You have the right to access, correct, or request deletion of any personal data we hold about you. To exercise any of these rights, contact us at support@noorpath.app. We will respond within a reasonable timeframe.</Para>
        </Section>

        <Section n="7" title="Changes to This Policy">
          <Para>We may update this policy from time to time. We will notify you of significant changes by posting a notice within the app or by email if you have opted in. Your continued use of NoorPath after changes take effect constitutes your acceptance of the updated policy.</Para>
        </Section>

        <Section n="8" title="Contact">
          <Para>
            Email: <a href="mailto:support@noorpath.app" style={link}>support@noorpath.app</a><br />
            Website: <a href="https://noorpath.app" style={link}>noorpath.app</a>
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

function Section({ n, title, children }) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2 style={{
        fontFamily: bd, fontWeight: 700, fontSize: 20,
        color: C.espresso, marginBottom: 16,
        paddingBottom: 8,
        borderBottom: `2px solid ${C.turquoise}`,
        display: 'inline-block',
      }}>
        {n}. {title}
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

function List({ items }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px 0' }}>
      {items.map((item, i) => (
        <li key={i} style={{
          fontFamily: bd, fontSize: 15, lineHeight: 1.8,
          color: C.textSec, paddingLeft: 20, marginBottom: 8,
          position: 'relative',
        }}>
          <span style={{
            position: 'absolute', left: 0, top: 10,
            width: 6, height: 6, borderRadius: '50%',
            background: C.turquoise,
          }} />
          {item}
        </li>
      ))}
    </ul>
  );
}
