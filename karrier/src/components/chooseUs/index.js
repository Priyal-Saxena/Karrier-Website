import React from "react";
import styles from "./chooseUs.module.css";
import { ReactComponent as Illustration1 } from "../../assets/illustrations/Illustration1.svg";
import Picture from "../../assets/home/Anubhav Saxena - Best Pharma Sales Trainer & Sales Consultant in India.png";

function ChooseUs() {
	return (
		<div className={`${styles.container} ${styles.onlineContainerRow} `}>
			{/* <div className={styles.onlineContainerRow}> */}

			<div className={styles.top}>
				<h2 className={styles.chooseUsHeading}>Anubhav Saxena - the Best Sales Trainer</h2>
				{/* <Picture className={styles.onlineSVG} /> */}
				<img
					src={Picture}
					alt="Anubhav Saxena - Best Pharma Sales Trainer & Sales Consultant in India"
					title="Anubhav Saxena - Best Pharma Sales Trainer & Sales Consultant in India"
					className={styles.onlineSVG}
				/>
			</div>

			<div className={styles.onlineClassInfo}>
				{/* <h3>Solution</h3> */}
				<p>
					I know the pain and agony of an average student very well. I also know the exact reason for such
					failures and expectations of the organization and more importantly how to bridge this gap.
					<br />
					<br />
					After working 22 years in top-notch pharmaceutical companies like Sun Pharma, Cadila, Torrent, IPCA
					& Emcure, I finally left the job in 2015 and started my own venture with a vision to minimize the
					pain of a fresh graduate in order to get the first good job.
					<br />
					<br />
					For the past 7 years, Karrier training and evolution Institute is making a meaningful difference in
					the life of fresh graduates from tier 2/3 towns by enhancing their capabilities through robust
					training modules, so they can transform themselves into a “PHARMA SALES READY” candidates.
					<br />
					<br />
					Many of our students are placed in the top 100 pharmaceutical companies. Companies like Micro Lab,
					Alkem, Alembic, Intas, Sun, Indoco, Zuventus, USV, FDC, Medley, Wallace, Eris & Akumentis, and many
					more have hired our students.
				</p>
			</div>
			{/* </div> */}
		</div>
	);
}

export default ChooseUs;
