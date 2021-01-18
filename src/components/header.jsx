import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/"><h2>Piczo</h2></Link>
      <Link to="/cart"><i className="ri-shopping-cart-line ri-fw ri-2x" /></Link>
    </header>
  );
}

export default Header;
