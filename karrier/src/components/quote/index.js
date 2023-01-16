import React from "react";
import styles from "./quote.module.css";

function Quote(props) {
	return (
		<div className={styles.quote}>
			<hr style={{ margin: "60px auto", opacity: ".5" }} />
			<div className={`${styles.testimonialQuote} ${styles.group}`}>
				{/* <img src="http://placehold.it/120x120" /> */}
				<div className={styles.quoteContainer}>
					<blockquote>
						<p>{props.quote}</p>
					</blockquote>
					<cite>
						{/* <span>Kristi Bruno</span>
						<br /> */}
						~ Carnegie Institute of Technology
						{/* <br />
						occupation */}
					</cite>
				</div>
			</div>

			<hr style={{ margin: "55px auto", opacity: ".5" }} />
		</div>
	);
}

export default Quote;
