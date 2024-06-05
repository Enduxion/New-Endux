import { Component } from "react";

import "./style.css";

import Lander from "./Lander/Lander";
import Timeline from "./Timeline/Timeline";
import Speciality from "./Speciality/Speciality";
export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setCurrent("home");
  }

  render() {
    return (
      <>
        <Lander />
        <Speciality />
        <Timeline />
      </>
    );
  }
}
