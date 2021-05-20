import React, { Component } from "react";
import { Container, Row, Col, Image, Button, Form } from "react-bootstrap";
import NavBar from "../../../assets/navbar/Navbar";
import Footer from "../../../assets/footer/Footer";
import styles from "./EditWorker.module.css";
import imgProfile from "../../../assets/img/louis.png";
import iconLocation from "../../../assets/img/icon-location.png";
import iconPhone from "../../../assets/img/icon-phone.png";
import iconEdit from "../../../assets/img/icon-edit.png";
import iconDelete from "../../../assets/img/icon-delete.png";
import UploadImage from "../../../components/UploadImage/UploadImage";

class EditWorker extends Component {
  render() {
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
              </Row>
              <Row className={styles.left2}>
                <Button variant="fff" className={styles.btnPrev}>
                  Kembali
                </Button>
              </Row>
            </Col>
            <Col lg={8}>
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
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label className={styles.label}>Job desk</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Masukan job desk"
                        className={styles.placeholder}
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label className={styles.label}>Domisili</Form.Label>
                      <Form.Control
                        placeholder="Masukan domisili"
                        className={styles.placeholder}
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
                        />
                      </Form.Group>

                      <Form.Group as={Col}>
                        <Form.Label className={styles.label}>Github</Form.Label>
                        <Form.Control
                          placeholder="Masukan username Github"
                          className={styles.placeholder}
                        />
                      </Form.Group>

                      <Form.Group as={Col}>
                        <Form.Label className={styles.label}>Gitlab</Form.Label>
                        <Form.Control
                          placeholder="Masukan username Gitlab"
                          className={styles.placeholder}
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
                      />
                    </Form.Group>
                    <Col>
                      <Row className={styles.rowBtnSave}>
                        <Button
                          variant="fff"
                          type="submit"
                          className={styles.btnSave}
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
                  <Form className={styles.colRight}>
                    <Col className={styles.colForm}>
                      <Form.Group as={Row}>
                        <Col className={styles.skill}>
                          <Row className={styles.rowSkill}>
                            <Form.Control
                              type="text"
                              placeholder="Masukan skill "
                              className={styles.placeholder}
                            />
                          </Row>
                        </Col>
                        <Col lg={3}>
                          <Row className={styles.rowBtnSave}>
                            <Button
                              variant="fff"
                              type="submit"
                              className={styles.btnSave}
                            >
                              Simpan
                            </Button>
                          </Row>
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Row className={styles.menuSkill}>
                        <p className={styles.nameSkill}>Phyton</p>
                        <Image src={iconEdit} className={styles.iconEdit} />
                        <Image src={iconDelete} className={styles.iconDelete} />
                      </Row>
                    </Col>
                  </Form>
                </Col>

                <Col className={styles.col}>
                  <Row className={styles.rowTitleForm}>
                    <Col className={styles.colTitleForm}>
                      <p className={styles.titleForm}>Pengalaman Kerja</p>
                    </Col>
                  </Row>
                  <span className={styles.span}></span>
                  <Form className={styles.colRight}>
                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Label className={styles.label}>
                          Nama perusahaan
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Masukan nama perusahaan"
                          className={styles.placeholder}
                        />
                      </Form.Group>

                      <Form.Group as={Col}>
                        <Form.Label className={styles.label}>Posisi</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Masukan posisi jabatan"
                          className={styles.placeholder}
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
                          placeholder="Masukan nama perusahaan"
                          className={styles.placeholder}
                        />
                      </Form.Group>

                      <Form.Group as={Col}>
                        <Form.Label className={styles.label}>
                          Tanggal keluar
                        </Form.Label>
                        <Form.Control
                          type="date"
                          placeholder="Masukan posisi jabatan"
                          className={styles.placeholder}
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
                      />
                    </Form.Group>
                    <span className={styles.span}></span>
                    <Col>
                      <Row className={styles.rowBtnSave1}>
                        <Button
                          variant="fff"
                          type="submit"
                          className={styles.btnAddExperienceWork}
                        >
                          Tambah pengalaman pekerja
                        </Button>
                      </Row>
                    </Col>
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
                        placeholder="Masukan nama aplikasi"
                        className={styles.placeholder}
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label className={styles.label}>
                        Link Repository
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Masukan link repository"
                        className={styles.placeholder}
                      />
                    </Form.Group>
                    <Form.Group as={Form.File}>
                      <Form.Label className={styles.label}>
                        Upload gambar
                      </Form.Label>
                      <UploadImage />
                    </Form.Group>
                    <span className={styles.span}></span>
                    <Col>
                      <Row className={styles.rowBtnSave1}>
                        <Button
                          variant="fff"
                          type="submit"
                          className={styles.btnAddExperienceWork}
                        >
                          Tambah portofolio
                        </Button>
                      </Row>
                    </Col>
                  </Form>
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

export default EditWorker;
