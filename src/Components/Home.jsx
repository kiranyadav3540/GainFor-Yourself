import React from "react";
import Comman from "./Comman";
import web from "./images/img3.png";
//import web1 from "../src/images/reactjs.png";
//import web from "../src/images/img3.png";

import "./home.css";

const Home = () => {
  return (
    <>
      <Comman
        name="Grow Your Skills"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
