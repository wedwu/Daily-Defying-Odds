import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {

  return (
    <Container>
      <Row>
        <Col xs={12} md={8} className="col-sm mx-auto mobile-30">
          <h1>Follow the Journey</h1>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
        </Col>
        <Col className="col-sm mx-auto"></Col>
      <Container>
        <div className="main-timeline top-margin">
          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <span className="month">2 Years</span>
                  <span className="year">2013</span>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title">[1st Timeline Point]</h5>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.
              </p>
            </div>
          </div>
          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <span className="month">1 Years</span>
                  <span className="year">2015</span>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title">[2nd Timeline Point]</h5>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.
              </p>
            </div>
          </div>
          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <span className="month">2 Years</span>
                  <span className="year">2016</span>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title">[3th Timeline Point]</h5>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.
              </p>
            </div>
          </div>
          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <span className="month">2 Years</span>
                  <span className="year">2018</span>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title">[4th Timeline Point]</h5>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Row>
  </Container>
  );
};

export default About;
