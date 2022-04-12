import React from "react";
import styles from "./team.module.css";
import Heading from "../heading";
import tieSuit from "../../assets/tieSuit.jpg";
import TeamCard from "../teamCard";

function Team() {
	return (
		<section className={styles.teamSection}>
			<Heading main="Our Team" subtext="Meet out team which makes amazing stuff possible" />
			<div className={styles.cards}>
				<TeamCard />
				<TeamCard />
				<TeamCard />
				<div className={styles.bottomCard}>
					<TeamCard />
				</div>
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
