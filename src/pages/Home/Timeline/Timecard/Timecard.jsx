import { Component } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default class Timecard extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            isClicked: true,
            direction: this.props.align % 2 === 0 ? "top" : "bottom",
        };

    }

    handleClick = () => {
        this.setState({ isClicked: !this.state.isClicked });
    }

    render() {
        return (
            <motion.div
                className="absolute rounded-full bg-black border-2 border-primary shadow-[0_0_25px_#00ffee] w-12 h-12 flex items-center justify-center mouse-interact"
                style={{
                    translateY: "-50%",
                }}
                whileHover={{ boxShadow: "0 0 25px #00ffee, 0 0 25px #00ffee" }}
                initial={{
                    left: 0,
                    scale: 0,
                    opacity: 0,
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                whileInView={{
                    scale: 1,
                    left: `${this.props.align * (100 / this.props.totalData)}%`,
                    translateX: "-50%",
                    opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                    duration: 1,
                    delay: 0.5 + (0.2 * this.props.align),
                    boxShadow: { 
                        duration: 0.2,
                        delay: 0
                    }
                }}
                onMouseUp={this.handleClick}
            >
                <AnimatePresence>
                    {
                        this.state.isClicked &&
                        <motion.div className="bg-black w-64 absolute border-2 text-[12px] rounded-md border-primary shadow-[0_0_25px_#00ffee] px-2 py-4 flex flex-col"
                            whileHover={{ boxShadow: "0 0 25px #00ffee, 0 0 25px #00ffee" }}
                            initial={{
                                [this.state.direction]: 0,
                                opacity: 0,
                                scale: 0
                            }}
                            animate={{
                                [this.state.direction]: "calc(-110% - 28px)",
                                opacity: 1,
                                scale: [0, 1.2, 1]
                            }}
                            drag
                            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                            exit={{
                                [this.state.direction]: 0,
                                opacity: 0,
                                scale: 0
                            }}
                        >
                            <span className="truncate custom-primary-text font-extrabold mb-1">{this.props.title}</span>
                            <span className="truncate custom-primary-text text-slate-200">{this.props.details}</span>
                        </motion.div>
                    }
                </AnimatePresence>
                {this.props.year}
            </motion.div>
        );
    }
}