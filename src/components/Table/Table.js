import React, { Component } from "react";
import "Table.css";

class Table extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr></tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    );
  }
}

export default Table;
