import React from "react";
import styles from "./heading.module.css";
// import Workplace from "../../assets/workplace.jpg";
// import "animate.css";
function Heading(props) {
	return (
		<div className="heading">
			<p class={styles.main}>{props.main}</p>

			<p class={styles.subtext}>{props.subtext}</p>
		</div>
	);
}

export default Heading;
