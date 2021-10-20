import React from "react";
import { Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, description, img } = service;

  return (
    <Col sm={12} md={6} lg={4}>
      <div className="m-2">
        <Card className="mx-auto card-body" style={{ width: "21rem" }}>
          <Card.Img variant="top" className="img-fluid" src={img} />
            <Card.Title className="text-dark">{name}</Card.Title>
            <Card.Text className="description">{description}</Card.Text>
            <NavLink to={`/services/${id}`} className="btnSvc me-1 mb-3">
              View Details
            </NavLink>
          </Card>
      </div>
    </Col>
  );
};

export default Service;
