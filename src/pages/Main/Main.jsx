import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Home/Header";
import Footer from "../../components/footer/Footer";

export default function Main() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
