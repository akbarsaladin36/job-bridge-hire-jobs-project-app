import React, { Component } from "react";
import { connect } from "react-redux";
import { loginWorker } from "../../../../redux/action/auth";
import { getDataWorker } from "../../../../redux/action/worker";
import { Row, Col, Form, Button, Container, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginStyle from "./LoginStyle.module.css";
import Image1 from "../../../../assets/img/left-column-image.jpg";
import ImageLogo1 from "../../../../assets/img/peword-white-logo.png";
import ImageLogo2 from "../../../../assets/img/peword-purple-logo.png";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        userEmail: "",
        userPassword: "",
      },
      msg: "",
      id: "",
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

  handleLogin = (event) => {
    const { userEmail, userPassword } = this.state.form;
    this.props
      .loginWorker({
        emailWorker: userEmail,
        passwordWorker: userPassword,
      })
      .then((res) => {
        localStorage.setItem("token", this.props.auth.data.token);
        this.setState({
          msg: this.props.auth.msg,
        });
        this.props.getDataWorker(this.props.auth.data.id_worker);
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("ERROR RSP", err.response);
        this.setState({
          msg: err.response.data.msg,
        });
      });
  };

  render() {
    const { msg } = this.state;
    return (
      <>
        <Container fluid>
          <Row>
            <Col lg={7} className={LoginStyle.left_background}>
              <img
                src={Image1}
                className={LoginStyle.image_background}
                alt="job bridge background"
              />
              <img
                src={ImageLogo1}
                className={LoginStyle.job_bridge_brand}
                alt="job bridge brand"
              />
              <div>
                <h1 className={LoginStyle.job_bridge_brand_word}>
                  Temukan developer berbakat dan terbaik di berbagai bidang
                  keahlian
                </h1>
              </div>
            </Col>
            <Col lg={4} className={`${LoginStyle.right_column} mt-5 ml-3 pt-5`}>
              <img
                src={ImageLogo2}
                alt="peword logo"
                className={`${LoginStyle.job_bridge_brand_2} mb-5`}
              />
              <h2>Halo Pewpeople</h2>
              <p className="mt-3">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor
              </p>
              <Form className="mt-5">
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="userEmail"
                    placeholder="Masukkan email"
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Kata Sandi</Form.Label>
                  <Form.Control
                    type="password"
                    name="userPassword"
                    placeholder="Masukkan kata sandi"
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <p className="float-end mt-3">
                  Lupa kata sandi{" "}
                  <Link
                    to="reset-password"
                    className={LoginStyle.daftar_disini_word}
                  >
                    Reset disini
                  </Link>
                </p>

                {msg.length > 0 ? (
                  <Alert variant="warning" className="text-center">
                    {msg}
                  </Alert>
                ) : (
                  ""
                )}
                <Button
                  className={`${LoginStyle.sign_in_button} mt-2`}
                  onClick={() => this.handleLogin()}
                >
                  Masuk
                </Button>
              </Form>
              <p className="text-center mt-3">
                Anda belum punya akun?{" "}
                <Link
                  to="/auth/worker/register"
                  className={LoginStyle.daftar_disini_word}
                >
                  Daftar disini
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
  worker: state.worker,
});
const mapDispatchToProps = { loginWorker, getDataWorker };

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
