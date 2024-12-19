import React from "react";

import loaderImg from '../../assets/images/preload.png'

const Preloader = () => {
  return (
    <div id="react__preloader">
		<div id="react__circle_loader"></div>
		<div className="react__loader_logo">
			<img src={loaderImg} alt="Preload" />
		</div>
	</div> 
  );
};

export default Preloader;
