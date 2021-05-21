import React from 'react';
import { Jumbotron, Container, Row, Col, Card } from 'react-bootstrap';

function Bodynav(props) {
const { link1 = 'Home', link2 = 'Page 2', link3 = 'Page 3', url1 = 'http://localhost:3000/#home', url2 = 'http://localhost:3000/#page2', url3 = 'http://localhost:3000/#page3' } = props;
return (
<div className="main-container pb-5">
  <Container className="pb-5">
    <Row>
      <Col className="pt-4">
      <h1 className="pt-5">We are passing props to our navbar!</h1>
      <p className="pb-5">We did it! We are using props in our navbar.</p>
      <Jumbotron>
        <h2>This is the {link1} Page!</h2>
        <p> Isn't this awesome? We love our {link1} Page. </p>
        <p> <a className="btn btn-primary" href={url1}>{link1}</a> </p>
      </Jumbotron>
      </Col>
    </Row>
    <Row>
      <Col>
      <Card>
        <Card.Header>{link2}</Card.Header>
        <Card.Body>
          <Card.Title>Title for {link2}</Card.Title>
          <Card.Text> Please visit {link2}! We are sure that you will like our content. </Card.Text>
          <a className="btn btn-primary" href={url2}>{link2}</a> </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card>
        <Card.Header>{link3}</Card.Header>
        <Card.Body>
          <Card.Title>Title for {link3}</Card.Title>
          <Card.Text> Please visit {link3}! We are sure that you will like our content. </Card.Text>
          <a className="btn btn-primary" href={url3}>{link3}</a> </Card.Body>
      </Card>
      </Col>
    </Row>
  </Container>
</div>
);
};

export default Bodynav;