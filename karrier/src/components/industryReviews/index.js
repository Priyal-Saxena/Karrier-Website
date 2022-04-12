import React from "react";
import styles from "./industryReviews.module.css";
import ReviewCard from "../reviewCard";

export default function IndustryReviews() {
	return (
		<div className={styles.container}>
			<div className={styles.side}>
				<ReviewCard />
			</div>
			<div className={styles.middle}>
				<ReviewCard />
			</div>
			<div className={styles.side}>
				<ReviewCard />
			</div>
		</div>
	);
}
