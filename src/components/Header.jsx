import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Header() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="header overflow-hidde ">
      <Container>
        <Slider {...settings}>
          
            <div className="min-vh-100 d-flex align-items-center justify-content-center">
              <div className="text-center ">
                <h1 className="heading fs-96 ff-join">
                  Et dictumst <span className="heading1 fs-96 ff-join">diam</span>
                </h1>
                <span className="heading1 fs-96 ff-join"> pharetra</span>{" "}
                <span className="heading fs-96 ff-join">volutpat.</span>
                <p className="text-white para pt-4">
                  <span className="d-block fs-22 ff-poppins">
                    {" "}
                    Dolor lacus nisl at elementum, aliquet ac. Consectetur
                    viverra ornare vel morbi{" "}
                  </span>{" "}
                  <span className="d-block fs-22 ff-poppins">
                    {" "}
                    ut in tincidunt viverra. Aenean feugiat malesuada nunc
                    aliquet vitae, commodo,
                  </span>{" "}
                  pellentesque laoreet amet.
                </p>
                <button className="text-white get_btn ff-robot mt-2 mt-md-4">GET STARTED</button>
              </div>
            </div>
            <div className="min-vh-100 d-flex align-items-center justify-content-center">
              <div className="text-center ">
                <h1 className="heading fs-96 ff-join">
                  Et dictumst <span className="heading1 fs-96 ff-join">diam</span>
                </h1>
                <span className="heading1 fs-96 ff-join"> pharetra</span>{" "}
                <span className="heading fs-96 ff-join">volutpat.</span>
                <p className="text-white para pt-4 fs-22">
                  <span className="d-block fs-22 ff-poppins">
                    {" "}
                    Dolor lacus nisl at elementum, aliquet ac. Consectetur
                    viverra ornare vel morbi{" "}
                  </span>{" "}
                  <span className="d-block fs-22 ff-poppins">
                    {" "}
                    ut in tincidunt viverra. Aenean feugiat malesuada nunc
                    aliquet vitae, commodo,
                  </span>{" "}
                  pellentesque laoreet amet.
                </p>
                <button className="text-white get_btn ff-robot mt-2 mt-md-4">GET STARTED</button>
              </div>
            </div>
            <div className="min-vh-100 d-flex align-items-center justify-content-center">
              <div className="text-center ">
                <h1 className="heading fs-96 ff-join">
                  Et dictumst <span className="heading1 fs-96 ff-join">diam</span>
                </h1>
                <span className="heading1 fs-96 ff-join"> pharetra</span>{" "}
                <span className="heading fs-96 ff-join">volutpat.</span>
                <p className="text-white para pt-4">
                  <span className="d-block fs-22 ff-poppins">
                    {" "}
                    Dolor lacus nisl at elementum, aliquet ac. Consectetur
                    viverra ornare vel morbi{" "}
                  </span>{" "}
                  <span className="d-block fs-22 ff-poppins">
                    {" "}
                    ut in tincidunt viverra. Aenean feugiat malesuada nunc
                    aliquet vitae, commodo,
                  </span>{" "}
                  pellentesque laoreet amet.
                </p>
                <button className="text-white get_btn ff-robot mt-2 mt-md-4">GET STARTED</button>
              </div>
            </div>
            <div className="min-vh-100 d-flex align-items-center justify-content-center">
              <div className="text-center ">
                <h1 className="heading fs-96 ff-join">
                  Et dictumst <span className="heading1 fs-96 ff-join">diam</span>
                </h1>
                <span className="heading1 fs-96 ff-join"> pharetra</span>{" "}
                <span className="heading fs-96 ff-join">volutpat.</span>
                <p className="text-white para pt-4">
                  <span className="d-block fs-22 ff-poppins">
                    {" "}
                    Dolor lacus nisl at elementum, aliquet ac. Consectetur
                    viverra ornare vel morbi{" "}
                  </span>{" "}
                  <span className="d-block fs-22 ff-poppins">
                    {" "}
                    ut in tincidunt viverra. Aenean feugiat malesuada nunc
                    aliquet vitae, commodo,
                  </span>{" "}
                  pellentesque laoreet amet.
                </p>
                <button className="text-white get_btn ff-robot mt-2 mt-md-4">GET STARTED</button>
              </div>
            </div>
         
       
          
        </Slider>
        </Container>
      </div>
    </>
  );
}

export default Header;
