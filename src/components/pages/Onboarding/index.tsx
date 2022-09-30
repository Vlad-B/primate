import React, { useState } from "react";

// third party
import { Link } from "react-router-dom";
import { IonPage } from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// assets
import "./Onboarding.css";
import logo from "../../../assets/images/logo.png";

// project imports
import Slide from "./Slide";
import CustomButton from "../../ui-components/CustomButton";

interface SwiperTypes {
	slidePrev?: any;
	slideNext?: any;
}

const slides = [
	{
		title: "Welcome to Primate",
		dataSwiperParallax: "-23%",
	},
	{
		title: "Promoting ethical primate tourism",
		dataSwiperParallax: "-23%",
	},
	{
		title: "Helping you and primates stay safe",
		dataSwiperParallax: "-23%",
		children: (
			<CustomButton className="guidelines" shape="round">
				<span className="guidelines-content">
					<p>See illustrated guidelines</p>
					<img src={logo} alt="Primate" />
				</span>
			</CustomButton>
		),
	},
	{
		title: `Let's get exploring!`,
		dataSwiperParallax: "-23%",
	},
];

const Onboarding: React.FC = () => {
	const [swiper, setSwiper] = useState<SwiperTypes>({});
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<IonPage>
			<div className="onboarding-wrapper">
				<Swiper
					onSwiper={(swiper: any) => setSwiper(swiper)}
					speed={600}
					parallax={true}
					pagination={{
						clickable: true,
					}}
					modules={[Parallax, Pagination]}
					onSlideChange={(swiper) => {
						setActiveIndex(swiper.activeIndex);
					}}
				>
					<div
						slot="container-start"
						className="parallax-bg"
						data-swiper-parallax="-23%"
					></div>
					{slides.map((slide, idx) => (
						<SwiperSlide key={idx}>
							<Slide
								title={slide.title}
								dataSwiperParallax={slide.dataSwiperParallax}
							>
								{slide.children}
							</Slide>
						</SwiperSlide>
					))}
					<div className="parallax-footer">
						{activeIndex !== 0 ? (
							<button
								onClick={() => swiper.slidePrev()}
								className="btn btn-back"
							>
								Previous
							</button>
						) : (
							<span />
						)}
						{activeIndex === slides.length - 1 ? (
							<Link to="/home" className="btn btn-next">
								<span>Explore</span>
							</Link>
						) : (
							<button
								onClick={() => swiper.slideNext()}
								className="btn btn-next"
							>
								<span>Next</span>
							</button>
						)}
					</div>
				</Swiper>
			</div>
		</IonPage>
	);
};

export default Onboarding;
