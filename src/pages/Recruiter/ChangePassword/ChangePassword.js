import React, { useState } from "react";
import { Container, Form, Button, Row, Modal } from "react-bootstrap";
import NavBar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import styles from "./ChangePassword.module.css";
import { connect } from "react-redux";
import { changePassword } from "../../../redux/action/recruiter";

function ChangePassword(props) {
  const [form, setForm] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });

  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState("");

  const changeText = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const resetForm = () => {
    setForm({
      newPassword: "",
      confirmNewPassword: "",
    });
  };
  const handleConfirm = (event) => {
    event.preventDefault();
    console.log(form);
    props
      .changePassword(form)
      .then((res) => {
        setMsg(res.action.payload.data.msg);
        setInfo("CHANGE PASSWORD");
        setShow(true);
      })
      .catch((err) => {
        setMsg(err.response.data.msg);
        setInfo("ERROR: CHANGE PASSWORD");
        setShow(true);
        resetForm();
      });
  };

  const handleClose = () => {
    setShow(false);
    if (info === "ERROR: CHANGE PASSWORD") {
      props.history.push("/jobbridge/change-password");
    } else {
      props.history.push("/");
    }
  };
  return (
    <>
      <NavBar />
      <Container className={styles.container}>
        <Modal show={show} className={styles.modal}>
          <Modal.Header className={styles.modalHeader}>
            <Modal.Title className={styles.modalTitle}>
              INFO : {info}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className={styles.modalBody}>{msg}</Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Row className={styles.row}>
          <h1 className={styles.textChangePassword}>Change Password</h1>
          <Form className={styles.form} onSubmit={handleConfirm}>
            <Form.Group className="mb-3">
              <Form.Label className={styles.textLabel}>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Input New Password"
                className={styles.placeholder}
                name="newPassword"
                value={form.newPassword}
                onChange={(event) => changeText(event)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className={styles.textLabel}>
                Confirm Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Input Confirm Password"
                className={styles.placeholder}
                name="confirmNewPassword"
                value={form.confirmNewPassword}
                onChange={(event) => changeText(event)}
                required
              />
            </Form.Group>
            <Button
              variant="fff"
              type="submit"
              className={styles.buttonConfirm}
            >
              Confirm
            </Button>
          </Form>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  recruiter: state.recruiter,
});
const mapDispatchToProps = { changePassword };

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
