import React, { Component } from "react";
import "./Table.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";


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

  render() {
    return (
      <div>
        <h1>Sortable Data Table w/React.js</h1>
        <DropdownButton
          id="dropdown-item-button"
          title={this.state.dropDownValue}
          className="format"
        >
          <Dropdown.Item as="button"><div onClick={(e) => this.changeValue(e.target.textContent)}>Name</div></Dropdown.Item>
          <Dropdown.Item as="button"><div onClick={(e) => this.changeValue(e.target.textContent)}>Age</div></Dropdown.Item>
          <Dropdown.Item as="button"><div onClick={(e) => this.changeValue(e.target.textContent)}>Gender</div></Dropdown.Item>
          <Dropdown.Item as="button"><div onClick={(e) => this.changeValue(e.target.textContent)}>Company</div></Dropdown.Item>
          <Dropdown.Item as="button"><div onClick={(e) => this.changeValue(e.target.textContent)}>Email</div></Dropdown.Item>
          <Dropdown.Item as="button"><div onClick={(e) => this.changeValue(e.target.textContent)}>Phone</div></Dropdown.Item>
          <Dropdown.Item as="button"><div onClick={(e) => this.changeValue(e.target.textContent)}>City</div></Dropdown.Item>
          <Dropdown.Item as="button"><div onClick={(e) => this.changeValue(e.target.textContent)}>State</div></Dropdown.Item>
          <Dropdown.Item as="button"><div onClick={(e) => this.changeValue(e.target.textContent)}>Zipcode</div></Dropdown.Item>

          
        </DropdownButton>

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
