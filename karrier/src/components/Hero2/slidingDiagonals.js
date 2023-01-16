import React from "react";
import styles from "./hero.module.css";
import Workplace from "../../assets/workplace.jpg";
import "animate.css";
import { motion } from "framer-motion";

function SlidingDiagonals() {
	return (
		<div className={styles.background}>
			<div className={styles.bg}></div>
			<div className={`${styles.bg} ${styles.bg2}`}></div>
			<div className={`${styles.bg} ${styles.bg3}`}></div>
		</div>
	);
}

export default SlidingDiagonals;
