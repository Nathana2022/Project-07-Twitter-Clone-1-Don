import React from "react";
import { Outlet } from "react-router-dom";
import SidebarLeft from "./SidebarLeft";
import TrendsRight from "./TrendsRight";

function Layout() {
  return (
    <>
      <SidebarLeft />
      <Outlet />
      <TrendsRight />
    </>
  );
}

export default Layout;
