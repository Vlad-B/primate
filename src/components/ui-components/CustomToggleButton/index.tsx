import React, { useState } from "react";

// third party
import { IonButton, IonIcon } from "@ionic/react";

interface Props {
	className?: string;
	icon?: string;
	children?: string;
}

const CustomToggleButton: React.FC<Props> = ({ className, icon, children }) => {
	const [toggle, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle((prev) => !prev);
	};

	return (
		<IonButton
			style={{ "--background": toggle ? "#55ffa3" : "#fff" }}
			className={className}
			onClick={handleToggle}
		>
			<IonIcon className={`icon icon-${icon}`} icon={icon} />
			<span>{children}</span>
		</IonButton>
	);
};

export default CustomToggleButton;
