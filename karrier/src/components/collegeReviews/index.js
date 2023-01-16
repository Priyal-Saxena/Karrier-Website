import React from "react";
import styles from "./collegeReviews.module.css";
import BGBig from "../../assets/internship/college/bgBig.png";
import BGSmall from "../../assets/internship/college/bgSmall.png";

function CollegeReviews() {
	return (
		<div className={styles.container}>
			<img src={BGBig} className={`${styles.review} ${styles.big}`} />
			<img src={BGSmall} className={`${styles.review} ${styles.small}`} />
		</div>
	);
}

export default CollegeReviews;
