import React from "react";
// import { Card, Button } from "react-bootstrap";
import styles from "./panel.module.css";
import smilingStudent from "../../assets/smilingStudent.png";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { getThemeProps } from "@mui/system";

const Panel = props => {
	return (
		<div className={styles.card}>
			<div className={styles.imgContainer}>
				<img src={props.src} alt={`image of ${props.name}`} />
			</div>
			<div className={styles.line}></div>
			<div className={styles.text}>
				<p className={styles.info}>{props.name}</p>
				<p className={styles.info}>{props.designation}</p>

				<div>
					<p>{props.review}</p>
					{/* {props.rating? <Rating style={{ paddingLeft: 15 }} name="read-only" value={props.rating} readOnly />:" ";} */}
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
