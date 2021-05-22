import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Button, Image } from "react-bootstrap";
import styles from "./TabProfileWorker.module.css";
import Portofolio from "../../assets/img/portofolio.png";
import suitcase from "../../assets/img/suitcase.png";

class Home extends Component {
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
    console.log(this.props.worker);
    // const { experience, portofolio } = this.props.data;

    return (
      <>
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
                  <Image src={Portofolio} className={styles.imgPortofolio} />
                  <p className={styles.titlePortofolio}>Remainder app</p>
                </Col>
                <Col lg={4} className={styles.colTabContent}>
                  <Image src={Portofolio} className={styles.imgPortofolio} />
                  <p className={styles.titlePortofolio}>Remainder app</p>
                </Col>
                <Col lg={4} className={styles.colTabContent}>
                  <Image src={Portofolio} className={styles.imgPortofolio} />
                  <p className={styles.titlePortofolio}>Remainder app</p>
                </Col>
                <Col lg={4} className={styles.colTabContent}>
                  <Image src={Portofolio} className={styles.imgPortofolio} />
                  <p className={styles.titlePortofolio}>Remainder app</p>
                </Col>
                <Col lg={4} className={styles.colTabContent}>
                  <Image src={Portofolio} className={styles.imgPortofolio} />
                  <p className={styles.titlePortofolio}>Remainder app</p>
                </Col>
                <Col lg={4} className={styles.colTabContent}>
                  <Image src={Portofolio} className={styles.imgPortofolio} />
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum erat orci, mollis nec gravida sed, ornare quis
                      urna. Curabitur eu lacus fringilla, vestibulum risus at.
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum erat orci, mollis nec gravida sed, ornare quis
                      urna. Curabitur eu lacus fringilla, vestibulum risus at.
                    </p>
                  </Col>
                </Row>
              </Row>
            )}
          </Col>
        </Row>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  worker: state.worker,
});

export default connect(mapStateToProps)(Home);
