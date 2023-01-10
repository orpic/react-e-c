import React from "react";

// eslint-disable-next-line
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

//importing path
import { cartPath, productsPath } from "../../pages";

const MainNavigation = () => {
  const navLinkData = [
    {
      toLink: productsPath,
      linkText: "Products",
      addInfo: "",
    },
    {
      toLink: cartPath,
      linkText: "Cart",
      addInfo: "",
    },
  ];
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <NavLink to="/">TeeRex Store</NavLink>
      </div>
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          {navLinkData.map((eachLink) => (
            <li key={eachLink.linkText}>
              <NavLink to={eachLink.toLink} activeClassName={classes.active}>
                {eachLink.linkText}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
