import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Nav/Navbar";
import BottomNavbar from "../components/shared/BottomNavbar";
import { Container } from "@mui/material";

const BaseLayout = () => {
  return (
    <div>
      <Navbar />

      <Container>
        <Outlet />
      </Container>
      <BottomNavbar />
    </div>
  );
};

export default BaseLayout;
