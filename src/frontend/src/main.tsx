import React from "react";
import { createRoot } from "react-dom/client";
import Home from "@/pages/Home";
import "./app.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./layout/RootLayout";
import CreateCampaign from "./pages/CreateCampaign";
import Campaign from "./pages/Campaign";
import Campaigns from "./pages/Campaigns";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "campaigns", element: <Campaigns /> },
      { path: "campaign", element: <Campaign /> },
      { path: "create-campaign", element: <CreateCampaign /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
