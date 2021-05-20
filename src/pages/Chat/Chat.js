import React, { Component } from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import NavBar from "../../assets/navbar/Navbar";
import Footer from "../../assets/footer/Footer";
import styles from "./Chat.module.css";
import chatImg from "../../assets/img/chat.png";
import profile from "../../assets/img/profile.png";
import send from "../../assets/img/send.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: false,
      openChat: false,
    };
  }
  handleChat = (params) => {
    this.setState({
      openChat: params,
    });
  };
  render() {
    const { chat, openChat } = this.state;
    return (
      <>
        <NavBar />
        <Container fluid className={styles.container1}>
          <Container className={styles.container}>
            <Row className={styles.rowContainer}>
              <Col lg={4}>
                {chat === false ? (
                  <Row className={styles.left}>
                    <p className={styles.titleChat}>Chat</p>
                    <span className={styles.span}></span>
                    <Col className={styles.colChat}>
                      <Image src={chatImg} className={styles.chat} />
                      <p className={styles.textChat}>Belum ada chat</p>
                    </Col>
                  </Row>
                ) : (
                  <Row className={styles.left}>
                    <p className={styles.titleChat}>Chat</p>
                    <span className={styles.span}></span>
                    <Button
                      variant="fff"
                      className={styles.rowUserChat}
                      onClick={() => this.handleChat(true)}
                    >
                      <Row>
                        <Image src={profile} className={styles.profileUser} />
                        <Col className={styles.colMessage}>
                          <p className={styles.nameUser}>Jonas Adam</p>
                          <p className={styles.messagesUser}>
                            Permisi kak, mau tanya...
                          </p>
                        </Col>
                      </Row>
                    </Button>
                  </Row>
                )}
              </Col>
              <Col lg={8}>
                {openChat === false ? (
                  <Row className={styles.right}>
                    <p className={styles.titleObrolan}>Chat</p>
                    <span className={styles.span}></span>
                  </Row>
                ) : (
                  <Row className={styles.right}>
                    <p className={styles.titleObrolan1}>
                      <Image src={profile} className={styles.profileUser1} />
                      Jonas Adam
                    </p>
                    <span className={styles.span}></span>
                    <Col>
                      <Row>
                        <Form className={styles.formChat}>
                          <Form.Control
                            type="text"
                            placeholder="Type message..."
                            className={styles.placeholder}
                          />
                          <p className={styles.boxSend}>
                            <Image src={send} className={styles.send} />
                          </p>
                        </Form>
                      </Row>
                    </Col>
                  </Row>
                )}
              </Col>
            </Row>
          </Container>
        </Container>
        <Footer />
      </>
    );
  }
}

export default Home;
