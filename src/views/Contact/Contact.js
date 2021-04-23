import React from "react";
import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact = () => {

  return (
    <Container>
      <Row>
        <Col xs={12} md={8} className="col-sm mx-auto mobile-30">
          <h1>CONTACT ME</h1>
          <p className="lead">Coming soon...</p>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="inputFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" style={{paddingLeft: '10px'}} />
              </Form.Group>
              <Form.Group as={Col} controlId="inputLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" style={{paddingLeft: '10px'}} />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="inputEmail4">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" style={{paddingLeft: '10px'}} />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="inputAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="1234 Main St" style={{paddingLeft: '10px'}} />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="inputAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control type="text" placeholder="Apartment, studio, or floor" style={{paddingLeft: '10px'}} />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} className="col-md-6" controlId="inputCity">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Orlando" style={{paddingLeft: '10px'}} />
              </Form.Group>
              <Form.Group as={Col} className="col-md-2" controlId="inputState">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="FL" style={{paddingLeft: '10px'}} />
              </Form.Group>
              <Form.Group as={Col} className="col-md-4" controlId="inputZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control type="text" placeholder="34788" style={{paddingLeft: '10px'}} />
              </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col className="col-sm mx-auto"></Col>
      </Row>
    </Container>
  );
};

export default Contact;
