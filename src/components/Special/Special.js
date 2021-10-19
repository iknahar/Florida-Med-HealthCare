import React from 'react';
import special from '../../asset/img/special.png'

const Special = () => {
    return (
      <div className="pb-5">
        <h2 className="text-center text-primary pt-5 ">Special Offering</h2>
        <hr className="text-center text-white w-75 mx-auto" />
        <div className="d-flex justify-content-evenly">
          <div>
            <img className="p-5" src={special} alt="" />
          </div>
          <div className="w-50">
            <h1>Covid 19 Vaccine</h1>
            <h2> Delivery Service</h2>
            <p className="pt-3">
              Safe and effective vaccines are a game-changing tool: but for the
              foreseeable future we must continue wearing masks, cleaning our
              hands, ensuring good ventilation indoors, physically distancing
              and avoiding crowds. Being vaccinated does not mean that we can
              throw caution to the wind and put ourselves and others at risk,
              particularly because research is still ongoing into how much
              vaccines protect not only against disease but also against
              infection and transmission. See WHO’s landscape of COVID-19
              vaccine candidates for the latest information on vaccines in
              clinical and pre-clinical development
            </p>
          </div>
        </div>
      </div>
    );
};

export default Special;