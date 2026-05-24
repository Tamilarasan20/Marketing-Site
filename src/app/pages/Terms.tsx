import { usePageMeta } from "../../hooks/usePageMeta";

export default function Terms() {
  usePageMeta("Terms of Service | Loraloop", "Review Loraloop's terms of service governing the use of our AI automation platform.");
  return (
    <div className="pt-20 md:pt-32 pb-20 px-4">
      <div className="max-w-[860px] px-4 md:px-8 mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <p className="font-['Satoshi:Bold',sans-serif] leading-[56px] text-[#101828] text-5xl tracking-[-1.2px]">Terms of Service</p>
            <p className="font-['General_Sans:Medium',sans-serif] text-[#6b7280] text-base">
              Effective Date: May 1, 2026 &nbsp;|&nbsp; Last Updated: May 1, 2026
            </p>
            <p className="font-['General_Sans:Medium',sans-serif] text-[#374151] text-base leading-7">
              Welcome to Loraloop. These Terms of Service ("Terms") govern your access to and use of the Loraloop platform, website, AI agents, APIs, and related services (collectively, the "Service") operated by Loraloop, a product of Orimoretail Pvt. Ltd. ("Loraloop," "we," "us," or "our"). By creating an account or using the Service, you agree to be bound by these Terms.
            </p>
          </div>

          {/* 1. Eligibility */}
          <div className="flex flex-col gap-4">
            <p className="font-['Satoshi:Bold',sans-serif] text-[#101828] text-2xl leading-8">1. Eligibility</p>
            <div className="flex flex-col gap-3 font-['General_Sans:Medium',sans-serif] text-[#374151] text-base leading-7">
              <p>To use Loraloop, you must:</p>
              <ul className="list-disc pl-6 flex flex-col gap-1">
                <li>Be at least 13 years old (or the minimum age of digital consent in your jurisdiction).</li>
                <li>Have the legal capacity to enter into a binding agreement.</li>
                <li>Not be barred from using the Service under applicable laws.</li>
                <li>If using the Service on behalf of a business or organization, you represent that you are authorized to bind that entity to these Terms.</li>
              </ul>
            </div>
          </div>

          {/* 2. Account */}
          <div className="flex flex-col gap-4">
            <p className="font-['Satoshi:Bold',sans-serif] text-[#101828] text-2xl leading-8">2. Account Registration & Security</p>
            <div className="flex flex-col gap-3 font-['General_Sans:Medium',sans-serif] text-[#374151] text-base leading-7">
              <ul className="list-disc pl-6 flex flex-col gap-1">
                <li>You must provide accurate, current, and complete information when registering.</li>
                <li>You are solely responsible for safeguarding your account credentials and for all activity that occurs under your account.</li>
                <li>You agree to notify us immediately at <a href="mailto:loraloopai@gmail.com" className="text-[#1877f2] hover:underline">loraloopai@gmail.com</a> of any unauthorized use or security breach.</li>
                <li>We reserve the right to refuse service, suspend accounts, or cancel registrations at our sole discretion.</li>
              </ul>
            </div>
          </div>

          {/* 3. Acceptable Use */}
          <div className="flex flex-col gap-4">
            <p className="font-['Satoshi:Bold',sans-serif] text-[#101828] text-2xl leading-8">3. Acceptable Use Policy</p>
            <div className="flex flex-col gap-3 font-['General_Sans:Medium',sans-serif] text-[#374151] text-base leading-7">
              <p>You agree NOT to use the Service to:</p>
              <ul className="list-disc pl-6 flex flex-col gap-1">
                <li>Violate any applicable law, regulation, or third-party rights.</li>
                <li>Generate, distribute, or promote content that is unlawful, defamatory, harassing, abusive, fraudulent, obscene, or otherwise objectionable.</li>
                <li>Impersonate any person or entity, or misrepresent your affiliation with any person or entity.</li>
                <li>Attempt to reverse engineer, decompile, scrape, or otherwise extract source code or training data from the Service.</li>
                <li>Use the Service to develop competing products, train other AI models, or resell outputs without written permission.</li>
                <li>Interfere with, disrupt, or attempt to gain unauthorized access to the Service or related systems.</li>
                <li>Bypass rate limits, security features, or technical restrictions.</li>
                <li>Use automated bots, scripts, or scrapers other than the integrations we officially provide.</li>
                <li>Generate spam, deceptive ads, phishing content, or any material that violates Meta, Google, LinkedIn, or other connected platform policies.</li>
              </ul>
              <p>Violations may result in immediate account suspension or termination without refund.</p>
            </div>
          </div>

          {/* 4. AI-Generated Content */}
          <div className="flex flex-col gap-4">
            <p className="font-['Satoshi:Bold',sans-serif] text-[#101828] text-2xl leading-8">4. AI-Generated Content & Ownership</p>
            <div className="flex flex-col gap-3 font-['General_Sans:Medium',sans-serif] text-[#374151] text-base leading-7">
              <ul className="list-disc pl-6 flex flex-col gap-1">
                <li>You retain ownership of the inputs (prompts, brand assets, briefs) you submit to the Service.</li>
                <li>Subject to your compliance with these Terms, you own the outputs generated for your account and may use them for personal or commercial purposes.</li>
                <li>AI outputs may not be unique — similar outputs may be generated for other users. You are responsible for reviewing outputs for accuracy, originality, and legal compliance before publishing.</li>
                <li>You grant Loraloop a limited, non-exclusive license to host, process, and display your content solely to operate and improve the Service.</li>
                <li>You must not present AI outputs as expert advice (legal, medical, financial, etc.) without independent verification.</li>
              </ul>
            </div>
          </div>

          {/* 5. Third-Party Integrations */}
          <div className="flex flex-col gap-4">
            <p className="font-['Satoshi:Bold',sans-serif] text-[#101828] text-2xl leading-8">5. Third-Party Integrations</p>
            <div className="flex flex-col gap-3 font-['General_Sans:Medium',sans-serif] text-[#374151] text-base leading-7">
              <p>
                Loraloop connects with third-party platforms including Meta (Facebook, Instagram), Google, LinkedIn, X (Twitter), and others. Your use of those services is governed by their respective terms and policies. You are responsible for ensuring you have the rights and permissions to connect any account and to publish content through it.
              </p>
              <p>We are not liable for any changes, outages, or policy updates made by third-party platforms that affect Service functionality.</p>
            </div>
          </div>

          {/* 6. Subscriptions */}
          <div className="flex flex-col gap-4">
            <p className="font-['Satoshi:Bold',sans-serif] text-[#101828] text-2xl leading-8">6. Subscriptions, Billing & Refunds</p>
            <div className="flex flex-col gap-3 font-['General_Sans:Medium',sans-serif] text-[#374151] text-base leading-7">
              <ul className="list-disc pl-6 flex flex-col gap-1">
                <li>Paid plans are billed in advance on a monthly or annual basis and auto-renew unless cancelled before the renewal date.</li>
                <li>All fees are non-refundable except where required by law or as expressly stated in writing.</li>
                <li>We may change pricing at any time; changes apply to subsequent billing periods after reasonable notice.</li>
                <li>You are responsible for any taxes, duties, or government levies applicable to your subscription.</li>
                <li>Failure to pay may result in suspension or termination of your account.</li>
              </ul>
            </div>
          </div>

          {/* 7. Intellectual Property */}
          <div className="flex flex-col gap-4">
            <p className="font-['Satoshi:Bold',sans-serif] text-[#101828] text-2xl leading-8">7. Intellectual Property</p>
            <div className="flex flex-col gap-3 font-['General_Sans:Medium',sans-serif] text-[#374151] text-base leading-7">
              <p>
                The Service, including the Loraloop name, logo, AI agents (Lora, Sam, Sophie, Clara, Theo, Steve, Sarah, Elena, Nick), software, models, designs, and all related materials, is owned by Orimoretail Pvt. Ltd. and protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works without our prior written consent.
              </p>
            </div>
          </div>

          {/* 8. Termination */}
          <div className="flex flex-col gap-4">
            <p className="font-['Satoshi:Bold',sans-serif] text-[#101828] text-2xl leading-8">8. Suspension & Termination</p>
            <div className="flex flex-col gap-3 font-['General_Sans:Medium',sans-serif] text-[#374151] text-base leading-7">
              <ul className="list-disc pl-6 flex flex-col gap-1">
                <li>You may cancel your account at any time from your account settings or by emailing us.</li>
                <li>We may suspend or terminate your access immediately, without notice, for any breach of these Terms or for conduct we believe is harmful to other users, third parties, or the Service itself.</li>
                <li>Upon termination, your right to use the Service ceases immediately. Provisions that by their nature should survive (ownership, disclaimers, limitations of liability, dispute resolution) will survive termination.</li>
              </ul>
            </div>
          </div>

          {/* 9. Disclaimers */}
          <div className="flex flex-col gap-4">
            <p className="font-['Satoshi:Bold',sans-serif] text-[#101828] text-2xl leading-8">9. Disclaimers</p>
            <div className="flex flex-col gap-3 font-['General_Sans:Medium',sans-serif] text-[#374151] text-base leading-7">
              <p>
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR ACCURACY OF AI-GENERATED OUTPUTS. We do not warrant that the Service will be uninterrupted, secure, or error-free.
              </p>
            </div>
          </div>

          {/* 10. Limitation of Liability */}
          <div className="flex flex-col gap-4">
            <p className="font-['Satoshi:Bold',sans-serif] text-[#101828] text-2xl leading-8">10. Limitation of Liability</p>
            <div className="flex flex-col gap-3 font-['General_Sans:Medium',sans-serif] text-[#374151] text-base leading-7">
              <p>
                To the maximum extent permitted by law, Loraloop and Orimoretail Pvt. Ltd. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or goodwill, arising from your use of (or inability to use) the Service. Our total aggregate liability for any claim shall not exceed the amount you paid to us in the twelve (12) months preceding the event giving rise to the claim, or USD $100, whichever is greater.
              </p>
            </div>
          </div>

          {/* 11. Indemnification */}
          <div className="flex flex-col gap-4">
            <p className="font-['Satoshi:Bold',sans-serif] text-[#101828] text-2xl leading-8">11. Indemnification</p>
            <div className="flex flex-col gap-3 font-['General_Sans:Medium',sans-serif] text-[#374151] text-base leading-7">
              <p>
                You agree to indemnify and hold harmless Loraloop, Orimoretail Pvt. Ltd., and our officers, employees, and affiliates from any claim, demand, loss, or expense (including reasonable attorneys' fees) arising out of your use of the Service, your content, your violation of these Terms, or your violation of any third-party rights.
              </p>
            </div>
          </div>

          {/* 12. Governing Law */}
          <div className="flex flex-col gap-4">
            <p className="font-['Satoshi:Bold',sans-serif] text-[#101828] text-2xl leading-8">12. Governing Law & Disputes</p>
            <div className="flex flex-col gap-3 font-['General_Sans:Medium',sans-serif] text-[#374151] text-base leading-7">
              <p>
                These Terms are governed by the laws of India. Any dispute arising out of or relating to these Terms or the Service shall be subject to the exclusive jurisdiction of the courts located in Tamil Nadu, India. Before initiating a formal claim, you agree to first attempt to resolve the dispute informally by contacting us at <a href="mailto:loraloopai@gmail.com" className="text-[#1877f2] hover:underline">loraloopai@gmail.com</a>.
              </p>
            </div>
          </div>

          {/* 13. Changes */}
          <div className="flex flex-col gap-4">
            <p className="font-['Satoshi:Bold',sans-serif] text-[#101828] text-2xl leading-8">13. Changes to These Terms</p>
            <div className="flex flex-col gap-3 font-['General_Sans:Medium',sans-serif] text-[#374151] text-base leading-7">
              <p>
                We may update these Terms from time to time. When we do, we will revise the "Last Updated" date above and, for material changes, notify you by email or through the Service. Your continued use of the Service after changes take effect constitutes your acceptance of the revised Terms.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <p className="font-['Satoshi:Bold',sans-serif] text-[#101828] text-2xl leading-8">14. Contact & Support</p>
            <div className="flex flex-col gap-2 font-['General_Sans:Medium',sans-serif] text-[#374151] text-base leading-7">
              <p>For questions about these Terms, please reach out to us:</p>
              <ul className="list-disc pl-6 flex flex-col gap-1">
                <li>Company: Loraloop (Orimoretail Pvt. Ltd.)</li>
                <li>
                  Email:{" "}
                  <a href="mailto:loraloopai@gmail.com" className="text-[#1877f2] hover:underline">
                    loraloopai@gmail.com
                  </a>
                </li>
                <li>Website: <a href="https://www.loraloop.com" className="text-[#1877f2] hover:underline">www.loraloop.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
