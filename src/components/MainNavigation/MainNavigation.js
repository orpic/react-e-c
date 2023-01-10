import React from "react";

// eslint-disable-next-line
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

//importing path
import { cartPath, productsPath } from "../../pages";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <NavLink to="/">TeeRex Store</NavLink>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to={productsPath} activeClassName={classes.active}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to={cartPath} activeClassName={classes.active}>
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
