import { Component } from "react";
// import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Media,
  Card,
  Carousel,
} from "react-bootstrap";
import imgLP1 from "../../assets/img/true-agency.png";
import imgLP2 from "../../assets/img/img1.png";
import imgLP3 from "../../assets/img/img2.png";
import checklist from "../../assets/img/checklist.png";
import imgLP4 from "../../assets/img/img3.png";
import imgLP5 from "../../assets/img/harrystyles.png";
import imgLP6 from "../../assets/img/line.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

class LandingPage extends Component {
  render() {
    //   console.log("PROPS", this.props.auth.data);
    //   console.log(process.env.REACT_APP_IMAGE_URL);
    return (
      <>
        <Navbar />
        <Container fluid className={styles.landingPage}>
          <Container className={styles.container}>
            <Row>
              <Col lg={6} className={styles.left}>
                <Row className={styles.rowLeft}>
                  <h1 className={styles.titleTalenta}>
                    Talenta terbaik negri <br />
                    untuk perubahan <br />
                    revolusi 4.0
                  </h1>
                  <h1 className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    euismod ipsum et dui rhoncus auctor.
                  </h1>
                  <Button variant="fff" className={styles.buttonStart}>
                    Mulai Dari Sekarang
                  </Button>
                </Row>
              </Col>
              <Col lg={6} className={styles.right}>
                <Col className={styles.col}></Col>
                <Image src={imgLP1} className={styles.imgLP1} />
                <Col className={styles.Box}>
                  <Col className={styles.littleBox}></Col>
                </Col>
              </Col>
            </Row>
          </Container>
          <Container className={styles.container2}>
            <Row>
              <Col lg={5} className={styles.left2}>
                <Row>
                  <Col className={styles.col2}></Col>
                  <Image src={imgLP3} className={styles.imgLP3} />
                  <Image src={imgLP2} className={styles.imgLP2} />
                  <Col className={styles.Box1}>
                    <Col className={styles.littleBox1}></Col>
                  </Col>
                </Row>
              </Col>
              <Col lg={7} className={styles.right1}>
                <Row className={styles.mediaList}>
                  <Media>
                    <Media.Body>
                      <h1 className={styles.titlePeworld}>
                        Kenapa harus mencari tallent di peworld
                      </h1>
                      <Col className={styles.colList}>
                        <Row>
                          <span className={styles.checkbox}>
                            <Image
                              src={checklist}
                              className={styles.imgChecklist}
                            />
                          </span>
                          <h5 className={styles.list}>
                            Lorem ipsum dolor sit amet.
                          </h5>
                        </Row>
                      </Col>
                      <Col className={styles.colList}>
                        <Row>
                          <span className={styles.checkbox}>
                            <Image
                              src={checklist}
                              className={styles.imgChecklist}
                            />
                          </span>
                          <h5 className={styles.list}>
                            Lorem ipsum dolor sit amet.
                          </h5>
                        </Row>
                      </Col>
                      <Col className={styles.colList}>
                        <Row>
                          <span className={styles.checkbox}>
                            <Image
                              src={checklist}
                              className={styles.imgChecklist}
                            />
                          </span>
                          <h5 className={styles.list}>
                            Lorem ipsum dolor sit amet.
                          </h5>
                        </Row>
                      </Col>
                      <Col className={styles.colList}>
                        <Row>
                          <span className={styles.checkbox}>
                            <Image
                              src={checklist}
                              className={styles.imgChecklist}
                            />
                          </span>
                          <h5 className={styles.list}>
                            Lorem ipsum dolor sit amet.
                          </h5>
                        </Row>
                      </Col>
                    </Media.Body>
                  </Media>
                </Row>
              </Col>
            </Row>
          </Container>
          <Container className={styles.container3}>
            <Row>
              <Col lg={6} className={styles.left3}>
                <Row className={styles.mediaList2}>
                  <Media>
                    <Media.Body>
                      <h1 className={styles.titleSkill}>Skill Tallent</h1>
                      <p className={styles.textSkill}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In euismod ipsum et dui rhoncus auctor.
                      </p>
                      <Row>
                        <Col>
                          <Col className={styles.colList}>
                            <Row>
                              <span className={styles.checkbox1}>
                                <Image
                                  src={checklist}
                                  className={styles.imgChecklist}
                                />
                              </span>
                              <h5 className={styles.list}>Java</h5>
                            </Row>
                          </Col>
                          <Col className={styles.colList}>
                            <Row>
                              <span className={styles.checkbox1}>
                                <Image
                                  src={checklist}
                                  className={styles.imgChecklist}
                                />
                              </span>
                              <h5 className={styles.list}>Kotlin</h5>
                            </Row>
                          </Col>
                          <Col className={styles.colList}>
                            <Row>
                              <span className={styles.checkbox1}>
                                <Image
                                  src={checklist}
                                  className={styles.imgChecklist}
                                />
                              </span>
                              <h5 className={styles.list}>PHP</h5>
                            </Row>
                          </Col>
                          <Col className={styles.colList}>
                            <Row>
                              <span className={styles.checkbox1}>
                                <Image
                                  src={checklist}
                                  className={styles.imgChecklist}
                                />
                              </span>
                              <h5 className={styles.list}>Javascript</h5>
                            </Row>
                          </Col>
                        </Col>
                        <Col>
                          <Col className={styles.colList}>
                            <Row>
                              <span className={styles.checkbox1}>
                                <Image
                                  src={checklist}
                                  className={styles.imgChecklist}
                                />
                              </span>
                              <h5 className={styles.list}>Golang</h5>
                            </Row>
                          </Col>
                          <Col className={styles.colList}>
                            <Row>
                              <span className={styles.checkbox1}>
                                <Image
                                  src={checklist}
                                  className={styles.imgChecklist}
                                />
                              </span>
                              <h5 className={styles.list}>C++</h5>
                            </Row>
                          </Col>
                          <Col className={styles.colList}>
                            <Row>
                              <span className={styles.checkbox1}>
                                <Image
                                  src={checklist}
                                  className={styles.imgChecklist}
                                />
                              </span>
                              <h5 className={styles.list}>Ruby</h5>
                            </Row>
                          </Col>
                          <Col className={styles.colList}>
                            <Row>
                              <span className={styles.checkbox1}>
                                <Image
                                  src={checklist}
                                  className={styles.imgChecklist}
                                />
                              </span>
                              <h5 className={styles.list}>
                                10+ Bahasa Lainnya
                              </h5>
                            </Row>
                          </Col>
                        </Col>
                      </Row>
                    </Media.Body>
                  </Media>
                </Row>
              </Col>
              <Col lg={6} className={styles.right3}>
                <Col className={styles.col3}></Col>
                <Image src={imgLP4} className={styles.imgLp4} />
                <Col className={styles.Box2}>
                  <Col className={styles.littleBox2}></Col>
                </Col>
              </Col>
            </Row>
          </Container>
          <Container fluid className={styles.container4}>
            <Row className={styles.rowCard}>
              <h5 className={styles.titleSkill}>Their opinion about peworld</h5>
              <Carousel className={styles.carosel}>
                <Carousel.Item className={styles.itemCarosel}>
                  <Row className={styles.caroselItem}>
                    <Card
                      style={{ width: "15rem" }}
                      className={`${styles.card} shadow `}
                    >
                      <Card.Img
                        variant="top"
                        src={imgLP5}
                        className={styles.cardImg}
                      />
                      <Card.Body>
                        <Card.Title className={styles.nameCard}>
                          Harry Styles
                        </Card.Title>
                        <p className={styles.jobCard}>Web Developer</p>
                        <Card.Text className={styles.textCard}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. In euismod ipsum et dui rhoncus auctor.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card
                      style={{ width: "15rem" }}
                      className={`${styles.card2} shadow `}
                    >
                      <Card.Img
                        variant="top"
                        src={imgLP5}
                        className={styles.cardImg}
                      />
                      <Card.Body>
                        <Card.Title className={styles.nameCard}>
                          Harry Styles
                        </Card.Title>
                        <p className={styles.jobCard}>Web Developer</p>
                        <Card.Text className={styles.textCard}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. In euismod ipsum et dui rhoncus auctor.
                        </Card.Text>
                      </Card.Body>
                    </Card>

                    <Card
                      style={{ width: "15rem" }}
                      className={`${styles.card2} shadow `}
                    >
                      <Card.Img
                        variant="top"
                        src={imgLP5}
                        className={styles.cardImg}
                      />
                      <Card.Body>
                        <Card.Title className={styles.nameCard}>
                          Harry Styles
                        </Card.Title>
                        <p className={styles.jobCard}>Web Developer</p>
                        <Card.Text className={styles.textCard}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. In euismod ipsum et dui rhoncus auctor.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Row>
                </Carousel.Item>
              </Carousel>
            </Row>
          </Container>
          <Container className={styles.container5}>
            <Row className={styles.content4}>
              <p className={styles.titleContent5}>
                Lorem ipsum <br /> dolor sit amet
              </p>

              <Button variant="fff" className={styles.buttonContent5}>
                Mulai dari sekarang
              </Button>
              <Image src={imgLP6} className={styles.imgLP6} />
            </Row>
          </Container>
        </Container>
        <Footer />
      </>
    );
  }
}

export default LandingPage;
