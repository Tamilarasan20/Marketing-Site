import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Solution from "./pages/Solution";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetailWithAdditional";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import DataDeletion from "./pages/DataDeletion";
import ToolEmbed from "./pages/ToolEmbed";
import AllToolsPage from "./pages/AllToolsPage";
import NotFound from "./pages/NotFound";
import ForFounders from "./pages/ForFounders";
import ForAgencies from "./pages/ForAgencies";
import ForFreelancers from "./pages/ForFreelancers";
import ForEcommerce from "./pages/ForEcommerce";
import ForCreators from "./pages/ForCreators";

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
