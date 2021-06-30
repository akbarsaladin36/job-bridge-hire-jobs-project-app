import React from "react";
import { Container, Form, Button, Row } from "react-bootstrap";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./ChangePassword.module.css";

function ChangePassword() {
  return (
    <>
      <NavBar />
      <Container className={styles.container}>
        <Row className={styles.row}>
          <h1 className={styles.textChangePassword}>Change Password</h1>
          <Form className={styles.form}>
            <Form.Group className="mb-3">
              <Form.Label className={styles.textLabel}>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Input New Password"
                className={styles.placeholder}
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

export default ChangePassword;
