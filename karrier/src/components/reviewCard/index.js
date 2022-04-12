import React from "react";
import styles from "./reviewCard.module.css";
import tieSuit from "../../assets/tieSuit.jpg";

export default function ReviewCard() {
	return (
		<div className={`${styles.cardColumn}`}>
			<div className={`${styles.card}  ${styles.real}`}>
				<div className={`${styles.imageContainer}  `}>
					<img src={tieSuit} />
				</div>
				<div className={styles.textContainer}>
					<h2>name surname</h2>
					<p>
						Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
						continents except Antarctica
					</p>
				</div>
				{/* <ReviewCard /> */}
			</div>
			<div className={styles.reflectionCard}>
				<div className={`${styles.card} ${styles.reflection}`}>
					{/* <div className={styles.imageContainer}>
							<img src={tieSuit} />
						</div> */}
					<div className={styles.textContainer}>
						<h2>name surname</h2>
						<p>
							Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
							continents except Antarctica
						</p>
					</div>
				</div>
				<div className={`${styles.card} ${styles.cover}`}></div>
			</div>
		</div>
	);
}
