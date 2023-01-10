import React from "react";
// eslint-disable-next-line
import classes from "./Layout.module.css";
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
