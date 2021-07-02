import React, { Component } from "react";
import {
  Container,
  Form,
  Button,
  InputGroup,
  Dropdown,
  DropdownButton,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import ReactPaginate from "react-paginate";
import axiosApiIntances from "../../utils/axios";
import ProfilePicture from "../../assets/img/default-profile-picture.png";
import SearchWorkerStyle from "./SearchWorkerStyle.module.css";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

class SearchWorkerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      sortBy: "ORDER BY w.number_of_skills_worker ASC|sort by",
      search: "",
      page: 1,
      limit: 2,
      pagination: {},
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const { sortBy, search, page, limit } = this.state;
    axiosApiIntances
      .get(
        `worker?sortBy=${
          sortBy.split("|")[0]
        }&search=%${search}%&page=${page}&limit=${limit}`
      )
      .then((res) => {
        // console.log(res.data);
        this.setState({
          data: res.data.data,
          pagination: res.data.pagination,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  getWorker = (id) => {
    console.log("get worker id ", id);
    this.props.history.push(`/jobbridge/profile-worker?id=${id}`);
  };

  changeText = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSelect = (event) => {
    // console.log(event);
    this.setState({
      sortBy: event,
    });
  };

  handlePageClick = (event) => {
    const selectedPage = event.selected + 1;
    this.setState({ page: selectedPage }, () => {
      this.getData();
      console.log(selectedPage);
    });
  };

  handleSearch = () => {
    const { sortBy, search, page, limit } = this.state;
    this.setState({ page: 1 }, () => {
      this.getData();
      this.props.history.push(
        `/search-worker?search=${search}&sortBy=${
          sortBy.split("|")[1]
        }&page=${page}&limit=${limit}`
      );
    });
  };

  render() {
    const { totalPage } = this.state.pagination;
    const { data, search, sortBy } = this.state;
    console.log(this.state);

    return (
      <>
        <NavBar />
        <Container className={`${SearchWorkerStyle.container}`}>
          <div className={`${SearchWorkerStyle.top_jobs_background}`}>
            <h3 className="text-light ml-5">Top Jobs</h3>
          </div>
          <Form className={`${SearchWorkerStyle.form_size} mt-5`}>
            <Form.Row>
              <InputGroup>
                <Form.Control
                  placeholder="Search for any skill"
                  aria-label="Search for any skill"
                  aria-describedby="basic-addon2"
                  className={SearchWorkerStyle.placeholder}
                  name="search"
                  value={search}
                  onChange={(event) => this.changeText(event)}
                />
                <DropdownButton
                  as={InputGroup.Append}
                  variant="fff"
                  className={SearchWorkerStyle.sort_button}
                  title={sortBy.split("|")[1]}
                  id="input-group-dropdown-2"
                  onSelect={this.handleSelect}
                >
                  <Dropdown.Item eventKey="ORDER BY w.fullname_worker ASC|Sortir berdasarkan Nama">
                    Sortir berdasarkan Nama
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="ORDER BY w.number_of_skills_worker DESC|Sortir berdasarkan Skill">
                    Sortir berdasarkan Skill
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="ORDER BY w.city_worker ASC|Sortir berdasarkan Lokasi">
                    Sortir berdasarkan Lokasi
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="AND w.work_preference_worker = 'part-time'|Sortir berdasarkan Freelance">
                    Sortir berdasarkan Freelance
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="AND w.work_preference_worker = 'full-time'|Sortir berdasarkan Fulltime">
                    Sortir berdasarkan Fulltime
                  </Dropdown.Item>
                </DropdownButton>
                <InputGroup.Append>
                  <Button
                    variant="outline-secondary"
                    className={SearchWorkerStyle.search_button}
                    onClick={() => this.handleSearch()}
                  >
                    Search
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Row>
          </Form>
          <div className="mt-5 ml-5 mr-5 pl-5 pr-5">
            {data.length > 0
              ? data.map((item, index) => {
                  return (
                    <Row key={index}>
                      <Col>
                        <Row>
                          <Col md={2} className="text-center">
                            <Image
                              src={
                                item.image_worker.length > 0
                                  ? `${process.env.REACT_APP_IMAGE_URL}${item.image_worker}`
                                  : ProfilePicture
                              }
                              alt="no image"
                              className={SearchWorkerStyle.profile_picture_size}
                              roundedCircle
                            />
                          </Col>
                          <Col md={8}>
                            <p className="ml-3">{item.fullname_worker}</p>
                            <p className="text-muted ml-3">
                              {`${item.role_worker} - ${item.work_preference_worker}`}
                            </p>
                            <p className="text-muted ml-3">
                              {item.address_worker}
                            </p>
                            <Row className={SearchWorkerStyle.skills_position}>
                              {item.skill.map((item, index) => {
                                return (
                                  <Col key={index} xs={3}>
                                    <Button
                                      className={`${SearchWorkerStyle.skills_button} mr-3`}
                                      style={{ width: "100%" }}
                                    >
                                      {item.name_skill}
                                    </Button>
                                  </Col>
                                );
                              })}
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                      <Col sm={3}>
                        <Button
                          className={`${SearchWorkerStyle.get_profile_button} mt-4`}
                          onClick={() => this.getWorker(item.id_worker)}
                          style={{ width: "100%" }}
                        >
                          Lihat Profil
                        </Button>
                      </Col>
                      <hr
                        className={`${SearchWorkerStyle.line_size} mt-4 mb-4`}
                      />
                    </Row>
                  );
                })
              : ""}
          </div>
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={totalPage} //total page
            marginPagesDisplayed={0}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={SearchWorkerStyle.pagination}
            subContainerClassName={`${SearchWorkerStyle.pages} ${SearchWorkerStyle.pagination}`}
            activeClassName={SearchWorkerStyle.active}
          />
        </Container>
        <Footer />
      </>
    );
  }
}

export default SearchWorkerPage;
