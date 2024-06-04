import { Component } from "react";

export default class Cursor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mousePos: { x: 2 * window.innerWidth, y: 2 * window.innerHeight },
      width: "2rem",
      blur: "4px",
      isHover: false
    };
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.doHoverEffect = this.doHoverEffect.bind(this);
    this.resetHoverEffect = this.resetHoverEffect.bind(this);
    this.doClickEffect = this.doClickEffect.bind(this);
    this.resetClickEffect = this.resetClickEffect.bind(this);
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
      blur: 0,
      isHover: true
    });
  }

  doClickEffect(e) {
    this.setState({
      width: "4rem",
      blur: 0,
    });
  }

  resetClickEffect(e) {
    if (!this.state.isHover) {
      this.setState({
        width: "2rem",
        blur: "4px",
      });
    }
  }

  resetHoverEffect(e) {
    this.setState({
      width: "2rem",
      blur: "4px",
      isHover: false
    });
  }

  componentDidMount() {
    window.addEventListener("mousemove", this.handleMouseMove);
    window.addEventListener("mousedown", this.doClickEffect);
    window.addEventListener("mouseup", this.resetClickEffect);

    var elementsWithMouseInteraction =
      document.querySelectorAll(".mouse-interact");
    elementsWithMouseInteraction.forEach((e) => {
      e.addEventListener("mouseover", this.doHoverEffect);
      e.addEventListener("mouseout", this.resetHoverEffect);
    });
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
    window.removeEventListener("mousedown", this.doClickEffect);
    window.removeEventListener("mouseup", this.resetClickEffect);

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
        className="aspect-square fixed w-16 flex items-center shadow-[inset_0_0_9px_#00ffee,0_0_9px_#00ffee] justify-center border-2 border-primary rounded-full overflow-hidden pointer-events-none z-40 backdrop-saturate-0"
        style={{
          transition: "0.1s width",
          width: this.state.width,
          top: this.state.mousePos.y,
          left: this.state.mousePos.x,
          transform: "translate(-50%, -50%)",
          backdropFilter: `blur(${this.state.blur})`,
        }}
      >
        {!this.state.isHover && <div className="bg-primary w-1 h-1 rounded-full"></div>}
      </div>
    );
  }
}
