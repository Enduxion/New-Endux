import { Component } from "react";
import { motion } from "framer-motion";

import Timecard from "./Timecard/Timecard";

import HistoryData from "../../../assets/data/History";

export default class Timeline extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="w-full h-[calc(100vh/1.5)] flex flex-col items-center">
        <motion.span className="flex w-full justify-center custom-secondary-text text-3xl font-extrabold"
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
          History
        </motion.span>
        <div className="w-full flex grow items-center justify-center flex-col origin-left">
          <div className="w-4/5 flex">
            <motion.div className="w-full flex line h-1 flex-col rounded bg-primary shadow-[0_0_25px_#00ffee,0_0_25px_#00ffee] relative"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
            >
              {
                HistoryData.map((item, index) =>
                  <Timecard key={index} year={item.year} title={item.title} details={item.details} align={index} totalData={HistoryData.length - 1} />
                )
              }
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
}
