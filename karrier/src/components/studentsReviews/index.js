import React from "react";
import styles from "./studentsReviews.module.css";
import Prajwal from "../../assets/internship/students/Prajwal.png";
import Sachin from "../../assets/internship/students/Sachin.png";
import Subhasmita from "../../assets/internship/students/Subhasmita.png";

function StudentsReviews() {
	return (
		<div className={styles.container}>
			<img
				src={Prajwal}
				style={{
					border: "3px dashed #c471ed",
				}}
				className={styles.review}
			/>
			<img
				src={Subhasmita}
				style={{
					border: "3px dashed #12c2e9",
				}}
				className={styles.review}
			/>
			<img
				src={Sachin}
				style={{
					border: "3px dashed #f64f59",
				}}
				className={styles.review}
			/>
		</div>
	);
}

export default StudentsReviews;
