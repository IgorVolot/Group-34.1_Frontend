import React from "react";
import NavItem from "./NavItem.jsx";
import {navItems} from "../utils/constans.js";

const Navigation = ({changePage}) => {
  return (
      <nav className="fixed-top">
          <ul className="nav mt-1 ms-5">
              {navItems.map(item => <NavItem changePage={changePage} key={item} itemTitle={item} />)}
          </ul>
      </nav>
  )
}

export default Navigation