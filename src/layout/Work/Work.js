import React, { Fragment, Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styles from "./Work.module.scss";

//components
import Section from "../../components/Section/Section";
import Title from "../../components/Title/Title";
import Paragraph from "../../components/Paragraph/Paragraph";
import Image from "../../components/Image/Image";
import Button from "../../components/Button/Button";
import Pane from "../../components/Pane/Pane";

//media
import suddath from "../../images/suddath.jpg";
import animeCover from "../../images/otakuchan.jpg";
import animeChart from "../../images/anichart.PNG";
import anilistmp4 from "../../images/anilist.mp4";
import anilistwebm from "../../images/anilist.webm";

class Work extends Component {
  render() {
    return (
      <Fragment>
        <Section backColor="#EBEBEB" pos="bottom" pad="220px 0">
          <Grid>
            <Row center="xs">
              <Col>
                <Title size="work">“Out of clutter, find simplicity.”</Title>
                <Paragraph size="lg">― Albert Einstein</Paragraph>
              </Col>
            </Row>
          </Grid>
        </Section>
        <Section
          className="border"
          backColor="#c7041b"
          color="white"
          pad="80px 0"
        >
          <Grid>
            <Row center="xs">
              <Col lg={12} xs={11}>
                <Title size="lg">Suddath</Title>
                <a
                  target="_blank"
                  href="https://www.suddath.com/"
                  rel="noopener noreferrer"
                >
                  <Image
                    sizeX="80%"
                    mar="10px auto 40px auto"
                    display="block"
                    src={suddath}
                  />
                </a>
                <Paragraph>
                  As a proficient software engineer at Suddath, a trusted leader
                  in moving and logistics for over a century, I've been pivotal
                  in driving technological advancements. By harnessing Angular,
                  and .NET Core, I've crafted and upheld web applications that
                  have amplified operational efficiency. Guiding the migration
                  of legacy systems to the latest Angular and .NET Core
                  iterations, I've been instrumental in achieving a more agile
                  and scalable architectural framework. My expertise also
                  encompasses fine-tuning data operations within Microsoft SQL
                  Server, ensuring impeccable data storage and retrieval.
                </Paragraph>
                <br />
                <br />
                <br />
                <Button path="https://www.suddath.com/" type="work">
                  Visit Site
                </Button>
              </Col>
            </Row>
          </Grid>
        </Section>
        <Section
          className="border"
          backColor="rgb(49, 53, 91)"
          color="white"
          pad="80px 0"
        >
          <Grid>
            <Row center="xs">
              <Col lg={12} xs={11}>
                <Title size="lg">Otakuchan (formerly Anime Shop Online)</Title>
                <a
                  target="_blank"
                  href="https://www.facebook.com/otakuchancom"
                  rel="noopener noreferrer"
                >
                  <Image
                    sizeX="80%"
                    mar="10px auto 40px auto"
                    display="block"
                    src={animeCover}
                  />
                </a>
                <Paragraph>
                  Anime Fans Love Us! We offer best service and great prices on
                  Anime Products such as Clothes, Shoes and Accessories.
                  Shipping to 185 Countries Our Anime Store operates worldwide
                  and you can enjoy free delivery of all your Anime orders. 100%
                  Safe Payment Buy Anime Products with confidence using the
                  world’s most popular and secure payment methods.
                </Paragraph>
                <br />
                <br />
                <br />
                <Button path="https://www.facebook.com/otakuchancom" type="work">
                  Contact Us On Facebook
                </Button>
              </Col>
            </Row>
          </Grid>
        </Section>
        <Section
          className="border"
          backColor="#293347"
          color="white"
          pad="200px 0"
        >
          <Grid>
            <Row center="xs">
              <Col xs={12}>
                <Title size="lg">Projects</Title>
                <Row center="xs">
                  <Col lg={4} xs={12}>
                    <Pane
                      target="_blank"
                      href="https://stupefied-kepler-3384a4.netlify.com"
                      color="light"
                      type="css"
                      desc="This visually appealing website showcases advanced css designs"
                      style={{ marginTop: "30px" }}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </Section>
      </Fragment>
    );
  }
}

export default Work;
