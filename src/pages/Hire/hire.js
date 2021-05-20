import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import NavBar from "../../components/Navbar/Navbar";
import myStyle from "./Hire.module.css";
import LouisProfilePicture from "../../components/img/louis_circle.png";
import Footer from "../../components/Footer/Footer";
// import MobileFooter from "../../components/mobilefooter/mobilefooter";

class hire extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div style={{ minHeight: "90rem" }}>
          <Container>
            <Row className="py-4 d-flex justify-content-between">
              <Col
                lg={3}
                md={3}
                sm={3}
                xs={3}
                className={`${myStyle.noPadding}`}
              >
                <div className={`${myStyle.whiteColumn} mb-2  `}>
                  <Row className={`w-100 mx-auto`}>
                    <img
                      src={LouisProfilePicture}
                      className="img-fluid mx-auto my-4"
                      alt=""
                    ></img>
                  </Row>
                  <h5 className={`${myStyle.fontBold} px-4 mb-1`}>
                    PT. Martabat Jaya Abadi
                  </h5>
                  <span className={`d-block px-4 mb-1`}>Financial</span>
                  <span className={`${myStyle.grayText} d-block px-4`}>
                    Purworejo, Jawa Tengah
                  </span>
                  <Row className="w-100 mx-auto px-4 mt-4">
                    <p className={`${myStyle.grayText}`}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum erat orci, mollis nec gravida sed, ornare quis
                      urna. Curabitur eu lacus fringilla, vestibulum risus at.
                    </p>
                  </Row>
                  <Row className="w-100 mx-auto px-4 mt-4">
                    <h3 className={`${myStyle.fontBold}`}>Skill</h3>
                  </Row>
                  <Row className="w-100 mx-auto px-4 mt-4 pb-3">
                    <button
                      type="button"
                      className={`${myStyle.orangeButtonSkill} ${myStyle.buttonSkillSpacing}`}
                    >
                      <span className="px-2">Python</span>
                    </button>
                    <button
                      type="button"
                      className={`${myStyle.orangeButtonSkill} ${myStyle.buttonSkillSpacing}`}
                    >
                      <span className="px-2">Laravel</span>
                    </button>
                    <button
                      type="button"
                      className={`${myStyle.orangeButtonSkill} ${myStyle.buttonSkillSpacing}`}
                    >
                      <span className="px-2">Golang</span>
                    </button>
                    <button
                      type="button"
                      className={`${myStyle.orangeButtonSkill} ${myStyle.buttonSkillSpacing}`}
                    >
                      <span className="px-2">JavaScript</span>
                    </button>
                    <button
                      type="button"
                      className={`${myStyle.orangeButtonSkill} ${myStyle.buttonSkillSpacing}`}
                    >
                      <span className="px-2">PHP</span>
                    </button>
                    <button
                      type="button"
                      className={`${myStyle.orangeButtonSkill} ${myStyle.buttonSkillSpacing}`}
                    >
                      <span className="px-2">HTML</span>
                    </button>
                    <button
                      type="button"
                      className={`${myStyle.orangeButtonSkill} ${myStyle.buttonSkillSpacing}`}
                    >
                      <span className="px-2">C++</span>
                    </button>
                    <button
                      type="button"
                      className={`${myStyle.orangeButtonSkill} ${myStyle.buttonSkillSpacing}`}
                    >
                      <span className="px-3">Kotlin</span>
                    </button>
                    <button
                      type="button"
                      className={`${myStyle.orangeButtonSkill}`}
                    >
                      <span className="px-3">Swift</span>
                    </button>
                  </Row>
                </div>
              </Col>
              <Col
                lg={8}
                md={8}
                sm={8}
                xs={8}
                className={` ${myStyle.noPadding}`}
              >
                <div className={`w-100`}>
                  <h2 className={`px-4 pt-3 pb-2 ${myStyle.fontBold}`}>
                    Hubungi Louis Tomlinson
                  </h2>
                </div>
                <div className={`px-4 w-100`}>
                  <p className={myStyle.fontBold}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    euismod ipsum et dui rhoncus auctor.
                  </p>
                </div>
                <form className="pt-5 pb-4 pt-3 pb-4">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class={`form-label`}>
                      <span className={`${myStyle.grayText}`}>
                        Tujuan tentang pesan in
                      </span>
                    </label>
                    <select
                      class={`${myStyle.formHeight} form-select form-control`}
                      aria-label="Default select example"
                    >
                      <option selected>Project</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label>
                      <span className={`${myStyle.grayText}`}>Pesan</span>
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="6"
                      placeholder="Masukkan deskripsi singkat"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className={`${myStyle.kirimButton} px-4 mt-4 w-100`}
                  >
                    Kirim
                  </button>
                </form>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </>
    );
  }
}

export default hire;
