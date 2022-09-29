import React, { useRef, useEffect, useState } from "react";

// third party
import { IonPage } from "@ionic/react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// assets
import "./Home.css";

// project imports
import SearchBox from "./SearchBox";
import Filters from "./Filters";

mapboxgl.accessToken =
	"pk.eyJ1IjoiYnZsYWQiLCJhIjoiY2w4bjduZXY2MG5mbTN5b2FlMXdiNng1cSJ9.BHmzQCKBvJ7n8EXH7UNMcg";

const Home: React.FC = () => {
	const mapContainer = useRef<HTMLDivElement>(null!);
	const map = useRef({});
	const [lng, setLng] = useState<number>(null!);
	const [lat, setLat] = useState<number>(null!);
	const [zoom, setZoom] = useState(5);

	useEffect(() => {
		if (!map.current) return;

		// set up user coordonates
		navigator.geolocation.getCurrentPosition((position) => {
			setLng(position.coords.longitude);
			setLat(position.coords.latitude);
		});

		// initiate map object
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v11",
			center: [lng, lat],
			zoom: zoom,
			attributionControl: false,
		});
	});

	return (
		<IonPage>
			<div className="home">
				<div ref={mapContainer} className="map-container" />
				<SearchBox />
				<Filters />
			</div>
		</IonPage>
	);
};

export default Home;
