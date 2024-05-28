import React, { Fragment, Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styles from "./Footer.module.scss";
import { Route, Link } from "react-router-dom";

//components
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import Overlay from "../../components/overlay/Overlay";
import Paragraph from "../../components/Paragraph/Paragraph";
import Image from "../../components/Image/Image";
import Logo from "../../components/Logo/Logo";
import Icon from "../../components/Icon/Icon";

//media
import heart from "../../images/heart.png";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className={`${styles.footer}`}>
          <Grid>
            <Row center="xs">
              <Col xs={11}>
                <Route
                  path="/"
                  exact
                  render={() => {
                    return (
                      <Overlay section="black">
                        <Row center="xs" middle="xs">
                          <Col lg={4} xs={12}>
                            <Title size="md">Start a project</Title>
                          </Col>
                          <Col lg={4} xs={12}>
                            <Paragraph size="md">
                              Interested in working together? We should queue up
                              a chat. I’ll buy the coffee.
                            </Paragraph>
                          </Col>
                          <Col lg={4} xs={12}>
                            <Link to='/contact'>
                              <Button to="/contact" type="black">Let's do this</Button>
                            </Link>
                          </Col>
                        </Row>
                      </Overlay>
                    );
                  }}
                />
              </Col>

              <Col lgOffset={1} xs={12}>
                <Row middle="xs" center="xs">
                  <Col lg={4} xs={12}>
                    <Row center='xs' middle="xs">
                      <Title size="sm">Email:</Title>
                      <a
                        style={{
                          position: "relative",
                          marginLeft: "10px",
                          top: "-12px",
                          color: "#fff",
                          textDecoration: "none",
                          display: "inline-block"
                        }}
                        href="mailto:rrojaski@gmail.com"
                      >
                        <Paragraph>rrojaski@gmail.com</Paragraph>
                      </a>
                    </Row>
                    <Row center='xs' middle="xs">
                      <Title size="sm">Phone:</Title>
                      <a
                        style={{
                          position: "relative",
                          marginLeft: "10px",
                          top: "-10px",
                          color: "#fff",
                          textDecoration: "none",
                          display: "inline-block"
                        }}
                        href="tel:9042715715"
                      >
                        <Paragraph>904 - 271 - 5715</Paragraph>
                      </a>
                    </Row>
                  </Col>
                  <Col lg={8} xs={12}>
                    <Row center="xs">
                      <Col xs={12}>
                        <Row middle="xs" center="xs">
                          <Col xs={1}>
                            <div style={{ position: "relative" }}>
                              <div className={`${styles.logoBack}`}>
                                <Logo />
                              </div>
                              <div className={`${styles.removeBorder}`} />
                            </div>
                          </Col>
                        </Row>
                        <Row center="xs">
                          <Col lg={6} xs={11}>
                            <Paragraph size="lg">
                              Living, learning, & leveling up one day at a time.
                            </Paragraph>
                            <br />
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={12}>
                        <Icon
                          name="linkedin"
                          type="shake"
                          href="https://www.linkedin.com/in/roman-rojas"
                        />
                        <Icon
                          name="dribble"
                          type="jump"
                          href="https://dribbble.com/romanrojas"
                        />
                        <Icon
                          name="github"
                          type="spin"
                          href="https://github.com/Rrojaski"
                        />
                      </Col>
                      <Col xs={12}>
                        <Paragraph>
                          Made with love{" "}
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.youtube.com/watch?v=ZZ5LpwO-An4"
                          >
                            <Image sizeX="1rem" src={heart} />
                          </a>{" "}
                          by Roman Rojas
                        </Paragraph>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default Footer;
