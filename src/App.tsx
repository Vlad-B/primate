import React, { useState, useEffect } from "react";

//third party
import {
	IonApp,
	IonPage,
	IonRouterOutlet,
	setupIonicReact,
} from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
/* Theme variables */
import "./theme/variables.css";

// assets
import "./assets/styles/app.css";
// project imports
import Onboarding from "./components/pages/Onboarding";
import SplashScreen from "./components/SplashScreen";
import Home from "./components/pages/Home";

setupIonicReact();

const App: React.FC = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setLoading(false);
		}, 2000);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<IonApp className="app">
			<IonPage>
				{loading ? (
					<SplashScreen />
				) : (
					<IonReactRouter>
						<IonRouterOutlet>
							<Route path="/onboarding" component={Onboarding} />
							<Route
								exact
								path="/"
								render={() => <Redirect to="/onboarding" />}
							/>
							<Route path="/home" component={Home} />
						</IonRouterOutlet>
					</IonReactRouter>
				)}
			</IonPage>
		</IonApp>
	);
};

export default App;
