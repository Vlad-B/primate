import React from "react";

// assets
import "./styles/index.css";
import logo from "../../../assets/images/logo.png";

const SeeGuidelines: React.FC = () => (
	<div className="guidelines">
		<p>See illustrated guidelines</p>
		<img src={logo} />
	</div>
);

export default SeeGuidelines;
