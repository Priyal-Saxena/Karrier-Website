import React from "react";
import styles from "./hero.module.css";
import Workplace from "../../assets/workplace.jpg";
import "animate.css";
import { motion } from "framer-motion";

function Square() {
	return (
		<div className={styles.area}>
			<ul className={styles.squares}>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
	);
}

export default Square;
