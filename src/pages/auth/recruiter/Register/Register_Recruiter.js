import React, { Component } from "react";
import { Row, Col, Form, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import RegisterRecruiterStyle from "./RegisterRecruiterStyle.module.css";
import { connect } from "react-redux";
import Image1 from "../../../../assets/img/left-column-image.jpg";
import ImageLogo1 from "../../../../assets/img/peword-white-logo.png";
import ImageLogo2 from "../../../../assets/img/peword-purple-logo.png";
import { RegisterPerekrut } from "../../../../redux/action/auth";

class RegisterRecruiterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        fullnameRepresentationCompany: "",
        emailRepresentationCompany: "",
        companyName: "",
        companyField: "",
        companyPhoneNumber: "",
        passwordCompany: "",
        confirmPasswordCompany: "",
      },
    };
  }

  changeText = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  registerRecruiter = (event) => {
    event.preventDefault();
    // console.log(this.props);
    const { passwordCompany, confirmPasswordCompany } = this.state.form;
    if (passwordCompany !== confirmPasswordCompany) {
      alert("Passwords don't match.");
    } else {
      // console.log(this.props);
      this.props.RegisterPerekrut({
        fullnameRepresentationCompany:
          this.state.form.fullnameRepresentationCompany,
        emailRepresentationCompany: this.state.form.emailRepresentationCompany,
        companyName: this.state.form.companyName,
        companyField: this.state.form.companyField,
        companyPhoneNumber: this.state.form.companyPhoneNumber,
        passwordCompany: confirmPasswordCompany,
      });
      alert("Register Worker sudah sukses. Silakan cek email anda.");
    }
  };
  //   event.preventDefault();
  //   console.log(this.state.form);
  //   this.props.RegisterPerekrut(this.state.form).then((result) => {
  //     console.log(result);
  //   });
  // };

  render() {
    const {
      fullnameRepresentationCompany,
      emailRepresentationCompany,
      companyName,
      companyField,
      companyPhoneNumber,
      passwordCompany,
      confirmPasswordCompany,
    } = this.state.form;
    return (
      <>
        <Container fluid>
          <Row>
            <Col lg={7} className={RegisterRecruiterStyle.left_background}>
              <img
                src={Image1}
                className={RegisterRecruiterStyle.image_background}
                alt="job bridge background"
              />
              <img
                src={ImageLogo1}
                className={RegisterRecruiterStyle.job_bridge_brand}
                alt="job bridge brand"
              />
              <div>
                <h1 className={RegisterRecruiterStyle.job_bridge_brand_word}>
                  Temukan developer berbakat dan terbaik di berbagai bidang
                  keahlian
                </h1>
              </div>
            </Col>
            <Col
              lg={4}
              className={`${RegisterRecruiterStyle.right_column} mt-5 pt-5`}
            >
              <img
                src={ImageLogo2}
                alt="peword logo"
                className={`${RegisterRecruiterStyle.job_bridge_brand_2} mb-5`}
              />
              <h2>Halo Pewpeople</h2>
              <p className="mt-3">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor
              </p>
              <Form onSubmit={this.registerRecruiter} className="mt-5">
                <Form.Group>
                  <Form.Label>Nama</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullnameRepresentationCompany"
                    value={fullnameRepresentationCompany}
                    placeholder="Masukkan nama"
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="emailRepresentationCompany"
                    value={emailRepresentationCompany}
                    placeholder="Masukkan alamat email"
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Perusahaan</Form.Label>
                  <Form.Control
                    type="text"
                    name="companyName"
                    value={companyName}
                    placeholder="Masukkan nama perusahaan"
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Bidang Perusahaan</Form.Label>
                  <Form.Control
                    type="text"
                    name="companyField"
                    value={companyField}
                    placeholder="Bidang perusahaan anda"
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>No handphone</Form.Label>
                  <Form.Control
                    type="text"
                    name="companyPhoneNumber"
                    value={companyPhoneNumber}
                    placeholder="Masukkan no handphone"
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Kata Sandi</Form.Label>
                  <Form.Control
                    type="password"
                    name="passwordCompany"
                    value={passwordCompany}
                    placeholder="Masukkan kata sandi"
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Konfirmasi kata sandi</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPasswordCompany"
                    value={confirmPasswordCompany}
                    placeholder="Masukkan konfirmasi kata sandi"
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Button
                  className={`${RegisterRecruiterStyle.register_button} mt-4`}
                  type="submit"
                >
                  Daftar
                </Button>
              </Form>
              <p className="text-center mt-3">
                Anda sudah punya akun?{" "}
                <Link
                  to="/auth/recruiter/login"
                  className={RegisterRecruiterStyle.masuk_disini_word}
                >
                  Masuk disini
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = { RegisterPerekrut };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterRecruiterPage);
