import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error";
import Player from "./pages/Player";
import PlaylistContextProvider from "./context/PlaylistContext";
import BaseLayout from "./layout/BaseLayout";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

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
      <CssBaseline />
      {/* <ToastContainer /> */}
      <RouterProvider router={router} />
    </PlaylistContextProvider>
  </React.StrictMode>
);
