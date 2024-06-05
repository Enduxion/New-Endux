import { Component } from "react";
import { Link } from "react-router-dom";

export default class Button extends Component {
  constructor(props) {
    super(props);
    if (this.props.decor === 0) {
      this.classNames = `bg-primary w-fit hover:shadow-[0_0_25px_#00ffee,0_0_25px_#00ffee] text-black font-bold py-2 px-4 rounded-md ${this.props.className} transition flex items-center justify-center mouse-interact`;
    } else if (this.props.decor === 1) {
      this.classNames = `bg-black w-fit hover:shadow-[0_0_25px_#00ffee,0_0_25px_#00ffee] text-primary border-2 border-primary font-bold py-2 px-4 rounded-md ${this.props.className} transition flex items-center justify-center mouse-interact`;
    }
  }
  render() {
    return (
      <Link to={this.props.href} className={this.classNames} onClick={this.props.onClick ? this.props.onClick : null}>
        {this.props.children}
      </Link>
    );
  }
}
