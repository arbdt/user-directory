import React, { Component } from "react";
import DataArea from "./DataArea";
import "../styles/Main.css";

// code for the <main> element of the page, which will contain the employee table
class Main extends Component {
  render() {
    return (
      <main className="container">
        <DataArea />
      </main>
    );
  }
}

export default Main;
