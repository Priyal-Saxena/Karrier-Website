import React from "react";
import styles from "./achievements.module.css";
import Achievement1 from "../../assets/achievements/Achievement1.png";
import Achievement2 from "../../assets/achievements/Achievement2.png";
import Achievement3 from "../../assets/achievements/Achievement3.png";
import Achievement4 from "../../assets/achievements/Achievement4.png";

function Achievements() {
	return (
		<div className={styles.achievements}>
			<ul className={styles.cards}>
				<li className={`${styles.card} ${styles.card_1}`}>
					<div className={styles.card__content}>
						<div>
							<p>2500+ Students placed in top pharma companies</p>
						</div>
						<figure>
							<img
								title="jobs after graduation"
								src={Achievement1}
								alt="fresh graduates standing with their laptops"
							/>
						</figure>
					</div>
				</li>
				<li className={`${styles.card} ${styles.card_2}`}>
					<div className={styles.card__content}>
						<div>
							<p>More than 70% students get placed in top 100 pharma companies</p>
						</div>
						<figure>
							<img title="MR job" src={Achievement2} alt="smiling professional with folded arms" />
						</figure>
					</div>
				</li>
				<li className={`${styles.card} ${styles.card_3}`}>
					<div className={styles.card__content}>
						<div>
							<p>LSSSDC/NSDC Certified trainers having rich experience in top notch companies</p>
						</div>
						<figure>
							<img title="pharma trainer" src={Achievement3} alt="professionals standing & smiling" />
						</figure>
					</div>
				</li>
				<li className={`${styles.card} ${styles.card_4}`}>
					<div className={styles.card__content}>
						<div>
							<p>9 out of 10 students get their first JOB OFFER within 60 days of starting the course</p>
						</div>
						<figure>
							<img
								title="job oriented courses after graduation"
								src={Achievement4}
								alt="person standing with his laptop"
							/>
						</figure>
					</div>
				</li>
			</ul>
		</div>
	);
}

export default Achievements;
