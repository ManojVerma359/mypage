import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Mobilimg from "../assets/images/mobileimg.png";

const Application = () => {
  return (
    <>
      <Container>
        <Row className="pt-5 d-flex align-items-center justify-content-center">
          <Col lg={5}>
            <img className="w-100" src={Mobilimg} alt="#id" />
          </Col>
          <Col lg={7}>
            <h2 className="fs-48 ff-join application">Application <span className=" fs-48 ff-join modern">Modernization</span></h2>
            <p className="pt-3 ff-poppins para2 text-center">AgileCube has 10 years of experience in consulting, to enable a continuous usage of past IT investments and support clients to avoid unnecessary project restarts and costs. AgileCube has 10 years of experience in consulting, to enable Modernizing or reengineering an application includes code assessment, preparation for cloud migration under a refreshed, up-to-date infrastructure and software environment, and application containerization for faster loading times.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Application;
