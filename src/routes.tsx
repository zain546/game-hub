import React from "react";
import { createBrowserRouter } from "react-router-dom";
import GameDetailPage from "./pages/GameDetailPage";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: React.createElement<typeof Layout>(Layout),
    errorElement: React.createElement<typeof ErrorPage>(ErrorPage),
    children: [
      { index: true, element: React.createElement<typeof HomePage>(HomePage) },
      {path:"games/:slug", element: React.createElement<typeof GameDetailPage>(GameDetailPage)}
    ],
  },
]);
export default router;
