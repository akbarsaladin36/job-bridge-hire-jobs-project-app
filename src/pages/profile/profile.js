import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import NavBar from "../../components/navbar/navbar";
import myStyle from "./profile.module.css";
import LouisProfilePicture from "../../components/img/louis_circle.png";
import Footer from "../../components/footer/footer";
// import MobileFooter from "../../components/mobilefooter/mobilefooter";

class ProfilePage extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div style={{ minHeight: "90rem" }}>
          <div className={myStyle.purpleArea}>
            <Container>
              <Row className="py-4 d-flex justify-content-between">
                <Col
                  lg={3}
                  md={3}
                  sm={3}
                  xs={3}
                  className={`${myStyle.noPadding}`}
                >
                  <div className={`${myStyle.whiteColumn} mb-2`}>
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
                        Vestibulum erat orci, mollis nec gravida sed, ornare
                        quis urna. Curabitur eu lacus fringilla, vestibulum
                        risus at.
                      </p>
                    </Row>
                  </div>
                  <button
                    type="button"
                    className={`${myStyle.hireButton} w-100 mt-2`}
                  >
                    Simpan
                  </button>
                  <button
                    type="submit"
                    className={`${myStyle.hireButtonOutline} w-100 mt-2`}
                  >
                    Batal
                  </button>
                </Col>
                <Col
                  lg={8}
                  md={8}
                  sm={8}
                  xs={8}
                  className={`${myStyle.whiteColumn} ${myStyle.noPadding}`}
                >
                  <div className={`${myStyle.myBottomBorder} w-100`}>
                    <h3 className="px-4 pt-3 pb-2">Data Diri</h3>
                  </div>
                  <form className="px-4 pt-3 pb-4">
                    <div class="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        <span className={`${myStyle.grayText}`}>
                          Nama Perusahaan
                        </span>
                      </label>
                      <input
                        type="text"
                        class={`${myStyle.formHeight} form-control`}
                        aria-describedby="namaPerusahaan"
                        placeholder="Masukkan nama perusahaan"
                      ></input>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        <span className={`${myStyle.grayText}`}>Bidang</span>
                      </label>
                      <input
                        type="text"
                        class={`${myStyle.formHeight} form-control`}
                        aria-describedby="bidang"
                        placeholder="Masukkan bidang perusahaan ex : Financial"
                      ></input>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">
                        <span className={`${myStyle.grayText}`}>Domisili</span>
                      </label>
                      <input
                        type="text"
                        class={`${myStyle.formHeight} form-control`}
                        id="exampleDomisili"
                        placeholder="Masukkan Domisili"
                      ></input>
                    </div>
                    <div class="mb-3">
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                      >
                        <span className={`${myStyle.grayText}`}>
                          Deskripsi singkat
                        </span>
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Masukkan deskripsi singkat"
                      ></textarea>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        <span className={`${myStyle.grayText}`}>Email</span>
                      </label>
                      <input
                        type="text"
                        class={`${myStyle.formHeight} form-control`}
                        aria-describedby="namaPerusahaan"
                        placeholder="Masukkan email"
                      ></input>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        <span className={`${myStyle.grayText}`}>Instagram</span>
                      </label>
                      <input
                        type="text"
                        class={`${myStyle.formHeight} form-control`}
                        aria-describedby="namaPerusahaan"
                        placeholder="Masukkan Username IG"
                      ></input>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        <span className={`${myStyle.grayText}`}>
                          Nomor Telepon
                        </span>
                      </label>
                      <input
                        type="text"
                        class={`${myStyle.formHeight} form-control`}
                        aria-describedby="namaPerusahaan"
                        placeholder="Masukkan nomor telepon"
                      ></input>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        <span className={`${myStyle.grayText}`}>LinkedIn</span>
                      </label>
                      <input
                        type="text"
                        class={`${myStyle.formHeight} form-control`}
                        aria-describedby="namaPerusahaan"
                        placeholder="Masukkan nama Linkedin"
                      ></input>
                    </div>
                  </form>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default ProfilePage;
