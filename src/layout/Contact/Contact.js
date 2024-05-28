import React, { Fragment, Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

//components
import Section from "../../components/Section/Section";
import Title from "../../components/Title/Title";
import Form from "../../components/Form/Form";

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <Section backColor='#EBEBEB' pad="150px 0">
          <Grid>
            <Row center="xs">
              <Col xs={12}>
                <Title size="md">
                  Thanks for taking the time to reach out.
                  <br /> How can I help you today?
                </Title>
              </Col>
              <Col xs={12}>
                <Row center="xs">
                  <Col md={12} xs={11}>
                    <Form />
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

export default Contact;
