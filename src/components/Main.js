import React, { Component } from "react";
import EmployeeTable from "./EmployeeTable";

// code for the <main> element of the page, which will contain the employee table
class Main extends Component {
  render() {
    return (
      <main className="container">
        <EmployeeTable></EmployeeTable>
      </main>
    );
  }
}

// export the component
export default Main;
