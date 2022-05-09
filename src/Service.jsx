import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import web from "../src/images/logo.png";
import Sdata from "./Demo/Sdata";
import Card from "./Components/Card";

const Service = (props) => {
  return (
    <>
      <div className="text-center text-primary text-capitalize my-3">
        <h1>Our Services</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, ind) => {
                return <Card imgsrc={val.imgsrc} title={val.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
