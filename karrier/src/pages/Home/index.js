import React from "react";
import styles from "./home.module.css";
import background from "../../assets/background.jpg";
import IndustryReviews from "../../components/industryReviews";
import Hero from "../../components/Hero2";
import Keypoints from "../../components/keypoints";
import Heading from "../../components/heading";
import Achievements from "../../components/achievements";
import Quote from "../../components/quote";
import Team from "../../components/team/index";
import NeedJob from "../../assets/home/I need a job.jpg";
import JobsForFresher from "../../assets/home/jobs for fresher.jpg";
import JourneySoFar from "../../assets/home/Journey so far.jpg";
import ChooseUs from "../../components/chooseUs";
import Info from "../../components/info";
import FAQ from "../../components/faq";
// import Heading from "../../components/heading";

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
				<Info
					data={[
						{
							picAlign: "left",
							src: NeedJob,
							title: "I need a job",
							alt: "a young boy sitting in front of laptop in thinking position",
							heading: "I need a job!",
							text: "The biggest problem a recent graduate often faces is unemployment. According to Skill India's 2021-22 report, only 46% of graduates were able to get a job.",
						},
						{
							picAlign: "right",
							src: JobsForFresher,
							title: "jobs for fresher",
							alt: "a graduate picking his career option",
							text: "It's a great thing to have a dream, but sometimes it's difficult to decide what the right thing to do is. Many times students don't know which kind of job suits their interests & requirements, and they are unsure about which industry they should start their career in.",
						},
						{
							picAlign: "left",
							src: JourneySoFar,
							title: "Anubhav Saxena - Best Pharma Sales Trainer & Sales Consultant in India",
							alt: "Anubhav Saxena - Best Pharma Sales Trainer & Sales Consultant in India",
							text: "faced the same problems you are facing when I was a fresh graduate 27 years back. Hello! I am Anubhav Saxena and I am the founder & director of Karrier Training & Evolution Institute and our mission is to help young graduates facing similar problems to find a career in top pharma companies.",
						},
					]}
				/>
			</section>
			<section className={styles.chooseUs}>
				<ChooseUs />
			</section>
			<section className={styles.industryReviews}>
				<Heading main="Reviews" subtext="what does industry say about us" />
				<IndustryReviews />
			</section>
			<section className={styles.achievements}>
				<Heading main="Achievements" subtext="our achievements" />
				<Achievements />
			</section>

			<section>
				<Team />
				<Quote quote="85% of your financial success is due to your personality and ability to communicate, negotiate, and lead. Shockingly, only 15% is due to technical knowledge." />
			</section>
			<section className={styles.faqs}>
				<Heading main="FAQs" subtext="Common questions that people have" />
				<FAQ />
			</section>
		</section>
	);
}

export default Home;
