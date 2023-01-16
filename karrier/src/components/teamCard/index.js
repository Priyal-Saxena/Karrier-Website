import React from "react";
import styles from "./teamCard.module.css";
import Heading from "../../components/heading";
import tieSuit from "../../assets/tieSuit.jpg";
import "font-awesome/css/font-awesome.min.css";
import "./socialIcons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FaFacebookF } from "react-icons/fa";

function TeamCard(props) {
	return (
		<div className={styles.outerCard}>
			<div className={`${styles.card} ${styles.slideDown}`}>
				<figure className={styles.front}>
					<img src={props.src} className={styles.circleImg} />
					<div className={styles.text}>
						<h5>{props.name}</h5>
						<p>{props.role}</p>
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
							<h5>{props.name}</h5>
							<p className={styles.title}>{props.role}</p>
							<div className={styles.bio}>{props.description}</div>
						</div>
						<div className={styles.social}></div>
					</div>
				</figure>
			</div>
			<div className={styles.socials}>
				<ul className={styles.socialIcons}>
					<li>
						<a href={props.fb} className={styles.socialIcon}>
							<i className={`${styles.fa} ${styles.facebook}`} class="fa fa-facebook facebook"></i>
						</a>
					</li>

					<li>
						<a href={props.linkedIn} className={styles.socialIcon}>
							<i className={`${styles.fa} ${styles.linkedin}`} class="fa fa-linkedin linkedin"></i>
						</a>
					</li>
					<li>
						<a href={props.insta} className={styles.socialIcon}>
							<i className={`${styles.fa} ${styles.instagram}`} class="fa fa-instagram instagram icon-2x"></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default TeamCard;
