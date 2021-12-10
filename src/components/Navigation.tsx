import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/home">Главная</Link>
      <Link to="/about">О проекте</Link>
    </div>
  );
}

export default Navigation;
