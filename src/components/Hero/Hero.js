import React from "react";
import { Link } from "react-router-dom";
import Bg from "../../asset/img/bgt-1.jpg";

const Hero = () => {
  return (
    <div
      className="d-flex align-items-center"
      style={{
        background: `url(${Bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="heroText w-50">
        <h1 className=" fw-bold ps-5 text-secondary">
          Get convenience for your health facilities.
        </h1>
        <p className="ps-5 pt-5">
          A fit body and a calm mind and a house full of love, these things can
          not be bought by money. They must me earned to live a happy life.
          Check on your health status. Health Emergencies will be just a click
          away.
        </p>
        <div className="pb-5">
          <Link className="btnHero ms-5" to="/about">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
