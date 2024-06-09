import { Component } from "react";
import { motion } from "framer-motion";

import Specard from "./Specard/Specard";
import SpecialityData from "../../../assets/data/Speciality";
import ExSpecard from "./ExSpecard/ExSpecard";

export default class Speciality extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleCrossClick = this.handleCrossClick.bind(this);

        this.state = {
            dataToShow: -1,
        }

    }

    handleClick(index) {
        this.setState({ dataToShow: index });
    }

    handleCrossClick(e) {
        this.setState({ dataToShow: -1 });
    }

    render() {
        var sp_data = SpecialityData[this.state.dataToShow];
        return (
            <>
                <div className="flex flex-col items-center p-4 border-b-2 border-primary pb-8">
                    <motion.span className="flex w-full mt-4 mb-8 justify-center custom-secondary-text font-roboto text-3xl font-extrabold"
                        initial={{
                            opacity: 0,
                            scale: 0
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Speciality
                    </motion.span>
                    <div className="grid grid-cols-3 gap-6 w-full">
                        {
                            SpecialityData.map((item, index) =>
                                <Specard key={index} handleClick={this.handleClick} title={item.title} index={index} details={item.details} tools={item.tools} proficient={item.proficient} />
                            )
                        }
                    </div>
                </div>
                {this.state.dataToShow !== -1 && <ExSpecard handleCrossClick={this.handleCrossClick} title={sp_data.title} details={sp_data.details} tools={sp_data.tools} proficient={sp_data.proficient} />}
            </>
        );
    }
}