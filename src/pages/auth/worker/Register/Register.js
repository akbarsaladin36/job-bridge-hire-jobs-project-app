import React, { Component } from "react";
import { Row, Col, Form, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import RegisterStyle from "./RegisterStyle.module.css";
import ImageLogo1 from "../../../../assets/img/peword-white-logo.png";
import ImageLogo2 from "../../../../assets/img/peword-purple-logo.png";
import { registerWorker } from "../../../../redux/action/auth";

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        fullnameWorker: "",
        emailWorker: "",
        phoneNumberWorker: "",
        passwordWorker: "",
        confirmPasswordWorker: "",
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

  resetData = () => {
    this.setState({
      form: {
        ...this.state.form,
      },
    });
  };

  submitData = (event) => {
    event.preventDefault();
    // console.log(this.props);
    const {
      fullnameWorker,
      emailWorker,
      phoneNumberWorker,
      passwordWorker,
      confirmPasswordWorker,
    } = this.state.form;
    if (
      fullnameWorker === "" &&
      emailWorker === "" &&
      phoneNumberWorker === "" &&
      passwordWorker === "" &&
      confirmPasswordWorker === ""
    ) {
      this.setState({
        hasError: "Fill all the form to register!",
      });
    } else if (fullnameWorker === "") {
      this.setState({
        hasError: "Fill the full name form!",
      });
    } else if (emailWorker === "") {
      this.setState({
        hasError: "Fill the email form!",
      });
    } else if (phoneNumberWorker === "") {
      this.setState({
        hasError: "Fill the phone number form!",
      });
    } else if (passwordWorker === "") {
      this.setState({
        hasError: "Fill the password form!",
      });
    } else if (confirmPasswordWorker === "") {
      this.setState({
        hasError: "Fill the confirmation password form!",
      });
    } else if (passwordWorker !== confirmPasswordWorker) {
      this.setState({
        hasError:
          "Your password is not match with confirmation password! Please try again.",
      });
    } else {
      // console.log(this.props);
      this.props
        .registerWorker({
          fullnameWorker: fullnameWorker,
          emailWorker: emailWorker,
          phoneNumberWorker: phoneNumberWorker,
          passwordWorker: confirmPasswordWorker,
        })
        .then((res) => {
          this.setState({
            hasSuccess: res.action.payload.data.msg,
            hasError: false,
          });
          window.setTimeout(() => {
            this.props.history.push("/auth/worker/login");
          }, 3000);
        })
        .catch((err) => {
          console.log(err.response);
          this.setState({
            hasError: err.response.data.msg,
          });
        });
    }
  };

  render() {
    const {
      fullnameWorker,
      emailWorker,
      phoneNumberWorker,
      passwordWorker,
      confirmPasswordWorker,
      hasError,
      hasSuccess,
    } = this.state;
    return (
      <>
        <Container fluid>
          <Row>
            <Col lg={7} className={RegisterStyle.left_background}>
              <img
                src={ImageLogo1}
                className={RegisterStyle.job_bridge_brand}
                alt="job bridge brand"
              />
              <div>
                <h1 className={RegisterStyle.job_bridge_brand_word}>
                  Temukan developer berbakat dan terbaik di berbagai bidang
                  keahlian
                </h1>
              </div>
            </Col>
            <Col
              lg={4}
              className={`${RegisterStyle.right_column} mt-5 pt-5 ml-3`}
            >
              <img
                src={ImageLogo2}
                alt="peword logo"
                className={`${RegisterStyle.job_bridge_brand_2} mb-5`}
              />
              <h2>Halo Pewpeople</h2>
              <p className="mt-3">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor
              </p>
              <Form className="mt-5 ml-3">
                <Form.Group>
                  <Form.Label>Nama</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullnameWorker"
                    placeholder="Masukkan nama"
                    value={fullnameWorker}
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="emailWorker"
                    placeholder="Masukkan alamat email"
                    value={emailWorker}
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>No handphone</Form.Label>
                  <Form.Control
                    type="text"
                    name="phoneNumberWorker"
                    placeholder="Masukkan no handphone"
                    value={phoneNumberWorker}
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Kata Sandi</Form.Label>
                  <Form.Control
                    type="password"
                    name="passwordWorker"
                    placeholder="Masukkan kata sandi"
                    value={passwordWorker}
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Konfirmasi kata sandi</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPasswordWorker"
                    placeholder="Masukkan konfirmasi kata sandi"
                    value={confirmPasswordWorker}
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                {hasError && (
                  <div className="alert alert-danger" role="alert">
                    {hasError}
                  </div>
                )}
                {hasSuccess && (
                  <div className="alert alert-success" role="alert">
                    {hasSuccess}
                  </div>
                )}
                <Button
                  className={`${RegisterStyle.register_button} mt-4`}
                  onClick={(event) => this.submitData(event)}
                >
                  Daftar
                </Button>
              </Form>
              <p className="text-center mt-3">
                Anda sudah punya akun?{" "}
                <Link
                  to="/auth/worker/login"
                  className={RegisterStyle.masuk_disini_word}
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

const mapDispatchToProps = { registerWorker };

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
