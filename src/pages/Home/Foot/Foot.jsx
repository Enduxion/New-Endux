import { Component } from "react";
import Button from "../../../components/Button/Button";

import { motion } from "framer-motion";

export default class Foot extends Component {
    constructor(props) {
        super(props);
        this.socialMediaNames = ["facebook", "instagram", "youtube", "github", "linkedin-in", "chess-pawn", "reddit", "envelope"];
    }
    render() {
        return (
            <div className="flex w-full flex-col items-center my-8">
                <span className="flex w-full items-center justify-center custom-secondary-text text-5xl font-extrabold tracking-widest font-roboto">
                    Want to know more?
                </span>
                <motion.div
                    className="w-full flex flex-row gap-20 justify-center mt-10 mb-4 h-16"
                    initial={{
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <Button href="/about" decor={1} className="w-1/6 uppercase tracking-widest text-lg text-white">
                        About
                    </Button>
                    <span className="h-full flex items-center justify-center text-4xl text-white">
                        -
                    </span>
                    <Button href="/contact" decor={1} className="w-1/6 uppercase tracking-widest text-lg text-white">Contact Me</Button>
                </motion.div>
                <div className="px-4 flex flex-row justify-evenly w-full mt-8">
                    {/* Social Media link */}
                    {this.socialMediaNames.map((item, index) => (
                        <motion.div
                            className="social-icons hover:bg-white mouse-interact w-16"
                            key={index}
                            initial={{
                                opacity: 0
                            }}
                            whileInView={{
                                opacity: 1
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                        >
                            <i className={`fa-${item === "chess-pawn" || item === "envelope" ? "solid" : "brands"} fa-${item} text-white text-2xl`}></i>
                        </motion.div>
                    ))}
                </div>
            </div>
        );
    }
}
