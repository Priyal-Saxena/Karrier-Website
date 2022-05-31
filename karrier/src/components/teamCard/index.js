import React from "react";
import styles from "./teamCard.module.css";
import Heading from "../../components/heading";
import tieSuit from "../../assets/tieSuit.jpg";
import "font-awesome/css/font-awesome.min.css";
import "./socialIcons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FaFacebookF } from "react-icons/fa";

function TeamCard() {
	return (
		<div className={styles.outerCard}>
			<div className={`${styles.card} ${styles.slideDown}`}>
				<figure className={styles.front}>
					<img src={tieSuit} className={styles.circleImg} />
					<div className={styles.text}>
						<h5>name surname</h5>
						<p>role in company</p>
					</div>
				</figure>
				<figure
					style={{
						backgroundImage: `url(${tieSuit})`,
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}
					className={styles.back}
				>
					<div className={styles.back}>
						<div className={styles.dropdownText}>
							<h5>First Last</h5>
							<p className={styles.title}>Developer</p>
							<div className={styles.bio}>
								Lorem ipsum dolor sit amet, conectetur adipiscing elit. Cras vitae nibh eget urna ette
								condimentum convallis.
							</div>
						</div>
						<div className={styles.social}></div>
					</div>
				</figure>
			</div>
			<div className={styles.socials}>
				<ul className={styles.socialIcons}>
					<li>
						<a href="" className={styles.socialIcon}>
							{/* <FontAwesomeIcon icon="fa-brands fa-react" /> */}
							{/* <FaFacebookF /> */}
							<i className={`${styles.fa} ${styles.facebook}`} class="fa fa-facebook facebook"></i>
						</a>
					</li>
					{/* <li>
						<a href="" className={styles.socialIcon}>
							{" "}
							<i className={`${styles.fa} ${styles.twitter}`} class="fa fa-twitter twitter"></i>
						</a>
					</li> */}
					{/* <li>
						<a href="" className={styles.socialIcon}>
							{" "}
							<i className={`${styles.fa} ${styles.rss}`} class="fa fa-rss rss"></i>
						</a>
					</li> */}
					{/* <li>
						<a href="" className={styles.socialIcon}>
							{" "}
							<i className={`${styles.fa} ${styles.youtube}`} class="fa fa-youtube youtube"></i>
						</a>
					</li> */}
					<li>
						<a href="" className={styles.socialIcon}>
							{" "}
							<i className={`${styles.fa} ${styles.linkedin}`} class="fa fa-linkedin linkedin"></i>
						</a>
					</li>
					<li>
						<a href="" className={styles.socialIcon}>
							{" "}
							<i className={`${styles.fa} ${styles.instagram}`} class="fa fa-instagram instagram icon-2x"></i>
						</a>
					</li>
					{/* <li>
						<a href="" className={styles.socialIcon}>
							{" "}
							<i className={`${styles.fa} ${styles.github}`} class="fa fa-github github"></i>
						</a>
					</li> */}
				</ul>
			</div>
		</div>
	);
}

export default TeamCard;
