import React from "react";
let Vimeo = require('react-vimeo');

const videoId = "539456908";

const PodcastVideos = () => {
  return (<Vimeo videoId={ videoId } />);
};

export default PodcastVideos;
