import React, { Component } from "react";
import { Row, Col, Form, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerRecruiter } from "../../../../redux/action/auth";
import RegisterRecruiterStyle from "./RegisterRecruiterStyle.module.css";
import Image1 from "../../../../assets/img/left-column-image.jpg";
import ImageLogo1 from "../../../../assets/img/peword-white-logo.png";
import ImageLogo2 from "../../../../assets/img/peword-purple-logo.png";

class RegisterRecruiterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        recruiterName: "",
        recruiterEmail: "",
        passwordCompany: "",
        companyName: "",
        companyField: "",
        companyPhoneNumber: "",
      },
      hasError: false,
      hasSuccess: false,
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

  submitData = (event) => {
    event.preventDefault();
    const {
      recruiterName,
      recruiterEmail,
      passwordCompany,
      confirmPasswordCompany,
      companyName,
      companyField,
      companyPhoneNumber,
    } = this.state.form;
    if (
      recruiterName === "" &&
      recruiterEmail === "" &&
      companyName === "" &&
      companyField === "" &&
      companyPhoneNumber === "" &&
      passwordCompany === "" &&
      confirmPasswordCompany === ""
    ) {
      this.setState({
        ...this.state,
        hasError: "Isi keseluruhan data di bawah ini!",
      });
    } else if (recruiterName === "") {
      this.setState({
        ...this.state,
        hasError: "Fill the recruiter name form!",
      });
    } else if (recruiterEmail === "") {
      this.setState({
        ...this.state,
        hasError: "Fill the recruiter email form!",
      });
    } else if (companyName === "") {
      this.setState({
        ...this.state,
        hasError: "Fill the recruiter company name form!",
      });
    } else if (companyField === "") {
      this.setState({
        ...this.state,
        hasError: "Fill the recruiter company field form!",
      });
    } else if (companyPhoneNumber === "") {
      this.setState({
        ...this.state,
        hasError: "Fill the recruiter company phone number form!",
      });
    } else if (passwordCompany === "") {
      this.setState({
        ...this.state,
        hasError: "Fill the recruiter company password form!",
      });
    } else if (confirmPasswordCompany === "") {
      this.setState({
        ...this.state,
        hasError: "Fill the recruiter company confirmation password form!",
      });
    } else if (passwordCompany !== confirmPasswordCompany) {
      this.setState({
        ...this.state,
        hasError:
          "Your password is not match with confirmation password! Please try again.",
      });
    } else {
      // console.log(this.state.form);
      this.props
        .registerRecruiter({
          fullnameRepresentationCompany: recruiterName,
          emailRepresentationCompany: recruiterEmail,
          passwordCompany: confirmPasswordCompany,
          companyName: companyName,
          companyField: companyField,
          companyPhoneNumber: companyPhoneNumber,
        })
        .then((res) => {
          console.log(res);
          this.props.history.push("/auth/recruiter/login");
        })
        .catch((err) => {
          console.log(err);
          this.setState({
            hasError: err.response.data.msg,
          });
        });
    }
  };

  render() {
    const {
      recruiterName,
      recruiterEmail,
      passwordCompany,
      confirmPasswordCompany,
      companyName,
      companyField,
      companyPhoneNumber,
      hasError,
    } = this.state;
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
              <Form className="mt-5">
                <Form.Group>
                  <Form.Label>Nama</Form.Label>
                  <Form.Control
                    type="text"
                    name="recruiterName"
                    value={recruiterName}
                    placeholder="Masukkan nama"
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="recruiterEmail"
                    value={recruiterEmail}
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
                {hasError && (
                  <div className="alert alert-danger" role="alert">
                    {hasError}
                  </div>
                )}
                <Button
                  className={`${RegisterRecruiterStyle.register_button} mt-4`}
                  onClick={(event) => this.submitData(event)}
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
const mapDispatchToProps = { registerRecruiter };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterRecruiterPage);
