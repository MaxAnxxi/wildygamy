import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage/HomePage";

import MainPage from "./pages/MainPage/MainPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import FormAdminGames from "./pages/FormAdminGames/FormAdminGames";
import PrizePage from "./pages/PrizePage/PrizePage";
import ConnexionPage from "./pages/ConnexionPage/ConnexionPage";

const ApiUrl = import.meta.env.VITE_API_URL;

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/connexion",
        element: <ConnexionPage />,
      },

      {
        path: "/games",
        element: <MainPage />,
        loader: async () => fetch(`${ApiUrl}/api/games`),
      },
      {
        path: "games/:id",
        element: <DetailPage />,
        loader: async () => fetch(`${ApiUrl}/api/games`),
      },
      {
        path: "admin/games",
        element: <FormAdminGames />,
        action: async ({ request }) => {
          const formData = await request.formData();

          const gameName = formData.get("GameName");
          const categoryName = formData.get("CategoryName");
          const challengeName = formData.get("ChallengeName");
          const popularName = formData.get("PopularName");
          const imageName = formData.get("ImageName");
          const synopsisName = formData.get("SynopsisName");

          const game = {
            gameName,
            categoryName,
            challengeName,
            popularName,
            imageName,
            synopsisName,
          };

          const response = await fetch(`${ApiUrl}/api/games/add`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(game),
          });

          return redirect(`/games/${response.data.insertId}`);
        },
      },
      {
        path: "/prizes",
        element: <PrizePage />,
        loader: async () => fetch(`${import.meta.env.VITE_API_URL}/api/prizes`),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
