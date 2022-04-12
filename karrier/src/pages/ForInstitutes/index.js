import React from "react";
import styles from "./ForInstitutes.module.css";
// import "./courses.css";
import CourseCard from "../../components/courseCard";
import Heading from "../../components/heading";
import Reviews from "../../components/reviews/index";
import onlineClasses from "../../assets/onlineClasses.jpg";

function ForInstitutes() {
	return (
		<section className={styles.ForInstitutes}>
			{/* <div className={styles.cardHeading}> */}
			<Heading main="Courses" subtext="Programs for Institutes" />
			<div className={styles.onlineContainerRow}>
				<div
					className={styles.onlineImg}
					style={{
						backgroundImage: `url(${onlineClasses})`,
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}
				></div>
				<div className={styles.onlineClassInfo}>
					<h2>Introducing Online classes</h2>
					<p>
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
						mollit anim id est laborum.
					</p>
				</div>
			</div>
			{/* </div> */}
			{/* <div className={styles.sectionName}>
				<p>REVIEWS</p>
				<div className={styles.underline}></div>
			</div> */}
			<section className={styles.featuresSection}>
				<Heading main="Features" subtext="Salient Features" />
				<div className={styles.features}>
					<div className={styles.featureCol}>
						<h2 className={styles.featuresHeading}>For Institues and Universities</h2>
						<ul>
							<li>nskjdcnkwncdwdkmwkdkwemd</li>
							<li>nskjdcnkwncdwdkmwkdkwemd</li>
							<li>nskjdcnkwncdwdkmwkdkwemd</li>
							<li>nskjdcnkwncdwdkmwkdkwemd</li>
						</ul>
					</div>
					<div className={styles.featureCol}>
						<h2 className={styles.featuresHeading}>For Company</h2>

						<ul>
							<li>nskjdcnkwncdwdkmwkdkwemd</li>
							<li>nskjdcnkwncdwdkmwkdkwemd</li>
							<li>nskjdcnkwncdwdkmwkdkwemd</li>
							<li>nskjdcnkwncdwdkmwkdkwemd</li>
						</ul>
					</div>
				</div>
			</section>
			<section className={styles.reviews}>
				<Heading main="Reviews" subtext="what do our students say about us" />
				<Reviews />
			</section>
		</section>
	);
}

export default ForInstitutes;
