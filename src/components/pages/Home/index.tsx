import React, { useRef, useEffect, useState } from "react";
import { useDidMountEffect } from "../../../hooks/useDidMountEffect";

// third party
import {
	IonFab,
	IonIcon,
	IonPage,
	IonFabButton,
	IonButton,
} from "@ionic/react";
import { Geolocation } from "@awesome-cordova-plugins/geolocation";
import { add, location, map } from "ionicons/icons";
import { Map, Marker } from "react-map-gl";
import useSupercluster from "use-supercluster";
import "mapbox-gl/dist/mapbox-gl.css";

// assets
import "./Home.css";
import logo from "../../../assets/images/logo.png";

// project imports
import { data } from "./MapData";
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
	const [zoom, setZoom] = useState<number>(3);
	const [bounds, setBounds] = useState<number[]>(null!);
	const [points, setPoints] = useState<Array<{}>>([]);
	const mapRef = useRef<MapRef>(null!);

	const { clusters, supercluster } = useSupercluster({
		points,
		// @ts-ignore unsure how to work around this
		bounds,
		zoom,
		options: { radius: 50, maxZoom: 20 },
	});

	const handleOnLoad = () => {
		setBounds(mapRef.current.getMap().getBounds().toArray().flat());
	};

	const handleOnMove = (evt: any) => {
		const { viewState } = evt;
		setLat(viewState.latitude);
		setLng(viewState.longitude);
		setZoom(viewState.zoom);
		setBounds(mapRef.current.getMap().getBounds().toArray().flat());
	};

	const clusterZoom = (cluster: any) => {
		const zoomStep = supercluster.getClusterExpansionZoom(cluster.id);
		mapRef.current.easeTo({
			center: cluster.geometry.coordinates,
			zoom: zoomStep,
			duration: 500,
		});
	};

	useDidMountEffect(() => {
		Geolocation.getCurrentPosition()
			.then(({ coords }) => {
				setLat(coords.latitude);
				setLng(coords.longitude);
			})
			.catch((err) => console.error(err));
	}, []);

	useDidMountEffect(() => {
		const locations = data.map((coords, idx) => {
			return {
				type: "Feature",
				properties: {
					cluster: false,
					id: idx,
				},
				geometry: {
					type: "Point",
					coordinates: [coords[0], coords[1]],
				},
			};
		});
		setPoints(locations);
		setLoading(false);
	}, []);

	if (loading) return <Loading />;

	return (
		<IonPage>
			<div className="home">
				<Map
					ref={mapRef}
					initialViewState={{
						longitude: lng,
						latitude: lat,
						zoom: zoom,
					}}
					onLoad={handleOnLoad}
					mapStyle="mapbox://styles/mapbox/streets-v11"
					mapboxAccessToken={MAPBOX_TOKEN}
					maxZoom={20}
					onMove={(evt) => handleOnMove(evt)}
				>
					{clusters.map((cluster) => {
						const [longitude, latitude] = cluster.geometry.coordinates;
						const { cluster: isCluster, point_count: pointCount } = cluster.properties;

						if (isCluster) {
							return (
								<Marker
									key={cluster.id}
									latitude={latitude}
									longitude={longitude}
									onClick={() => clusterZoom(cluster)}
								>
									<div className="cluster-marker" style={{
										width: `${10 +(pointCount / points.length) *20}px`,
										height: `${10 +(pointCount / points.length) *20}px`,
									}}>
										{pointCount}
									</div>
								</Marker>
							);
						}
						return (
							<Marker
								key={cluster.properties.id}
								latitude={latitude}
								longitude={longitude}
							>
								<IonButton className="marker">
									<IonIcon
										className="marker-icon"
										icon={location}
									/>
								</IonButton>
							</Marker>
						);
					})}
				</Map>
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
