import React, { useState } from "react";

// third party
import {
	earthOutline,
	starOutline,
	checkmarkCircleOutline,
} from "ionicons/icons";

// assets
import "./Filters.css";

// project imports
import CustomToggleButton from "../../../ui-components/CustomToggleButton";

const Filters: React.FC = () => {
	return (
		<div className="filters">
			<CustomToggleButton shape="round" icon={earthOutline}>
				All Sites
			</CustomToggleButton>
			<CustomToggleButton shape="round" icon={starOutline}>
				Favourites
			</CustomToggleButton>
			<CustomToggleButton shape="round" icon={checkmarkCircleOutline}>
				I've Been
			</CustomToggleButton>
		</div>
	);
};

export default Filters;
