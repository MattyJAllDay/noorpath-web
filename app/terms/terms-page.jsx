import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service — NoorPath',
  description: 'Terms of Service for NoorPath by Motivational Fitness Pty Ltd',
};

function Header() {
  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-10">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-teal-600 tracking-tight">
          NoorPath
        </Link>
        <Link href="/privacy" className="text-sm text-gray-500 hover:text-teal-600 transition-colors">
          Privacy Policy →
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
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
      <p className="text-amber-800 text-sm leading-relaxed font-medium">{children}</p>
    </div>
  );
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-12 w-full">

        {/* Title */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-sm text-gray-400">Effective Date: March 10, 2026 · Service Provider: Motivational Fitness Pty Ltd (ABN 21 084 666 320)</p>
        </div>

        {/* Intro */}
        <P>Welcome to NoorPath. These Terms of Service ("Terms") govern your use of the NoorPath mobile application ("App") and related services provided by Motivational Fitness Pty Ltd ("we," "us," or "Company").</P>
        <P>By downloading, accessing, or using NoorPath, you agree to be bound by these Terms. If you do not agree, you must not use the App. These Terms form a legally binding agreement between you and Motivational Fitness Pty Ltd.</P>

        {/* 1 */}
        <Section title="1. Acceptable Use Policy">
          <SubSection title="1.1 Permitted Uses">
            <P>You may use NoorPath for the following lawful purposes:</P>
            <Ul>
              <Li>Tracking your daily prayers and building consistent prayer habits.</Li>
              <Li>Following guided Quran journeys and engaging with Islamic content.</Li>
              <Li>Recording menstrual cycle information for prayer exemption purposes.</Li>
              <Li>Maintaining personal journal entries for spiritual reflection.</Li>
              <Li>Tracking religious practice streaks and earning achievement points.</Li>
              <Li>Finding Qibla direction and setting prayer time notifications.</Li>
              <Li>Listening to adhan sounds and other Islamic audio content.</Li>
              <Li>Backing up your data to the cloud (Premium users only).</Li>
            </Ul>
          </SubSection>

          <SubSection title="1.2 Prohibited Conduct">
            <P>You must not:</P>
            <Ul>
              <Li><strong>Scrape or extract data:</strong> Use automated tools, bots, or scrapers to extract data from the app or its servers.</Li>
              <Li><strong>Reverse engineer:</strong> Decompile, disassemble, or attempt to derive the source code of the app.</Li>
              <Li><strong>Provide false information:</strong> Submit fraudulent or misleading information during registration or use.</Li>
              <Li><strong>Misuse religious content:</strong> Distort or misrepresent Islamic content, or use it for purposes contrary to Islamic principles.</Li>
              <Li><strong>Circumvent security measures:</strong> Attempt to bypass or interfere with security features or access controls.</Li>
              <Li><strong>Infringe intellectual property:</strong> Upload or distribute content that violates copyright, trademark, or other proprietary rights.</Li>
              <Li><strong>Distribute malware:</strong> Transmit viruses or harmful code that could damage the app or other users' devices.</Li>
              <Li><strong>Engage in unlawful activity:</strong> Use the app for any illegal purpose or in violation of applicable law.</Li>
              <Li><strong>Impersonate others:</strong> Falsely represent yourself as another person, entity, or religious authority.</Li>
              <Li><strong>Interfere with operations:</strong> Disrupt or place unreasonable load on the app's infrastructure or servers.</Li>
              <Li><strong>Resell or redistribute:</strong> Commercially exploit the app or its content without express written permission.</Li>
            </Ul>
          </SubSection>

          <SubSection title="1.3 Consequences of Violation">
            <P>Violation of this Acceptable Use Policy may result in immediate suspension or termination of your account, deletion of your content and data, reporting to relevant law enforcement authorities, and legal action to recover damages or obtain injunctive relief.</P>
          </SubSection>
        </Section>

        {/* 2 */}
        <Section title="2. Limitation of Liability">
          <SubSection title="2.1 Service Provided As Is">
            <P>NoorPath is provided on an "as is" and "as available" basis. To the maximum extent permitted by Australian Consumer Law and other applicable laws, we make no warranties regarding the accuracy of prayer times or Qibla directions, the availability or uninterrupted operation of the app, the accuracy of Islamic content for your specific circumstances, or the security of data stored on your device.</P>
          </SubSection>

          <SubSection title="2.2 Prayer Time and Religious Content Disclaimer">
            <Alert>
              Prayer times provided by NoorPath are estimates calculated using astronomical algorithms. These times may not be perfectly accurate due to geographical variations, different calculation methods used by various Islamic authorities, or device GPS limitations. You are responsible for verifying prayer times with local Islamic authorities, especially during travel.
            </Alert>
            <P>We are not liable for any missed prayers, incorrect prayer times, or religious consequences arising from reliance on the app's calculations.</P>
          </SubSection>

          <SubSection title="2.3 Cycle Tracking Disclaimer">
            <Alert>
              The menstrual cycle tracking feature is provided solely to help approximate periods of prayer exemption based on general Islamic guidance. This feature is not medical advice and must not be used for contraception, fertility planning, or health monitoring. Consult qualified Islamic scholars for specific religious rulings regarding your circumstances.
            </Alert>
          </SubSection>

          <SubSection title="2.4 Limitation of Damages">
            <P>To the maximum extent permitted by law, our total aggregate liability to you for all claims arising from your use of NoorPath shall not exceed the amount you have paid to us in the twelve (12) months preceding the event giving rise to liability. For free users, our aggregate liability is capped at AUD $100.</P>
            <P>To the maximum extent permitted by law, we shall not be liable for indirect, incidental, special, consequential, or punitive damages, loss of profits or data, emotional distress, spiritual harm, or religious consequences.</P>
          </SubSection>

          <SubSection title="2.5 Australian Consumer Law Rights Preserved">
            <P>Nothing in this section limits or excludes any rights you may have under the Australian Consumer Law (ACL) or other consumer protection legislation that cannot lawfully be limited or excluded. Your ACL rights are in addition to any other rights available to you under applicable law.</P>
          </SubSection>
        </Section>

        {/* 3 */}
        <Section title="3. Dispute Resolution">
          <SubSection title="3.1 Governing Law and Jurisdiction">
            <P>These Terms are governed by the laws of New South Wales, Australia. Any dispute arising from these Terms or your use of NoorPath is subject to the exclusive jurisdiction of the courts of New South Wales, Australia.</P>
          </SubSection>

          <SubSection title="3.2 Mandatory Good Faith Negotiation">
            <P>Before commencing legal proceedings, you agree to first attempt to resolve any dispute through good faith negotiation:</P>
            <Ul>
              <Li>Send a detailed written notice to <a href="mailto:matt@kthg.com.au" className="text-teal-600 hover:underline">matt@kthg.com.au</a> describing the dispute and your proposed resolution.</Li>
              <Li>Both parties agree to negotiate in good faith for at least 30 days from receipt of that notice.</Li>
              <Li>If unresolved after 30 days, either party may commence legal proceedings.</Li>
            </Ul>
            <P>This does not prevent either party from seeking urgent interim relief from a court where necessary to prevent irreparable harm.</P>
          </SubSection>

          <SubSection title="3.3 How to Submit Complaints">
            <P>Email <a href="mailto:matt@kthg.com.au" className="text-teal-600 hover:underline">matt@kthg.com.au</a> with "NoorPath Complaint" in the subject line. Include your name, account email, description of the issue, and desired resolution. We aim to acknowledge complaints within 3 business days and provide a substantive response within 14 business days.</P>
          </SubSection>
        </Section>

        {/* 4 */}
        <Section title="4. Subscription and Billing Terms">
          <SubSection title="4.1 Service Tiers">
            <Ul>
              <Li><strong>Free Tier:</strong> Prayer tracking, Qibla compass, basic Quran journeys, on-device cycle tracking, on-device journaling, streak tracking, and XP gamification. No payment required.</Li>
              <Li><strong>Premium Monthly:</strong> AUD $4.99 per month. All free features plus cloud backup, advanced Quran journeys, extended content library, and priority support.</Li>
              <Li><strong>Premium Annual:</strong> AUD $39.99 per year (~AUD $3.33/month, saving 33%). All premium features.</Li>
            </Ul>
            <P>Prices are in Australian Dollars and may vary by region due to currency conversion and local taxes.</P>
          </SubSection>

          <SubSection title="4.2 Free Trial">
            <P>New users are eligible for a seven (7) day free trial of Premium features. You will not be charged during the trial period. If you do not cancel before the trial ends, you will automatically be charged the applicable subscription fee. Free trial eligibility is limited to one trial per Apple ID.</P>
          </SubSection>

          <SubSection title="4.3 Money-Back Guarantee">
            <P>We offer a 30-day money-back guarantee for first-time Premium subscribers. If you are unsatisfied within 30 days of your initial paid subscription, contact us at <a href="mailto:matt@kthg.com.au" className="text-teal-600 hover:underline">matt@kthg.com.au</a> for a full refund of that initial billing period. This applies only to your first Premium purchase, not subsequent renewals.</P>
          </SubSection>

          <SubSection title="4.4 Automatic Renewal">
            <P>Premium subscriptions automatically renew at the end of each billing period unless cancelled before the renewal date. Monthly subscriptions renew monthly; annual subscriptions renew yearly. You will be charged within 24 hours prior to each renewal period.</P>
          </SubSection>

          <SubSection title="4.5 Cancellation">
            <P>Cancel at any time via your Apple App Store account settings (not within the NoorPath app). Cancellation takes effect at the end of your current billing period. You retain access to Premium features until that date.</P>
            <P>NoorPath does not process refunds for unused portions of a billing period except as required by applicable law or our money-back guarantee.</P>
          </SubSection>

          <SubSection title="4.6 Founding Member Pricing">
            <P>Current subscribers who subscribe during our launch period lock in the current pricing. We reserve the right to increase prices for new subscribers after our initial launch period. Existing subscribers will be notified at least 30 days in advance of any price change affecting their subscription.</P>
          </SubSection>
        </Section>

        {/* 5 */}
        <Section title="5. Account Termination">
          <SubSection title="5.1 Termination by You">
            <P>You may terminate your account at any time by going to Settings → Account → Delete Account in the app, or by contacting us at <a href="mailto:matt@kthg.com.au" className="text-teal-600 hover:underline">matt@kthg.com.au</a>.</P>
          </SubSection>

          <SubSection title="5.2 Termination by Us">
            <P>We may suspend or terminate your account, with or without notice, if you breach these Terms, engage in conduct harmful to other users or to NoorPath, use the app for unlawful purposes, or if we are required to do so by law or legal process.</P>
            <P>We may also terminate the service entirely with 30 days notice to registered users.</P>
          </SubSection>

          <SubSection title="5.3 Effect of Termination">
            <P>On termination, your right to use NoorPath ceases immediately. Server-stored data is deleted within 30 days. Premium subscriptions are cancelled. Data stored on your device is not automatically deleted — you must uninstall the app to remove it.</P>
            <P>If your account is terminated due to a breach of these Terms, you are not entitled to a refund of any subscription fees paid.</P>
          </SubSection>
        </Section>

        {/* 6 */}
        <Section title="6. Intellectual Property">
          <SubSection title="6.1 Our Content">
            <P>NoorPath, including its code, design, features, branding, and Islamic content library, is owned by Motivational Fitness Pty Ltd and protected by applicable intellectual property laws. You are granted a limited, non-exclusive, non-transferable licence to use the app for personal, non-commercial purposes in accordance with these Terms.</P>
          </SubSection>

          <SubSection title="6.2 Your Content">
            <P>Journal entries, intentions, and other content you create in NoorPath remain yours. You grant us no rights over content stored only on your device. For content you choose to back up to cloud storage, you grant us a limited licence to store and transmit that content solely for the purpose of providing the backup service to you.</P>
          </SubSection>

          <SubSection title="6.3 Islamic Content Attribution">
            <P>Quranic verses displayed in the app are from established, publicly available translations. We have made reasonable efforts to ensure accuracy and appropriate attribution. If you believe any content is incorrectly attributed, please contact us.</P>
          </SubSection>
        </Section>

        {/* 7 */}
        <Section title="7. Religious Content Disclaimer">
          <Alert>
            NoorPath provides Islamic content for general guidance and spiritual practice support only. Content in this app does not constitute a fatwa, religious ruling, or formal Islamic legal opinion. Prayer times, cycle-based prayer exemption calculations, and religious guidance provided are approximations. Users should consult qualified Islamic scholars for specific religious rulings applicable to their circumstances.
          </Alert>
          <P>We have made reasonable efforts to ensure Islamic content is accurate and respectful. We acknowledge that there are differences of opinion across Islamic schools of thought (madhabs), and content may not reflect all scholarly positions.</P>
        </Section>

        {/* 8 */}
        <Section title="8. Changes to Terms">
          <P>We may update these Terms from time to time. When we make material changes, we will notify you within the app and update the effective date at the top of this document. Your continued use of NoorPath after changes are posted constitutes your acceptance of the updated Terms.</P>
          <P>If you do not agree with updated Terms, you must stop using NoorPath and may delete your account.</P>
        </Section>

        {/* 9 */}
        <Section title="9. Australian Consumer Law">
          <P>Nothing in these Terms is intended to exclude, restrict, or modify any right or remedy, or any guarantee, warranty, or other term or condition implied or imposed by the Australian Consumer Law that cannot be excluded, restricted, or modified.</P>
          <P>If you are a consumer under the Australian Consumer Law, our services come with guarantees that cannot be excluded. If a major failure occurs, you are entitled to a refund. If the failure does not amount to a major failure, you are entitled to have the problem remedied.</P>
        </Section>

        {/* 10 */}
        <Section title="10. General">
          <SubSection title="10.1 Entire Agreement">
            <P>These Terms, together with our Privacy Policy, constitute the entire agreement between you and Motivational Fitness Pty Ltd regarding NoorPath and supersede all prior agreements.</P>
          </SubSection>
          <SubSection title="10.2 Severability">
            <P>If any provision of these Terms is found to be unenforceable, that provision will be modified to the minimum extent necessary to make it enforceable, and the remaining provisions will continue in full force.</P>
          </SubSection>
          <SubSection title="10.3 No Waiver">
            <P>Our failure to enforce any provision of these Terms does not constitute a waiver of our right to enforce that provision in the future.</P>
          </SubSection>
        </Section>

        {/* Contact */}
        <Section title="11. Contact Us">
          <div className="bg-gray-50 rounded-lg p-5 text-sm text-gray-700 space-y-1">
            <p><strong>Company:</strong> Motivational Fitness Pty Ltd</p>
            <p><strong>ABN:</strong> 21 084 666 320</p>
            <p><strong>Trading as:</strong> NoorPath</p>
            <p><strong>Email:</strong> <a href="mailto:matt@kthg.com.au" className="text-teal-600 hover:underline">matt@kthg.com.au</a></p>
            <p><strong>Governing Law:</strong> New South Wales, Australia</p>
          </div>
        </Section>

      </main>
      <Footer />
    </div>
  );
}
