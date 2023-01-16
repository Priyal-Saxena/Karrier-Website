import React from "react";
import styles from "./hero.module.css";
import Workplace from "../../assets/workplace.jpg";
import "animate.css";
import { motion } from "framer-motion";

function RotatingSquares() {
	return (
		<div className={styles.rotatingSquaresBg}>
			<div className={styles.cube}></div>
			<div className={styles.cube}></div>
			<div className={styles.cube}></div>
			<div className={styles.cube}></div>
			<div className={styles.cube}></div>
			<div className={styles.cube}></div>
			<div className={styles.cube}></div>
		</div>
	);
}

export default RotatingSquares;
