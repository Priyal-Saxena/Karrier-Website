import React from "react";
import styles from "./achievements.module.css";

function Achievements() {
	return (
		<div className={styles.achievements}>
			<ul className={styles.cards}>
				<li className={`${styles.card} ${styles.card_1}`}>
					<div className={styles.card__content}>
						<div>
							<h2>Card One</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							{/* <p>
								<a href="#top" className={`${styles.btn} ${styles.btn__accent}`}>
									Read more
								</a>
							</p> */}
						</div>
						<figure>
							<img
								src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-1.jpg"
								alt="Image description"
							/>
						</figure>
					</div>
				</li>
				<li className={`${styles.card} ${styles.card_2}`}>
					<div className={styles.card__content}>
						<div>
							<h2>Card Two</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							{/* <p>
								<a href="#top" className={`${styles.btn} ${styles.btn__accent}`}>
									Read more
								</a>
							</p> */}
						</div>
						<figure>
							<img
								src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg"
								alt="Image description"
							/>
						</figure>
					</div>
				</li>
				<li className={`${styles.card} ${styles.card_3}`}>
					<div className={styles.card__content}>
						<div>
							<h2>Card Three</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							{/* <p>
								<a href="#top" className={`${styles.btn} ${styles.btn__accent}`}>
									Read more
								</a>
							</p> */}
						</div>
						<figure>
							<img
								src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-3.jpg"
								alt="Image description"
							/>
						</figure>
					</div>
				</li>
				<li className={`${styles.card} ${styles.card_4}`}>
					<div className={styles.card__content}>
						<div>
							<h2>Card Four</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							{/* <p>
								<a href="#top" className={`${styles.btn} ${styles.btn__accent}`}>
									Read more
								</a>
							</p> */}
						</div>
						<figure>
							<img
								src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg"
								alt="Image description"
							/>
						</figure>
					</div>
				</li>
			</ul>
		</div>
	);
}

export default Achievements;
