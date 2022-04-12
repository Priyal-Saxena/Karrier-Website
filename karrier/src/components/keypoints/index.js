import React from "react";
import styles from "./keypoints.module.css";
import { ReactComponent as SVG } from "../../assets/yeah.svg";

function Keypoints() {
	return (
		<div className={styles.keypoints}>
			<div className={styles.keypoint}>
				<div className={styles.topLine}>
					<SVG className={styles.icon} />
					1000+
				</div>
				<div className={styles.lastLine}>Satisfied Students</div>
			</div>
			<div className={styles.keypoint}>
				<div className={styles.topLine}>
					<SVG className={styles.icon} />
					90%+
				</div>
				<div className={styles.lastLine}>Employment Rate</div>
			</div>
			<div className={styles.keypoint}>
				<div className={styles.topLine}>
					<SVG className={styles.icon} />
					7+
				</div>
				<div className={styles.lastLine}>years of Excellence</div>
			</div>
			<div className={styles.keypoint}>
				<div className={styles.topLine}>
					<SVG className={styles.icon} />
					55+
				</div>
				<div className={styles.lastLine}>Companies hired our students</div>
			</div>
		</div>
	);
}

export default Keypoints;
