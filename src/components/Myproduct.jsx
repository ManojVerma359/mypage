import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Phoneimg from "../assets/images/phnimge.png";

const Myproduct = () => {
  return (
    <>
      <Container>
        <Row className="pt-5 d-flex align-items-center justify-content-center reverse">
          <Col lg={7}>
            <h2 className="fs-48 ff-join  modern">

Product{" "}
              <span className=" fs-48 ff-join application">Development</span>
            </h2>
            <p className="pt-3 ff-poppins para2 ">
            The company’s agile, comprehensive, and future-proof product engineering services are providing support for both fresh startups, from the initial idea to post-delivery upgrades, and mature companies in need of product development.
            </p>
          </Col>
          <Col lg={5}>
            <img className="w-100 " src={Phoneimg} alt="#id" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Myproduct;
