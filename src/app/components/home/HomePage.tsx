import { Link } from "react-router";
import PricingSection from "../PricingSection";
import HeroSection from "./HeroSection";
import FeatureBento from "./FeatureBento";
import AgentsShowcase from "./AgentsShowcase";
import HowItWorks from "./HowItWorks";
import Integrations from "./Integrations";
import DefinitionSection from "./DefinitionSection";
import Guardrails from "./Guardrails";
import Comparison from "./Comparison";
import FaqSection from "./FaqSection";
import FinalCta from "./FinalCta";
import { Container, SectionPanel } from "./primitives";

/**
 * Home page (`/`), Helena-style order: what you get, who does it, how it works,
 * integrations, the definition AI search quotes, guardrails, then price and objections.
 * Sections alternate white / taupe "sheets" that overlap the one before.
 */
export default function HomePage() {
  return (
    <div className="home-v2">
      <HeroSection />
      <FeatureBento />
      <AgentsShowcase />
      <HowItWorks />
      <Integrations />
      <DefinitionSection />
      <Guardrails />

      <SectionPanel tone="white" id="pricing" aria-labelledby="pricing-heading">
        <Container className="px-0 sm:px-0 lg:px-0">
          {/* Credit usage breakdown is dark-styled and lives on /pricing. */}
          <PricingSection variant="light" showCreditUsage={false} className="w-full" />
          <p className="-mt-12 text-center text-[15px] text-[rgba(44,44,44,0.6)]">
            Want to see how far credits go?{" "}
            <Link to="/pricing" className="font-semibold text-[#141412] underline underline-offset-4">
              See credit usage by plan
            </Link>
          </p>
        </Container>
      </SectionPanel>

      <Comparison />
      <FaqSection />
      <FinalCta />
    </div>
  );
}
