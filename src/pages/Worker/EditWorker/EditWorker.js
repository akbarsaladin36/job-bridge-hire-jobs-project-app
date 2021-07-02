import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Form,
  Toast,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getDataWorker,
  UpdateBiodataWorker,
  UpdateImageWorker,
  UpdateSkillWorker,
  CreateExperienceWorker,
  CreatePortofolioWorker,
  UpdatePortofolioId,
  getPortofolioId,
} from "../../../redux/action/worker";
import Experience from "../../../components/Experience/Experience";
import CardPortofolio from "../../../components/Portofolio/Portofolio";
import NavBar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import styles from "./EditWorker.module.css";
import imgProfile from "../../../assets/img/img-not-found.png";
import iconLocation from "../../../assets/img/icon-location.png";
import iconPhone from "../../../assets/img/icon-phone.png";
import iconDelete from "../../../assets/img/icon-delete.png";
import rocket from "../../../assets/img/rocket.png";
import UploadImage from "../../../components/UploadImage/UploadImage";

class EditWorker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      biodata: {
        // imageWorker: `${process.env.REACT_APP_IMAGE_URL}${this.props.worker.biodata.image_worker}`,
        imageWorker: `${imgProfile}`,
        fullnameWorker: this.props.worker.biodata.fullname_worker,
        roleWorker: this.props.worker.biodata.role_worker,
        workPreferenceWorker: this.props.worker.biodata.work_preference_worker,
        addressWorker: this.props.worker.biodata.address_worker,
        phoneNumberWorker: this.props.worker.biodata.phone_number_worker,
        instagramWorker: this.props.worker.biodata.instagram_worker,
        githubWorker: this.props.worker.biodata.github_worker,
        gitlabWorker: this.props.worker.biodata.gitlab_worker,
        descriptionWorker: this.props.worker.biodata.description_worker,
        image: null,
      },
      tpmSkill: "",
      newSkills: this.props.worker.skill.map((item) => {
        return item.name_skill;
      }),
      experience: {
        companyNameExperience: "",
        posistionExperience: "",
        workDateInExperience: "",
        workDateOutExperience: "",
        jobDescExperience: "",
      },
      portofolioWorker: {
        imagePortofolio: `${process.env.REACT_APP_IMAGE_URL}${this.props.worker.portofolio.image_portofolio}`,
        appNamePortofolio: "",
        linkRepositoryPortofolio: "",
        appDescPortofolio: "",
        image: null,
      },
      show: false,
      setShow: false,
      msg: "",
      update: false,
    };
  }

  changeText = (event) => {
    this.setState({
      biodata: {
        ...this.state.biodata,
        [event.target.name]: event.target.value,
      },
    });
  };

  changeTextExperience = (event) => {
    // console.log(typeof event.target.value);
    this.setState({
      experience: {
        ...this.state.experience,
        [event.target.name]: event.target.value,
      },
    });
  };

  changeTextPortofolio = (event) => {
    this.setState({
      portofolioWorker: {
        ...this.state.portofolioWorker,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidMount() {
    this.getData();
  }

  setShow = (event) => {
    this.setState({
      show: event,
    });
  };

  getData = () => {
    const id = this.props.auth.data.id_worker;
    this.props.getDataWorker(id);
  };

  handleImage = (event) => {
    this.setState(
      {
        biodata: {
          imageWorker: URL.createObjectURL(event.target.files[0]),
          image: event.target.files[0],
        },
      },
      () => this.updateImage()
    );
  };

  handleImagePortofolio = (event) => {
    this.setState({
      portofolioWorker: {
        imagePortofolio: this.state.portofolioWorker.imagePortofolio,
        appNamePortofolio: this.state.portofolioWorker.appNamePortofolio,
        linkRepositoryPortofolio:
          this.state.portofolioWorker.linkRepositoryPortofolio,
        appDescPortofolio: this.state.portofolioWorker.appDescPortofolio,
        image: event.target.files[0],
      },
    });
  };

  updateData = () => {
    const id = this.props.auth.data.id_worker;
    // this.resetData();
    const formData = new FormData();
    formData.append("fullnameWorker", this.state.biodata.fullnameWorker);
    formData.append("roleWorker", this.state.biodata.roleWorker);
    formData.append(
      "workPreferenceWorker",
      this.state.biodata.workPreferenceWorker
    );
    formData.append("addressWorker", this.state.biodata.addressWorker);
    formData.append("phoneNumberWorker", this.state.biodata.phoneNumberWorker);
    formData.append("instagramWorker", this.state.biodata.instagramWorker);
    formData.append("githubWorker", this.state.biodata.githubWorker);
    formData.append("gitlabWorker", this.state.biodata.gitlabWorker);
    formData.append("descriptionWorker", this.state.biodata.descriptionWorker);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    this.props
      .UpdateBiodataWorker(id, formData)
      .then((res) => {
        alert("Please Click OK for Update your Profile !");
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {
        this.setState({
          show: true,
          setShow: true,
        });
        this.getData(id);
        window.location.href = `/jobbridge/edit-worker`;
      });
  };

  updateImage = () => {
    const id = this.props.auth.data.id_worker;
    const formData = new FormData();
    for (const key in this.state.biodata) {
      key !== "imageWorker"
        ? formData.append(key, this.state.biodata[key])
        : console.log("");
    }
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    this.props
      .UpdateImageWorker(id, formData)
      .then((res) => {
        alert("Please Click OK for Update your Profile !");
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {
        this.setState({
          show: true,
          setShow: true,
        });
        this.getData(id);
        window.location.href = `/jobbridge/edit-worker`;
      });
  };

  addSkill = (event) => {
    // console.log(event.target.value);
    this.setState({
      tmpSkill: event.target.value,
    });
  };

  updateSkill = () => {
    let { tmpSkill, newSkills } = this.state;
    newSkills.push(tmpSkill);
    const id = this.props.auth.data.id_worker;

    this.props
      .UpdateSkillWorker(id, { skills: newSkills })
      .then((res) => {
        alert("Please Click OK for Update your Profile !");
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {
        this.props.getDataWorker(id);
      });
  };

  handleSkillDelete = (id) => {
    let { newSkills } = this.state;
    newSkills.splice(id, 1);
    this.setState({
      newSkills: newSkills,
    });

    const idWorker = this.props.auth.data.id_worker;
    this.props
      .UpdateSkillWorker(idWorker, { skills: newSkills })
      .then((res) => {
        alert("Please Click OK for Update your Profile !");
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {
        this.props.getDataWorker(idWorker);
      });
  };

  submitData = () => {
    const id = this.props.auth.data.id_worker;
    this.props
      .CreateExperienceWorker(id, this.state.experience)
      .then((res) => {
        console.log(res);
        alert("Please Click OK for create your work experience !");
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {
        this.setState({
          show: true,
          setShow: true,
        });
        this.props.getDataWorker(id);
        window.location.href = `/jobbridge/edit-worker`;
      });
  };

  submitDataPortofolio = () => {
    const id = this.props.auth.data.id_worker;
    const formData = new FormData();
    formData.append(
      "appNamePortofolio",
      this.state.portofolioWorker.appNamePortofolio
    );
    formData.append(
      "linkRepositoryPortofolio",
      this.state.portofolioWorker.linkRepositoryPortofolio
    );
    formData.append(
      "appDescPortofolio",
      this.state.portofolioWorker.appDescPortofolio
    );
    formData.append("image", this.state.portofolioWorker.image);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    this.props
      .CreatePortofolioWorker(id, formData)
      .then((res) => {
        console.log(res);
        alert("Please Click OK for create your work experience !");
        this.setState({
          show: true,
          setShow: true,
          msg: "Create Portofolio Success !",
        });
      })
      .catch((err) => {
        console.log(err.response);
        this.setState({
          show: true,
          setShow: true,
          msg: "Create Portofolio Failed !",
        });
      });
    // .finally(() => {
    //   this.props.getDataWorker(this.props.auth.data.id_worker);
    //   window.location.href = `/jobbridge/edit-worker`;
    // });
  };

  handleSendImage = (data) => {
    console.log(data);
    if (data !== "undefined") {
      this.setState({
        portofolioWorker: {
          imagePortofolio: this.state.portofolioWorker.imagePortofolio,
          appNamePortofolio: this.state.portofolioWorker.appNamePortofolio,
          linkRepositoryPortofolio:
            this.state.portofolioWorker.linkRepositoryPortofolio,
          appDescPortofolio: this.state.portofolioWorker.appDescPortofolio,
          image: data,
        },
      });
    }
  };

  resetPortofolio = () => {
    this.setState({
      portofolioWorker: {
        imagePortofolio: "",
        appNamePortofolio: "",
        linkRepositoryPortofolio: "",
        appDescPortofolio: "",
        image: null,
      },
    });
  };

  handleUpdate = (id) => {
    console.log("runnning", id);
    const formData = new FormData();
    formData.append(
      "appNamePortofolio",
      this.state.portofolioWorker.appNamePortofolio
    );
    formData.append(
      "linkRepositoryPortofolio",
      this.state.portofolioWorker.linkRepositoryPortofolio
    );
    formData.append(
      "appDescPortofolio",
      this.state.portofolioWorker.appDescPortofolio
    );
    formData.append("image", this.state.portofolioWorker.image);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    this.props
      .UpdatePortofolioId(id, formData)
      .then((res) => {
        console.log(res);
        alert("Please Click OK for Update your Portofolio!");
        this.setState({
          show: true,
          setShow: true,
          msg: "Update Portofolio Success !",
        });
      })
      .catch((err) => {
        console.log(err.response);
        this.setState({
          show: true,
          setShow: true,
          msg: "Update Portofolio Failed !",
        });
      })
      .finally(() => {
        this.props.getDataWorker(this.props.auth.data.id_worker);
        this.resetPortofolio();
      });
  };

  handleSetData = (data) => {
    this.setState({
      ...this.state.portofolioWorker,
      portofolioWorker: {
        imagePortofolio: `${process.env.REACT_APP_IMAGE_URL}${data.image_portofolio}`,
        appNamePortofolio: data.app_name_portofolio,
        linkRepositoryPortofolio: data.link_repository_portofolio,
        appDescPortofolio: data.app_desc_portofolio,
      },
    });
    this.setState({
      update: true,
    });
  };

  render() {
    const {
      imageWorker,
      fullnameWorker,
      roleWorker,
      workPreferenceWorker,
      addressWorker,
      phoneNumberWorker,
      descriptionWorker,
    } = this.state.biodata;
    const { experience } = this.props.worker;
    const skill = this.state.newSkills;
    const {
      companyNameExperience,
      posistionExperience,
      workDateInExperience,
      workDateOutExperience,
      jobDescExperience,
    } = this.state.experience;
    const { appNamePortofolio, linkRepositoryPortofolio, appDescPortofolio } =
      this.state.portofolioWorker;
    console.log(this.state.portofolioWorker);
    const { image_worker } = this.props.worker.biodata;
    return (
      <>
        <NavBar />
        <Container fluid className={styles.boxContent}>
          <Container fluid className={styles.containerPurple}></Container>
          <Toast
            className={styles.bodyToast1}
            onClose={() => this.setShow(false)}
            show={this.state.show}
            delay={5000}
            autohide
          >
            <Toast.Header>
              <strong className="mr-auto">Message !</strong>
            </Toast.Header>
            <Toast.Body className={styles.bodyToast}>
              <Image src={rocket} className={styles.rocket} />
              <p className={styles.titleToast}>{this.state.msg} </p>
            </Toast.Body>
          </Toast>
        </Container>
        {/* <div className={styles.containerPurple}> */}
        <Container fluid className={styles.theContainer}>
          <div fluid className={styles.containerWhite}>
            <Container className={styles.container}>
              <Row className={styles.rowContainer}>
                <Col lg={4} md={4} sm={12} xs={12} className={styles.colLeft}>
                  <Row className={styles.left}>
                    <Row>
                      <Form.Group>
                        <Form.Label
                          htmlFor="files"
                          className={styles.boxUpdateImage}
                        >
                          Jangan di hapus !
                        </Form.Label>
                        <Form.Control
                          type="file"
                          id="files"
                          onChange={(event) => this.handleImage(event)}
                          className={styles.updateImage}
                        />
                      </Form.Group>

                      {imageWorker === null ||
                      imageWorker === "" ||
                      imageWorker === undefined ? (
                        <Image src={imgProfile} className={styles.imgProfile} />
                      ) : (
                        <Image
                          src={`${process.env.REACT_APP_IMAGE_URL}${image_worker}`}
                          className={styles.imgProfile}
                        />
                      )}
                    </Row>
                    <p className={styles.nameWorker}>{fullnameWorker}</p>
                    <p className={styles.jobWorker}>{roleWorker}</p>
                    <p className={styles.partJob}>{workPreferenceWorker}</p>
                    <p className={styles.location}>
                      <Image
                        src={iconLocation}
                        className={styles.iconLocation}
                      />
                      {addressWorker}
                    </p>
                    <p className={styles.phone}>
                      <Image src={iconPhone} className={styles.iconPhone} />
                      {phoneNumberWorker}
                    </p>
                    <p className={styles.description}>{descriptionWorker}</p>
                  </Row>
                  <Row className={styles.left2}>
                    <Button
                      as={Link}
                      to="/jobbridge/profile-worker"
                      variant="fff"
                      className={styles.btnPrev}
                    >
                      Kembali
                    </Button>
                  </Row>
                </Col>
                <Col lg={8} md={8} sm={12} xs={12}>
                  <Row className={styles.right}>
                    <Col className={styles.col}>
                      <Row className={styles.rowTitleForm}>
                        <Col className={styles.colTitleForm}>
                          <p className={styles.titleForm}>Data Diri</p>
                        </Col>
                      </Row>
                      <span className={styles.span}></span>
                      <Form className={styles.colRight}>
                        <Form.Group>
                          <Form.Label className={styles.label}>
                            Nama lengkap
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Masukan nama lengkap "
                            className={styles.placeholder}
                            name="fullnameWorker"
                            value={this.state.biodata.fullnameWorker}
                            onChange={(event) => this.changeText(event)}
                          />
                        </Form.Group>

                        <Form.Group>
                          <Form.Label className={styles.label}>
                            Job desk
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Masukan job desk"
                            className={styles.placeholder}
                            name="roleWorker"
                            value={this.state.biodata.roleWorker}
                            onChange={(event) => this.changeText(event)}
                          />
                        </Form.Group>

                        <Form.Group>
                          <Form.Label className={styles.label}>
                            Job Time
                          </Form.Label>
                          <Form.Control
                            as="select"
                            type="text"
                            className={styles.placeholder}
                            value={this.state.biodata.workPreferenceWorker}
                            name="workPreferenceWorker"
                            onChange={(event) => this.changeText(event)}
                          >
                            <option>Freelance</option>
                            <option>Fulltime</option>
                          </Form.Control>
                        </Form.Group>

                        <Form.Group>
                          <Form.Label className={styles.label}>
                            Domisili
                          </Form.Label>
                          <Form.Control
                            placeholder="Masukan domisili"
                            className={styles.placeholder}
                            name="addressWorker"
                            value={this.state.biodata.addressWorker}
                            onChange={(event) => this.changeText(event)}
                          />
                        </Form.Group>

                        <Form.Group>
                          <Form.Label className={styles.label}>
                            No Telp
                          </Form.Label>
                          <Form.Control
                            placeholder="Masukan nomor telepon"
                            className={styles.placeholder}
                            name="phoneNumberWorker"
                            value={this.state.biodata.phoneNumberWorker}
                            onChange={(event) => this.changeText(event)}
                          />
                        </Form.Group>

                        <Form.Row>
                          <Form.Group as={Col}>
                            <Form.Label className={styles.label}>
                              Instagram
                            </Form.Label>
                            <Form.Control
                              placeholder="Masukan username IG"
                              className={styles.placeholder}
                              name="instagramWorker"
                              value={this.state.biodata.instagramWorker}
                              onChange={(event) => this.changeText(event)}
                            />
                          </Form.Group>

                          <Form.Group as={Col}>
                            <Form.Label className={styles.label}>
                              Github
                            </Form.Label>
                            <Form.Control
                              placeholder="Masukan username Github"
                              className={styles.placeholder}
                              name="githubWorker"
                              value={this.state.biodata.githubWorker}
                              onChange={(event) => this.changeText(event)}
                            />
                          </Form.Group>

                          <Form.Group as={Col}>
                            <Form.Label className={styles.label}>
                              Gitlab
                            </Form.Label>
                            <Form.Control
                              placeholder="Masukan username Gitlab"
                              className={styles.placeholder}
                              name="gitlabWorker"
                              value={this.state.biodata.gitlabWorker}
                              onChange={(event) => this.changeText(event)}
                            />
                          </Form.Group>
                        </Form.Row>

                        <Form.Group>
                          <Form.Label className={styles.label}>
                            Deskripsi singkat
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={5}
                            placeholder="Tuliskan deskripsi singkat"
                            className={styles.placeholder}
                            name="descriptionWorker"
                            value={this.state.biodata.descriptionWorker}
                            onChange={(event) => this.changeText(event)}
                          />
                        </Form.Group>
                        <Col>
                          <Row className={styles.rowBtnSave}>
                            <Button
                              as={Link}
                              to="/jobbridge/edit-worker"
                              variant="fff"
                              type="submit"
                              className={styles.btnSave}
                              onClick={() => this.updateData()}
                            >
                              Simpan
                            </Button>
                          </Row>
                        </Col>
                      </Form>
                    </Col>

                    <Col className={styles.col}>
                      <Row className={styles.rowTitleForm}>
                        <Col className={styles.colTitleForm}>
                          <p className={styles.titleForm}>Skill</p>
                        </Col>
                      </Row>
                      <span className={styles.span}></span>
                      <Form
                        className={styles.colRight}
                        onSubmit={this.updateSkill}
                      >
                        <Col className={styles.colForm}>
                          <Form.Group as={Row}>
                            <Col className={styles.skill}>
                              <Row className={styles.rowSkill}>
                                <Form.Control
                                  type="text"
                                  placeholder="Masukan skill "
                                  className={styles.placeholder}
                                  value={this.state.addSkill}
                                  onChange={(event) => this.addSkill(event)}
                                />
                              </Row>
                            </Col>
                            <Col lg={3}>
                              <Row className={styles.rowBtnSave}>
                                <Button
                                  as={Link}
                                  to="/jobbridge/edit-worker"
                                  variant="fff"
                                  type="submit"
                                  className={styles.btnSave}
                                  onClick={() => this.updateSkill()}
                                >
                                  Simpan
                                </Button>
                              </Row>
                            </Col>
                          </Form.Group>
                        </Col>
                        {skill.length > 0
                          ? skill.map((item, index) => {
                              return (
                                <Col key={index} className={styles.colSkill}>
                                  <Row>
                                    <Col>
                                      <Row>
                                        <Col lg={2} className={styles.colIndex}>
                                          <p className={styles.nameSkill}>
                                            {item}
                                          </p>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col
                                      lg={1}
                                      className={styles.colImageSkill}
                                    >
                                      <Image
                                        src={iconDelete}
                                        className={styles.iconDelete}
                                        onClick={() =>
                                          this.handleSkillDelete(index)
                                        }
                                      />
                                    </Col>
                                  </Row>
                                </Col>
                              );
                            })
                          : ""}
                      </Form>
                    </Col>

                    <Col className={styles.col}>
                      <Row className={styles.rowTitleForm}>
                        <Col className={styles.colTitleForm}>
                          <p className={styles.titleForm}>Pengalaman Kerja</p>
                        </Col>
                      </Row>
                      <span className={styles.span}></span>
                      <Form
                        className={styles.colRight}
                        // action="/jobbridge/edit-worker"
                        // onSubmit={this.submitData}
                      >
                        <Form.Row>
                          <Form.Group as={Col}>
                            <Form.Label className={styles.label}>
                              Nama perusahaan
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Masukan nama perusahaan"
                              className={styles.placeholder}
                              name="companyNameExperience"
                              value={companyNameExperience}
                              onChange={(event) =>
                                this.changeTextExperience(event)
                              }
                            />
                          </Form.Group>

                          <Form.Group as={Col}>
                            <Form.Label className={styles.label}>
                              Posisi
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Masukan posisi jabatan"
                              className={styles.placeholder}
                              name="posistionExperience"
                              value={posistionExperience}
                              onChange={(event) =>
                                this.changeTextExperience(event)
                              }
                            />
                          </Form.Group>
                        </Form.Row>
                        <Form.Row>
                          <Form.Group as={Col}>
                            <Form.Label className={styles.label}>
                              Tanggal masuk
                            </Form.Label>
                            <Form.Control
                              type="date"
                              placeholder="Masukan tahun masuk"
                              className={styles.placeholder}
                              name="workDateInExperience"
                              value={workDateInExperience}
                              onChange={(event) =>
                                this.changeTextExperience(event)
                              }
                            />
                          </Form.Group>

                          <Form.Group as={Col}>
                            <Form.Label className={styles.label}>
                              Tanggal keluar
                            </Form.Label>
                            <Form.Control
                              type="date"
                              placeholder="Masukan tahun keluar"
                              className={styles.placeholder}
                              name="workDateOutExperience"
                              value={workDateOutExperience}
                              onChange={(event) =>
                                this.changeTextExperience(event)
                              }
                            />
                          </Form.Group>
                        </Form.Row>
                        <Form.Group>
                          <Form.Label className={styles.label}>
                            Deskripsi singkat
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={5}
                            placeholder="Deskripsikan pekerjaan anda"
                            className={styles.placeholder}
                            name="jobDescExperience"
                            value={jobDescExperience}
                            onChange={(event) =>
                              this.changeTextExperience(event)
                            }
                          />
                        </Form.Group>
                        <span className={styles.span}></span>
                        <Col>
                          <Row className={styles.rowBtnSave1}>
                            <Button
                              as={Link}
                              to="/jobbridge/edit-worker"
                              variant="fff"
                              type="submit"
                              className={styles.btnAddExperienceWork}
                              onClick={() => this.submitData()}
                            >
                              Tambah pengalaman pekerja
                            </Button>
                          </Row>
                        </Col>
                        <Row className={styles.rowTabContent}>
                          {experience.map((item, index) => {
                            return (
                              <Col lg={12} md={12} xs={12} key={index}>
                                <Experience experience={item} />
                              </Col>
                            );
                          })}
                        </Row>
                        <span className={styles.span}></span>
                      </Form>
                    </Col>

                    <Col className={styles.col}>
                      <Row className={styles.rowTitleForm}>
                        <Col className={styles.colTitleForm}>
                          <p className={styles.titleForm}>Portofolio</p>
                        </Col>
                      </Row>
                      <span className={styles.span}></span>
                      <Form className={styles.colRight}>
                        <Form.Group>
                          <Form.Label className={styles.label}>
                            Nama aplikasi
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder={"Masukan nama aplikasi"}
                            name={"appNamePortofolio"}
                            value={appNamePortofolio}
                            className={styles.placeholder}
                            onChange={(event) =>
                              this.changeTextPortofolio(event)
                            }
                            required
                          />
                        </Form.Group>

                        <Form.Group>
                          <Form.Label className={styles.label}>
                            Link Repository
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder={"Masukan link repository"}
                            name="linkRepositoryPortofolio"
                            value={linkRepositoryPortofolio}
                            className={styles.placeholder}
                            onChange={(event) =>
                              this.changeTextPortofolio(event)
                            }
                            required
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label className={styles.label}>
                            Descrkripsi singkat
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={5}
                            placeholder={"Tuliskan deskripsi singkat"}
                            className={styles.placeholder}
                            name="appDescPortofolio"
                            value={appDescPortofolio}
                            onChange={(event) =>
                              this.changeTextPortofolio(event)
                            }
                            required
                          />
                        </Form.Group>
                        <Form.Group as={Form.File}>
                          <Form.Label className={styles.label}>
                            Upload gambar
                          </Form.Label>
                          <UploadImage
                            image={this.handleSendImage.bind(this)}
                          />
                        </Form.Group>
                        <span className={styles.span}></span>
                        <Col>
                          <Row className={styles.rowBtnSave1}>
                            <Button
                              as={Link}
                              to="/jobbridge/edit-worker"
                              variant="fff"
                              type="submit"
                              className={styles.btnAddExperienceWork}
                              onClick={
                                this.state.update
                                  ? () =>
                                      this.handleUpdate(
                                        this.props.worker.portofolioId
                                          .id_portofolio
                                      )
                                  : () => this.submitDataPortofolio()
                              }
                            >
                              {this.state.update
                                ? "Update Portofolio"
                                : "Tambah portofolio"}
                            </Button>
                            {this.props.worker.portofolio &&
                              this.props.worker.portofolio.map(
                                (item, index) => (
                                  <Col lg={3} md={4} xs={6} key={index}>
                                    <CardPortofolio
                                      portofolio={item}
                                      update={true}
                                      data={this.handleSetData.bind(this)}
                                      userId={this.props.auth.data.id_worker}
                                    />
                                  </Col>
                                )
                              )}
                          </Row>
                        </Col>
                      </Form>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
        {/* </div> */}
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  worker: state.worker,
});

const mapDispatchToProps = {
  UpdateBiodataWorker,
  getDataWorker,
  UpdateImageWorker,
  UpdateSkillWorker,
  CreateExperienceWorker,
  CreatePortofolioWorker,
  UpdatePortofolioId,
  getPortofolioId,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditWorker);
