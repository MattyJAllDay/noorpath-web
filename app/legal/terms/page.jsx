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

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p style={{
            fontFamily: bd, fontSize: 14, color: C.textTert,
          }}>
            Last updated: May 2026
          </p>
        </div>

        <p style={intro}>
          These Terms of Service ("Terms") govern your use of NoorPath ("the app", "the service"). By using NoorPath, you agree to these Terms.
        </p>

        <Section n="1" title="Acceptance of Terms">
          <Para>By accessing or using NoorPath, you confirm that you are at least 13 years of age and have the legal capacity to enter into this agreement.</Para>
          <Para>NoorPath is suitable for users of all ages. Where a child under 13 uses NoorPath on a parent or guardian's device, the account holder (the parent or guardian) is responsible for the child's use, has agreed to these Terms on the child's behalf, and supervises the child's interaction with the app.</Para>
        </Section>

        <Section n="2" title="Description of Service">
          <Para>NoorPath is a prayer companion application for Muslims, offering prayer time tracking, Qibla direction, Quran journeys, streak tracking, reflection tools, and related features. A free tier with all core practice features is available to all users. Additional features are available through a paid Premium subscription.</Para>
        </Section>

        <Section n="3" title="Religious Content Disclaimer">
          <Para>NoorPath is a personal practice companion. It is not a source of religious rulings (fatwa) and does not offer religious guidance, opinions, or advice. All content within the app (including prayer time calculations, Quran translations, recitations, adhkar, and reflection material) is provided for personal practice support only.</Para>
          <Para>For questions on matters of fiqh, aqidah, or any religious ruling, please consult a qualified scholar within your tradition. Prayer times are calculated algorithmically and are provided as a guide; they may vary from locally observed times, and you should consult your local mosque or qualified authority where precision matters for your practice.</Para>
        </Section>

        <Section n="4" title="User Accounts">
          <Para>NoorPath uses anonymous authentication. No email address or password is required to use the app. Your data is tied to your device. If you uninstall the app or erase your device data without Cloud Backup enabled, your data may be permanently lost. We are not responsible for data loss resulting from device changes, app deletion, or failure to enable backup.</Para>
        </Section>

        <Section n="5" title="Subscription Terms">
          <SubHead>Free tier</SubHead>
          <Para>The core practice features of NoorPath are free and will remain free. This includes prayer times, qibla, adhan, daily prayer tracking, and access to the essential features needed to use the app as a prayer companion.</Para>

          <SubHead>Premium subscription</SubHead>
          <Para>Premium is an optional paid subscription. Current pricing is shown in the app before you subscribe, and on our App Store listing, in your local currency.</Para>

          <SubHead>Free trial</SubHead>
          <Para>New Premium subscribers receive a 7-day free trial. You will not be charged until the trial ends.</Para>

          <SubHead>Cancelling before being charged</SubHead>
          <Para>To cancel before your trial converts to a paid subscription, go to Settings → [Your Name] → Subscriptions on your Apple device, and select NoorPath. You must cancel at least 24 hours before the trial ends to avoid being charged.</Para>

          <SubHead>Billing</SubHead>
          <Para>All payments are processed by Apple through the App Store. By subscribing, you also agree to Apple's terms of service.</Para>

          <SubHead>Auto-renewal</SubHead>
          <Para>Subscriptions renew automatically unless cancelled at least 24 hours before the end of the current period. Manage or cancel your subscription at any time through your Apple ID settings.</Para>

          <SubHead>Refunds</SubHead>
          <Para>We want you to love NoorPath. If you're not satisfied within 30 days of your first paid charge, contact us at <a href="mailto:support@noorpath.app" style={link}>support@noorpath.app</a> and we will do everything we can to make it right, including assisting with a refund request through Apple. All refunds are subject to Apple's refund policies as they are the merchant of record.</Para>

          <SubHead>Pricing changes</SubHead>
          <Para>We reserve the right to adjust subscription pricing at any time. We will notify active subscribers of any price changes before they take effect, giving you the opportunity to cancel if you do not wish to continue at the new rate.</Para>
        </Section>

        <Section n="6" title="User Conduct">
          <Para>You agree not to use NoorPath for any unlawful purpose, attempt to reverse engineer or modify the app, or interfere with the security or integrity of the service.</Para>
        </Section>

        <Section n="7" title="Intellectual Property">
          <Para>All content within NoorPath (including design, text, graphics, Quran journey content, and software) is owned by NoorPath or its licensors and protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from NoorPath content without express written permission.</Para>
          <Para>Quranic text and translations are used in accordance with their respective licences and remain the property of their respective rights holders. Adhan recitations are licensed from their respective reciters and rights holders.</Para>
        </Section>

        <Section n="8" title="Disclaimer of Warranties">
          <Para>NoorPath is provided "as is" without warranties of any kind. We do not warrant that the app will be uninterrupted or error-free.</Para>
        </Section>

        <Section n="9" title="Limitation of Liability">
          <Para>To the maximum extent permitted by applicable law, NoorPath shall not be liable for any indirect, incidental, or consequential damages arising from your use of the app, including loss of data or loss of revenue. Our total liability for any claim shall not exceed the amount you paid for the service in the 12 months preceding the claim.</Para>
          <Para>Nothing in these Terms limits or excludes any liability that cannot be limited or excluded under applicable consumer protection law, including the Australian Consumer Law where it applies to your use.</Para>
        </Section>

        <Section n="10" title="Termination">
          <Para>We may suspend or terminate access to NoorPath if you violate these Terms. You may stop using the service at any time by uninstalling the app and cancelling any active subscription through your Apple ID settings.</Para>
        </Section>

        <Section n="11" title="Governing Law">
          <Para>These Terms are governed by the laws of New South Wales, Australia, where Motivational Fitness Pty Ltd (the entity operating NoorPath) is based. Where you are a consumer in another jurisdiction with mandatory consumer-protection laws, those laws also apply to your use of NoorPath, and you may bring claims in your local courts where the law allows.</Para>
        </Section>

        <Section n="12" title="Changes to Terms">
          <Para>We may update these Terms from time to time. We will notify you of material changes within the app or by email where you have provided one. Continued use after changes take effect constitutes acceptance.</Para>
        </Section>

        <Section n="13" title="Contact">
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
