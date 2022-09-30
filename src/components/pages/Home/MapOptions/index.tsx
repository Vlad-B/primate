import React from "react";

// third party
import { IonButton, IonIcon } from "@ionic/react";
import { layers, list, navigate } from "ionicons/icons";

// assets
import "./MapOptions.css";

// project imports

const MapOptions: React.FC = () => {
	return (
		<div className="map-options">
			<IonButton shape="round">
				<IonIcon icon={list} />
			</IonButton>
			<IonButton shape="round">
				<IonIcon icon={layers} />
			</IonButton>
			<IonButton shape="round">
				<IonIcon icon={navigate} />
			</IonButton>
		</div>
	);
};

export default MapOptions;
