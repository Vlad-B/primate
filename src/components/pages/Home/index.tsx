import React, { useRef, useEffect, useState } from "react";

// third party
import { IonFab, IonIcon, IonPage, IonFabButton } from "@ionic/react";
import { Geolocation } from "@awesome-cordova-plugins/geolocation";
import { add } from "ionicons/icons";
import { Map } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// assets
import "./Home.css";
import logo from "../../../assets/images/logo.png";

// project imports
import SearchBox from "./SearchBox";
import Filters from "./Filters";
import MapOptions from "./MapOptions";
import CustomButton from "../../ui-components/CustomButton";
import Loading from "../../ui-components/Loading";

// types
import type { MapRef } from "react-map-gl";

const MAPBOX_TOKEN =
	"pk.eyJ1IjoiYnZsYWQiLCJhIjoiY2w4bjduZXY2MG5mbTN5b2FlMXdiNng1cSJ9.BHmzQCKBvJ7n8EXH7UNMcg";

const Home: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [lng, setLng] = useState<number>(null!);
	const [lat, setLat] = useState<number>(null!);
	const [zoom] = useState(5);
	const mapRef = useRef<MapRef>(null);

	useEffect(() => {
		// set up user coordonates
		Geolocation.getCurrentPosition()
			.then(({ coords }) => {
				setLat(coords.latitude);
				setLng(coords.longitude);
				setLoading(false);
			})
			.catch((err) => console.error(err));
	}, [lng, lat]);

	if (loading) return <Loading />;

	return (
		<IonPage>
			<div className="home">
				<Map
					initialViewState={{
						latitude: lat,
						longitude: lng,
						zoom: zoom,
					}}
					mapStyle="mapbox://styles/mapbox/streets-v11"
					mapboxAccessToken={MAPBOX_TOKEN}
					ref={mapRef}
				></Map>
				<SearchBox />
				<Filters />
				<MapOptions />
				<CustomButton className="guidelines" shape="round">
					<span className="guidelines-content">
						<p>Guidelines</p>
						<img src={logo} alt="Primate" />
					</span>
				</CustomButton>
				<IonFab className="primate-fab" slot="fixed">
					<IonFabButton>
						<IonIcon icon={add} />
					</IonFabButton>
				</IonFab>
			</div>
		</IonPage>
	);
};

export default Home;
