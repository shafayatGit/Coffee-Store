import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="max-w-6xl mx-auto">
        <Outlet></Outlet>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </div>
  );
};

export default MainLayout;
