import React, { Component } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import Portofolio from "../../assets/img/no-img-avl.png";
import styles from "./Portofolio.module.css";
import { connect } from "react-redux";
import {
  getPortofolioId,
  deletePortofolio,
  getDataWorker,
} from "../../redux/action/worker";

class PortofolioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: false,
      data: {},
      update: true,
    };
  }

  handleDetails = () => {
    this.setState({
      details: true,
    });
  };

  handleDetailsClose = () => {
    this.setState({
      details: false,
    });
  };

  handleUpdate = (id) => {
    this.props
      .getPortofolioId(id)
      .then((res) => {
        console.log(res.value.data.data[0]);
        this.props.data(res.value.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleDelete = (id) => {
    this.props
      .deletePortofolio(id)
      .then((res) => {
        console.log(res);
        this.props.getDataWorker(this.props.userId);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const {
      image_portofolio,
      app_name_portofolio,
      app_desc_portofolio,
      id_portofolio,
    } = this.props.portofolio;
    const { update } = this.props;

    return (
      <>
        <Card
          className={
            update === true
              ? this.state.details === true
                ? `${styles.cardBodyDetails} shadow`
                : `${styles.cardBodyUpdate} shadow`
              : `${styles.cardBody} shadow`
          }
        >
          <Row className={styles.cardImage1}>
            <Col>
              {image_portofolio === null ||
              image_portofolio === "" ||
              image_portofolio === undefined ? (
                <Card.Img
                  variant="top"
                  src={Portofolio}
                  className={
                    this.state.details === true
                      ? styles.cardImageDetails
                      : styles.cardImage
                  }
                />
              ) : (
                <Card.Img
                  variant="top"
                  src={`${process.env.REACT_APP_IMAGE_URL}${image_portofolio}`}
                  className={
                    this.state.details === true
                      ? styles.cardImageDetails
                      : styles.cardImage
                  }
                />
              )}

              <Card.Title className={styles.title}>
                {app_name_portofolio}
              </Card.Title>
            </Col>
            <Card.Body
              className={
                this.state.details === true
                  ? styles.textDesc
                  : styles.textDescClose
              }
            >
              {this.state.details === true ? app_desc_portofolio : ""}
            </Card.Body>
          </Row>
          <Button
            variant="fff"
            className={styles.buttonDetails}
            onClick={
              this.state.details === false
                ? () => this.handleDetails()
                : () => this.handleDetailsClose()
            }
          >
            {this.state.details === false ? "Details" : "Close"}
          </Button>
          {update === true && (
            <div className={styles.boxButton}>
              <Button
                variant="fff"
                className={styles.buttonUpdate}
                onClick={() => this.handleUpdate(id_portofolio)}
              >
                Update
              </Button>
              <Button
                variant="fff"
                className={styles.buttonDelete}
                onClick={() => this.handleDelete(id_portofolio)}
              >
                Delete
              </Button>
            </div>
          )}
        </Card>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  worker: state.worker,
});

const mapDispatchToProps = {
  getPortofolioId,
  deletePortofolio,
  getDataWorker,
};

export default connect(mapStateToProps, mapDispatchToProps)(PortofolioPage);
