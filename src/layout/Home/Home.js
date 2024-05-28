import React, { Fragment, Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import StorageIcon from "@material-ui/icons/Storage";
import VerticalSplitIcon from "@material-ui/icons/VerticalSplit";

import styles from "./Home.module.scss";

// components
import Pane from "../../components/Pane/Pane";
import Section from "../../components/Section/Section";
import Avatar from "../../components/Avatar/Avatar";
import Title from "../../components/Title/Title";
import Paragraph from "../../components/Paragraph/Paragraph";
import Overlay from "../../components/overlay/Overlay";
import Image from "../../components/Image/Image";

//media
import francisco from "../../images/francisco.jfif";
import claudio from "../../images/claudio.jfif";

import { CarouselProvider, Slider, Slide, Dot } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

// Font Icon
const svgIcon = {
  color: "#1a73e8",
  fontSize: "5rem",
  margin: "0 auto",
  marginBottom: "1rem",
  display: "block",
  position: "relative",
};

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className={`${styles.home}`}>
          <Section
            backColor="#EBEBEB"
            pad="210px 0 380px 0"
            className={`${styles.city}`}
          >
            <Grid>
              <Row center="xs">
                <Col md={12} xs={11}>
                  <Row center="xs">
                    <Col xs={12}>
                      <Title size="lg">Software Engineer</Title>
                      <br />

                      <Title size="sm">
                        I design and code beautifully simple things, and I love
                        what I do.
                      </Title>
                    </Col>

                    <Col xs={12}>
                      <Row center="xs">
                        <Avatar alt="Avatar of author. Has red hair and pale skin with freckles." />
                        <div className={`${styles.removeBorder}`} />
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Grid>
          </Section>
          <Section
            mar="-1px 0 0 0"
            pad="100px 0 220px 0"
            color="#fff"
            backColor="#1a73e8"
          >
            <Grid>
              <Row center="xs">
                <Col md={12} xs={11}>
                  <Row center="xs">
                    <Col lg={8} xs={12}>
                      <Title size="md">Hi, I’m Roman. Nice to meet you.</Title>
                      <Paragraph>
                        I'm an experienced Software Engineer based in the United
                        States. I have worked with start-ups and large
                        organizations helping them write efficient code for
                        their websites and mobile apps using modern frameworks
                        and tools.
                      </Paragraph>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Grid>
          </Section>
          <Section backColor="#EBEBEB">
            <Grid>
              <Row center="xs">
                <Col lg={12} md={10} xs={11}>
                  <Row center="xs">
                    <Col lg={6} xs={12}>
                      <Overlay section="white" position="first">
                        <VerticalSplitIcon style={svgIcon} />
                        <Title size="sm">Front-end Developer</Title>
                        <Paragraph size="md" extra="mar">
                          I like to code things from scratch, and enjoy bringing
                          ideas to life in the browser.
                        </Paragraph>
                        <Paragraph size="md" color="colored">
                          Languages I speak:
                        </Paragraph>
                        <Paragraph size="md" extra="mar">
                          JavaScript, TypeScript, Dart, CSS, Sass
                        </Paragraph>
                        <Paragraph size="md" color="colored">
                          Dev Tools:
                        </Paragraph>
                        <Paragraph size="md">
                          REACT
                          <br />
                          Angular
                          <br />
                          Flutter
                          <br />
                          Bootstrap
                          <br />
                          NODE.js
                          <br />
                          Firebase
                          <br />
                          Github
                          <br />
                          Jasmine
                          <br />
                          Karma
                        </Paragraph>
                      </Overlay>
                    </Col>
                    <Col lg={6} xs={12}>
                      <Overlay section="white" position="third">
                        <StorageIcon style={svgIcon} />
                        <Title size="sm">Full-Stack Developer</Title>
                        <Paragraph size="md" extra="mar">
                          I have the elemental skills needed to launch a full
                          scale interactive web appliccation.
                        </Paragraph>
                        <Paragraph size="md" color="colored">
                          Languages I speak:
                        </Paragraph>
                        <Paragraph size="md" extra="mar">
                          C#, JavaScript
                        </Paragraph>
                        <Paragraph size="md" color="colored">
                          Dev Tools:
                        </Paragraph>
                        <Paragraph size="md">
                          .NET
                          <br />
                          Azure
                          <br />
                          .NET Core
                          <br />
                          SQL
                          <br />
                          HTTP, HTTPS, APIs
                          <br />
                          React
                          <br />
                          NODE.js
                          <br />
                          Github
                          <br />
                          NPM
                        </Paragraph>
                      </Overlay>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Grid>
          </Section>
          <Section
            backColor="#EBEBEB"
            borderBottom="1px solid #E6ECF8"
            pad="50px 0 100px 0"
          >
            <Grid>
              <Row center="xs">
                <Col lg={12} md={10} xs={11}>
                  <Row>
                    <Col xs={12}>
                      <Title size="md">My Recent Work</Title>
                      <Paragraph>
                        Here are a few recent design projects. Want to see more?
                        <a
                          href="mailto:rrojaski@gmail.com"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          Email me
                        </a>
                        .
                      </Paragraph>
                    </Col>
                    <Col lg={4} xs={12}>
                      <Pane
                        target="_blank"
                        href="https://suddath.com"
                        color="dark"
                        type="kidafh"
                        desc=""
                      />
                    </Col>
                    <Col lg={4} xs={12}>
                      <Pane
                        target="_blank"
                        color="dark"
                        href="https://www.facebook.com/otakuchancom"
                        type="anime"
                        desc="An e-comerse anime website shipping to over 180 Countries"
                      />
                    </Col>
                    <Col lg={4} xs={12}>
                      <Pane
                        target="_blank"
                        color="dark"
                        href="https://stupefied-kepler-3384a4.netlify.com"
                        type="css"
                        desc="This visually appealing website showcases advanced css designs"
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Grid>
          </Section>
          <Section backColor="#EBEBEB" pad="50px 0 100px 0">
            <Grid>
              <Row center="xs">
                <Col md={12} xs={12}>
                  <Col xs={12}>
                    <Title size="md">Testimonials</Title>
                    <Paragraph>
                      People I've worked with have said some nice things...
                    </Paragraph>
                    <br />
                    <br />
                    <br />
                  </Col>
                  <Col xs={12}>
                    <Row center="xs">
                      <Col lg={8} xs={11}>
                        <CarouselProvider
                          naturalSlideWidth={10}
                          naturalSlideHeight={2}
                          totalSlides={2}
                          touchEnabled={true}
                        >
                          <Slider>
                            <Slide className={`${styles.slide}`} index={0}>
                              <a
                                target="_blank"
                                href="https://github.com/daiky00"
                                rel="noopener noreferrer"
                              >
                                <Image
                                  sizeX="100px"
                                  radius="50%"
                                  src={francisco}
                                />
                              </a>
                              <br />
                              <br />
                              <br />
                              <Paragraph>
                                “This guy really knows his stuff. I've had Roman
                                complete work for me and he's been able to
                                provide quality work on time.”
                              </Paragraph>
                              <Title size="name">Francisco Pena</Title>
                              <Paragraph size="sm">
                                Senior Frontend Developer, Nami ML
                              </Paragraph>
                            </Slide>
                            <Slide index={1}>
                              <a
                                target="_blank"
                                href="https://www.linkedin.com/in/kiallio/"
                                rel="noopener noreferrer"
                              >
                                <Image
                                  sizeX="100px"
                                  radius="50%"
                                  src={claudio}
                                />
                              </a>
                              <br />
                              <br />
                              <br />
                              <Paragraph>
                                “Roman was a real pleasure to work with and we
                                look forward to working with him again. He’s
                                definitely the kind of Web Developer you can
                                trust with a project from start to finish.”
                              </Paragraph>
                              <Title size="name">Claudio Rojas</Title>
                              <Paragraph size="sm">
                                Web Developer, LaGuardia Community College
                              </Paragraph>
                            </Slide>
                          </Slider>
                          <Dot className={`${styles.dot}`} slide={0} />
                          <Dot className={`${styles.dot}`} slide={1} />
                        </CarouselProvider>
                      </Col>
                    </Row>
                  </Col>
                </Col>
              </Row>
            </Grid>
          </Section>
        </div>
      </Fragment>
    );
  }
}

export default Home;
