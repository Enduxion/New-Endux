import { Component } from "react";

export default class Cursor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mousePos: { x: 2 * window.innerWidth , y: 2 * window.innerHeight },
      width: "2rem",
    };
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.doHoverEffect = this.doHoverEffect.bind(this);
    this.resetHoverEffect = this.resetHoverEffect.bind(this);
  }

  handleMouseMove(e) {
    this.setState({
      mousePos: {
        x: e.clientX,
        y: e.clientY,
      },
    });
  }

  doHoverEffect(e) {
    this.setState({
      width: "4rem",
    });
  }

  resetHoverEffect(e) {
    this.setState({
      width: "2rem",
    });
  }

  componentDidMount() {
    window.addEventListener("mousemove", this.handleMouseMove);
    window.addEventListener("mousedown", this.doHoverEffect);
    window.addEventListener("mouseup", this.resetHoverEffect);

    var elementsWithMouseInteraction =
      document.querySelectorAll(".mouse-interact");
    elementsWithMouseInteraction.forEach((e) => {
      e.addEventListener("mouseover", this.doHoverEffect);
      e.addEventListener("mouseout", this.resetHoverEffect);
    });
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
    window.removeEventListener("mousedown", this.doHoverEffect);
    window.removeEventListener("mouseup", this.resetHoverEffect);

    var elementsWithMouseInteraction =
      document.querySelectorAll(".mouse-interact");
    elementsWithMouseInteraction.forEach((e) => {
      e.removeEventListener("mouseout", this.resetHoverEffect);
      e.removeEventListener("mouseover", this.doHoverEffect);
    });
  }

  render() {
    return (
      <div id="main-cursor"
        className="aspect-square fixed w-16 flex items-center shadow-[inset_0_0_9px_#00ffee,0_0_9px_#00ffee] justify-center border-2 border-primary rounded-full overflow-hidden pointer-events-none z-40 backdrop-saturate-0 backdrop-blur-sm"
        style={{
          transition: "0.3s width",
          width: this.state.width,
          top: this.state.mousePos.y,
          left: this.state.mousePos.x,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="bg-primary w-1 h-1 rounded-full"></div>
      </div>
    );
  }
}
