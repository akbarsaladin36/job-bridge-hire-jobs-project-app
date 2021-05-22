import React, { Component } from "react";
import { Col, Row, Card } from "react-bootstrap";
import Portofolio from "../../assets/img/no-img-avl.png";
import styles from "./Portofolio.module.css";

class Home extends Component {
  render() {
    const { image_portofolio, app_name_portofolio, app_desc_portofolio } =
      this.props.portofolio;
    return (
      <>
        <Card className={`${styles.cardBody} `}>
          <Row className={styles.cardImage1}>
            <Col>
              {image_portofolio ? (
                <Card.Img
                  variant="top"
                  src={`${process.env.REACT_APP_IMAGE_URL}${image_portofolio}`}
                  className={styles.cardImage}
                />
              ) : (
                <Card.Img
                  variant="top"
                  src={Portofolio}
                  className={styles.cardImage}
                />
              )}

              <Card.Title className={styles.title}>
                {app_name_portofolio}
              </Card.Title>
            </Col>
          </Row>
          <Card.Body className={styles.cardContent}>
            <Card.Text className={styles.text}>{app_desc_portofolio}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Home;
