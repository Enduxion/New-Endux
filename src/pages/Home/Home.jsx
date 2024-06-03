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
        <div className="flex w-full h-[2px] items-center justify-center my-2">
          <div className="flex w-4/5 h-full bg-primary "></div>
        </div>
        <Timeline />
      </>
    );
  }
}
