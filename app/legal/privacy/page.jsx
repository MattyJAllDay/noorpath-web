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
            Privacy Policy
          </h1>
          <p style={{
            fontFamily: bd, fontSize: 14, color: C.textTert,
          }}>
            Last updated: June 2026
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
            'Cycle tracking information, if you choose to enable this feature (treated as sensitive health data - see Section 3)',
            'Your email address, if you create an account (used to sign you in and enable Cloud Backup) or sign up for updates',
            'Subscription status, managed by Apple and our subscription management service (see Section 5)',
          ]} />

          <SubHead>Information collected automatically:</SubHead>
          <List items={[
            'Your device location, used to calculate prayer times and Qibla direction (this calculation runs on your device) and to show your city or region name. To turn your coordinates into a place name, they are sent to a third-party geocoding service (see Section 5). NoorPath does not store your location on its own servers.',
          ]} />

          <SubHead>What we do not collect:</SubHead>
          <List items={[
            'We do not use advertising identifiers, cross-app tracking, or third-party advertising networks, and we do not sell your data or build advertising profiles about you.',
          ]} />

          <SubHead>Anonymous usage data:</SubHead>
          <List items={[
            'To see which features are used and improve the app, we collect anonymous, aggregated usage data, such as which onboarding steps are completed. This is not linked to your identity and is never used for advertising or profiling.',
          ]} />
        </Section>

        <Section n="2" title="How We Use Your Information">
          <List items={[
            'Prayer data, streaks, and history are stored on your device and, for Premium subscribers with Cloud Backup enabled, securely backed up to encrypted cloud storage.',
            'If you create an account, your email address is used to sign you in and to operate features like Cloud Backup. If you opt into updates, it is also used to send those. It is never used for advertising or sold to third parties.',
            'Cycle tracking data is stored on your device only and is never transmitted externally.',
            'Subscription data is used solely to provide access to Premium features.',
          ]} />
        </Section>

        <Section n="3" title="Sensitive Health Data">
          <Para>Cycle tracking information is sensitive health data and we treat it with extra care. This data is stored only on your device. It is never transmitted to NoorPath's servers, included in Cloud Backup, shared with third parties, or used for any purpose other than helping you track your practice during your cycle. You can disable cycle tracking at any time, and the data will be deleted from your device.</Para>
        </Section>

        <Section n="4" title="Data Storage and Security">
          <Para>Most NoorPath data is stored locally on your device and does not leave it.</Para>
          <Para>Premium subscribers who enable Cloud Backup have their prayer history and streak data encrypted and stored with our cloud infrastructure provider. Data in Cloud Backup is encrypted in transit and at rest.</Para>
          <Para>Adhan audio is bundled within the app. Widget data is shared only between the app and your home screen via your device's secure App Group - it does not leave your device.</Para>
          <Para>We retain personal data only for as long as you use the app. If you uninstall NoorPath and have not enabled Cloud Backup, your data is permanently deleted from your device. If you have Cloud Backup enabled and request account deletion, your backed-up data is permanently deleted within 30 days. You may request deletion at any time by contacting <a href="mailto:support@noorpath.app" style={link}>support@noorpath.app</a>.</Para>
        </Section>

        <Section n="5" title="Third-Party Services">
          <Para>NoorPath uses a small number of trusted third-party services to operate:</Para>
          <List items={[
            'A cloud infrastructure provider (encrypted storage for Premium Cloud Backup)',
            'A subscription management service (receipt validation and entitlement)',
            'Apple (payment processing for all in-app purchases - Apple is the merchant of record)',
            'An email delivery service (for opted-in communications only)',
            'A geocoding service that converts your device coordinates into a city or region name for display (used when location features are active)',
          ]} />
          <Para>We do not use advertising networks or social media trackers, and we do not sell your data. The limited, anonymous usage analytics we collect (see Section 1) are stored in our own infrastructure, not a third-party analytics platform. We can provide the names of our specific service providers on request - contact <a href="mailto:support@noorpath.app" style={link}>support@noorpath.app</a>.</Para>
        </Section>

        <Section n="6" title="Children and Family Use">
          <Para>NoorPath is designed for users of all ages. We recognise that Muslim families often use prayer companion apps together, including with young children learning salah.</Para>
          <Para>By agreeing to our Terms of Service, the person who owns the device and account confirms they are 13 years of age or older. Where a child under 13 uses NoorPath on a parent or guardian's device, the parent or guardian is responsible for reviewing this policy and supervising the child's use.</Para>
          <Para>NoorPath does not knowingly create accounts for children under 13 or direct any marketing communications to children. If you believe a child under 13 has independently provided us with personal information outside of a parent or guardian's device, please contact us at <a href="mailto:support@noorpath.app" style={link}>support@noorpath.app</a> and we will investigate promptly and take appropriate action.</Para>
        </Section>

        <Section n="7" title="International Data Transfer">
          <Para>NoorPath is operated by the NoorPath team. Data stored in Cloud Backup may be processed in regions where our infrastructure provider operates. By using NoorPath, you consent to this transfer where local law permits.</Para>
        </Section>

        <Section n="8" title="Your Rights">
          <Para>You have the right to:</Para>
          <List items={[
            <><strong>Access</strong> any personal data we hold about you</>,
            <><strong>Correct</strong> information that is inaccurate</>,
            <><strong>Delete</strong> your personal data ("right to be forgotten")</>,
            <><strong>Port</strong> your data in a structured, machine-readable format</>,
            <><strong>Object</strong> to or <strong>restrict</strong> specific processing activities</>,
            <><strong>Withdraw consent</strong> for opt-in communications at any time</>,
          ]} />
          <Para>Depending on your jurisdiction, additional rights may apply. California residents have rights under the CCPA, including the right not to have personal information sold (we do not sell personal information). European users have rights under the GDPR.</Para>
          <Para>You can export a copy of your data, and delete it, at any time from within the app.</Para>
          <Para>To exercise any of these rights, contact us at <a href="mailto:support@noorpath.app" style={link}>support@noorpath.app</a>. We will respond within a reasonable timeframe and at most within 30 days.</Para>
        </Section>

        <Section n="9" title="Data Breach Notification">
          <Para>If a data breach affecting your personal data occurs, we will notify you within 72 hours of becoming aware of it, by email if we hold your email address and through an in-app notice. We will explain what happened, what data was affected, and what steps we are taking.</Para>
        </Section>

        <Section n="10" title="Changes to This Policy">
          <Para>We may update this policy from time to time. We will notify you of significant changes by posting a notice within the app or by email if you have opted in. Your continued use of NoorPath after changes take effect constitutes your acceptance of the updated policy.</Para>
        </Section>

        <Section n="11" title="Contact">
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
