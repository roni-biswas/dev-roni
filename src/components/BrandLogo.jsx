import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router";

const BrandLogo = () => {
  return (
    <Link to="/">
      <div className="flex items-center gap-1">
        <img className="w-10" src={logo} alt="brand logo | Roni Biswas" />
        <h1 className="text-2xl font-bold text-primary uppercase">DEVRONI</h1>
      </div>
    </Link>
  );
};

export default BrandLogo;
