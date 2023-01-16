import React from "react";
import styles from "./reviewCard.module.css";

export default function ReviewCard(props) {
	return (
		<div className={`${styles.cardColumn}`}>
			<div className={`${styles.card}  ${styles.real}`}>
				<div className={`${styles.imageContainer}  `}>
					<img src={props.src} />
				</div>
				<div className={styles.textContainer}>
					<h2>{props.name}</h2>
					<h5>{props.position}</h5>
					<p>{props.review}</p>
				</div>
			</div>
			{/* <div className={styles.reflectionCard}>
				<div className={`${styles.card} ${styles.reflection}`}>
					
					<div className={`${styles.textContainer} ${styles.textContainerReflection}`}>
						
						<p>{props.review}</p>
					</div>
				</div>
				<div className={`${styles.card} ${styles.cover}`}></div>
			</div> */}
		</div>
	);
}
