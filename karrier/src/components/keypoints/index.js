import React from "react";
import styles from "./keypoints.module.css";
import { ReactComponent as SVG } from "../../assets/yeah.svg";
import DoubleArrowSharpIcon from "@mui/icons-material/DoubleArrowSharp";

function Keypoints() {
	return (
		<div className={styles.keypoints}>
			<div className={styles.keypoint}>
				<div className={styles.topLine}>
					<DoubleArrowSharpIcon className={styles.icon} />
					2500+
				</div>
				<div className={styles.lastLine}>Satisfied Students</div>
			</div>
			<div className={styles.keypoint}>
				<div className={styles.topLine}>
					<DoubleArrowSharpIcon className={styles.icon} />
					90%+
				</div>
				<div className={styles.lastLine}>Employment Rate</div>
			</div>
			<div className={styles.keypoint}>
				<div className={styles.topLine}>
					<DoubleArrowSharpIcon className={styles.icon} />
					8+
				</div>
				<div className={styles.lastLine}>years of Excellence</div>
			</div>
			<div className={styles.keypoint}>
				<div className={styles.topLine}>
					<DoubleArrowSharpIcon className={styles.icon} />
					55+
				</div>
				<div className={styles.lastLine}>Companies hired our students</div>
			</div>
		</div>
	);
}

export default Keypoints;
