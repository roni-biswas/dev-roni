import React from "react";
import { Outlet } from "react-router";
import NavBar from "../pages/Home/NavBar/Navbar";
import Hero from "../pages/Home/Hero/Hero";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
