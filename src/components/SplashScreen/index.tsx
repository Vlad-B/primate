import React from "react";

//assets
import "./SplashScreen.css";
import logo from "../../assets/images/logo.png";

const SplashScreen: React.FC = () => (
	<div className="splashscreen">
		<img className="splashscreen--logo" src={logo} alt="Logo" />
	</div>
);

export default SplashScreen;
