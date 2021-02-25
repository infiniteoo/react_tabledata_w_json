import React, { Component } from "react"
import "Table.css"

class Table extends Component {
  constructor(props) {
    super(props)
    this.getKeys = this.getKeys.bind(this)
    this.getHeader = this.getHeader.bind(this)
    this.getRows = this.getRows.bind(this)
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

  getRows = function() {
      const items = this.props.data
      const keys = this.getKeys()

      return items.map((row, index) => {
        return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
      })

  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>{this.getHeader()}</tr>
          </thead>
          <tbody>
              {this.getRows()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
