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
import SearchWorkerStyle from "./SearchWorkerStyle.module.css";

class SearchWorkerPage extends Component {
  render() {
    return (
      <>
        <Container>
          <div className={`${SearchWorkerStyle.top_jobs_background} py-2 mt-5`}>
            <h3 className="text-light ml-5">Top Jobs</h3>
          </div>
          <Form className="mt-5 ml-2">
            <Form.Row>
              <InputGroup>
                <Form.Control
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
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
                  <Dropdown.Divider />
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
                <p>Louis Tomlinson</p>
                <p className="text-muted">Web developer - freelance</p>
                <p className="text-muted">Lorem ipsum</p>
                <Row className="mx-0">
                  <Button className={`${SearchWorkerStyle.skills_button} mr-3`}>
                    PHP
                  </Button>
                  <Button className={`${SearchWorkerStyle.skills_button} mr-3`}>
                    Javascript
                  </Button>
                  <Button className={`${SearchWorkerStyle.skills_button} mr-3`}>
                    HTML
                  </Button>
                </Row>
              </Col>
              <Col>
                <p className="align-self-center">Lihat Profile</p>
              </Col>
            </Row>
          </div>
        </Container>
      </>
    );
  }
}

export default SearchWorkerPage;
