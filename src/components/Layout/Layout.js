import React from "react";
// eslint-disable-next-line
import classes from "./Layout.module.css";
import { MainNavigation } from "../../components";

const Layout = ({ children }) => {
  return (
    <div className={classes.layout}>
      <MainNavigation />
      <main className="TODO - add css class">{children}</main>
    </div>
  );
};

export default Layout;
