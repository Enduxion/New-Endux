import { Component } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import "./style.css";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: this.props.current,
    };
    this.linkNames = ["home", "about", "contact"];
  }
  // Since the current prop is passed in from the parent component,
  // we need to update the state if the prop changes
  componentDidUpdate(prevProps) {
    if (prevProps.current !== this.props.current) {
      this.setState({ current: this.props.current });
    }
  }
  // Dynamically generate the links based on the linkNames array
  // and the current state, so that we can apply styles based on the
  // current page
  generateLinks() {
    var links = this.linkNames.map((link) => {
      return (
        <Link
          name={link}
          to={link === "home" ? "/" : `/${link}`}
          key={link}
          className={
            this.state.current === link
              ? "custom-secondary-text decoration-primary underline-offset-4 mouse-interact"
              : "mouse-interact"
          }
        >
          {link}
        </Link>
      );
    });
    return links;
  }

  render() {
    var links = this.generateLinks();
    return (
      <motion.nav
      initial={{ opacity: 0, translateY: "-100%" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1 }}
      className="bg-transparent backdrop-hue-rotate-60 w-screen flex fixed h-16 top-0 left-0 z-10 flex-row p-4 backdrop-blur-sm shadow-[0_0_5px_#00ffee] items-center justify-between"
    >
      <div className="text-2xl font-extrabold">
        <span className="custom-primary-text">End</span>
        <span className="custom-secondary-text">ux</span>
      </div>
      <div className="nav-links flex flex-row gap-8 items-center uppercase">
        {links}
      </div>
    </motion.nav>
    );
  }
}
