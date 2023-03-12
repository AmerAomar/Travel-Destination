import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";
import "./Home.css";

function Home() {
  return (
    <div>
      <Header />
      <Tours />
      <Footer />
    </div>
  );
}

export default Home;
