import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StatsCounter from "../components/StatsCounter";
import Footer from "../components/Footer";
import Datatable from "../components/Datatable";

function Home() {
  return (
    <div>
      <h3 align="center">COVID-19 LIVE STATS</h3> <br></br>
      <StatsCounter></StatsCounter>
      <hr></hr>
      <Datatable />
      <Footer />
    </div>
  );
}

export default Home;
