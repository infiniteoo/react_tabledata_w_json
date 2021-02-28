import React, { Component } from "react";
import "./Table.css";
import DropDownFilter from "../DropDownFilter/DropDownFilter.js";
import SearchForm from "../SearchForm/SearchForm.js";

class Table extends Component {
  constructor(props) {
    super(props);
    this.getKeys = this.getKeys.bind(this);
    this.getHeader = this.getHeader.bind(this);
    this.getRows = this.getRows.bind(this);
    this.onSort = this.onSort.bind(this);
    this.state = { data: props.data, dropDownValue: "Filter Table Data" };
  }

  changeValue(text) {
    this.setState({ dropDownValue: text });
  }

  onSort(event, sortKey) {
    console.log("onsort method touched!", sortKey);

    const data = this.state.data;
    data.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));

    console.log(data);
    this.setState({ data });
  }

  getKeys = function () {
    return Object.keys(this.props.data[0]);
  };

  getHeader = function () {
    const keys = this.getKeys();
    return keys.map((key) => {
      return (
        <th onClick={(e) => this.onSort(e, key)} key={key}>
          {key.toUpperCase()}
        </th>
      );
    });
  };

  getRows = function () {
    const items = this.state.data;
    const keys = this.getKeys();

    return items.map((row, index) => {
      return (
        <tr key={index}>
          <RenderRow key={index} data={row} keys={keys} />
        </tr>
      );
    });
  };
  handleInputChange = (event) => {
    var results = [];
    var toSearch = event.target.value;
    for (var i = 0; i < this.props.data.length; i++) {
      for (const key in this.props.data[i]) {
        if (this.props.data[i][key].indexOf(toSearch) !== -1) {
          results.push(this.props.data[i]);
        }
      }
    }

    let uniqueArray = [...new Set(results)]

    this.setState({
      data: uniqueArray,
    });
    /* this.getRows(); */
  };

  render() {
    return (
      <div>
        <h1 id="h1-title">Sortable Data Table w/React.js</h1>
        <div className="row">
          <div className="col-md-2">
            <DropDownFilter />
          </div>
          <div className="col-md-10">
            <SearchForm handleInputChange={this.handleInputChange} />
          </div>
        </div>

        <hr />
        <table className="tbl-content">
          <thead>
            <tr>{this.getHeader()}</tr>
          </thead>
          <tbody>{this.getRows()}</tbody>
        </table>
      </div>
    );
  }
}

const RenderRow = (props) => {
  return props.keys.map((key) => {
    return <td key={props.data[key]}>{props.data[key]}</td>;
  });
};

export default Table;
