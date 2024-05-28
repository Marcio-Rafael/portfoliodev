import { Grid, Row, Col } from "react-flexbox-grid";
import React, { Fragment, Component } from "react";
import styles from "./Header.module.scss";
import { Route, Link } from "react-router-dom";

//components
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import Menu from "../../components/Menu/Menu";
import Paragraph from "../../components/Paragraph/Paragraph";

// CV
import agent_file from "../../Rojas_Roman_CV.pdf";

// images
import close from "../../images/close.svg";

class Header extends Component {
  handleClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  handleBlur() {
    setTimeout(() => {
      this.setState({ isOpen: false });
    }, 100);
  }
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.isOpen,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  render() {
    return (
      <Fragment>
        <div className={`${styles.header}`}>
          <Grid>
            <Row center="xs" middle="xs">
              <Col xs={11}>
                <Row between="xs" middle="xs">
                  <Col lg={6} xs={11}>
                    <Row middle="xs">
                      <Row middle="xs">
                        <Link to="/">
                          <Logo />
                        </Link>
                      </Row>
                    </Row>
                  </Col>
                  <Col lg={6} xs={1}>
                    <Route
                      path="/"
                      exact
                      render={() => {
                        return (
                          <Row middle="xs" end="xs">
                            <div
                              className={`${
                                this.state.isOpen ? styles.open : ""
                              }`}
                            >
                              <Menu
                                isOpen={this.state.isOpen}
                                handleClick={this.handleClick}
                                handleBlur={this.handleBlur}
                              >
                                <div className={`${styles.mobileOpen}`}>
                                  <Row center="xs">
                                    <Col xs={10}>
                                      <Row middle="xs" center="xs">
                                        <Col xs={12}>
                                          <Link to="/work">
                                            <Paragraph className="display">
                                              Work
                                            </Paragraph>
                                          </Link>
                                        </Col>
                                        <Col xs={6}>
                                          <Button
                                            className="display"
                                            type="white"
                                            link="/contact"
                                          >
                                            Say Hello
                                          </Button>
                                        </Col>
                                        <Col xs={6}>
                                          <Button
                                            path={agent_file}
                                            download="Rojas_Roman_CV"
                                            target="_self"
                                            className="display"
                                            type="red"
                                          >
                                            My CV
                                          </Button>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                </div>
                              </Menu>
                            </div>
                            <Col xs={1}>
                              <Link to="/work">
                                <div className={`${styles.mobileClose}`}>
                                  <Paragraph className="display">
                                    Work
                                  </Paragraph>
                                </div>
                              </Link>
                            </Col>
                            <Col xs={4}>
                              <div className={`${styles.mobileClose}`}>
                                <Button
                                  link="/contact"
                                  path={agent_file}
                                  className="display"
                                  type="white"
                                >
                                  Say Hello
                                </Button>
                              </div>
                            </Col>
                            <Col lg={3} xs={1}>
                              <div className={`${styles.mobileClose}`}>
                                <Button
                                  path={agent_file}
                                  download="Rojas_Roman_CV"
                                  target="_self"
                                  className="display"
                                  type="red"
                                >
                                  My CV
                                </Button>
                              </div>
                            </Col>
                          </Row>
                        );
                      }}
                    />
                    <Route
                      path="/contact"
                      render={() => {
                        return (
                          <Row middle="xs" end="xs">
                            <Col xs={1}>
                              <Link to="/">
                                <img
                                  style={{
                                    position: "relative",
                                    left: "-35px",
                                    width: "25px",
                                  }}
                                  src={close}
                                  alt="Close button"
                                />
                              </Link>
                            </Col>
                          </Row>
                        );
                      }}
                    />
                    <Route
                      path="/work"
                      exact
                      render={() => {
                        return (
                          <Row middle="xs" end="xs">
                            <div
                              className={`${
                                this.state.isOpen ? styles.open : ""
                              }`}
                            >
                              <Menu
                                isOpen={this.state.isOpen}
                                handleClick={this.handleClick}
                                handleBlur={this.handleBlur}
                              >
                                <div className={`${styles.mobileOpen}`}>
                                  <Row center="xs">
                                    <Col xs={6}>
                                      <Button link="/contact" type="white">
                                        Say Hello
                                      </Button>
                                    </Col>
                                    <Col xs={6}>
                                      <Button
                                        path={agent_file}
                                        download="Rojas_Roman_CV"
                                        target="_self"
                                        className="display"
                                        type="red"
                                      >
                                        My CV
                                      </Button>
                                    </Col>
                                  </Row>
                                </div>
                              </Menu>
                            </div>
                            <Col md={4} xs={1}>
                              <div className={`${styles.mobileClose}`}>
                                <Button link="/contact" type="white">
                                  Say Hello
                                </Button>
                              </div>
                            </Col>
                            <Col lg={3} xs={1}>
                              <div className={`${styles.mobileClose}`}>
                                <Button
                                  path={agent_file}
                                  download="Rojas_Roman_CV"
                                  target="_self"
                                  className="display"
                                  type="red"
                                >
                                  My CV
                                </Button>
                              </div>
                            </Col>
                          </Row>
                        );
                      }}
                    />
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

export default Header;
