import React from "react";

// third party
import { IonPage, IonSpinner } from "@ionic/react";

//assets
import "./loading.css";

const Loading: React.FC = () => {
	return (
		<IonPage className="loading">
			<IonSpinner />
		</IonPage>
	);
};

export default Loading;
