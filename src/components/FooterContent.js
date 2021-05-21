import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footercontent(props) {
	const { link1 = 'Home', link2 = 'Page 2', link3 = 'Page 3', url1 = 'https://ianstrand.github.io/webd171-3/#home', url2 = 'https://ianstrand.github.io/webd171-3/#page2', url3 = 'https://ianstrand.github.io/webd171-3/#page3' } = props;
	    return (
  <Container>
    <Row className="justify-content-center pt-4 mb-2">
      <Col md={3} className="mb-3">
      <h6 className="text-uppercase font-weight-bold"> <a href={url1}>{link1}</a> </h6>
      </Col>
      <Col md={3} className="mb-3">
      <h6 className="text-uppercase font-weight-bold"> <a href={url2}>{link2}</a> </h6>
      </Col>
      <Col md={3} className="mb-3">
      <h6 className="text-uppercase font-weight-bold"> <a href={url3}>{link3}</a> </h6>
      </Col>
    </Row>
    <Row className="justify-content-center mb-4">
      <Col md={8} className="mt-3">
      <p>It is a lot of fun to work with react-bootrap! This example is created for WEBD171, for the Fall 2020 class session. We are creating React apps in this course.</p>
      </Col>
    </Row>
    <hr />
  </Container>
)
}

export default Footercontent;