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
import CustomToggleButton from "../../ui-components/CustomToggleButton";

const Filters: React.FC = () => {
	return (
		<div className="filters">
			<CustomToggleButton icon={earthOutline}>
				All Sites
			</CustomToggleButton>
			<CustomToggleButton icon={starOutline}>
				Favourites
			</CustomToggleButton>
			<CustomToggleButton icon={checkmarkCircleOutline}>
				I've Been
			</CustomToggleButton>
		</div>
	);
};

export default Filters;
