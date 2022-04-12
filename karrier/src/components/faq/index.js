import React from "react";
import styles from "./faq.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQ() {
	return (
		<div className={styles.container}>
			<Accordion className={styles.accordion}>
				<AccordionSummary
					className={styles.accordionSummary}
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography className={styles.question}>Accordion 1</Typography>
				</AccordionSummary>
				<AccordionDetails className={styles.accordionDetails}>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
						blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion className={styles.accordion}>
				<AccordionSummary
					className={styles.accordionSummary}
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
					<Typography className={styles.question}>Accordion 2</Typography>
				</AccordionSummary>
				<AccordionDetails className={styles.accordionDetails}>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
						blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion className={styles.accordion}>
				<AccordionSummary
					className={styles.accordionSummary}
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel3a-content"
					id="panel3a-header"
				>
					<Typography className={styles.question}>Accordion 3</Typography>
				</AccordionSummary>
				<AccordionDetails className={styles.accordionDetails}>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
						blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
