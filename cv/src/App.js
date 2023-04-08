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
      firstName: "Lionel",
      lastName: "",
      email: "",
      phoneNumber: "",
    };
  }

  addInput(field) {
    let target = document.getElementById("field");
  }

  editInput(field) {}

  render() {
    return (
      <div className="app">
        <Identity firstName={this.state.firstName} />
        <Experience />
        <Studies />
        <Languages />
        <Certifications />
      </div>
    );
  }
}

export default App;
