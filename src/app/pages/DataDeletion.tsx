export default function DataDeletion() {
  return (
    <div className="pt-20 md:pt-32 pb-20 px-4">
      <div className="max-w-[860px] px-4 md:px-8 mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <p className="font-['Satoshi:Bold',sans-serif] leading-[56px] text-[#101828] text-5xl tracking-[-1.2px]">User Data Deletion</p>
            <p className="font-['General_Sans:Medium',sans-serif] text-[#6b7280] text-base">
              Effective Date: May 1, 2026 &nbsp;|&nbsp; Last Updated: May 1, 2026
            </p>
          </div>

          {/* Data Deletion */}
          <div className="flex flex-col gap-4">
            <p className="font-['Satoshi:Bold',sans-serif] text-[#101828] text-2xl leading-8">Data Deletion</p>
            <div className="flex flex-col gap-3 font-['General_Sans:Medium',sans-serif] text-[#374151] text-base leading-7">
              <p>You have the right to request deletion of your personal data at any time.</p>
              <p>When you submit a deletion request, Loraloop will:</p>
              <ul className="list-disc pl-6 flex flex-col gap-1">
                <li>Delete your account and associated profile information.</li>
                <li>Remove all connected platform data, including any linked Meta (Facebook/Instagram) account data and permissions.</li>
                <li>Purge stored content, AI inputs, and generated outputs tied to your account.</li>
                <li>Revoke all third-party integration tokens and access.</li>
              </ul>
              <p>Deletion requests are processed within <span className="text-[#101828] font-['Satoshi:Bold',sans-serif]">30 days</span>. Some data may be retained for legal or compliance purposes as outlined in our <a href="/privacy-policy" className="text-[#1877f2] hover:underline">Privacy Policy</a>.</p>
            </div>
          </div>

          {/* Request Deletion CTA */}
          <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-2xl p-8 flex flex-col gap-4">
            <p className="font-['Satoshi:Bold',sans-serif] text-[#101828] text-xl leading-7">Request Account & Data Deletion</p>
            <p className="font-['General_Sans:Medium',sans-serif] text-[#374151] text-base leading-7">
              To request deletion of your Loraloop account and all associated data (including connected Meta platform data), email us at:
            </p>
            <a
              href="mailto:loraloopai@gmail.com?subject=Data Deletion Request"
              className="inline-flex items-center gap-2 font-['Satoshi:Bold',sans-serif] text-[#1877f2] text-lg hover:underline"
            >
              loraloopai@gmail.com
            </a>
            <p className="font-['General_Sans:Medium',sans-serif] text-[#6b7280] text-sm leading-6">
              Please include your registered email address and the subject line <span className="text-[#374151]">"Data Deletion Request"</span>. Our support team will confirm receipt and process your request within 30 days.
            </p>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-4">
            <p className="font-['Satoshi:Bold',sans-serif] text-[#101828] text-2xl leading-8">Contact & Support</p>
            <div className="flex flex-col gap-2 font-['General_Sans:Medium',sans-serif] text-[#374151] text-base leading-7">
              <p>For any questions about data deletion:</p>
              <ul className="list-disc pl-6 flex flex-col gap-1">
                <li>Company: Loraloop (Orimoretail Pvt. Ltd.)</li>
                <li>
                  Email:{" "}
                  <a href="mailto:loraloopai@gmail.com" className="text-[#1877f2] hover:underline">
                    loraloopai@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
