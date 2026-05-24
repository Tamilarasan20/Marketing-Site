import { useParams } from 'react-router';
import BrandVoice from './tools/BrandVoice';
import SocialCalendar from './tools/SocialCalendar';
import ContentPillars from './tools/ContentPillars';
import HookGenerator from './tools/HookGenerator';
import AdCopy from './tools/AdCopy';
import MarketingStrategy from './tools/MarketingStrategy';
import LandingPageCopy from './tools/LandingPageCopy';
import ProductDescription from './tools/ProductDescription';
import CompetitorAudit from './tools/CompetitorAudit';

const toolComponents: Record<string, React.ComponentType> = {
  'brand-voice': BrandVoice,
  'social-calendar': SocialCalendar,
  'content-pillars': ContentPillars,
  'hook-generator': HookGenerator,
  'ad-copy': AdCopy,
  'marketing-strategy': MarketingStrategy,
  'landing-page-copy': LandingPageCopy,
  'product-description': ProductDescription,
  'competitor-audit': CompetitorAudit,
};

export default function ToolEmbed() {
  const { slug } = useParams<{ slug: string }>();
  const ToolComponent = toolComponents[slug ?? ''];

  if (!ToolComponent) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <p className="text-gray-500 text-lg">Tool not found.</p>
      </div>
    );
  }

  return <ToolComponent />;
}
