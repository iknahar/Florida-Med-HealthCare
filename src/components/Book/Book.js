import React from "react";
import book from "../../asset/img/book3.jpg";
import './Book.css'

const Book = () => {
  return (
    <div className="pt-4 ps-5">
      <h2 className="text-center text-primary">Book An Appointment Now</h2>
      <hr className="text-center text-white w-75 mx-auto" />

      <div className="d-flex justify-content-around align-items-center">
        <div className="bookappointmentImage">
          <img src={book} alt="" />
        </div>

        <div className="w-50 ps-5 bookText">
          <h2>Book</h2>
          <h2>Appointment</h2>
          <p className="">
            We focused on providing high quality health service and customer
            satisfaction
          </p>
          <input type="datetime-local" id="datetime-local" />
          <br />
          <button
            className="btnHero mt-4"
            onClick={() => {
              alert("✔️ Successfully Booked An Appointment");
            }}
          >
            {" "}
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
