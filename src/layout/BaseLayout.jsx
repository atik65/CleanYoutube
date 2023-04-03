import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Nav/Navbar";

const BaseLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default BaseLayout;
