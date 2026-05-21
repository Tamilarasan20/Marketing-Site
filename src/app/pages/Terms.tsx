export default function Terms() {
  return (
    <div className="pt-20 md:pt-32 pb-20 px-4">
      <div className="max-w-[860px] px-4 md:px-8 mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <p className="font-['Satoshi:Bold',sans-serif] leading-[56px] text-[#101828] text-5xl tracking-[-1.2px]">Terms of Service</p>
            <p className="font-['General_Sans:Medium',sans-serif] text-[#6b7280] text-base">
              Effective Date: May 1, 2026 &nbsp;|&nbsp; Last Updated: May 1, 2026
            </p>
          </div>

          {/* Terms of Use */}
          <div className="flex flex-col gap-4">
            <p className="font-['Satoshi:Bold',sans-serif] text-[#101828] text-2xl leading-8">Terms of Use</p>
            <div className="flex flex-col gap-3 font-['General_Sans:Medium',sans-serif] text-[#374151] text-base leading-7">
              <p>By accessing or using Loraloop, you agree to the following terms:</p>
              <ul className="list-disc pl-6 flex flex-col gap-1">
                <li>You must be at least 13 years old to use our platform.</li>
                <li>You are responsible for maintaining the security of your account credentials.</li>
                <li>You agree not to misuse our platform, AI tools, or automation systems.</li>
                <li>Loraloop reserves the right to suspend or terminate accounts that violate these terms.</li>
                <li>All content generated through Loraloop remains subject to our acceptable use policy.</li>
                <li>We may update these terms periodically. Continued use of the platform constitutes acceptance.</li>
              </ul>
            </div>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-4">
            <p className="font-['Satoshi:Bold',sans-serif] text-[#101828] text-2xl leading-8">Contact & Support</p>
            <div className="flex flex-col gap-2 font-['General_Sans:Medium',sans-serif] text-[#374151] text-base leading-7">
              <p>For any questions about these terms:</p>
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
