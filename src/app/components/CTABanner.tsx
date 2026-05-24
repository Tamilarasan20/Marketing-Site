interface CTABannerProps {
  heading: string;
  subtext: string;
}

export default function CTABanner({ heading, subtext }: CTABannerProps) {
  return (
    <div className="my-12 bg-gradient-to-br from-violet-600 to-violet-700 rounded-2xl p-8 text-white text-center">
      <h3 className="text-xl sm:text-2xl font-bold mb-2">{heading}</h3>
      <p className="text-violet-200 mb-6 max-w-xl mx-auto text-sm leading-relaxed">{subtext}</p>
      <a
        href="https://app.loraloop.com"
        className="inline-block bg-white text-violet-700 font-bold px-6 py-3 rounded-xl hover:bg-violet-50 transition-colors text-sm"
      >
        Try Loraloop Free →
      </a>
    </div>
  );
}
