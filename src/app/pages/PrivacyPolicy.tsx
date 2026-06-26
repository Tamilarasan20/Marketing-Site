export default function PrivacyPolicy() {
  return (
    <div className="pt-20 md:pt-32 pb-20 px-4">
      <div className="max-w-[860px] px-4 md:px-8 mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <p className="font-['Satoshi',sans-serif] font-bold leading-tight text-[#101828] text-4xl md:text-5xl tracking-[-1.2px]">Privacy Policy</p>
            <p className="font-['General_Sans',sans-serif] font-medium text-[#6b7280] text-base">
              Effective Date: May 1, 2026 &nbsp;|&nbsp; Last Updated: May 1, 2026
            </p>
          </div>

          <Section title="1. Introduction">
            <p>Welcome to Loraloop ("Company," "we," "our," or "us").</p>
            <p>This Privacy Policy explains how we collect, use, process, store, and protect your personal data when you:</p>
            <ul>
              <li>Visit our website</li>
              <li>Use our platform (web or mobile)</li>
              <li>Interact with our AI tools, automation systems, or integrations</li>
            </ul>
            <p>We are committed to protecting your privacy and ensuring transparency in how your data is handled, similar to modern AI platforms that clearly define data handling practices.</p>
          </Section>

          <Section title="2. Scope of This Policy">
            <p>This Privacy Policy applies to:</p>
            <ul>
              <li>Loraloop website and applications</li>
              <li>AI-powered tools and automation workflows</li>
              <li>Third-party integrations connected to Loraloop</li>
              <li>Customer support and communications</li>
            </ul>
            <p>This policy does not apply to third-party platforms (e.g., Amazon, TikTok, etc.) you connect to Loraloop.</p>
          </Section>

          <Section title="3. Information We Collect">
            <SubSection title="3.1 Personal Information">
              <p>We may collect:</p>
              <ul>
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Billing and shipping address</li>
                <li>Payment details (processed via third-party providers)</li>
              </ul>
            </SubSection>
            <SubSection title="3.2 Account & Usage Data">
              <ul>
                <li>Login credentials</li>
                <li>Platform activity and interactions</li>
                <li>Product listings and performance data</li>
                <li>Preferences and settings</li>
              </ul>
            </SubSection>
            <SubSection title="3.3 Device & Technical Data">
              <ul>
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device identifiers</li>
                <li>Operating system</li>
                <li>Session logs</li>
              </ul>
            </SubSection>
            <SubSection title="3.4 Content & AI Input Data">
              <ul>
                <li>Text, prompts, files, images, or videos uploaded</li>
                <li>Product descriptions and marketing content</li>
                <li>Data used to train or customize AI workflows</li>
              </ul>
              <p className="text-[#374151] text-sm mt-2">⚠️ Note: AI systems may process your data to generate outputs and improve functionality.</p>
            </SubSection>
            <SubSection title="3.5 Third-Party Data">
              <p>When you connect external platforms, we may collect:</p>
              <ul>
                <li>Marketplace data (Amazon, Walmart, etc.)</li>
                <li>Social media data (TikTok, Instagram, etc.)</li>
                <li>Analytics and advertising data</li>
              </ul>
            </SubSection>
          </Section>

          <Section title="4. How We Use Your Information">
            <p>We use your data to:</p>
            <ul>
              <li>Provide and operate our platform</li>
              <li>Run AI-powered automation and recommendations</li>
              <li>Process orders and transactions</li>
              <li>Personalize your experience</li>
              <li>Improve product performance and features</li>
              <li>Communicate updates and support</li>
              <li>Detect fraud and prevent abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </Section>

          <Section title="5. AI & Automated Processing">
            <p>Loraloop uses AI and machine learning models to:</p>
            <ul>
              <li>Generate content (ads, listings, posts)</li>
              <li>Analyze trends and competitors</li>
              <li>Automate workflows and decision-making</li>
            </ul>
            <p>Your data may be:</p>
            <ul>
              <li>Processed by internal AI systems</li>
              <li>Sent to trusted AI service providers</li>
              <li>Used to improve system performance (unless opted out)</li>
            </ul>
            <p className="text-[#374151] text-sm mt-2">⚠️ AI outputs may not always be accurate and should be reviewed before use.</p>
          </Section>

          <Section title="6. Legal Basis for Processing (GDPR)">
            <p>If you are in the EU/UK, we process your data based on:</p>
            <ul>
              <li>Consent</li>
              <li>Contractual necessity</li>
              <li>Legal obligations</li>
              <li>Legitimate business interests</li>
            </ul>
          </Section>

          <Section title="7. Sharing of Information">
            <p>We do not sell your personal data.</p>
            <p>We may share data with:</p>
            <SubSection title="7.1 Service Providers">
              <ul>
                <li>Cloud hosting providers</li>
                <li>Payment processors</li>
                <li>Analytics tools</li>
                <li>Customer support platforms</li>
              </ul>
            </SubSection>
            <SubSection title="7.2 Integrations">
              <ul>
                <li>Amazon, TikTok Shop, Walmart, etc.</li>
                <li>Marketing and automation tools</li>
              </ul>
            </SubSection>
            <SubSection title="7.3 Legal Authorities">
              <ul>
                <li>When required by law</li>
                <li>To protect rights, users, or platform integrity</li>
              </ul>
            </SubSection>
          </Section>

          <Section title="8. Cookies & Tracking Technologies">
            <p>We use cookies and similar technologies to:</p>
            <ul>
              <li>Track user behavior</li>
              <li>Improve platform performance</li>
              <li>Personalize content and ads</li>
            </ul>
            <p>Examples include analytics and marketing cookies commonly used by platforms like Mixpanel, Google Analytics, and advertising pixels.</p>
            <p>You can control cookies through browser settings.</p>
          </Section>

          <Section title="9. Data Retention">
            <p>We retain your data:</p>
            <ul>
              <li>As long as your account is active</li>
              <li>As required for legal or compliance purposes</li>
              <li>Until you request deletion</li>
            </ul>
          </Section>

          <Section title="10. Data Security">
            <p>We implement:</p>
            <ul>
              <li>Encryption (in transit and at rest)</li>
              <li>Secure cloud infrastructure</li>
              <li>Access controls and authentication</li>
            </ul>
            <p>However, no system is 100% secure.</p>
          </Section>

          <Section title="11. International Data Transfers">
            <p>Your data may be processed in:</p>
            <ul>
              <li>United States</li>
              <li>European Union</li>
              <li>Other global locations</li>
            </ul>
            <p>We ensure appropriate safeguards (e.g., Standard Contractual Clauses).</p>
          </Section>

          <Section title="12. Your Rights">
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access your data</li>
              <li>Correct inaccuracies</li>
              <li>Request deletion</li>
              <li>Restrict processing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>
          </Section>

          <Section title="13. Children's Privacy">
            <p>Loraloop is not intended for individuals under 13 (or applicable legal age). We do not knowingly collect data from children.</p>
          </Section>

          <Section title="14. Third-Party Links">
            <p>Our platform may contain links to third-party websites. We are not responsible for their privacy practices.</p>
          </Section>

          <Section title="15. Subprocessors">
            <p>We may use subprocessors to deliver services, including:</p>
            <ul>
              <li>Cloud infrastructure providers</li>
              <li>AI model providers</li>
              <li>Analytics platforms</li>
            </ul>
            <p>All subprocessors are required to follow strict data protection obligations.</p>
          </Section>

          <Section title="16. Data Breaches">
            <p>In the event of a data breach, we will:</p>
            <ul>
              <li>Notify affected users (where required)</li>
              <li>Take immediate corrective actions</li>
              <li>Report to authorities if necessary</li>
            </ul>
          </Section>

          <Section title="17. Changes to This Policy">
            <p>We may update this Privacy Policy periodically. Changes will be posted with a revised "Last Updated" date.</p>
          </Section>

          <Section title="18. Contact Information">
            <p>For any privacy-related questions:</p>
            <ul>
              <li>Company Name: Loraloop</li>
              <li>
                Email:{" "}
                <a href="mailto:loraloopai@gmail.com" className="text-[#1877f2] hover:underline">
                  loraloopai@gmail.com
                </a>
              </li>
            </ul>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-['Satoshi',sans-serif] font-bold text-[#101828] text-2xl leading-8">{title}</p>
      <div className="flex flex-col gap-3 font-['General_Sans',sans-serif] font-medium text-[#374151] text-base leading-7 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1">
        {children}
      </div>
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 mt-1">
      <p className="font-['Satoshi',sans-serif] font-bold text-[#1f2937] text-lg leading-7">{title}</p>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}
