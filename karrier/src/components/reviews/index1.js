import React, { useState } from "react";
import ReactDOM from "react-dom";
import Panel from "./panel";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

// import "./reviews.css";
// import styles from "./reviews.styled.jsx";
import { StyledCarousel } from "./reviews.styled.jsx";
// import { StyledCarousel } from "./carousel.styled.jsx";

function Reviews() {
	const [value, setValue] = useState(0);
	function onChange(value) {
		setValue(value);
	}
	return (
		<div>
			{/* <div className={styles.container}> */}
			<Carousel plugins={["arrows"]} value={value} onChange={onChange} arrows infinite slidesPerPage={1}>
				<Panel />
				<Panel />
				<Panel />
				<Panel />
				<Panel />
				<Panel />
			</Carousel>
			<Dots value={value} onChange={onChange} number={6} />
		</div>
	);
}

export default Reviews;
