import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./data.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
const [services] = useServices();
  return (
    <div className="cardHolder">
      <h2 className="text-center text-primary">Our Services</h2>
      <hr className="text-center text-white w-75 mx-auto" />
      <div className="d-flex flex-wrap justify-content-around ">
        {services.map((service) => {
          return (
            <div className="my-4 cardbg" key={service.id}>
              <div className="cardStyle card">
                <div className="text-center">
                  <img src={service.img} className="card-img-top" alt="..." />
                </div>

                <div className="card-body mt-0 pt-0">
                  <h5 className="card-title text-primary mt-3">
                    {service.name}
                  </h5>
                  <p className="card-text description">{service.description}</p>
                  <Link to={`/details/${service.id}`} className="pt-2 btnSvc">
                    See Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
