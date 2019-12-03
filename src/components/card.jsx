import React, { Component } from "react";
import { Link } from "react-router-dom";

const Card = ({ title, desc, modalid, fulldesc, modalidnohash, technoImg }) => {

  return (
    <React.Fragment>
      <div className="card  h-100">
        <div className="card-body">
          {/* <img className="card-img-top mb-3" src={technoImg} alt="Card image cap" /> */}
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {desc}
          </p>
          <Link to="" className="btn btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </React.Fragment>
  );

};

export default Card;