import { AnimatePresence, motion } from "framer-motion";
import { Component } from "react";
import Button from "../../../../components/Button/Button";

export default class ExSpecard extends Component {
    constructor(props) {
        super(props);

        this.color = `rgb(${255 - Math.floor(this.props.proficient * 255)},${Math.floor(this.props.proficient * 255)},0)`;
    }
    render() {
        return (
            <AnimatePresence>
                <motion.div
                    className="fixed top-0 left-0 bg-[rgba(0,0,0,0.8)] w-screen h-screen z-[35] flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="w-4/5 h-4/5 bg-black border-2 border-primary rounded-2xl p-4 flex flex-col"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <span className="text-3xl custom-primary-text w-full text-center font-extrabold">{this.props.title}</span>
                        <div className="w-4/5 h-1 self-center bg-primary my-4 rounded-lg shadow-[0_0_5px_#00ffee]"></div>
                        <div className="mt-4 flex flex-row gap-10">
                            <div className="w-3/4 flex flex-col">
                                <span className="flex flex-col mb-4">
                                    <span className="custom-secondary-text text-lg">
                                        Tools used:
                                    </span>
                                    {
                                        this.props.tools.map((item, index) =>
                                            <span className="text-slate-300 indent-1 font-bold tracking-widest uppercase truncate" key={index}>{index + 1}. {item}</span>
                                        )
                                    }
                                </span>
                                <span className="uppercase flex w-full tracking-wider text-justify">
                                    {this.props.details}
                                </span>
                            </div>
                            <motion.div
                                className="relative overflow-hidden rounded-full w-1/4 aspect-square flex items-center justify-center text-2xl font-bold"
                                initial={{ boxShadow: "0 0 5px #f00" }}
                                animate={{ boxShadow: "0 0 25px " + this.color }}
                                exit={{ boxShadow: "0 0 5px #f00" }}
                                transition={{ duration: 2, delay: 1 }}
                            >
                                <span className="custom-primary-text z-10">{this.props.proficient * 100}%</span>
                                <motion.div
                                    style={{
                                        position: "absolute",
                                        bottom: 0,
                                        background: this.color,
                                        display: "flex",
                                        width: "200%",
                                        height: this.props.proficient * 100 + "%",
                                    }}
                                    initial={{
                                        height: 0,
                                        backgroundColor: "#f00"
                                    }}
                                    animate={{
                                        height: `${this.props.proficient * 100}%`,
                                        backgroundColor: this.color
                                    }}
                                    exit={{
                                        height: 0,
                                        color: "red"
                                    }}
                                    transition={{
                                        duration: 2,
                                        delay: 1
                                    }}
                                />
                            </motion.div>
                        </div>
                        <Button decor={0} className="self-center mt-auto" onClick={this.props.handleCrossClick}>Okay</Button>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        )
    }
}