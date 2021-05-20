import React, { Component } from "react";
import { Container } from "react-bootstrap";
import NavBar from "../assets/navbar/Navbar";
import Footer from "../assets/footer/Footer";

class Home extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Container>
          <h1>FRONT-END JOB BRIDGE</h1>
        </Container>
        <Footer />
      </>
    );
  }
}

export default Home;
