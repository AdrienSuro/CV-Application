import React from "react";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

class Identity extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="identity">
        <h2>Identity</h2>
        <label for="firstName">First Name : </label>
        <input
          type="text"
          id="firstName"
          placeholder={this.props.firstName}
        ></input>
        <FontAwesomeIcon icon={solid("plus")} onClick="{() => " />
        <FontAwesomeIcon icon={solid("pen-to-square")} />
        <label for="lastName">Last Name : </label>
        <input type="text" id="lastName"></input>
        <FontAwesomeIcon icon={solid("plus")} />
        <FontAwesomeIcon icon={solid("pen-to-square")} />
        {/* <i id="add" class="fa-solid fa-user" onClick={add}></i> */}
      </div>
    );
  }
}

export default Identity;
