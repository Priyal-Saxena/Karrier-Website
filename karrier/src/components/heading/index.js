import React from "react";
import styles from "./heading.module.css";
function headingComponent(h1, h2, main) {
	if (h1) {
		return <h1>{main}</h1>;
	} else if (h2) {
		return <h2>{main}</h2>;
	} else {
		return <h3>{main}</h3>;
	}
}
function Heading(props) {
	const { main, subtext, h1, h2 } = props;
	return (
		<div class={styles.heading}>
			{headingComponent(h1, h2, main)}
			{subtext && <p class={styles.subtext}>{subtext}</p>}
		</div>
	);
}

export default Heading;
