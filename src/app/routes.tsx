import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Solution from "./pages/Solution";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import DataDeletion from "./pages/DataDeletion";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "pricing", Component: Pricing },
      { path: "solution", Component: Solution },
      { path: "blog", Component: Blog },
      { path: "blog/:id", Component: BlogDetail },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "terms", Component: Terms },
      { path: "data-deletion", Component: DataDeletion },
      { path: "login", Component: Login },
      { path: "signup", Component: SignUp },
      { path: "*", Component: NotFound },
    ],
  },
]);
