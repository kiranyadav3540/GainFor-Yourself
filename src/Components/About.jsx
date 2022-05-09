import React from "react";
import web from "./images/home.jpg";
//import web1 from "../src/images/reactjs.png";
//import web from "../src/images/img3.png";

import "./home.css";

import Comman from "./Comman";

const About1 = () => {
  return (
    <>
      <Comman
        name="Welcome to About Page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About1;
