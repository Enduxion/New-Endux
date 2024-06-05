import { Component } from "react";

import "./style.css";

import Lander from "./Lander/Lander";
import Timeline from "./Timeline/Timeline";
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
        <Timeline />
      </>
    );
  }
}
