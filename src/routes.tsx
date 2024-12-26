import React from "react";
import { createBrowserRouter } from "react-router-dom";
import GameDetailPage from "./pages/GameDetailPage";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: React.createElement<typeof Layout>(Layout),
    children: [
      { index: true, element: React.createElement<typeof HomePage>(HomePage) },
      {path:"games/:id", element: React.createElement<typeof GameDetailPage>(GameDetailPage)}
    ],
  },
]);
export default router;
