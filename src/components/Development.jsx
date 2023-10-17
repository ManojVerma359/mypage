import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Laptopimg from "../assets/images/laptopimg.png";


const Development = () => {
  return (
    <>
      <Container>
        <Row className="pt-5 d-flex align-items-center justify-content-center">
          <Col lg={5}>
            <img className="w-100" src={Laptopimg} alt="#id" />

          </Col>
          <Col lg={7} className='pb-4 pb-lg-2'>
            <h2 className="fs-48 ff-join  modern">Application <span className=" fs-48 ff-join application">Development</span></h2>
            <p className="pt-3 ff-poppins para2 text-center">Invent, build, integrate, scale, and upgrade your applications with AgileCube! For more than a decade, we have been harnessing digital technologies for the benefit of Fortune 500 businesses, mid and large enterprises, and startups across a variety of industries.</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Development