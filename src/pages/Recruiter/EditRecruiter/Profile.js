import React, { Component } from "react";
import { connect } from "react-redux";
import { updateRecruiter } from "../../../redux/action/recruiter";
import { logout } from "../../../redux/action/auth";
import { Container, Row, Col, Image } from "react-bootstrap";
import NavBar from "../../../components/Navbar/Navbar";
import myStyle from "./Profile.module.css";
// import MobileFooter from "../../components/mobilefooter/mobilefooter";
import Footer from "../../../components/Footer/Footer";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: this.props.auth.data.company_name,
      field: this.props.auth.data.company_field,
      city: this.props.auth.data.company_city,
      description: this.props.auth.data.company_desc,
      companyEmail: this.props.auth.data.company_email,
      instagram: this.props.auth.data.company_instagram,
      phoneNumber: this.props.auth.data.company_phone_number,
      linkedin: this.props.auth.data.company_linkedin,
      companyImage: `${process.env.REACT_APP_IMAGE_URL}${this.props.auth.data.company_image}`,
      image: null,
    };
  }

  changeText = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  updateData = () => {
    // console.log(this.state);
    const id = this.props.auth.data.id_company;
    const formData = new FormData();
    for (const key in this.state) {
      key !== "companyImage"
        ? formData.append(key, this.state[key])
        : console.log("");
    }
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    this.props
      .updateRecruiter(id, formData)
      .then((res) => {
        console.log("RES UPDATE", res);
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {
        this.setState({
          isShow: true,
        });
        alert("Succes Update Data, Please Re-login !");
        setTimeout(() => {
          // log out here
          this.props.logout();
          this.props.history.push("/auth/recruiter/login");
        }, 2000);
      });
  };

  handleImage = (event) => {
    // console.log(event.target.files[0]);
    this.setState({
      companyImage: URL.createObjectURL(event.target.files[0]),
      image: event.target.files[0],
    });
  };

  clearData = () => {
    this.setState({
      companyName: this.props.auth.data.company_name,
      field: this.props.auth.data.company_field,
      city: this.props.auth.data.company_city,
      description: this.props.auth.data.company_desc,
      companyEmail: this.props.auth.data.company_email,
      instagram: this.props.auth.data.company_instagram,
      phoneNumber: this.props.auth.data.company_phone_number,
      linkedin: this.props.auth.data.company_linkedin,
      companyImage: this.props.auth.data.company_image,
    });
  };

  render() {
    console.log("PROPS", this.props);
    // console.log(this.state);
    const {
      companyName,
      field,
      city,
      description,
      companyEmail,
      instagram,
      phoneNumber,
      linkedin,
      companyImage,
    } = this.state;

    return (
      <>
        <NavBar />
        <div style={{ minHeight: "90rem" }} className={myStyle.fullArea}>
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
                      <Image
                        src={companyImage}
                        className="p-3"
                        alt="NONE"
                        roundedCircle
                        fluid
                      />
                      <div className="custom-file mb-3 ml-2 mr-2">
                        <input
                          type="file"
                          className="custom-file-input"
                          onChange={(event) => this.handleImage(event)}
                        ></input>
                        <label className="custom-file-label">
                          Change Photos...
                        </label>
                      </div>
                    </Row>
                    <h5 className={`${myStyle.fontBold} px-4 mb-1`}>
                      {companyName}
                    </h5>
                    <span className={`d-block px-4 mb-1`}>{field}</span>
                    <span className={`${myStyle.grayText} d-block px-4`}>
                      {city}
                    </span>
                    <Row className="w-100 mx-auto px-4 mt-4">
                      <p className={`${myStyle.grayText}`}>{description}</p>
                    </Row>
                  </div>
                  <button
                    type="button"
                    className={`${myStyle.hireButton} w-100 mt-2`}
                    onClick={() => this.updateData()}
                  >
                    Simpan
                  </button>
                  <button
                    type="button`"
                    className={`${myStyle.hireButtonOutline} w-100 mt-2`}
                    onClick={() => this.clearData()}
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
                    <h3 className={`px-4 pt-3 pb-2`}>Data Diri</h3>
                  </div>
                  <form className="px-4 pt-3 pb-4">
                    <div className="mb-3">
                      <label className="form-label">
                        <span className={`${myStyle.grayText}`}>
                          Nama Perusahaan
                        </span>
                      </label>
                      <input
                        type="text"
                        className={`${myStyle.formHeight} form-control`}
                        aria-describedby="namaPerusahaan"
                        placeholder="Masukkan nama perusahaan"
                        name="companyName"
                        value={companyName}
                        onChange={(event) => this.changeText(event)}
                      ></input>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        <span className={`${myStyle.grayText}`}>Bidang</span>
                      </label>
                      <input
                        type="text"
                        className={`${myStyle.formHeight} form-control`}
                        aria-describedby="bidang"
                        placeholder="Masukkan bidang perusahaan ex : Financial"
                        name="field"
                        value={field}
                        onChange={(event) => this.changeText(event)}
                      ></input>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">
                        <span className={`${myStyle.grayText}`}>Domisili</span>
                      </label>
                      <input
                        type="text"
                        className={`${myStyle.formHeight} form-control`}
                        id="exampleDomisili"
                        placeholder="Masukkan Domisili"
                        name="city"
                        value={city}
                        onChange={(event) => this.changeText(event)}
                      ></input>
                    </div>
                    <div className="mb-3">
                      <label
                        for="exampleFormControlTextarea1"
                        className="form-label"
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
                        name="description"
                        value={description}
                        onChange={(event) => this.changeText(event)}
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        <span className={`${myStyle.grayText}`}>Email</span>
                      </label>
                      <input
                        type="text"
                        className={`${myStyle.formHeight} form-control`}
                        aria-describedby="namaPerusahaan"
                        placeholder="Masukkan email"
                        name="companyEmail"
                        value={companyEmail}
                        onChange={(event) => this.changeText(event)}
                      ></input>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        <span className={`${myStyle.grayText}`}>Instagram</span>
                      </label>
                      <input
                        type="text"
                        className={`${myStyle.formHeight} form-control`}
                        aria-describedby="namaPerusahaan"
                        placeholder="Masukkan Username IG"
                        name="instagram"
                        value={instagram}
                        onChange={(event) => this.changeText(event)}
                      ></input>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        <span className={`${myStyle.grayText}`}>
                          Nomor Telepon
                        </span>
                      </label>
                      <input
                        type="text"
                        className={`${myStyle.formHeight} form-control`}
                        aria-describedby="namaPerusahaan"
                        placeholder="Masukkan nomor telepon"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={(event) => this.changeText(event)}
                      ></input>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        <span className={`${myStyle.grayText}`}>LinkedIn</span>
                      </label>
                      <input
                        type="text"
                        className={`${myStyle.formHeight} form-control`}
                        aria-describedby="namaPerusahaan"
                        placeholder="Masukkan nama Linkedin"
                        name="linkedin"
                        value={linkedin}
                        onChange={(event) => this.changeText(event)}
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = { updateRecruiter, logout };

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
