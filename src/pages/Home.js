import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StatsCounter from "../components/StatsCounter.js";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <h3 align="center">COVID-19 LIVE STATS</h3> <br></br>
      <StatsCounter></StatsCounter>
      <hr></hr>
      <Footer />
    </div>
  );
}

export default Home;
