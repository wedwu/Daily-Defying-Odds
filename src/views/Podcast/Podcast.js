import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PodcastVideos from '../../component/Podcast/Podcast';

const Podcast = () => {

  return (
    <Container>
      <Row>
        <Col xs={12} md={8} className="col-sm mx-auto mobile-30">
          <h1>[PODCAST Title Goes Here]</h1>
          <p className="lead">Coming soon...</p>

          <PodcastVideos style={{width: "480px", height: "360px"}} />

          <iframe src="https://player.vimeo.com/video/539456908?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="480" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen={true} title="SampleVideo_720x480_1mb.mp4"></iframe>

          <ol className="list-group list-group-numbered">
            <li className="list-group-item d-flex justify-content-between align-items-start transparent" >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Video 1</div>
                https://vimeo.com/539456917
              </div>
              <span className="badge bg-primary rounded-pill">2:00</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start transparent" >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Video 2</div>
                https://vimeo.com/539456635
              </div>
              <span className="badge bg-primary rounded-pill">2:00</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start transparent" >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Video 3</div>
                https://vimeo.com/539456627
              </div>
              <span className="badge bg-primary rounded-pill">2:00</span>
            </li>

            <li className="list-group-item d-flex justify-content-between align-items-start transparent" >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Video 4</div>
                https://vimeo.com/539456618
              </div>
              <span className="badge bg-primary rounded-pill">2:00</span>
            </li>
          </ol>
        </Col>
        <Col className="col-sm mx-auto"></Col>
      </Row>
    </Container>
  );
};

export default Podcast;
