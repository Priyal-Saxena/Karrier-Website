import React from "react";
import styles from "./ForCorporate.module.css";
// import "./courses.css";
import Heading from "../../components/heading";
import onlineClasses from "../../assets/onlineClasses.jpg";
import long from "../../assets/nabigeta/long.jpg";
import whyNabigeta from "../../assets/nabigeta/whyNabigeta.jpg";
import wide from "../../assets/nabigeta/wide.jpg";

function ForCorporate() {
	return (
		<section className={styles.ForCorporate}>
			<Heading main="NABIGETA SOLUTIONIST" subtext="A guiding light to address your key challenges.!!!" />
			<div className={styles.onlineContainerRow}>
				<div
					className={styles.onlineImg}
					style={{
						backgroundImage: `url(${long})`,
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}
				></div>
				<div className={styles.onlineClassInfo}>
					<h2>Key Challenges in Pharma Industry Today</h2>
					<ul>
						<li>
							• A mediocre strategy can look great provided the execution is par excellence as quoted by
							Morris Chang “without execution, strategy is useless”. Now the question arises how do we improve
							the execution, who are key persons involved & who can make all the difference.{" "}
						</li>{" "}
						<li> • Wouldn’t it make life easier for Managers / Leaders / Brand Managers?</li>{" "}
						<li>
							<span className={styles.bold}>
								• Welcome to Nabigeta Solutionist. A guiding light to address your key challenges.!!!
							</span>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.onlineContainerRow}>
				<div className={styles.onlineClassInfo}>
					<h2>What do we do?</h2>
					<p>
						Nabigeta Solutionist imparts professional training to facilitate corporates in strengthening
						people capability, building brands, augmenting leadership skills, training & nurturing Soft
						Skills.
					</p>
				</div>
				<div
					className={styles.onlineImg}
					style={{
						backgroundImage: `url(${wide})`,
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}
				></div>
			</div>
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
					<h2>Why Nabigeta?</h2>
					<ul>
						<li>
							• At Nabigeta , we understand the key challenges & then customize the programs which helps to
							get superior outcomes.
						</li>
						<li>
							• Trainers at Nabigeta have very rich & proven experience in launching products from
							strategizing to execution, management development programs & entry level training.
						</li>
						<li>• Our strength lies in end to end understanding of the business. </li>
						<li>
							• We believe in a pragmatic approach and delivering solutions which are apt to the organization
							and provide return on investment.
						</li>
					</ul>
				</div>
				<div className={styles.missionVision}>
					<div className={`${styles.mission} ${styles.card}`}>
						<h4>Mission</h4>
						<p>
							Providing Solution at an affordable cost the most critical interface between RBM & sales
							representative the First line manager which drives execution excellence.
						</p>
					</div>
					<div className={`${styles.vision} ${styles.card}`}>
						<h4>Vision</h4>
						<p>Creating model which will help to create help Managers to improve execution excellence.</p>
					</div>
				</div>

				<div className={styles.offerings}>
					<Heading
						main="NABIGETA MAGICAL OFFERINGS"
						// subtext=""
					/>

					<div className={styles.offeringsContainer}>
						<div className={styles.col}>
							<ul>
								<h4>TRAINING</h4>
								<li>• Level-1 BTP- Basic Training Program (Induction Program) for Sales Professionals.</li>
								<li>• Level-2 CTP- Comprehensive Training Program for Sales Professionals.</li>
								<li>• Level-3 CPP- Career Progression Program.</li>
								<li>• INDUCTION PROGRAM FOR FLM</li>
							</ul>
							<ul>
								<h4>COACHING</h4>
								<li>• FLM: First Line Manager</li>
								<li>• SLM: Second Line Manager</li>
							</ul>
							<ul>
								<h4>ASSESSMENT</h4>
								<li>• Sales Professional</li>
								<li>• FLM: First Line Manager</li>
							</ul>
						</div>
						<div className={styles.col}>
							<ul>
								<h4>SOFT SKILLS</h4>
								<li>• Communication</li>
								<li>• Presentation</li>
								<li>• Teamwork</li>
								<li>• Problem Solving</li>
								<li>• Critical Thinking</li>
							</ul>
							<ul>
								<h4>BUILDING BIG BRANDS</h4>
								<li>• Developing Key Consumer Insights</li>
								<li>• Segmentation</li>
								<li>• Targeting</li>
								<li>• Positioning</li>
								<li>• Patient journey Map</li>
								<li>• Brand Portrait Wheel to derive SMP</li>
								<li>• Belief shift Map</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ForCorporate;
