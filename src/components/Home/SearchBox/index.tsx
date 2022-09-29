import React from "react";

// third party
import { IonSearchbar, IonIcon } from "@ionic/react";
import { menuOutline } from "ionicons/icons";

import "./SearchBox.css";

const SearchBox: React.FC = () => {
	return (
		<div className="search">
			<IonSearchbar
				className="search-bar"
				placeholder="Explore primate sites"
			/>
			<IonIcon className="icon-menu" icon={menuOutline} />
		</div>
	);
};

export default SearchBox;
