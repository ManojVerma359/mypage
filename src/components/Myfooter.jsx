import React from "react";
import { Container } from "react-bootstrap";
import footerlogo from "../assets/images/footerlogo.png";
import mail from "../assets/images/mailimg.png";
import call from "../assets/images/callimg.png";
import location from "../assets/images/locationimg.png";

const Myfooter = () => {
  return (
    <>
      <div className="bg_clr">
        <Container>
          <div className="pt-5 pb-4  d-flex align-items-center justify-content-between flex-wrap">
            <div>
              <img className="cursr" src={footerlogo} alt="#id" />
              <p className="fs-16 ff-poppins dolor pt-2 ">
                Dolor lacus nisl at elementum, aliquet ac.<span className="fs-16 ff-poppins dolor d-block"> Consectetur viverra
                ornare vel morbi ut in </span> tincidunt viverra.
              </p>
            </div>
            <div className=" pt-3 pt-md-5 ">
              <div className="d-flex align-items-center gap-1">
                <img className="cursr" src={mail} alt="#id" />
                <p className="fs-16 ff-poppins dolor">termnl@gmail.com</p>
              </div>
              <div className="d-flex align-items-center pt-1 gap-1">
                <img className="cursr" src={call} alt="#id" />
                <p className="fs-16 ff-poppins dolor">1234567890</p>
              </div>
              <div className="d-flex align-items-center pt-1 gap-1">
                <img className="cursr" src={location} alt="#id" />
                <p className="fs-16 ff-poppins dolor">
                  Ultrices condimentum non, ac
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Myfooter;
