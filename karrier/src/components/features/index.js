import React from "react";
import styles from "./features.module.css";
import meeting from "../../assets/meeting.jpg";

function Features() {
	return (
		<div
			className={styles.img}
			style={{
				backgroundImage: `url(${meeting})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className={styles.grid}>
				<div>
					<p>Best in class faculty having rich experience in key segments from reputed pharma companies</p>
				</div>
				<div>
					<p>Unique Training Cum Employment Program</p>
				</div>
				<div>
					<p>After certification program, Immediate Employment in Top 100 Pharmaceutical companies.</p>
				</div>
				<div>
					<p>Karrier with KASH methodology which focuses on Knowledge, Attitude, Skills & Habits</p>
				</div>
				<div>
					<p>Employment back up for next 6 months.</p>
				</div>
				<div>
					<p>Our curriculum is designed in a way which lays</p>
				</div>
				<div>
					<p>formidable foundations by developing the logical</p>
				</div>
				<div>
					<p>and analytical skills of our students while ensuring holistic personality development.</p>
				</div>
			</div>
		</div>
	);
}

export default Features;
