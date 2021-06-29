import React, { Component } from "react";
import { Alert, Row, Col, Container, Button, Form } from "react-bootstrap";
import ChangePasswordStyle from "./ChangePasswordStyle.module.css";
import Image1 from "../../../../assets/img/left-column-image.jpg";
import ImageLogo1 from "../../../../assets/img/peword-white-logo.png";
import ImageLogo2 from "../../../../assets/img/peword-purple-logo.png";
import { ResetPassword } from "../../../../redux/action/auth"
import { connect } from "react-redux";

class ChangePasswordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: "",
        otp: "",
        newPassword: "",
      },
      msg: "",
      alert: false
    }
  }

  changeText = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    })
  }

  handleReset = (event) => {
    if (this.state.form.newPassword === this.state.form.confirmPassword) {
      event.preventDefault()
      this.props.ResetPassword({
        email: this.state.form.email,
        otp: this.state.form.otp,
        newPassword: this.state.form.newPassword
      })
      .then((res) => {
        this.setState({
          msg: res.action.payload.data.msg,
          alert: true
         })
        setTimeout(() => {
          this.setState({
            alert: false
          })
          localStorage.clear()
          window.location.href = "/"
        }, 3000)
      })
      .catch((err) => {
        this.setState({
          msg: err.response.data.msg,
          alert: true,
        })
        setTimeout(() => {
          this.setState({
            alert: false
          })
        }, 3000)
      })
    } else {
      event.preventDefault()
      this.setState({
        msg: "Please input the same password with the confirmation field",
        alert: true
      })
      setTimeout(() => {
        this.setState({
          alert: false
        })
      }, 9000)
    }
  }

  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col lg={7} className={ChangePasswordStyle.left_background}>
              <img
                src={Image1}
                className={ChangePasswordStyle.image_background}
                alt="job bridge background"
              />
              <img
                src={ImageLogo1}
                className={ChangePasswordStyle.job_bridge_brand}
                alt="job bridge brand"
              />
              <div>
                <h1 className={ChangePasswordStyle.job_bridge_brand_word}>
                  Temukan developer berbakat dan terbaik di berbagai bidang
                  keahlian
                </h1>
              </div>
            </Col>
            <Col
              lg={4}
              className={`${ChangePasswordStyle.right_column} mt-5 pt-5`}
            >
              <img
                src={ImageLogo2}
                alt="peword logo"
                className={`${ChangePasswordStyle.job_bridge_brand_2} mb-5`}
              />
              <h2>Reset Password</h2>
              <p className="mt-3">
                Harap isi semua detail yang dibutuhkan untuk mengganti
                password anda.
              </p>

                {this.state.alert
                  ? (<Alert variant="warning" dismissible>
                      {this.state.msg}
                    </Alert>)
                  : ("")
                }
              {/* {this.state.form.isError
                ? (<Alert 
                    variant="warning"
                    dismissible>
                    <Alert.Heading>
                      {"..."}
                    </Alert.Heading>
                    <Alert.Body>
                      {"error"}
                    </Alert.Body>
                  </Alert>)
                : ("")
              } */}

              <Form className="mt-5"
                onSubmit={this.handleReset}
              >
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Masukkan email anda"
                    required
                    onChange={(event) => {
                      this.changeText(event)
                    }}
                  />
                </Form.Group>
                
                <Form.Group>
                  <Form.Label>OTP</Form.Label>
                  <Form.Control
                    type="number"
                    name="otp"
                    placeholder="4 digit angka yang kami kirim ke email anda"
                    onChange={(event) => {
                      this.changeText(event)
                    }}

                  />
                </Form.Group>
                
                <Form.Group className="mt-4">
                  <Form.Label>Kata sandi baru</Form.Label>
                  <Form.Control
                    type="password"
                    name="newPassword"
                    placeholder="Masukkan kata sandi baru"
                    onChange={(event) => {
                      this.changeText(event)
                    }}
                  />
                </Form.Group>

                <Form.Group className="mt-4">
                  <Form.Label>Konfirmasi kata sandi</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    placeholder="Masukkan konfirmasi kata sandi"
                    onChange={(event) => {
                      this.changeText(event)
                    }}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  className={`${ChangePasswordStyle.reset_password_button} mt-4`}
                >
                  Reset password
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = { ResetPassword }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePasswordPage);