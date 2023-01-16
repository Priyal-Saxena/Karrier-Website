// import { Typography } from '@material-ui/core'
import React, { useState, useEffect } from "react";
import styles from "./info.module.css";

function headingComponent(h1, h2, heading) {
	if (h1) {
		return <h1>{heading}</h1>;
	} else if (h2) {
		return <h2>{heading}</h2>;
	} else {
		return <h3>{heading}</h3>;
	}
}
function Info(props) {
	const [data, setData] = useState(props.data);
	return (
		<section className={styles.onlineContainer}>
			{data.map((row, rowIndex) => {
				const { picAlign, src, title, alt, heading, h1, h2, text } = row;

				if (picAlign == "left") {
					return (
						<div className={styles.onlineContainerRow}>
							<img title={title} alt={alt} src={src} className={styles.onlineSVG} />
							<div className={styles.onlineClassInfo}>
								{headingComponent(h1, h2, heading)}
								<p>{text}</p>
							</div>
						</div>
					);
				} else if (picAlign == "right") {
					return (
						<div className={styles.onlineContainerRow}>
							<div className={styles.onlineClassInfo}>
								{headingComponent(h1, h2, heading)}
								<p>{text}</p>
							</div>
							<img src={src} title={title} alt={alt} className={styles.onlineSVG} />
						</div>
					);
				} else if (!picAlign) {
					return (
						<div className={styles.onlineContainerRow}>
							<div className={styles.onlineClassInfoFullWidth}>
								{headingComponent(h1, h2, heading)}
								<p>{text}</p>
							</div>
						</div>
					);
				}
			})}
		</section>
	);
}

export default Info;
