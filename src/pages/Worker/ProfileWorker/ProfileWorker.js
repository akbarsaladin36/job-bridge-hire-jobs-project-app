import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { getDataWorker } from "../../../redux/action/worker";
import NavBar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import Portofolio from "../../../components/Portofolio/Portofolio";
import Experience from "../../../components/Experience/Experience";
import styles from "./ProfileWorker.module.css";
import { Link } from "react-router-dom";
import imgProfile from "../../../assets/img/img-not-found.png";
import iconLocation from "../../../assets/img/icon-location.png";
import iconPhone from "../../../assets/img/icon-phone.png";
import Email from "../../../assets/img/mail.png";
import Instagram from "../../../assets/img/instagram.png";
import Github from "../../../assets/img/github.png";
import Gitlab from "../../../assets/img/gitlab.png";

class ProfileWorker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabContent: false,
      hireButton: true,
      idWorker: null,
      activePortofolio: false,
      activeExprerience: false,
    };
  }

  componentDidMount() {
    // console.log("PROPS", this.props);
    if (this.props.history.location.search) {
      const id = this.props.history.location.search.split("=")[1];
      this.props.getDataWorker(id);
      this.setState({
        idWorker: id,
      });
    } else {
      this.props.getDataWorker(this.props.auth.data.id_worker);
      this.setState({
        idWorker: this.props.auth.data.id_worker,
      });
    }

    if (this.props.auth.data.id_worker) {
      this.setState({
        hireButton: false,
      });
    }
  }

  handleTabContent = (params) => {
    this.setState({
      tabContent: params,
      activeExprerience: params === true ? params : false,
      activePortofolio: params === false ? params : true,
    });
  };
  render() {
    console.log("PROPS", this.props);
    const { tabContent, hireButton, idWorker } = this.state;
    const {
      image_worker,
      fullname_worker,
      role_worker,
      work_preference_worker,
      address_worker,
      phone_number_worker,
      description_worker,
      email_worker,
      instagram_worker,
      github_worker,
      gitlab_worker,
    } = this.props.worker.biodata;
    const { skill, portofolio, experience } = this.props.worker;
    console.log(this.props.worker);
    return (
      <>
        <NavBar />
        <Container fluid className={styles.container2}></Container>
        <Container className={styles.container}>
          <Row className={styles.rowContainer}>
            <Col lg={4} md={4} sm={12} xs={12} className={styles.left}>
              <Col className={styles.colCardBiodata}>
                {image_worker === null ||
                image_worker === "" ||
                image_worker === undefined ? (
                  <Image src={imgProfile} className={styles.imgProfile} />
                ) : (
                  <Image
                    src={`${process.env.REACT_APP_IMAGE_URL}${image_worker}`}
                    className={styles.imgProfile}
                  />
                )}
                <p className={styles.nameWorker}>{fullname_worker}</p>
                <p className={styles.jobWorker}>{role_worker}</p>
                <p className={styles.partJob}>{work_preference_worker}</p>
                <p className={styles.location}>
                  <Image src={iconLocation} className={styles.iconLocation} />
                  {address_worker}
                </p>
                <p className={styles.phone}>
                  <Image src={iconPhone} className={styles.iconPhone} />
                  {phone_number_worker}
                </p>
                <p className={styles.description}>{description_worker}</p>
                {hireButton ? (
                  <Button
                    as={Link}
                    to={`/jobbridge/hire/${idWorker}`}
                    variant="fff"
                    className={styles.btnHire}
                  >
                    Hire
                  </Button>
                ) : (
                  ""
                )}
                <p className={styles.skill}>Skill</p>
                <Row className={styles.rowSkill}>
                  {Object.keys(skill).length !== 0
                    ? skill.map((item, index) => {
                        return (
                          <Col lg={4} key={index} className={styles.colSkill}>
                            <p className={styles.listSkill}>
                              {item.name_skill}
                            </p>
                          </Col>
                        );
                      })
                    : ""}
                </Row>
                <p className={styles.sosmed}>
                  <Image src={Email} className={styles.Email} />
                  {email_worker}
                </p>
                <p className={styles.sosmed}>
                  <Image src={Instagram} className={styles.Instagram} />
                  {instagram_worker}
                </p>
                <p className={styles.sosmed}>
                  <Image src={Github} className={styles.Github} />
                  {github_worker}
                </p>
                <p className={styles.sosmed}>
                  <Image src={Gitlab} className={styles.Gitlab} />
                  {gitlab_worker}
                </p>
              </Col>
            </Col>
            <Col lg={8} md={7} sm={12} xs={12} className={styles.right}>
              <Col className={styles.colRight}>
                <Row className={styles.rowTab}>
                  <Button
                    variant="fff"
                    className={
                      !this.state.activePortofolio
                        ? styles.PortofolioActive
                        : styles.Portofolio
                    }
                    onClick={() => this.handleTabContent(false)}
                  >
                    Portofolio
                  </Button>
                  <Button
                    variant="fff"
                    className={
                      !this.state.activeExprerience
                        ? styles.ExperienceWork
                        : styles.ExperienceWorkActive
                    }
                    onClick={() => this.handleTabContent(true)}
                  >
                    Pengalaman Kerja
                  </Button>
                </Row>
                {tabContent === false ? (
                  <Row className={styles.rowTabContent}>
                    {Object.keys(portofolio).length !== 0 ? (
                      portofolio.map((item, index) => {
                        return (
                          <Col
                            lg={4}
                            key={index}
                            className={styles.colTabContent}
                          >
                            <Portofolio portofolio={item} />
                          </Col>
                        );
                      })
                    ) : (
                      <h1 className={styles.textNotFound}>
                        Don't Have Portofolio
                      </h1>
                    )}
                  </Row>
                ) : (
                  <Row className={styles.rowTabContent}>
                    {Object.keys(experience).length !== 0
                      ? experience.map((item, index) => {
                          return (
                            <Row
                              key={index}
                              className={styles.rowExperienceWork}
                            >
                              <Experience experience={item} />
                            </Row>
                          );
                        })
                      : "Don't Have Experience"}
                  </Row>
                )}
              </Col>
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  worker: state.worker,
});

const mapDispatchToProps = { getDataWorker };

export default connect(mapStateToProps, mapDispatchToProps)(ProfileWorker);
