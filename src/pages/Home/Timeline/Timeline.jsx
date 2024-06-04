import { Component } from "react";

import { motion } from "framer-motion";

import Timecard from "./Timecard/Timecard";

export default class Timeline extends Component {
  constructor() {
    super();
    this.timecard_info = [
      {
        year: 2006,
        title: "Date Of Birth",
        details: "Read more..."
      },
      {
        year: 2007,
        title: "I am testing",
        details: "This is some rough few data so that I can test this program"
      },
      {
        year: 2008,
        title: "I am typing in javascript and this text my overflow but who cares right?",
        details: "Whatever happens happens because it follows rule of gravity... aparantly"
      },
      {
        year: 2009,
        title: "I was born",
        details: "This was the day I was born into the word and blah blah blah"
      },
      {
        year: 2010,
        title: "I was born",
        details: "This was the day I was born into the word and blah blah blah"
      },
    ]
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
                [...this.timecard_info].map((item, index) =>
                  <Timecard key={index} year={item.year} title={item.title} details={item.details} align={index} totalData={this.timecard_info.length - 1} />
                )
              }
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
}
