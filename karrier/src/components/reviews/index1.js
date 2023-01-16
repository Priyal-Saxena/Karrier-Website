import React, { useState } from "react";
import ReactDOM from "react-dom";
import Panel from "./panel";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

// import "./reviews.css";
// import styles from "./reviews.styled.jsx";
import { StyledCarousel } from "./reviews.styled.jsx";

function Reviews(props) {
	const [value, setValue] = useState(0);
	function onChange(value) {
		setValue(value);
	}
	return (
		<div>
			{/* <div className={styles.container}> */}
			<StyledCarousel
				plugins={["arrows"]}
				value={value}
				onChange={onChange}
				arrows
				infinite
				slidesPerPage={1}
			>
				{/* {props.data.map(elem => (
					<img src={elem.src} />
				))} */}
				{props.data.map(elem => (
					<Panel name={elem.name} designation={elem.designation} review={elem.review} src={elem.src} />
				))}
			</StyledCarousel>
			<Dots value={value} onChange={onChange} number={props.data.length} />
		</div>
	);
}

export default Reviews;
