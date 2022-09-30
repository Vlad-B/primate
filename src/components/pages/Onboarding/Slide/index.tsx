import React from "react";

// assets
import "./Slide.css";

interface Props {
	title?: string;
	children?: any;
	dataSwiperParallax?: string;
}

const Slide: React.FC<Props> = ({ title, children, dataSwiperParallax }) => (
	<>
		<div className="slide" data-swiper-parallax={dataSwiperParallax}>
			<h1 className="slide--title">{title}</h1>
			<div>{children}</div>
		</div>
	</>
);

export default Slide;
