import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";



class DropDownFilter extends Component {

    constructor(props){
        super(props)
        this.state = { data: props.data, dropDownValue: "Filter Table Data" };
    }


    changeValue(text) {
        this.setState({ dropDownValue: text });
      }
      
  render() {
    return (
      <DropdownButton
        id="dropdown-item-button"
        title={this.state.dropDownValue}
        className="format"
        variant="secondary"
      >
        <Dropdown.Item as="button">
          <div onClick={(e) => this.changeValue(e.target.textContent)}>
            Name
          </div>
        </Dropdown.Item>
        <Dropdown.Item as="button">
          <div onClick={(e) => this.changeValue(e.target.textContent)}>Age</div>
        </Dropdown.Item>
        <Dropdown.Item as="button">
          <div onClick={(e) => this.changeValue(e.target.textContent)}>
            Gender
          </div>
        </Dropdown.Item>
        <Dropdown.Item as="button">
          <div onClick={(e) => this.changeValue(e.target.textContent)}>
            Company
          </div>
        </Dropdown.Item>
        <Dropdown.Item as="button">
          <div onClick={(e) => this.changeValue(e.target.textContent)}>
            Email
          </div>
        </Dropdown.Item>
        <Dropdown.Item as="button">
          <div onClick={(e) => this.changeValue(e.target.textContent)}>
            Phone
          </div>
        </Dropdown.Item>
        <Dropdown.Item as="button">
          <div onClick={(e) => this.changeValue(e.target.textContent)}>
            City
          </div>
        </Dropdown.Item>
        <Dropdown.Item as="button">
          <div onClick={(e) => this.changeValue(e.target.textContent)}>
            State
          </div>
        </Dropdown.Item>
        <Dropdown.Item as="button">
          <div onClick={(e) => this.changeValue(e.target.textContent)}>
            Zipcode
          </div>
        </Dropdown.Item>
      </DropdownButton>
    );
  }
}

export default DropDownFilter;
