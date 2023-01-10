import React from "react";
import "./MainNavigation.css";
import { NavLink } from "react-router-dom";

//importing path
import { cartPath, productsPath } from "../../pages";

const MainNavigation = () => {
  return (
    <header>
      <div>TeeRex Store</div>
      <nav>
        <ul>
          <li>
            <NavLink
              to={productsPath}
              activeClassName={"TODO - add active css class"}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to={cartPath}
              activeClassName={"TODO - add active css class"}
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
