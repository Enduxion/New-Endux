import { Typewriter } from "react-simple-typewriter";
import { Component } from "react";

import Button from "../../../components/Button/Button";
import introImage from "../../../assets/image/1Edit.jpg";

import { motion } from "framer-motion";

export default class Lander extends Component {
  constructor() {
    super();
    this.socialMediaNames = ["facebook", "instagram", "youtube", "github"];
  }
  render() {
    return (
      <motion.div
        initial={{ translateY: "100%" }}
        whileInView={{ translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full h-[calc(100vh-64px)] mt-16 flex bg-black flex-row items-center border-b-2 border-primary mb-4"
      >
        <div className="px-4 flex flex-col gap-10">
          {/* Social Media link */}
          {this.socialMediaNames.map((item, index) => (
            <div className="social-icons mouse-interact" key={index}>
              <i className={`fa-brands fa-${item} text-primary`}></i>
            </div>
          ))}
        </div>
        {/* Links and main part separator */}
        <div className="w-1 h-1/2 bg-primary"></div>
        {/* Main Part */}
        <div className="flex flex-col w-fit px-4 justify-center">
          <span className="font-extrabold text-4xl w-fit cursor-pointer mouse-interact">
            <span className="custom-primary-text font-roboto ">It's me, </span>
            <span className="custom-secondary-text font-roboto">
              Pawan Gurung.
            </span>
          </span>
          <span className="custom-primary-text text-lg indent-1 mb-4">
            I am a{" "}
            <span className="font-extrabold custom-secondary-text">
              <Typewriter
                words={["Game Developer.", "Fullstack Developer."]}
                loop={true}
                cursor={true}
                typeSpeed={200}
                deleteSpeed={100}
              />
            </span>
          </span>
          <span className="custom-primary-text text-xs pl-1 text-justify">
            Hi, I am Pawan Gurung a web enthusiast and a passionate learner. I
            have 6 years of experience in web development. Contact me for any
            queries.
          </span>
          {/* Button Part */}
          <div className="flex gap-5 mt-4 ml-1">
            <Button href="/cv.pdf" decor={0} className="w-fit">
              Curriculum Vitae
            </Button>
            <Button href="/contact" decor={1} className="w-fit">
              Contact Me
            </Button>
          </div>
        </div>
        {/* Image Part on the right */}
        <div className="flex-grow h-full flex items-center min-w-fit justify-end">
          <img
            src={introImage}
            alt="profile"
            className="mouse-interact w-2/5 aspect-square rounded-full shadow-[0_0_100px_#00ffee,0_0_50px_#00ffee] border-primary border-4 object-cover mr-16 hover:scale-105 transition duration-300 mouse-interact hover:shadow-[0_0_100px_#00ffee,0_0_100px_#00ffee]"
          />
        </div>
      </motion.div>
    );
  }
}
