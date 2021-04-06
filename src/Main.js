import "./Main.css";
import React from "react";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Ribbon from "./components/Ribbon";
import Line from "./components/Line.js";
import BreakLine from "./components/BreakLine.js";
import TableCampusExp from "./components/forAll/campusexp/Table";

function Main() {
  return (
    <div className="App">
      <header class="font-serif">
        <h1>oneForAll (One point for all resources and opportunities)</h1>
        {/* html tag ... <header>.. */}
      </header>
      <Ribbon />
      <Intro />
      <BreakLine />
      <Line />
      <h1 class="font-serif htag">
        Opportunities <strong>for everyone</strong>
      </h1>
      <BreakLine />
      <TableCampusExp />

      <Line />
      <Line />
      <h1 class="font-serif htag">
        Opportunities <strong>exclusively for women</strong>
      </h1>
      <BreakLine />

      <h1 class="font-serif htag">
        {" "}
        <strong>Resources</strong>
      </h1>

      {/* <Table />
      <Table />
      <Table /> */}
      <Footer />
    </div>
  );
}

export default Main;
