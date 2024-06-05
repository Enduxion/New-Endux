import { Component } from "react";

import { motion } from "framer-motion";

export default class Specard extends Component {
    constructor(props) {
        super(props);

        this.color = `rgb(${255 - Math.floor(this.props.proficient * 255)},${Math.floor(this.props.proficient * 255)},0)`;

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.handleClick(this.props.index);
    }

    render() {
        return (
            <motion.div
                className={`mouse-interact w-full p-4 flex flex-col border-2 bg-black border-primary rounded-md shadow-[inset_0_0_5px_#00ffee,0_0_5px_#00ffee] justify-between`}
                onClick={this.handleClick}
                initial={{
                    translateX: "-100%",
                    opacity: 0
                }}
                whileHover={{
                    boxShadow: "inset 0 0 10px #00ffee, 0 0 10px #00ffee",
                    scale: 1.03
                }}
                whileInView={{
                    translateX: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1,
                    delay: (this.props.index % 3) * 0.1,
                    scale: {
                        duration: 0.2
                    },
                    boxShadow: {
                        duration: 0.2
                    }
                }}
                viewport={{ once: true }}
            >
                {/* Div containing title and tools used */}
                <div>
                    <span className="text-[16px] font-extrabold text-white tracking-widest uppercase truncate">{this.props.title}</span>
                    <span className="text-[12px] font-bold text-white tracking-widest uppercase truncate flex flex-col">
                        {
                            this.props.tools.map((item, index) =>
                                <span className="text-slate-300" key={index}>{item}</span>
                            )
                        }
                    </span>
                </div>
                {/* Span containing bar graph */}
                <span className="w-full my-2 flex self-center flex-col ">
                    <motion.span
                        className="rounded-full indent-1 text-[12px] font-bold text-white tracking-widest uppercase min-h-4 px-2 py-1 truncate"
                        initial={{
                            width: 0,
                            border: `2px solid #f00`,
                            background: `#f00`,
                        }}
                        whileInView={{
                            width: `${100 * this.props.proficient}%`,
                            border: `2px solid ${this.color}`,
                            background: `${this.color}`,
                        }}
                        whileHover={{
                            boxShadow: `0 0 15px ${this.color}`
                        }}
                        transition={{
                            duration: 1.5,
                            ease: "backOut",
                            delay: (((this.props.index % 3) + 0.5) * 0.1),
                            boxShadow: {
                                duration: 0.1
                            }
                        }}
                    >{this.props.proficient * 100}% Proficiency </motion.span>
                </span>
            </motion.div>
        );
    }
}