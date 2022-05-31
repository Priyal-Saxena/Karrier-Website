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
							<li>Students have clear edge over other students</li>
							<li>Help students to make a well informed decision about the career</li>
							<li>paid internship -student will get fixed stipend for 3 months</li>
							<li>
								{" "}
								learn with earn model student will get practical understanding of nitty-gritty of Pharma sales
								and marketing through rigorous training module by LSSSDC certified
							</li>
							<li>Rangers having rich experience in top notch companies</li>
							<li>
								student will pay one month stipend as training fee to Karrier after getting it from company
							</li>
							<li>student will get real life experience and certificate</li>
							<li>high probability to get hired by company if found suitable</li>
							<li>
								compelling reason for the student to join Institute University due to the internship program
								improve college reputation and admission
							</li>
						</ul>
					</div>
					<div className={styles.featureCol}>
						<h2 className={styles.featuresHeading}>For Company</h2>

						<ul>
							<li>
								corporate will get trained professionals who are Pharma sales Reddy from day 1 saves lots of
								time and resources
							</li>
							<li>faster CTC cut to cost of recruitment process</li>
							<li>zero cost for training of the candidate</li>
							<li>addresses gap in representation</li>
							<li>better company image due to quality candidates</li>
							<li>company can offer employment to deserving candidates</li>
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
