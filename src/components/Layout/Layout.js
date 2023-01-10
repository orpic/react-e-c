import React from "react";
import "./Layout.css";
import { MainNavigation } from "../../components";

const Layout = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main className="TODO - add css class">{children}</main>
    </>
  );
};

export default Layout;
