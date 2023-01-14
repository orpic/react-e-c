import React from "react";
import classes from "./MainNavigation.module.css";

import { NavLink } from "react-router-dom";
import { cartPath, productsPath } from "../../pages";
import { useSelector } from "react-redux";

const MainNavigation = () => {
  const totalQuant = useSelector((state) => state.cart.totalQuantity);
  const navLinkData = [
    {
      toLink: productsPath,
      linkText: "Products",
      addInfo: "",
    },
    {
      toLink: cartPath,
      linkText: "Cart",
      addInfo: totalQuant,
    },
  ];
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <NavLink to="/">TeeRexStore</NavLink>
      </div>
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          {navLinkData.map((eachLink) => (
            <li key={eachLink.linkText}>
              <NavLink to={eachLink.toLink} activeClassName={classes.active}>
                {eachLink.linkText}{" "}
                <span className={classes[eachLink.linkText]}>
                  {eachLink.addInfo}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
