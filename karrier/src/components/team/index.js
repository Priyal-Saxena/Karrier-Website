import React from "react";
import styles from "./team.module.css";
import Heading from "../heading";
import tieSuit from "../../assets/tieSuit.jpg";
import TeamCard from "../teamCard";
import Anubhav from "../../assets/team/Anubhav Saxena.jpeg";
import Ratish from "../../assets/team/Ratish Dixit.jpg";
import Rashmi from "../../assets/team/Rashmi Saxena.jpeg";

function Team() {
	return (
		<section className={styles.teamSection}>
			<Heading main="Our Team" subtext="Meet out team which makes amazing stuff possible" />
			<div className={styles.cards}>
				<TeamCard
					name="Ratish Dixit"
					src={Ratish}
					role="Business Partner"
					description="Business Partner of KARRIER TRAINING & EVOLUTION INSTITUTE & Co-Founder & Director of Nabigeta Solutionist"
					insta=""
					fb="https://www.facebook.com/ratish.dixit"
					linkedIn="https://www.linkedin.com/in/ratish-dixit-m-pharm-mms-579b388/"
				/>

				<TeamCard
					name="Anubhav Saxena"
					src={Anubhav}
					role="Founder & Director"
					description="Founder & Director of KARRIER TRAINING & EVOLUTION INSTITUTE and Co-Founder & Director of Nabigeta Solutionist"
					insta=""
					fb="https://www.facebook.com/anubhav.saxena.395"
					linkedIn="https://www.linkedin.com/in/karrier/"
				/>
				<TeamCard
					name="Rashmi Saxena"
					src={Rashmi}
					role="Director"
					description="Director of KARRIER TRAINING & EVOLUTION INSTITUTE"
					insta=""
					fb="https://www.facebook.com/rashmi.saxena.92754"
					linkedIn="https://www.linkedin.com/in/rashmi-saxena-30876bb4/"
				/>

				{/* <div className={styles.bottomCard}>
					<TeamCard />
				</div> */}
				{/* <div className={styles.bottomCard1}>
					<TeamCard />
				</div> */}
				{/* <div className={styles.bottomCard2}>
					<TeamCard />
				</div> */}
			</div>
		</section>
	);
}

export default Team;
