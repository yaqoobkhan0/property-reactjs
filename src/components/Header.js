import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="left">
        <span>
          <Link to="/"> Estatery</Link>
        </span>
        <span className="open">Rent</span>
        <span>Buy</span>
        <span>Sell</span>
        <span>Manage Property &#8964;</span>
        <span>Resources &#8964;</span>
      </div>
      
    </div>
  );
}

export default Header;
