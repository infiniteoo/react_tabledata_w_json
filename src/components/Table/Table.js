import React, { Component } from "react"
import "Table.css"

class Table extends Component {
  constructor(props) {
    super(props)
    this.getKeys = this.getKeys.bind(this)
    this.getHeader = this.getHeader.bind(this)
  }

  getKeys = function() {
      return Object.keys(this.props.data[0])
  }

  getHeader = function() {
      const keys = this.getKeys()
      return keys.map((key) => {
          return <th key={key}></th>
      })
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>{this.getHeader()}</tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    );
  }
}

export default Table;
