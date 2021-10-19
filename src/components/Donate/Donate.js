import React from 'react';
import donate from '../../asset/img/donate.jpg'

const Donate = () => {

    return (
      <div className="pt-4 ps-5">
        <h2 className="text-center text-primary">Donate Us</h2>
        <hr className="text-center text-white w-75 mx-auto" />

        <div className="d-flex justify-content-around align-items-center">
          <div>
            <img src={donate} alt="" />
          </div>

          <div className="w-50 ps-5">
            <h2>Donate Us</h2>
            <p>
              Help us to stay with needy and helpless people. Share a part of
              your happiness to me.
            </p>
            <input
              type="number"
              className="p-2"
              id="number"
              min="1"
            />
            <br />
            <button
              className="btnHero mt-4"
              onClick={() => {
                alert("🪙 Thank you for your donation");
              }}
            >
              {" "}
              Donate Now
            </button>
          </div>
        </div>
      </div>
    );
};

export default Donate;