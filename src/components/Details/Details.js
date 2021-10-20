import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import './Details.css'

const Details = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const history = useHistory();

  useEffect(() => {
    const url = `https://api.npoint.io/4831fa32d5b8b0084261/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const handleClick = () => {
    history.push("/services");
  };

  return (
    <Container className="mx-auto p-5">
      <h1 className=" text-primary pb-3">Test Name: {service.name}</h1>
      <hr className=" mb-5" />
      <img className="singleimage" src={service.img} alt="" />
      <p className=" pt-5">{service.description}</p>
      <button className="btnHero" onClick={handleClick}>
        See All Services
      </button>
    </Container>
  );
};

export default Details;
