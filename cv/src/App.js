import React from "react";
import { Component } from "react";
import Identity from "./components/Identity";
import Experience from "./components/Experience";
import Studies from "./components/Studies";
import Certifications from "./components/Certifications";
import Languages from "./components/Languages";
import "./styles/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      identityComplete: false,
    };
    this.addInput = this.addInput.bind(this);
    this.editInput = this.editInput.bind(this);
  }

  addInput() {
    let firstNameField = document.getElementById("firstName");
    let lastNameField = document.getElementById("lastName");
    if (firstNameField.value === "" || lastNameField.value === "") {
      return;
    }
    this.setState({
      firstName: firstNameField.value,
      lastName: lastNameField.value,
      identityComplete: true,
    });
  }

  editInput() {
    this.setState({
      identityComplete: false,
    });
    console.log("hi, ready to create editInput content");
  }

  render() {
    return (
      <div className="app">
        <Identity
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          addInput={this.addInput}
          editInput={this.editInput}
          identityComplete={this.state.identityComplete}
        />
        <Experience />
        <Studies />
        <Languages />
        <Certifications />
      </div>
    );
  }
}

export default App;
