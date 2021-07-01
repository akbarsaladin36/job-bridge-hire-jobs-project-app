import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Image, Button } from "react-bootstrap";
import styles from "./Experience.module.css";
import suitcase from "../../assets/img/suitcase.png";
import { deleteExperienceWorker } from "../../redux/action/worker";

class Experience extends Component {
  deleteExperience = () => {
    const id = this.props.experience.id_experience;
    console.log(id);
    this.props
      .deleteExperienceWorker(id)
      .then((res) => {
        alert("Erase your experience history? This action cannot be undone!");
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {
        this.setState({
          show: true,
          setShow: true,
        });
        // this.getData(id);
        setTimeout(function () {
          window.location.href = `/jobbridge/edit-worker`;
        }, 3000);
      });
  };

  render() {
    const {
      posistion_experience,
      company_name_experience,
      work_date_in_experience,
      work_date_out_experience,
      job_desc_experience,
    } = this.props.experience;

    console.log(this.props.experience);

    const dateIn = work_date_in_experience;
    const formatDateIn = (dateString) => {
      const options = { year: "numeric", month: "long" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };
    const dateOut = work_date_out_experience;
    const formatDateOut = (dateString) => {
      const options = { year: "numeric", month: "long" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const DateIn = formatDateIn(dateIn);
    const DateLongIn = new Date(work_date_in_experience);
    const DateOut = formatDateOut(dateOut);
    const DateLongOut = new Date(work_date_out_experience);

    const month = DateLongIn.getMonth(DateIn);
    const year = DateLongIn.getFullYear(DateIn);
    const month1 = DateLongOut.getMonth(DateOut);
    const year2 = DateLongOut.getFullYear(DateOut);
    const totalMonth = month1 - month;
    const totalYear = year2 - year;

    return (
      <>
        <Row className={`${styles.rowExperienceWork} px-3`}>
          <Col
            lg={3}
            md={3}
            sm={3}
            xs={3}
            className={styles.ExperienceWorkLeft}
          >
            <Image src={suitcase} />
          </Col>
          <Col lg={8} md={8} sm={8} xs={8}>
            <p className={styles.positionJob}>{posistion_experience}</p>
            <p className={styles.companyJob}>{company_name_experience}</p>
            <Col>
              <Row className={styles.durationJob}>
                <p className={styles.dateDurationJob}>
                  {DateIn} - {DateOut}
                </p>
                {totalYear === 0 ? (
                  <p className={styles.longDurationJob}>{totalMonth} months</p>
                ) : (
                  <p className={styles.longDurationJob}>
                    {totalYear} years {totalMonth} months
                  </p>
                )}
              </Row>
            </Col>
            <p className={styles.descriptionJob}>{job_desc_experience}</p>
          </Col>
          <Col lg={1} className={styles.deleteButtonHolder}>
            <Button
              className={styles.deleteButton}
              as={Link}
              to="/jobbridge/edit-worker"
              type="submit"
              onClick={() => this.deleteExperience()}
            >
              Delete
            </Button>
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

const mapDispatchToProps = {
  deleteExperienceWorker,
};

export default connect(mapStateToProps, mapDispatchToProps)(Experience);
