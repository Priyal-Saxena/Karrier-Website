import React from "react";
import styles from "./hero.module.css";
import Workplace from "../../assets/workplace.jpg";
import "animate.css";
import { motion } from "framer-motion";
function Hero() {
	return (
		<div className={styles.hero}>
			<div
				className={styles.img}
				style={{
					backgroundImage: `url(${Workplace})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			>
				<motion.p
					animate={{ fontSize: "90px", rotateX: 360, y: "0px" }}
					initial={{ y: "-250px" }}
					className={`${styles.firstHalf} `}
					// initial={{ opacity: 0 }}
					// animate={{ opacity: 1 }}
				>
					Karr
				</motion.p>
			</div>
			<motion.div className={styles.info}>
				<motion.p
					animate={{ fontSize: "90px", rotateX: 360, y: "0px" }}
					initial={{ y: "-250px" }}
					// initial={{ opacity: 0 }}
					// animate={{ opacity: 1 }}
					className={styles.secondHalf}
				>
					ier.
				</motion.p>
			</motion.div>
		</div>
	);
}

export default Hero;
