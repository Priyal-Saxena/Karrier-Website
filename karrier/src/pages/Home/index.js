import React from "react";
// import {Typography} from '@material-ui/core'
import styles from "./home.module.css";
import smilingGuy from "../../assets/smilingGuy.jpg";
import hmm from "../../assets/hmm.jpg";
import background from "../../assets/background.jpg";
import onlineClasses from "../../assets/onlineClasses.jpg";
import Reviews from "../../components/reviews/index";
import FAQ from "../../components/faq";
import IndustryReviews from "../../components/industryReviews";
import Hero from "../../components/Hero";
import Keypoints from "../../components/keypoints";
import Features from "../../components/features";
import Heading from "../../components/heading";
import Achievements from "../../components/achievements";
import PlacedStudents from "../../components/placedStudents";
import Quote from "../../components/quote";
import Team from "../../components/team/index";
// import Slider from "../../components/slider";
// import About from "../About/index";
// import Contact from "../Contact/index";
import { ReactComponent as Illustration1 } from "../../assets/illustrations/Illustration1.svg";
import { ReactComponent as Illustration2 } from "../../assets/illustrations/Illustration2.svg";

function Home() {
	return (
		<section className={styles.page}>
			<section className={styles.hero}>
				<Hero />
				{/* <div className={styles.verticalRectangle}></div>
				<div className={styles.intro}></div>
				<img className={styles.introImg} src={tieSuit} alt="haha"></img> */}
			</section>
			<section className={styles.keypoints}>
				<Keypoints />
			</section>
			{/* <section className={styles.reviews}>
				<Heading main="Reviews" subtext="what do our students say about us" />
				<Reviews />
			</section> */}

			<section
				className={styles.onlineContainer}
				style={{
					backgroundImage: `url(${background})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div className={styles.onlineContainerRow}>
					{/* <div
						className={styles.onlineImg}
						style={{
							backgroundImage: `url(${onlineClasses})`,
							backgroundPosition: "center",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
						}}
					></div> */}

					<Illustration1 className={styles.onlineSVG} />

					<div className={styles.onlineClassInfo}>
						<h2>Introducing Online classes</h2>
						<p>
							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
							pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
							mollit anim id est laborum.
						</p>
					</div>
				</div>
				<div className={styles.onlineContainerRow}>
					<div className={styles.onlineClassInfo}>
						<h2>Introducing Online classes</h2>
						<p>
							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
							pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
							mollit anim id est laborum.
						</p>
					</div>
					{/* <div
						className={styles.onlineImg}
						style={{
							backgroundImage: `url(${onlineClasses})`,
							backgroundPosition: "center",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
						}}
					></div> */}
					<Illustration2 className={styles.onlineSVG} />
				</div>
			</section>
			<section className={styles.industryReviews}>
				<Heading main="Reviews" subtext="what does industry say about us" />
				<IndustryReviews />
			</section>
			<section className={styles.achievements}>
				<Heading main="Achievements" subtext="our achievements" />
				<Achievements />
				{/* <h1> Achievements</h1>
				<p> insert list of Achievements/awards</p> */}
			</section>

			{/* <section className={styles.features}>
				<Features />
			</section> */}

			<section>
				{/* <PlacedStudents /> */}
				<Team />
				<Quote
					quote="Karrier Institute is a Concept more than Business started in the year 2015 with a clear cut vision of
				transforming Fresh graduates into trained pharma professionals through specialized, high quality
				education & skill development programs."
				/>
			</section>
			<section className={styles.faqs}>
				<Heading main="FAQs" subtext="Common questions that people have" />
				<FAQ />
			</section>
		</section>
	);
}

export default Home;
