import React from "react";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

class Identity extends Component {
  constructor() {
    super();
  }

  render() {
    if (this.props.identityComplete === false) {
      return (
        <div className="identity">
          <h2>Identity</h2>
          <label htmlFor="firstName">First Name : </label>
          <input
            type="text"
            id="firstName"
            placeholder={this.props.firstName}
          ></input>
          <label htmlFor="lastName">Last Name : </label>
          <input
            type="text"
            id="lastName"
            placeholder={this.props.lastName}
          ></input>
          <FontAwesomeIcon
            icon={solid("plus")}
            id="addIcon"
            onClick={this.props.addInput}
          />
        </div>
      );
    } else if (this.props.identityComplete === true) {
      return (
        <div className="identity">
          <h2>Identity</h2>
          <label htmlFor="firstName">First Name : </label>
          <p>{this.props.firstName}</p>
          <label htmlFor="lastName">Last Name : </label>
          <p>{this.props.lastName}</p>
          <FontAwesomeIcon
            icon={solid("pen-to-square")}
            id="editIcon"
            onClick={this.props.editInput}
          />
        </div>
      );
    }
  }
}

export default Identity;
