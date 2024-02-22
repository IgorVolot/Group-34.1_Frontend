import React from "react";
import Navigation from "./Navigation.jsx";

const Header = ({chagePage}) => {
  return (
      <header>
          <Navigation changePage={chagePage}/>
          <h1 className="text-center py-4">Luke Skywalker</h1>
      </header>
  )
}
export default Header