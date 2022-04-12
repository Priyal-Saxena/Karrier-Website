import React from "react";
// import { Card, Button } from "react-bootstrap";
import styles from "./panel.module.css";
import smilingStudent from "../../assets/smilingStudent.png";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const Panel = () => {
	return (
		<div className={styles.card}>
			<div className={styles.imgContainer}>
				<img src={smilingStudent} alt="nsj" />
			</div>
			<div className={styles.line}></div>
			<div className={styles.text}>
				<div>
					<p>
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
						mollit anim id est laborum.
					</p>
					<Rating style={{ paddingLeft: 15 }} name="read-only" value={4} readOnly />
				</div>
				{/* <Box
					sx={{
						"& > legend": { mt: 2 },
					}}
				>
					
				</Box> */}
			</div>
		</div>
	);
};

export default Panel;
