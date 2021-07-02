import React, { Component } from "react";
import { Alert, Row, Col, Container, Button, Form } from "react-bootstrap";
import ResetPasswordStyle from "./ResetPasswordStyle.module.css";
import Image1 from "../../../../assets/img/left-column-image.jpg";
import ImageLogo1 from "../../../../assets/img/peword-white-logo.png";
import ImageLogo2 from "../../../../assets/img/peword-purple-logo.png";
import { connect } from "react-redux"
import { RequestReset } from "../../../../redux/action/auth"

class ResetPasswordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: ""
      },
      alert: false,
      msg: "",
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

  handleRequest = (event) => {
    event.preventDefault()
    this.props.RequestReset({
      email: this.state.form.email
    })
    .then((res) => {
      console.log(res)
      this.setState({
        msg: res.action.payload.data.msg,
        alert: true
      })
      setTimeout(() => {
        this.setState({
          alert: false
        })
        this.props.history.push("/auth/change-password")  
      }, 3000)
    })
    .catch((err) => {
      this.setState({
        msg: err.response.data.msg,
        alert: true
      })
      setTimeout(() => {
        this.setState({
          alert: false
        })
      }, 3000)
    })
  }

  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col lg={7} className={ResetPasswordStyle.left_background}>
              <img
                src={Image1}
                className={ResetPasswordStyle.image_background}
                alt="job bridge background"
              />
              <img
                src={ImageLogo1}
                className={ResetPasswordStyle.job_bridge_brand}
                alt="job bridge brand"
              />
              <div>
                <h1 className={ResetPasswordStyle.job_bridge_brand_word}>
                  Temukan developer berbakat dan terbaik di berbagai bidang
                  keahlian
                </h1>
              </div>
            </Col>
            <Col
              lg={4}
              className={`${ResetPasswordStyle.right_column} mt-5 pt-5`}
            >
              <img
                src={ImageLogo2}
                alt="peword logo"
                className={`${ResetPasswordStyle.job_bridge_brand_2} mb-5`}
              />
              <h2>Reset Password</h2>
              <p className="mt-3">
                Enter your user account's verified email address and we will
                send you a password reset link.
              </p>
              <Form className="mt-5"
                onSubmit={this.handleRequest}
              >
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Masukkan email"
                    onChange={(event) => {
                      this.changeText(event)
                    }}
                  />
                </Form.Group>
                {this.state.alert
                  ? (<Alert variant="warning" dismissible>
                      {this.state.msg}
                    </Alert>)
                  : ("")
                }
                <Button
                  type="submit"
                  className={`${ResetPasswordStyle.reset_password_button} mt-4`}
                >
                  Send password reset email
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

const mapDispatchToProps = { RequestReset }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPasswordPage);
