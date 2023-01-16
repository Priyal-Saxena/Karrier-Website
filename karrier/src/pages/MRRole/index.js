import React from "react";
import styles from "./MRRole.module.css";
import Heading from "../../components/heading";
import img1 from "../../assets/MRRole/role of medical representative.jpg";
import img2 from "../../assets/MRRole/the role of medical representative.jpg";
import Info from "../../components/info";

function MRRole() {
	return (
		<section className={styles.Introduction}>
			<Heading h1={true} main="Role of a Medical Representative" />
			<div className={styles.onlineContainerRow}>
				<Info
					data={[
						{
							picAlign: "left",
							src: img1,
							title: "role of medical representative",
							alt: "professional sitting in a meeting",
							// heading: "Are you unemployed?",
							text: (
								<div>
									Hi, If you are a fresh graduate, ambitious & hard worker, and want to have a bright career
									in sales then a medical sales representative will be a good choice.
									<br />
									Do you know that a medical sales representative is considered as a white-collar job?
									<br />
									You must be thinking about:
									<br />
									<ul>
										<li>What is a medical representative?</li> <li>What is MR?</li> <li> What is MR job?</li>
										<li>What are the duties of a medical representative?</li>
										<li>What are the medical representative role and responsibilities?</li>
									</ul>
								</div>
							),
						},

						{
							picAlign: "right",
							src: img2,
							title: "the role of medical representative",
							alt: "MR promoting his products to doctor",
							text: (
								<div>
									People frequently ask what does MR stand for? <br /> <br />
									Well in the pharmaceutical industry, people are usually called medical sales representatives
									as MR. <br /> <br /> The role of a medical representative is to represent his/her company
									and his job is to promote and sell the company’s products (medicines/drugs, medical
									equipment/devices). A med rep acts as a bridge between pharmaceutical companies and doctors,
									nurses, chemists and pharmacists. While medical sales representative doesn't work with
									patients directly, in fact they build a network with healthcare practitioners and educate
									them on the latest developments in the field of medicine which can help them to treat the
									patient better.
								</div>
							),
						},
						{
							h2: true,
							heading: "The Role of a Medical Representative",
							text: (
								<div>
									<ul>
										<li>
											The main work of medical representative is to serve as a link between the company &
											customers (Doctors, Chemist & Stockists)​
										</li>
										<li>
											He promotes his company’s brands to doctors, implementing company strategies, so they
											can convert doctors to prescribe company’s brands. His main job is creating demand in
											market.​
										</li>
										<li>
											A medical sales representative is also responsible for ROI (RETURN ON INVESTMENT)​ by
											utilising company inputs like: Samples / Literature / Books / Journals / References /
											Reminders / Gifts / Campaigns.
										</li>
										<li>
											To conduct various activities like OPD camps / Patients awareness camps / DGM / CME /
											Sponsorship etc.
										</li>
										<li>
											Companies provide these inputs/activities, so MR can build a relationship with doctors.
											These activities / inputs helps them to communicate / engage doctors inside doctor's
											chamber.​
										</li>
										<li>
											The role of medical representative is to prepare and work according to MCL (Master Call
											List / Doctor List) ​in his assigned area, which is known as territory.​
										</li>
										<li>
											RCPA (RETAIL CHEMIST PRESCRIPTION AUDIT / CHEMIST SURVEY)​ RCPA helps them: i To
											identify the potential customers. (MCL Classification / Validation)​ ii To identify the
											right product (Doctor-Product Matching). iii To know the latest prescribing habits of
											doctors.
										</li>
										<li>
											Effectively delivery of key messages i.e highlighting product features & benefits ​to
											doctors, how your product scores over competitor brands (USP.s- unique selling point)
											​is the most important job role of a medical representative.
										</li>
										<li>
											POB (Personal / Pen Order Booking) - a collection of orders from chemists/hospitals /
											dispensing doctors & ensure supplies from stockists are the duties of a medical
											representative. ​
										</li>
										<li>
											Ensuring the availability of brands at the chemist so doctor prescriptions should not
											bounce is the responsibility of the medical sales representative.
										</li>

										<li>
											Maintaining inventory (Stock of each Brand), collecting stock statements & payments from
											stockists.
										</li>
										<li>Implementation of company strategies & feedback to HO. ​ </li>
										<li>Maintaining coverage, compliance & Doctor Call average / Chemist Call Average.​</li>
										<li>Submission of Daily Reports (DCR- daily call report)​</li>
										<li>Compilation of Secondary Sales & Monitoring of Primary / Secondary sales trend.​</li>
										<li>Maintenance of Diary & submission of Monthly Review Formats.​</li>
										<li>Tour Program Submission.​</li>
										<li>Monthly Expense Submission.​</li>
										<li>Competitor activity feedback to HO.​</li>
										<li>A regular visit to doctors, chemists & stockists.​</li>
										<li>Target achievement.​</li>
									</ul>
								</div>
							),
						},
					]}
				/>
			</div>
		</section>
	);
}

export default MRRole;
