import React from "react";
import styles from "./ForStudents.module.css";
// import "./courses.css";
import CourseCard from "../../components/courseCard";
import Heading from "../../components/heading";
import Reviews from "../../components/reviews/index";

function ForStudents() {
	return (
		<section className={styles.ForStudents}>
			{/* <div className={styles.cardHeading}> */}
			<Heading main="Online Certificate Courses" subtext="Be Pharma Sales Ready from Day 1!" />
			<div className={styles.courseCardContainer}>
				<CourseCard
					curriculumPoints={[
						"Basics of Pharma Selling",
						"MR Role and Responsibilities",
						"Basic Science",
						"Body System",
						"Pharmacology",
						"Diseases",
						"Therapies",
						"Secret of Phone Selling",
					]}
					eligibilityPoints={["Graduate with any stream", "No age bar"]}
					mode={["pre-recorded classes + ", "live online classes on demand for clearing doubts"]}
					duration="29 hours of pre-recorded classes"
					cost="Rs 4900 +GST"
				/>
				<CourseCard
					curriculumPoints={[
						"Effective Communication",
						"Basics of Pharma Selling",
						"MR Role and Responsibilities",
						"Basic Science",
						"Body System",
						"Pharmacology",
						"Diseases",
						"Therapies",
						"Secret of Phone Selling",
						"Roleplay",
						"Personality Development",
						"Grooming",
						"Interview Preparation classes (5 hour workshop)",
					]}
					eligibilityPoints={["Graduate with any stream", "Age <=25 years"]}
					mode={["live online classes"]}
					duration="45 hours (45 days)"
					cost="Rs 12800 + GST"
				/>
				<CourseCard
					curriculumPoints={[
						"Spoken English (live classes of 40 hours)",
						"Effective Communication",
						"Basics of Pharma Selling",
						"MR Role and Responsibilities",
						"Basic Science",
						"Body System",
						"Pharmacology",
						"Diseases",
						"Therapies",
						"Secret of Phone Selling",
						"Roleplay",
						"Personality Development",
						"Grooming",
						// "Interview Preparation classes (5 hour workshop)",
						"Power of dressing",
						"Profiling",
						"Killer first Impression",
					]}
					eligibilityPoints={["lorem hehe", "lorem hehe"]}
					mode={["live online classes"]}
					duration="80 hours (90 days)"
					cost="Rs 20,400 + GST"
				/>
			</div>
			{/* </div> */}
			{/* <div className={styles.sectionName}>
				<p>REVIEWS</p>
				<div className={styles.underline}></div>
			</div> */}
			<section className={styles.reviews}>
				<Heading main="Reviews" subtext="what do our students say about us" />
				<Reviews />
			</section>
		</section>
	);
}

export default ForStudents;
