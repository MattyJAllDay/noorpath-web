import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy — NoorPath',
  description: 'Privacy Policy for NoorPath by Motivational Fitness Pty Ltd',
};

function Header() {
  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-10">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-teal-600 tracking-tight">
          NoorPath
        </Link>
        <Link href="/terms" className="text-sm text-gray-500 hover:text-teal-600 transition-colors">
          Terms of Service →
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-16">
      <div className="max-w-3xl mx-auto px-6 py-8 text-center text-sm text-gray-400">
        © 2026 Motivational Fitness Pty Ltd ABN 21 084 666 320 · Trading as NoorPath
        <div className="mt-2">
          <Link href="/privacy" className="hover:text-teal-600 transition-colors">Privacy Policy</Link>
          <span className="mx-2">·</span>
          <Link href="/terms" className="hover:text-teal-600 transition-colors">Terms of Service</Link>
          <span className="mx-2">·</span>
          <a href="mailto:matt@kthg.com.au" className="hover:text-teal-600 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">{title}</h2>
      {children}
    </section>
  );
}

function SubSection({ title, children }) {
  return (
    <div className="mb-6">
      <h3 className="text-base font-semibold text-gray-800 mb-2">{title}</h3>
      {children}
    </div>
  );
}

function P({ children }) {
  return <p className="text-gray-600 leading-relaxed mb-3 text-sm">{children}</p>;
}

function Ul({ children }) {
  return <ul className="list-disc pl-5 mb-3 space-y-1 text-gray-600 text-sm">{children}</ul>;
}

function Li({ children }) {
  return <li className="leading-relaxed">{children}</li>;
}

function Alert({ children }) {
  return (
    <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-4">
      <p className="text-teal-800 text-sm leading-relaxed font-medium">{children}</p>
    </div>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-12 w-full">

        {/* Title */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-400">Effective Date: March 10, 2026 · Last Updated: March 10, 2026</p>
        </div>

        {/* Intro */}
        <P>
          NoorPath is developed and operated by Motivational Fitness Pty Ltd (ABN 21 084 666 320) ("we," "us," or "our"). This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use NoorPath.
        </P>
        <P>
          We are committed to protecting your privacy and handling your data with care and respect — especially given the sensitive and personal nature of religious practice and health data our app may process.
        </P>

        {/* 1 */}
        <Section title="1. Information We Collect">
          <SubSection title="1.1 Account Information">
            <P>When you create an account, we collect:</P>
            <Ul>
              <Li><strong>Email address:</strong> Used for authentication, password resets, and service communications.</Li>
              <Li><strong>Account credentials:</strong> Encrypted password for secure access.</Li>
              <Li><strong>Account creation date:</strong> To personalise your experience and track membership.</Li>
            </Ul>
          </SubSection>

          <SubSection title="1.2 Prayer and Religious Practice Data">
            <P>As an Islamic companion app, NoorPath collects:</P>
            <Ul>
              <Li><strong>Prayer tracking records:</strong> Which prayers you have completed, prayer times, and streak information.</Li>
              <Li><strong>Quran journey progress:</strong> Reading history, bookmarks, and completed sections.</Li>
              <Li><strong>XP and gamification data:</strong> Points earned, achievements unlocked, and progress metrics.</Li>
              <Li><strong>Custom prayer settings:</strong> Calculation method preferences and notification settings.</Li>
            </Ul>
            <P>We collect this to provide accurate prayer reminders, track your spiritual journey, and personalise your experience.</P>
          </SubSection>

          <SubSection title="1.3 Menstrual Cycle Tracking Data">
            <Alert>
              All menstrual cycle data is stored exclusively on your device. This data never leaves your device, is never transmitted to our servers, is never backed up to the cloud, and is never accessible to us or any third party.
            </Alert>
            <P>If you choose to use cycle tracking for prayer exemption purposes, we collect cycle start and end dates and patterns — solely on your device.</P>
          </SubSection>

          <SubSection title="1.4 Journal Entries">
            <Alert>
              All journal entries are stored exclusively on your device. This data never leaves your device, is never transmitted to our servers, and is never accessible to us or any third party.
            </Alert>
            <P>Personal reflections and spiritual notes you write in the journaling feature remain completely private to you.</P>
          </SubSection>

          <SubSection title="1.5 Location Data">
            <P>With your explicit permission, we collect approximate location to calculate accurate prayer times, and precise location for the Qibla compass direction. Location data is processed locally on your device. Only your city or region is transmitted to our servers for prayer time calculations. We do not track your movements or create location histories.</P>
            <P>You can revoke location permissions at any time through your device settings and enter your city manually instead.</P>
          </SubSection>

          <SubSection title="1.6 Device and Usage Information">
            <P>We automatically collect:</P>
            <Ul>
              <Li><strong>Device information:</strong> Device model, operating system version, and unique device identifiers.</Li>
              <Li><strong>Usage analytics:</strong> Features used, session duration, and navigation patterns.</Li>
              <Li><strong>Crash reports:</strong> Technical diagnostic data when the app encounters errors.</Li>
            </Ul>
            <P>This helps us identify bugs, improve performance, and develop features users actually want.</P>
          </SubSection>

          <SubSection title="1.7 Premium Subscription Information">
            <P>If you purchase a premium subscription, we receive your subscription status and purchase history from Apple. All payment processing is handled exclusively by Apple through the App Store. We never receive or store your credit card information or financial details.</P>
          </SubSection>
        </Section>

        {/* 2 */}
        <Section title="2. How We Use Your Information">
          <P>We use the information we collect to:</P>
          <Ul>
            <Li>Deliver core app functionality including prayer reminders, Quran access, and progress tracking.</Li>
            <Li>Calculate accurate prayer times based on your location.</Li>
            <Li>Personalise your experience and remember your preferences.</Li>
            <Li>Maintain your prayer streaks and gamification achievements.</Li>
            <Li>Analyse usage patterns to improve the app.</Li>
            <Li>Identify and fix bugs and technical issues.</Li>
            <Li>Respond to your support inquiries.</Li>
            <Li>Comply with applicable laws and protect user safety.</Li>
          </Ul>
          <P>We do not use your information for advertising. We do not sell your data to third parties.</P>
        </Section>

        {/* 3 */}
        <Section title="3. How We Share Your Information">
          <P>We do not sell, rent, or trade your personal information. We only share information in the following limited circumstances:</P>

          <SubSection title="3.1 Supabase (Cloud Backup — Premium Users Only)">
            <P>For premium users who enable cloud backup, prayer tracking records, Quran journey progress, XP data, and account settings are stored securely with Supabase. Menstrual cycle data and journal entries are never transmitted to Supabase or any cloud service under any circumstances.</P>
            <P>Cloud backup is entirely optional and can be disabled at any time. Disabling it will remove your data from Supabase servers within 30 days.</P>
          </SubSection>

          <SubSection title="3.2 Apple Inc.">
            <P>Apple manages subscription purchases, renewals, and cancellations through the App Store. We receive confirmation of your subscription status but never receive your payment information.</P>
          </SubSection>

          <SubSection title="3.3 Analytics and Crash Reporting">
            <P>We use third-party analytics services to understand app usage. Data shared is anonymised and does not include account email, prayer records, location, cycle data, or journal entries. You can disable analytics in app settings.</P>
          </SubSection>

          <SubSection title="3.4 Legal Requirements">
            <P>We may disclose your information if required by valid legal process, court order, or to protect the safety of users or the public. Where permitted, we will notify you of such requests.</P>
          </SubSection>

          <SubSection title="3.5 Business Transfers">
            <P>If Motivational Fitness Pty Ltd is involved in a merger, acquisition, or asset sale, your information may be transferred. We will notify you before your information becomes subject to a different privacy policy.</P>
          </SubSection>
        </Section>

        {/* 4 */}
        <Section title="4. Your Privacy Rights">
          <P>We respect your privacy rights globally for all users, regardless of location.</P>

          <SubSection title="4.1 Right to Access">
            <P>You can request a copy of the personal information we hold about you. Note that cycle data and journal entries are stored only on your device — we cannot provide this data in a data export as we do not hold it.</P>
            <P>To request: email <a href="mailto:matt@kthg.com.au" className="text-teal-600 hover:underline">matt@kthg.com.au</a> with subject "Data Access Request." We will respond within 30 days.</P>
          </SubSection>

          <SubSection title="4.2 Right to Correction">
            <P>Most information can be corrected within the app. For anything you cannot update yourself, email us and we will make the correction within 30 days.</P>
          </SubSection>

          <SubSection title="4.3 Right to Deletion">
            <P>You can delete your account via Settings → Account → Delete Account in the app. This permanently deletes your account and all server-stored data within 30 days. Alternatively, email <a href="mailto:matt@kthg.com.au" className="text-teal-600 hover:underline">matt@kthg.com.au</a> with "Account Deletion Request."</P>
            <P>Cycle data and journal entries on your device are not affected by account deletion — to remove these, uninstall the app or clear app data on your device.</P>
          </SubSection>

          <SubSection title="4.4 Right to Data Portability">
            <P>You can request your data in a portable format by emailing <a href="mailto:matt@kthg.com.au" className="text-teal-600 hover:underline">matt@kthg.com.au</a>. We will provide a machine-readable export within 30 days.</P>
          </SubSection>

          <SubSection title="4.5 GDPR Rights (EEA and UK Users)">
            <P>If you are located in the European Economic Area or United Kingdom, you have additional rights under GDPR, including the right to object to processing, the right to restrict processing, and the right to lodge a complaint with your local supervisory authority.</P>
          </SubSection>

          <SubSection title="4.6 CCPA Rights (California Users)">
            <P>California residents have the right to know what personal information is collected and shared, the right to delete personal information, the right to opt-out of the sale of personal information (we do not sell personal information), and the right to non-discrimination for exercising privacy rights.</P>
          </SubSection>
        </Section>

        {/* 5 */}
        <Section title="5. Sensitive Information">
          <P>NoorPath processes two categories of sensitive information:</P>
          <SubSection title="5.1 Religious Practice Data">
            <P>Prayer records, Quran journey progress, and spiritual practice data reveal information about your religious beliefs. We treat this data with the utmost care, use it only to provide the features you have requested, and do not share it for advertising or profiling purposes.</P>
          </SubSection>
          <SubSection title="5.2 Menstrual Cycle Data">
            <P>Cycle tracking data is health information and is treated accordingly. As described above, this data never leaves your device. We consider this the most sensitive data category in NoorPath and have deliberately architected our systems so that we never have access to it.</P>
          </SubSection>
        </Section>

        {/* 6 */}
        <Section title="6. Data Retention">
          <P>We retain your personal information for as long as your account is active or as needed to provide our services. If you delete your account, we will delete or anonymise your information within 30 days, except where retention is required by law.</P>
          <P>Crash reports and anonymised analytics data may be retained for up to 12 months. Support correspondence is retained for up to 24 months to assist with follow-up inquiries.</P>
        </Section>

        {/* 7 */}
        <Section title="7. Data Security">
          <P>We implement industry-standard security measures including encryption in transit (TLS) and at rest, access controls limiting who can access user data, regular security reviews, and secure cloud infrastructure via Supabase.</P>
          <P>No method of electronic storage or transmission is 100% secure. We encourage you to use a strong device passcode and keep your operating system updated.</P>
        </Section>

        {/* 8 */}
        <Section title="8. International Data Transfers">
          <P>Motivational Fitness Pty Ltd is based in Australia. When your data is transferred to or stored in other countries (for example, through Supabase infrastructure), we ensure it is protected by appropriate safeguards including contractual clauses consistent with applicable privacy law.</P>
          <P>Cycle data and journal entries are never transferred internationally as they are stored only on your device.</P>
        </Section>

        {/* 9 */}
        <Section title="9. Children's Privacy">
          <P>NoorPath is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided us with personal information, please contact us at <a href="mailto:matt@kthg.com.au" className="text-teal-600 hover:underline">matt@kthg.com.au</a> and we will delete it promptly.</P>
          <P>Users aged 13-17 should use NoorPath with the knowledge and consent of a parent or guardian.</P>
        </Section>

        {/* 10 */}
        <Section title="10. Cookies and Local Storage">
          <P>NoorPath is a mobile app and does not use web cookies. The app uses local device storage (AsyncStorage) to store your preferences, prayer data, and settings on your device. This local storage is essential for app functionality.</P>
          <P>If you visit our website (noorpath.app), we may use essential cookies to ensure the site functions correctly. We do not use advertising or tracking cookies on our website.</P>
        </Section>

        {/* 11 */}
        <Section title="11. Changes to This Policy">
          <P>We may update this Privacy Policy from time to time. When we make significant changes, we will notify you within the app and update the date at the top of this policy. Your continued use of NoorPath after changes are posted constitutes your acceptance of the updated policy.</P>
          <P>For material changes affecting how we handle sensitive data, we will seek your explicit consent before applying the new practices to your existing data.</P>
        </Section>

        {/* 12 */}
        <Section title="12. Contact Us">
          <P>If you have questions, concerns, or requests regarding this Privacy Policy or your personal data:</P>
          <div className="bg-gray-50 rounded-lg p-5 text-sm text-gray-700 space-y-1">
            <p><strong>Company:</strong> Motivational Fitness Pty Ltd</p>
            <p><strong>ABN:</strong> 21 084 666 320</p>
            <p><strong>Trading as:</strong> NoorPath</p>
            <p><strong>Email:</strong> <a href="mailto:matt@kthg.com.au" className="text-teal-600 hover:underline">matt@kthg.com.au</a></p>
            <p><strong>Country:</strong> Australia</p>
          </div>
          <P className="mt-4">We are committed to resolving any privacy concerns promptly and transparently. We will respond to all privacy inquiries within 30 days.</P>
        </Section>

      </main>
      <Footer />
    </div>
  );
}
