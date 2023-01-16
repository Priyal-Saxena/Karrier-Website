import React from "react";
import styles from "./courseCard.module.css";
// import Workplace from "../../assets/workplace.jpg";
// import "animate.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { positions } from "@mui/system";
import Button from "@mui/material/Button";

function TabPanel(props) {
	const { children, value, index, ...other } = props;
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 1 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

function CourseCard(props) {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const { eligibilityPoints, curriculumPoints, mode, duration, cost, name, src } = props;
	return (
		<div className={styles.courseCardCol}>
			<div className={styles.courseCard}>
				<div className={styles.imageContainer}>
					<img src={src} />
				</div>

				<div className={styles.cardInfo}>
					<Box sx={{ width: "100%" }}>
						<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
							<Tabs
								textColor="secondary"
								indicatorColor="transparent"
								value={value}
								// // justified={true}
								onChange={handleChange}
								// // indicatorColor="secondary"
								// // textColor="inherit"
								variant="fullWidth"
								// aria-label="basic tabs example"
							>
								<Tab wrapped label="Details" {...a11yProps(0)} />
								<Tab wrapped label="Curriculum" {...a11yProps(1)} />
								{/* <Tab label="Item Three" {...a11yProps(2)} /> */}
							</Tabs>
						</Box>

						<TabPanel value={value} index={0}>
							<div class={styles.text}>
								<p>
									<span class={styles.title}>Course Name:</span>
									{name}
								</p>
								<p class={styles.listTitle}>Eligibility</p>
								<ul class={styles.points}>
									{eligibilityPoints.map(point => (
										<li class={styles.point}>{point}</li>
									))}
								</ul>
								<p>
									<span class={styles.title}>Mode:</span>
									{mode.map(el => (
										<span>{el}</span>
									))}
								</p>
								<p>
									<span class={styles.title}>Duration:</span>
									{duration}
								</p>
								<p>
									<span class={styles.title}>Cost:</span>
									{cost}
								</p>
							</div>
						</TabPanel>
						<TabPanel value={value} index={1}>
							<div class={styles.text}>
								<p class={styles.listTitle}>Curriculum</p>
								<ul class={styles.points}>
									{curriculumPoints.map(point => (
										<li class={styles.point}>{point}</li>
									))}
								</ul>
							</div>
						</TabPanel>
						{/* <TabPanel value={value} index={2}>
					Item Three
				</TabPanel> */}
					</Box>
				</div>
			</div>

			<div className={styles.submit}>
				<a href="https://forms.gle/2dhkrDQupJxyV8df8">
					<input type="submit" value="Free Demo Class" className={`${styles.form_button} ${styles.button}`} />
				</a>
			</div>
			{/* <Button class={styles.btn} variant="contained" href="#contained-buttons">
				Link
			</Button> */}
		</div>
	);
}

export default CourseCard;
