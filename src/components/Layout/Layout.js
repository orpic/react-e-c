import React from "react";
import classes from "./Layout.module.css";

import { MainNavigation } from "../../components";

const Layout = ({ children }) => {
  return (
    <div className={classes.layout}>
      <div className={classes.mainNav}>
        <MainNavigation />
      </div>
      <div className={classes.main}>{children}</div>
    </div>
  );
};

export default Layout;
