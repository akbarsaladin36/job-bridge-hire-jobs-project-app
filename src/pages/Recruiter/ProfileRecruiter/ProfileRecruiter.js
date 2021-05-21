import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import NavBar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import styles from "./ProfileRecruiter.module.css";
// import imgProfile from "../../../assets/img/louis.png";
import iconLocation from "../../../assets/img/icon-location.png";
import Email from "../../../assets/img/mail.png";
import Instagram from "../../../assets/img/instagram.png";
import Phone from "../../../assets/img/phone.png";
import Linked from "../../../assets/img/linked.png";

class ProfileRecruiter extends Component {
  render() {
    // console.log("PROPS", this.props.auth.data);
    // console.log(process.env.REACT_APP_IMAGE_URL);
    const {
      company_name,
      company_field,
      company_city,
      company_desc,
      company_email,
      company_instagram,
      company_phone_number,
      company_linkedin,
      company_image,
    } = this.props.auth.data;
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
                    <Image
                      src={`${process.env.REACT_APP_IMAGE_URL}${company_image}`}
                      className={styles.imgProfile}
                    />
                    <p className={styles.nameRecruiter}>{company_name}</p>
                    <p className={styles.positionRecruiter}>{company_field}</p>
                    <p className={styles.location}>
                      <Image
                        src={iconLocation}
                        className={styles.iconLocation}
                      />
                      {company_city}
                    </p>
                    <p className={styles.description}>{company_desc}</p>
                    <Button variant="fff" className={styles.btnEdit}>
                      Edit Profile
                    </Button>

                    <p className={styles.sosmed}>
                      <Row className={styles.rowTextSosmed}>
                        <Image src={Email} className={styles.Email} />
                        {company_email}
                      </Row>
                    </p>
                    <p className={styles.sosmed}>
                      <Row className={styles.rowTextSosmed}>
                        <Image src={Instagram} className={styles.Instagram} />
                        {company_instagram}
                      </Row>
                    </p>
                    <p className={styles.sosmed}>
                      <Row className={styles.rowTextSosmed}>
                        <Image src={Phone} className={styles.Phone} />
                        {company_phone_number}
                      </Row>
                    </p>
                    <p className={styles.sosmed}>
                      <Row className={styles.rowTextSosmed}>
                        <Image src={Linked} className={styles.Linked} />
                        {company_linkedin}
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(ProfileRecruiter);
