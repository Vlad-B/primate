import React, { MouseEventHandler, ReactNode } from "react";

// third party
import { IonButton, IonIcon } from "@ionic/react";

interface Props {
	className?: string;
	icon?: string;
	children?: any;
	shape?: "round" | undefined;
	onClick?: MouseEventHandler;
}

const CustomButton: React.FC<Props> = ({
	className,
	icon,
	children,
	shape,
	onClick,
}) => {
	return (
		<IonButton className={className} onClick={onClick} shape={shape}>
			{icon && <IonIcon className={`icon icon-${icon}`} icon={icon} />}
			{children}
		</IonButton>
	);
};

export default CustomButton;
