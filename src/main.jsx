import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error";
import Player from "./pages/Player";
import PlaylistContextProvider from "./context/PlaylistContext";
import BaseLayout from "./layout/BaseLayout";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <App />,
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <App />,
        errorElement: <ErrorPage />,
      },
      {
        path: "playlist/:playlistID",
        element: <Player />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PlaylistContextProvider>
      <RouterProvider router={router} />
    </PlaylistContextProvider>
  </React.StrictMode>
);
