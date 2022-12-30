import React from "react";
import { Outlet } from "react-router-dom";
import StyledNavbar from "../Components/StyledNavbar";

const SharedLayout = () => {
  return (
    <div>
      <StyledNavbar />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
