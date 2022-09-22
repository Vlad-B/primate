import react from "react";

//assets
import "./styles/index.css";
import logo from "../../assets/images/logo.png";

const SplashScreen: React.FC = () => (
	<div className="splashscreen">
		<img className="splashscreen--logo" src={logo} />
	</div>
);

export default SplashScreen;
