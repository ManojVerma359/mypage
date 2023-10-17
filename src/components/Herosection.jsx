import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Herosection = () => {
  return (
    <>
    <div className="boxes d-flex justify-content-center align-items-center">
      <Container>
        
        <Row>
          <Col xl={4}>
            <h2 className="fs-48 fw-bold what_text ff-join ">
              What{" "}
              <span className="fs-48 text-black fw-bold ff-join">we do?</span>
            </h2>
          </Col>
          <Col xl={8}>
            <p className="fs-15 para1 ff-poppins ">We believe in developing useful software instead of just fulfilling initial requirements. During the past 10 years, with an agile mindset, we have delivered 100+ different projects, ranging from startups to enterprises.</p>
          </Col>
        </Row>
 
      </Container>
      </div>
    </>
  );
};

export default Herosection;
