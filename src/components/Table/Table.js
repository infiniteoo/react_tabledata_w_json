import React, { Component } from "react"
import "Table.css"

class Table extends Component {
  constructor(props) {
    super(props)
    this.getKeys = this.getKeys.bind(this)
  }

  getKeys = function() {
      return Object.keys(this.props.data[0])
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
