import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import NavBar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import styles from "./ProfileRecruiter.module.css";
import imgProfile from "../../../assets/img/louis.png";
import iconLocation from "../../../assets/img/icon-location.png";
import Email from "../../../assets/img/mail.png";
import Instagram from "../../../assets/img/instagram.png";
import Phone from "../../../assets/img/phone.png";
import Linked from "../../../assets/img/linked.png";

class ProfileRecruiter extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Container fluid className={styles.fullArea}>
          <Container className={styles.boxContent}>
            <Container fluid className={styles.containerPurple}></Container>
            <Container fluid className={styles.containerWhite}></Container>
            <Container className={styles.container}>
              <Row className={styles.rowContainer}>
                <Col lg={6} className={styles.colRecruiter}>
                  <Row className={styles.left}>
                    <Image src={imgProfile} className={styles.imgProfile} />
                    <p className={styles.nameRecruiter}>
                      PT. Martabat Jaya Abadi
                    </p>
                    <p className={styles.positionRecruiter}>Financial</p>
                    <p className={styles.location}>
                      <Image
                        src={iconLocation}
                        className={styles.iconLocation}
                      />
                      Purwokerto, Jawa Tengah
                    </p>
                    <p className={styles.description}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum erat orci, mollis nec gravida sed, ornare quis
                      urna. Curabitur eu lacus fringilla, vestibulum risus at.
                    </p>
                    <Button variant="fff" className={styles.btnEdit}>
                      Edit Profile
                    </Button>

                    <p className={styles.sosmed}>
                      <Row className={styles.rowTextSosmed}>
                        <Image src={Email} className={styles.Email} />
                        martabatjaya@gmail.com
                      </Row>
                    </p>
                    <p className={styles.sosmed}>
                      <Row className={styles.rowTextSosmed}>
                        <Image src={Instagram} className={styles.Instagram} />
                        martabat_jaya
                      </Row>
                    </p>
                    <p className={styles.sosmed}>
                      <Row className={styles.rowTextSosmed}>
                        <Image src={Phone} className={styles.Phone} />
                        0821-8190-1821
                      </Row>
                    </p>
                    <p className={styles.sosmed}>
                      <Row className={styles.rowTextSosmed}>
                        <Image src={Linked} className={styles.Linked} />
                        Martabat Jaya Abadi
                      </Row>
                    </p>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Container>
        </Container>
        <Footer />
      </>
    );
  }
}

export default ProfileRecruiter;
