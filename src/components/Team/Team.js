import React, { useEffect, useState } from "react";

const Team = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./team.JSON")
      .then((res) => res.json())
      .then((team) => setServices(team));
  }, []);

  return (
    <div className="cardHolder bg-light">
      <h2 className="text-center text-primary">Our Team</h2>
      <hr className="text-center text-white w-75 mx-auto" />
      <div className="d-flex flex-wrap justify-content-around ">
        {services.map((team) => {
          return (
            <div className="my-2" key={team.id}>
              <div className="cardStyle cardStyleTeam">
                <div className="text-center">
                  <img
                    src={team.img}
                    className="w-50 rounded-circle"
                    alt="..."
                  />
                </div>

                <div className="mt-0 pt-0">
                  <h5 className="card-title text-center text-primary pt-3">
                    {team.name}
                  </h5>
                  <p className="card-text text-center description">
                    {team.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
