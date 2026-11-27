import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";

// Home is the primary landing route, so it stays in the initial bundle to
// avoid a load waterfall. Every other route is code-split into its own chunk
// and only fetched when the user navigates to it — this keeps the initial
// download small (blog data, tool widgets and their heavy deps no longer ship
// on first paint).
const Pricing = lazy(() => import("./pages/Pricing"));
const Solution = lazy(() => import("./pages/Solution"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetail = lazy(() => import("./pages/BlogDetailWithAdditional"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));
const DataDeletion = lazy(() => import("./pages/DataDeletion"));
const ToolEmbed = lazy(() => import("./pages/ToolEmbed"));
const AllToolsPage = lazy(() => import("./pages/AllToolsPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const SegmentPage = lazy(() => import("./pages/SegmentPage"));
const AiMarketingLead = lazy(() => import("./pages/AiMarketingLead"));
const AiSeoGeoStrategist = lazy(() => import("./pages/AiSeoGeoStrategist"));
const AiEmailMarketer = lazy(() => import("./pages/AiEmailMarketer"));
const AiAdsManager = lazy(() => import("./pages/AiAdsManager"));
const Compare = lazy(() => import("./pages/Compare"));
const CompareIndex = lazy(() => import("./pages/Compare").then((m) => ({ default: m.CompareIndex })));
const AuthorPage = lazy(() => import("./pages/AuthorPage"));
const FreeMetaAdsAudit = lazy(() => import("./pages/FreeMetaAdsAudit"));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "pricing", Component: Pricing },
      { path: "solution", Component: Solution },
      { path: "blog", Component: Blog },
      { path: "blog/:slug", Component: BlogDetail },
      { path: "tools", Component: AllToolsPage },
      { path: "tools/:slug", Component: ToolEmbed },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "terms", Component: Terms },
      { path: "data-deletion", Component: DataDeletion },
      { path: "for-ecommerce", Component: SegmentPage },
      { path: "for-saas", Component: SegmentPage },
      { path: "for-agencies", Component: SegmentPage },
      { path: "for-media-buyers", Component: SegmentPage },
      { path: "for-marketing-teams", Component: SegmentPage },
      { path: "for-local-businesses", Component: SegmentPage },
      { path: "ai-marketing-lead", Component: AiMarketingLead },
      { path: "ai-seo-geo-strategist", Component: AiSeoGeoStrategist },
      { path: "ai-email-marketer", Component: AiEmailMarketer },
      { path: "ai-ads-manager", Component: AiAdsManager },
      { path: "compare", Component: CompareIndex },
      { path: "compare/:slug", Component: Compare },
      { path: "authors/:slug", Component: AuthorPage },
      { path: "free-meta-ads-audit", Component: FreeMetaAdsAudit },
      { path: "*", Component: NotFound },
    ],
  },
]);
