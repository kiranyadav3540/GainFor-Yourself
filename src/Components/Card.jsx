import React from "react";
import { NavLink } from "react-router-dom";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import { NavLink } from "react-router-dom";
import web from "./images/logo.png";

const Card = () => {
  return (
    <>
      <div className="col-mb-4 col-10 mx-auto">
        <div className="card">
          <img className="card-img-top" src={web} alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

// <div className="col-sm">
//   <div className="card">
//     <img className="card-img-top" src={web} alt="Card image cap" />
//     <div className="card-body">
//       <h5 className="card-title">Card title</h5>
//       <p className="card-text">
//         Some quick example text to build on the card title and make up the bulk
//         of the card's content.
//       </p>
//       <a href="#" className="btn btn-primary">
//         Go somewhere
//       </a>
//     </div>
//   </div>
// </div>;
