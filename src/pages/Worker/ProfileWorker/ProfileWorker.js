import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import NavBar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import styles from "./ProfileWorker.module.css";
import imgProfile from "../../../assets/img/louis.png";
import iconLocation from "../../../assets/img/icon-location.png";
import iconPhone from "../../../assets/img/icon-phone.png";
import Email from "../../../assets/img/mail.png";
import Instagram from "../../../assets/img/instagram.png";
import Github from "../../../assets/img/github.png";
import Gitlab from "../../../assets/img/gitlab.png";
import Portofolio from "../../../assets/img/portofolio.png";
import suitcase from "../../../assets/img/suitcase.png";

class ProfileWorker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabContent: false,
    };
  }

  handleTabContent = (params) => {
    this.setState({
      tabContent: params,
    });
  };
  render() {
    const { tabContent } = this.state;
    return (
      <>
        <NavBar />
        <Container fluid className={styles.container2}></Container>
        <Container fluid className={styles.container1}></Container>
        <Container className={styles.container}>
          <Row className={styles.rowContainer}>
            <Col lg={4}>
              <Row className={styles.left}>
                <Image src={imgProfile} className={styles.imgProfile} />
                <p className={styles.nameWorker}>Louis Tomlinson</p>
                <p className={styles.jobWorker}>Web Developer</p>
                <p className={styles.partJob}>Freelancer</p>
                <p className={styles.location}>
                  <Image src={iconLocation} className={styles.iconLocation} />
                  Purwokerto, Jawa Tengah
                </p>
                <p className={styles.phone}>
                  <Image src={iconPhone} className={styles.iconPhone} />
                  0812 - 3456 - 789
                </p>
                <p className={styles.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum erat orci, mollis nec gravida sed, ornare quis
                  urna. Curabitur eu lacus fringilla, vestibulum risus at.
                </p>
                <Button variant="fff" className={styles.btnHire}>
                  Hire
                </Button>
                <p className={styles.skill}>Skill</p>
                <Row className={styles.rowSkill}>
                  <p className={styles.listSkill}>Phyton</p>
                  <p className={styles.listSkill}>Laravel</p>
                  <p className={styles.listSkill}>Golang</p>
                  <p className={styles.listSkill}>Javascript</p>
                  <p className={styles.listSkill}>PHP</p>
                  <p className={styles.listSkill}>HTML</p>
                  <p className={styles.listSkill}>C++</p>
                  <p className={styles.listSkill}>Kotlin</p>
                  <p className={styles.listSkill}>Swift</p>
                </Row>
                <p className={styles.sosmed}>
                  <Image src={Email} className={styles.Email} />
                  Louistommo@gmail.com
                </p>
                <p className={styles.sosmed}>
                  <Image src={Instagram} className={styles.Instagram} />
                  @Louist91
                </p>
                <p className={styles.sosmed}>
                  <Image src={Github} className={styles.Github} />
                  @Louistommo
                </p>
                <p className={styles.sosmed}>
                  <Image src={Gitlab} className={styles.Gitlab} />
                  @Louistommo91
                </p>
              </Row>
            </Col>
            <Col lg={8}>
              <Row className={styles.right}>
                <Col className={styles.colRight}>
                  <Row className={styles.rowTab}>
                    <Button
                      variant="fff"
                      className={styles.Portofolio}
                      onClick={() => this.handleTabContent(false)}
                    >
                      Portofolio
                    </Button>
                    <Button
                      variant="fff"
                      className={styles.ExperienceWork}
                      onClick={() => this.handleTabContent(true)}
                    >
                      Pengalaman Kerja
                    </Button>
                  </Row>
                  {tabContent === false ? (
                    <Row className={styles.rowTabContent}>
                      <Col lg={4} className={styles.colTabContent}>
                        <Image
                          src={Portofolio}
                          className={styles.imgPortofolio}
                        />
                        <p className={styles.titlePortofolio}>Remainder app</p>
                      </Col>
                      <Col lg={4} className={styles.colTabContent}>
                        <Image
                          src={Portofolio}
                          className={styles.imgPortofolio}
                        />
                        <p className={styles.titlePortofolio}>Remainder app</p>
                      </Col>
                      <Col lg={4} className={styles.colTabContent}>
                        <Image
                          src={Portofolio}
                          className={styles.imgPortofolio}
                        />
                        <p className={styles.titlePortofolio}>Remainder app</p>
                      </Col>
                      <Col lg={4} className={styles.colTabContent}>
                        <Image
                          src={Portofolio}
                          className={styles.imgPortofolio}
                        />
                        <p className={styles.titlePortofolio}>Remainder app</p>
                      </Col>
                      <Col lg={4} className={styles.colTabContent}>
                        <Image
                          src={Portofolio}
                          className={styles.imgPortofolio}
                        />
                        <p className={styles.titlePortofolio}>Remainder app</p>
                      </Col>
                      <Col lg={4} className={styles.colTabContent}>
                        <Image
                          src={Portofolio}
                          className={styles.imgPortofolio}
                        />
                        <p className={styles.titlePortofolio}>Remainder app</p>
                      </Col>
                    </Row>
                  ) : (
                    <Row className={styles.rowTabContent}>
                      <Row className={styles.rowExperienceWork}>
                        <Col lg={3} className={styles.ExperienceWorkLeft}>
                          <Image src={suitcase} />
                        </Col>
                        <Col lg={8}>
                          <p className={styles.positionJob}>Engineer</p>
                          <p className={styles.companyJob}>Tokopedia</p>
                          <Col>
                            <Row className={styles.durationJob}>
                              <p className={styles.dateDurationJob}>
                                July 2019 - January 2020
                              </p>{" "}
                              <p className={styles.longDurationJob}>6 months</p>
                            </Row>
                          </Col>
                          <p className={styles.descriptionJob}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum erat orci, mollis nec gravida sed,
                            ornare quis urna. Curabitur eu lacus fringilla,
                            vestibulum risus at.
                          </p>
                        </Col>
                      </Row>
                      <Row className={styles.rowExperienceWork}>
                        <Col lg={3} className={styles.ExperienceWorkLeft}>
                          <Image src={suitcase} />
                        </Col>
                        <Col lg={8}>
                          <p className={styles.positionJob}>Engineer</p>
                          <p className={styles.companyJob}>Tokopedia</p>
                          <Col>
                            <Row className={styles.durationJob}>
                              <p className={styles.dateDurationJob}>
                                July 2019 - January 2020
                              </p>{" "}
                              <p className={styles.longDurationJob}>6 months</p>
                            </Row>
                          </Col>
                          <p className={styles.descriptionJob}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum erat orci, mollis nec gravida sed,
                            ornare quis urna. Curabitur eu lacus fringilla,
                            vestibulum risus at.
                          </p>
                        </Col>
                      </Row>
                    </Row>
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}

export default ProfileWorker;
