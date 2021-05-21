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
} from "react-bootstrap";
import ReactPaginate from "react-paginate";
import ProfilePicture from "../../assets/img/default-profile-picture.png";
import SearchWorkerStyle from "./SearchWorkerStyle.module.css";

class SearchWorkerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      pagination: {},
    };
  }

  handlePageClick = (event) => {
    const selectedPage = event.selected + 1;
    this.setState({ page: selectedPage }, () => {
      // this.getData();
      console.log(selectedPage);
    });
  };

  render() {
    const { totalPage } = this.state.pagination;
    return (
      <>
        <Container>
          <div className={`${SearchWorkerStyle.top_jobs_background} py-2 mt-5`}>
            <h3 className="text-light ml-5">Top Jobs</h3>
          </div>
          <Form className={`${SearchWorkerStyle.form_size} mt-5`}>
            <Form.Row>
              <InputGroup>
                <Form.Control
                  placeholder="Search for any skill"
                  aria-label="Search for any skill"
                  aria-describedby="basic-addon2"
                />
                <DropdownButton
                  as={InputGroup.Append}
                  variant="outline-secondary"
                  className={SearchWorkerStyle.sort_button}
                  title="Sort"
                  id="input-group-dropdown-2"
                >
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
                <InputGroup.Append>
                  <Button
                    variant="outline-secondary"
                    className={SearchWorkerStyle.search_button}
                  >
                    Search
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Row>
          </Form>
          <div className="mt-5">
            <Row className="ml-5">
              <Col className="ml-5">
                <Row>
                  <Col xs={2}>
                    <img
                      src={ProfilePicture}
                      alt="worker profile"
                      className={SearchWorkerStyle.profile_picture_size}
                    />
                  </Col>
                  <Col>
                    <p>Louis Tomlinson</p>
                    <p className="text-muted">Web developer - Freelance</p>
                    <p className="text-muted">Lorem ipsum</p>
                    <Row className={SearchWorkerStyle.skills_position}>
                      <Button
                        className={`${SearchWorkerStyle.skills_button} mr-3`}
                      >
                        PHP
                      </Button>
                      <Button
                        className={`${SearchWorkerStyle.skills_button} mr-3`}
                      >
                        Javascript
                      </Button>
                      <Button
                        className={`${SearchWorkerStyle.skills_button} mr-3`}
                      >
                        HTML
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col sm={3}>
                <Button
                  className={`${SearchWorkerStyle.get_profile_button} mt-4`}
                >
                  Lihat Profil
                </Button>
              </Col>
            </Row>
            <hr className={`${SearchWorkerStyle.line_size} mt-5`} />
            <Row className="ml-5 mt-5">
              <Col className="ml-5">
                <Row>
                  <Col xs={2}>
                    <img
                      src={ProfilePicture}
                      alt="worker profile"
                      className={SearchWorkerStyle.profile_picture_size}
                    />
                  </Col>
                  <Col>
                    <p>Louis Tomlinson</p>
                    <p className="text-muted">Web developer - Freelance</p>
                    <p className="text-muted">Lorem ipsum</p>
                    <Row className={SearchWorkerStyle.skills_position}>
                      <Button
                        className={`${SearchWorkerStyle.skills_button} mr-3`}
                      >
                        PHP
                      </Button>
                      <Button
                        className={`${SearchWorkerStyle.skills_button} mr-3`}
                      >
                        Javascript
                      </Button>
                      <Button
                        className={`${SearchWorkerStyle.skills_button} mr-3`}
                      >
                        HTML
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col sm={3}>
                <Button
                  className={`${SearchWorkerStyle.get_profile_button} mt-4`}
                >
                  Lihat Profil
                </Button>
              </Col>
            </Row>
            <hr className={`${SearchWorkerStyle.line_size} mt-5`} />
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
      </>
    );
  }
}

export default SearchWorkerPage;
