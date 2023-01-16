import React from "react";
import styles from "./industryReviews.module.css";
import ReviewCard from "../reviewCard";
import AshokNair from "../../assets/industryReviews/AshokNair.png";
import PraveenRaj from "../../assets/industryReviews/PraveenRaj.png";
import ViniSahai from "../../assets/industryReviews/ViniSahai.png";

export default function IndustryReviews() {
	return (
		<div className={styles.container}>
			<div className={styles.side}>
				<ReviewCard
					src={AshokNair}
					name="Ashok Nair"
					position="MANAGING DIRECTOR & GENERAL MANAGER ABBOTT HEALTHCRAE PVT LTD"
					review="“I was the one who selected anubhav in torrent he worked with me, he was a winner from day one , I’m not bit surprised that he started his own venture during, he has done extremely well and I’m sure people will get benefited by his enterprise , a good coach and a great motivator , he will do well all the best anubhav”"
				/>
			</div>
			<div className={styles.middle}>
				<ReviewCard
					src={PraveenRaj}
					name="Praveen Raj"
					position="Ex VP Training Macleods"
					review="“A much needed Initiative with total dedication & commitment from Mr Anubhav to not only train but ensure job placement of thousand plus students. Kudos to Karrier & its Chief Mentor” 🥇
Highly Recommended ⭐⭐⭐⭐⭐”
"
				/>
			</div>
			<div className={styles.side}>
				<ReviewCard
					src={ViniSahai}
					name="Vini Sahai"
					position="Ex AVP Eris Life Sciences"
					review="“Excellent man management. Very good knowledge and has a passion to help people to grow, is an excellent trainer as learning with him is easy.”"
				/>
			</div>
		</div>
	);
}
