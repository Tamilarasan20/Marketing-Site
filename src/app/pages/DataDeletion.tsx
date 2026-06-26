export default function DataDeletion() {
  return (
    <div className="pt-20 md:pt-32 pb-20 px-4">
      <div className="max-w-[860px] px-4 md:px-8 mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <p className="font-['Satoshi',sans-serif] font-bold leading-tight text-[#101828] text-4xl md:text-5xl tracking-[-1.2px]">User Data Deletion</p>
            <p className="font-['General_Sans',sans-serif] font-medium text-[#6b7280] text-base">
              Effective Date: May 1, 2026 &nbsp;|&nbsp; Last Updated: May 1, 2026
            </p>
            <p className="font-['General_Sans',sans-serif] font-medium text-[#374151] text-base leading-7">
              At Loraloop, we respect your right to control your personal data. This page explains exactly what data we hold, how you can request deletion, what happens when you do, and how long the process takes. Loraloop is operated by Orimoretail Pvt. Ltd. and complies with global privacy regulations including the GDPR, CCPA/CPRA, India's DPDP Act, and the Meta Platform Terms.
            </p>
          </div>

          {/* 1. Your Rights */}
          <div className="flex flex-col gap-4">
            <p className="font-['Satoshi',sans-serif] font-bold text-[#101828] text-2xl leading-8">1. Your Right to Deletion</p>
            <div className="flex flex-col gap-3 font-['General_Sans',sans-serif] font-medium text-[#374151] text-base leading-7">
              <p>You may, at any time and free of charge, request that Loraloop:</p>
              <ul className="list-disc pl-6 flex flex-col gap-1">
                <li>Delete your account and all associated personal data.</li>
                <li>Remove any data we received from a connected third-party platform (Meta/Facebook/Instagram, Google, LinkedIn, X, etc.).</li>
                <li>Revoke all third-party integration tokens and access permissions issued to your account.</li>
                <li>Purge AI inputs, prompts, generated outputs, drafts, and assets tied to your workspace.</li>
                <li>Provide written confirmation once deletion is complete.</li>
              </ul>
            </div>
          </div>

          {/* 2. What Gets Deleted */}
          <div className="flex flex-col gap-4">
            <p className="font-['Satoshi',sans-serif] font-bold text-[#101828] text-2xl leading-8">2. What Data Gets Deleted</p>
            <div className="flex flex-col gap-3 font-['General_Sans',sans-serif] font-medium text-[#374151] text-base leading-7">
              <p>When you submit a verified deletion request, we permanently remove:</p>
              <ul className="list-disc pl-6 flex flex-col gap-1">
                <li><span className="text-[#101828] font-['Satoshi',sans-serif] font-bold">Account data</span> — your profile, name, email, password hash, billing details (excluding records we are legally required to keep for tax/accounting).</li>
                <li><span className="text-[#101828] font-['Satoshi',sans-serif] font-bold">Connected platform data</span> — Facebook Pages, Instagram Business accounts, ad accounts, page tokens, audience data, post insights, and any other data pulled from Meta or other connected platforms.</li>
                <li><span className="text-[#101828] font-['Satoshi',sans-serif] font-bold">Content & AI data</span> — uploaded files, brand assets, prompts, briefs, AI-generated text/images/videos, drafts, schedules, and campaign history.</li>
                <li><span className="text-[#101828] font-['Satoshi',sans-serif] font-bold">Usage & analytics</span> — your activity logs, preferences, and engagement records.</li>
                <li><span className="text-[#101828] font-['Satoshi',sans-serif] font-bold">Integration tokens</span> — OAuth tokens, API keys, refresh tokens, and webhook subscriptions are immediately revoked.</li>
              </ul>
            </div>
          </div>

          {/* 3. How to Request — Method A */}
          <div className="flex flex-col gap-4">
            <p className="font-['Satoshi',sans-serif] font-bold text-[#101828] text-2xl leading-8">3. How to Request Deletion</p>
            <div className="flex flex-col gap-3 font-['General_Sans',sans-serif] font-medium text-[#374151] text-base leading-7">
              <p>You can submit a deletion request using either of these methods:</p>

              <p className="font-['Satoshi',sans-serif] font-bold text-[#101828] text-lg mt-2">Option A — Email Request (Recommended)</p>
              <p>Send an email to <a href="mailto:loraloopai@gmail.com?subject=Data Deletion Request" className="text-[#1877f2] hover:underline">loraloopai@gmail.com</a> from the email address registered to your Loraloop account, including:</p>
              <ul className="list-disc pl-6 flex flex-col gap-1">
                <li>Subject line: <span className="text-[#101828]">"Data Deletion Request"</span></li>
                <li>Your registered email address</li>
                <li>(Optional) Reason for deletion — helps us improve the product</li>
                <li>(Optional) Specify if you want only Meta/Facebook data deleted vs. full account deletion</li>
              </ul>

              <p className="font-['Satoshi',sans-serif] font-bold text-[#101828] text-lg mt-2">Option B — In-App Deletion</p>
              <p>Log in to your Loraloop dashboard → <span className="text-[#101828]">Settings → Privacy → Delete My Account</span>. You will be asked to re-enter your password and confirm. Once confirmed, deletion begins automatically.</p>

              <p className="font-['Satoshi',sans-serif] font-bold text-[#101828] text-lg mt-2">Option C — Removal via Facebook Settings</p>
              <p>If you signed in with Facebook, you can also revoke Loraloop's access from <span className="text-[#101828]">Facebook → Settings → Apps and Websites → Loraloop → Remove</span>. Facebook will notify us, and we will delete the associated data within 30 days.</p>
            </div>
          </div>

          {/* 4. Verification */}
          <div className="flex flex-col gap-4">
            <p className="font-['Satoshi',sans-serif] font-bold text-[#101828] text-2xl leading-8">4. Verification of Identity</p>
            <div className="flex flex-col gap-3 font-['General_Sans',sans-serif] font-medium text-[#374151] text-base leading-7">
              <p>
                To protect against fraudulent requests, we will verify that the request comes from the account owner. This is normally done by confirming the request is sent from the email address on file. In some cases, we may ask you to confirm additional details such as your most recent invoice number, the name of your workspace, or a one-time code sent to your registered email.
              </p>
            </div>
          </div>

          {/* 5. Timeline */}
          <div className="flex flex-col gap-4">
            <p className="font-['Satoshi',sans-serif] font-bold text-[#101828] text-2xl leading-8">5. Processing Timeline</p>
            <div className="flex flex-col gap-3 font-['General_Sans',sans-serif] font-medium text-[#374151] text-base leading-7">
              <ul className="list-disc pl-6 flex flex-col gap-1">
                <li><span className="text-[#101828] font-['Satoshi',sans-serif] font-bold">Within 24–72 hours:</span> We acknowledge receipt of your request and revoke active integration tokens.</li>
                <li><span className="text-[#101828] font-['Satoshi',sans-serif] font-bold">Within 7 days:</span> All live data, including connected Meta data, is removed from production systems.</li>
                <li><span className="text-[#101828] font-['Satoshi',sans-serif] font-bold">Within 30 days:</span> Encrypted backups are purged during the next scheduled rotation. You receive a final confirmation email.</li>
                <li><span className="text-[#101828] font-['Satoshi',sans-serif] font-bold">Up to 90 days:</span> Data fully removed from all disaster-recovery archives.</li>
              </ul>
            </div>
          </div>

          {/* 6. Retained */}
          <div className="flex flex-col gap-4">
            <p className="font-['Satoshi',sans-serif] font-bold text-[#101828] text-2xl leading-8">6. Data We May Retain</p>
            <div className="flex flex-col gap-3 font-['General_Sans',sans-serif] font-medium text-[#374151] text-base leading-7">
              <p>Certain data may be retained, in anonymized or aggregated form, even after deletion, where required for:</p>
              <ul className="list-disc pl-6 flex flex-col gap-1">
                <li>Legal and tax compliance (invoices, GST records, financial reporting obligations).</li>
                <li>Fraud prevention, security incident investigations, or to enforce our Terms.</li>
                <li>Resolving disputes and complying with court orders or regulatory requests.</li>
                <li>Aggregated analytics that contain no personally identifiable information.</li>
              </ul>
              <p>This retention is strictly limited to what the law requires and is segregated from active user data.</p>
            </div>
          </div>

          {/* 7. Meta-specific */}
          <div className="flex flex-col gap-4">
            <p className="font-['Satoshi',sans-serif] font-bold text-[#101828] text-2xl leading-8">7. Meta / Facebook Data Deletion</p>
            <div className="flex flex-col gap-3 font-['General_Sans',sans-serif] font-medium text-[#374151] text-base leading-7">
              <p>
                If you logged in or connected to Loraloop via Facebook or Instagram, the following platform data is deleted: page access tokens, page metadata, post insights, audience data, ad account references, Instagram business profile data, and any cached media you authorized us to fetch. We do not delete content from your Facebook or Instagram accounts themselves — to remove posts you published using Loraloop, please delete them directly from Facebook/Instagram.
              </p>
              <p>
                To revoke Loraloop's access without contacting us, visit:{" "}
                <a href="https://www.facebook.com/settings?tab=applications" target="_blank" rel="noopener noreferrer" className="text-[#1877f2] hover:underline">
                  https://www.facebook.com/settings?tab=applications
                </a>
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-2xl p-8 flex flex-col gap-4">
            <p className="font-['Satoshi',sans-serif] font-bold text-[#101828] text-xl leading-7">Request Account & Data Deletion</p>
            <p className="font-['General_Sans',sans-serif] font-medium text-[#374151] text-base leading-7">
              The fastest way is to email us from your registered Loraloop address:
            </p>
            <a
              href="mailto:loraloopai@gmail.com?subject=Data Deletion Request"
              className="inline-flex items-center gap-2 font-['Satoshi',sans-serif] font-bold text-[#1877f2] text-lg hover:underline"
            >
              loraloopai@gmail.com
            </a>
            <p className="font-['General_Sans',sans-serif] font-medium text-[#6b7280] text-sm leading-6">
              Use the subject line <span className="text-[#374151]">"Data Deletion Request"</span>. We confirm receipt within 72 hours and complete deletion within 30 days.
            </p>
          </div>

          {/* 8. Children */}
          <div className="flex flex-col gap-4">
            <p className="font-['Satoshi',sans-serif] font-bold text-[#101828] text-2xl leading-8">8. Children's Data</p>
            <div className="flex flex-col gap-3 font-['General_Sans',sans-serif] font-medium text-[#374151] text-base leading-7">
              <p>
                Loraloop is not intended for children under 13. If you believe a child has registered or that we have inadvertently collected personal data of a minor, please contact us at <a href="mailto:loraloopai@gmail.com" className="text-[#1877f2] hover:underline">loraloopai@gmail.com</a> and we will delete the data promptly.
              </p>
            </div>
          </div>

          {/* 9. Contact */}
          <div className="flex flex-col gap-4">
            <p className="font-['Satoshi',sans-serif] font-bold text-[#101828] text-2xl leading-8">9. Contact & Data Protection</p>
            <div className="flex flex-col gap-2 font-['General_Sans',sans-serif] font-medium text-[#374151] text-base leading-7">
              <p>For deletion requests, complaints, or questions about your data:</p>
              <ul className="list-disc pl-6 flex flex-col gap-1">
                <li>Company: Loraloop (Orimoretail Pvt. Ltd.)</li>
                <li>
                  Email:{" "}
                  <a href="mailto:loraloopai@gmail.com" className="text-[#1877f2] hover:underline">
                    loraloopai@gmail.com
                  </a>
                </li>
                <li>Website: <a href="https://www.loraloop.com" className="text-[#1877f2] hover:underline">www.loraloop.com</a></li>
                <li>Response time: within 72 hours on business days</li>
              </ul>
              <p>For more on what data we collect and why, please review our <a href="/privacy-policy" className="text-[#1877f2] hover:underline">Privacy Policy</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
