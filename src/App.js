import "./App.css";
import React, { Component } from "react";
import tableData from "./user_data.json";
import Table from "./components/Table/Table.js";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { tableData };
  }

  render() {
    return (
      <>
        
        <Table data={this.state.tableData} />
      </>
    );
  }
}

export default App;
