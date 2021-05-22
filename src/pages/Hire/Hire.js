import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { connect } from "react-redux";
import { hireWorker } from "../../redux/action/recruiter";
import axiosApiIntances from "../../utils/axios";
import NavBar from "../../components/Navbar/Navbar";
import myStyle from "./Hire.module.css";
import Footer from "../../components/Footer/Footer";
// import MobileFooter from "../../components/mobilefooter/mobilefooter";

class hire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      title: "",
      msg: "",
    };
  }

  componentDidMount() {
    this.getDataWorker();
  }

  getDataWorker = () => {
    console.log("Get Data Worker !");
    const id = this.props.match.params.id;
    axiosApiIntances
      .get(`worker/${id}`)
      .then((res) => {
        // console.log(res.data.data);
        this.setState({
          data: {
            ...this.state.data,
            ...res.data.data[0],
          },
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  hireWorker = () => {
    const setData = {
      workerEmail: this.state.data.email_worker,
      companyName: this.props.auth.data.company_name,
      title: this.state.title,
      msg: this.state.msg,
    };
    console.log(setData);
    this.props
      .hireWorker(setData)
      .then((res) => {
        alert("Email Sent !");
        this.setState({
          msg: "",
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  dropdownSelected = (event) => {
    // console.log(event.target.value);
    this.setState({
      title: event.target.value,
    });
  };

  changeText = (event) => {
    this.setState({
      msg: event.target.value,
    });
  };

  render() {
    // console.log(this.props.match.params.id);
    // console.log(this.state);
    const {
      image_worker,
      fullname_worker,
      role_worker,
      work_preference_worker,
      address_worker,
      phone_number_worker,
      description_worker,
      skill,
    } = this.state.data;
    // console.log("PROPS", this.props);

    return (
      <>
        <NavBar />

        <Container className="p-5">
          <Row className="py-4 d-flex justify-content-between">
            <Col lg={3} md={3} sm={3} xs={3} className={`${myStyle.noPadding}`}>
              <div className={`${myStyle.whiteColumn} mb-2  `}>
                <Row className={`w-100 mx-auto`}>
                  <Image
                    src={`${process.env.REACT_APP_IMAGE_URL}${image_worker}`}
                    alt="NONE"
                    className="mx-auto pb-3"
                    roundedCircle
                    fluid
                  />
                </Row>
                <h5 className={`${myStyle.fontBold} px-4 mb-1`}>
                  {fullname_worker}
                </h5>
                <span className={`d-block px-4 mb-1`}>{role_worker}</span>
                <span className={`${myStyle.grayText} d-block px-4`}>
                  {work_preference_worker}
                </span>
                <span className={`${myStyle.grayText} d-block px-4`}>
                  {address_worker}
                </span>
                <span className={`${myStyle.grayText} d-block px-4`}>
                  {phone_number_worker}
                </span>
                <Row className="w-100 mx-auto px-4 mt-4">
                  <p className={`${myStyle.grayText}`}>{description_worker}</p>
                </Row>
                <Row className="w-100 mx-auto px-4 mt-4">
                  <h3 className={`${myStyle.fontBold}`}>Skill</h3>
                </Row>
                <Row className="w-100 mx-auto px-4 mt-4 pb-3">
                  {skill
                    ? skill.map((item, index) => {
                        return (
                          <button
                            key={index}
                            type="button"
                            className={`${myStyle.orangeButtonSkill} ${myStyle.buttonSkillSpacing}`}
                          >
                            <span className="px-2">{item.name_skill}</span>
                          </button>
                        );
                      })
                    : ""}
                </Row>
              </div>
            </Col>
            <Col
              lg={8}
              md={8}
              sm={8}
              xs={8}
              className={` ${myStyle.noPadding}`}
            >
              <div className={`w-100`}>
                <h2 className={`px-4 pt-3 pb-2 ${myStyle.fontBold}`}>
                  {`Hubungi ${fullname_worker}`}
                </h2>
              </div>
              <div className={`px-4 w-100`}>
                <p className={myStyle.fontBold}>{description_worker}</p>
              </div>
              <form className="pt-5 pb-4 pt-3 pb-4">
                <div className="mb-3">
                  <label for="exampleInputEmail1" className={`form-label`}>
                    <span className={`${myStyle.grayText}`}>
                      Tujuan tentang pesan ini
                    </span>
                  </label>
                  <select
                    className={`${myStyle.formHeight} form-select form-control`}
                    aria-label="Default select example"
                    onChange={(event) => this.dropdownSelected(event)}
                  >
                    <option selected>-</option>
                    <option value="Project">Project</option>
                    <option value="Training">Training</option>
                    <option value="Meeting">Meeting</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label>
                    <span className={`${myStyle.grayText}`}>Pesan</span>
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="6"
                    placeholder="Masukkan deskripsi singkat"
                    value={this.state.msg}
                    onChange={(event) => this.changeText(event)}
                  ></textarea>
                </div>
                <button
                  type="button"
                  className={`${myStyle.kirimButton} px-4 mt-4 w-100`}
                  onClick={() => this.hireWorker()}
                >
                  Kirim
                </button>
              </form>
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
});

const mapDispatchToProps = { hireWorker };

export default connect(mapStateToProps, mapDispatchToProps)(hire);
