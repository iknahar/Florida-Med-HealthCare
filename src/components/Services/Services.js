import React from "react";
import "./Services.css";
import useServices from "../../hooks/useServices.js";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const {services} = useServices();
  return (
    <div >
      <Container className="py-5">

          <h2 className="text-center mb-3 mt-0">Our Services</h2>
        <Row>
          {services?.map((service) => (
            <Service service={service} key={service.id}></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
