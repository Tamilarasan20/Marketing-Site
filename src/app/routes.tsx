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
const ForFounders = lazy(() => import("./pages/ForFounders"));
const ForAgencies = lazy(() => import("./pages/ForAgencies"));
const ForFreelancers = lazy(() => import("./pages/ForFreelancers"));
const ForEcommerce = lazy(() => import("./pages/ForEcommerce"));
const ForCreators = lazy(() => import("./pages/ForCreators"));

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
      { path: "for-founders", Component: ForFounders },
      { path: "for-agencies", Component: ForAgencies },
      { path: "for-freelancers", Component: ForFreelancers },
      { path: "for-ecommerce", Component: ForEcommerce },
      { path: "for-creators", Component: ForCreators },
      { path: "*", Component: NotFound },
    ],
  },
]);
