import React from "react";
import styles from "./student.module.css";

function Student(props) {
	return (
		<div className={styles.student}>
			<div className={styles.memberDetails}>
				<div>
					<img
						src="http://gocheckers.com/images/roster/andrew_poturalski_headshot_1718.png"
						alt="UI Designer"
					/>
					<div className={styles.memberInfo}>
						{/* <h3>John Doe</h3>
						<p>UI Designer</p> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Student;
