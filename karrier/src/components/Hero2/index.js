import React from "react";
import styles from "./hero.module.css";
import "animate.css";
import Bubbles from "./bubbles";
import SlidingDiagonals from "./slidingDiagonals";

function Hero() {
	return (
		<div className={`${styles.hero} ${styles.bubbles}`}>
			<Bubbles />
			<SlidingDiagonals />

			<div className={styles.box1}></div>
			<div className={styles.box2}>
				<div className={styles.text}>
					<p className={styles.name}>KARRIER</p>
					<br />
					<p className={styles.tagline}>Best pharma training institute in India</p>
				</div>
			</div>
		</div>
	);
}

export default Hero;
