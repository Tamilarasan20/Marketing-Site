import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  useEffect(() => {
    document.getElementById("s")?.remove();
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <Analytics />
    </>
  );
}