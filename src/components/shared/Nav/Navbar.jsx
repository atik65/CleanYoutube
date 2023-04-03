import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h2
        style={{
          padding: "1rem",
          textAlign: "center",
        }}
      >
        <Link to="/">Go to Home</Link>
      </h2>
    </div>
  );
};

export default Navbar;
