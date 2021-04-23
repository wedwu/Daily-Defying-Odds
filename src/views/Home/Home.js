import React from "react";
// import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Hero from "../../assets/images/hero.jpg";

// const Item = () => {
//   const { name } = useParams();
//
//   return (
//     <div>
//       <h3>{name}</h3>
//     </div>
//   );
// }

const Home = () => {
  // const { url, path } = useRouteMatch();

  return (
    <Container>
      <div className="row">
        <div className="col-sm mx-auto mobile-30">
          <h1>[Title Goes Here]</h1>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
          <a href="./about" className="btn btn-primary mr-3" style={{'float': 'right'}}>Follow the Journey</a>
        <hr className="my-5 w-25 mx-0" />
        </div>
        <div className="col-sm mx-auto">
        </div>
      </div>
      <div className="row">
        <div className="col-sm mx-auto mobile-30 video-responsive">
          <iframe title="test" src="https://player.vimeo.com/video/116582567" width="600" height="500" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen={true}></iframe>
        </div>
        <div className="col-sm mx-auto">
        </div>
      </div>
    </Container>
  );
};

export default Home;
