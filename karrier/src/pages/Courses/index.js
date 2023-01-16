import React from "react";
import styles from "./Courses.module.css";
// import "./courses.css";
import CourseCard from "../../components/courseCard";
import Heading from "../../components/heading";
import Reviews from "../../components/reviews/index";
import Propel from "../../assets/courses/Propel2.png";
import PropelXL from "../../assets/courses/PropelXL2.png";
import PropelPocket from "../../assets/courses/PropelPocket2.png";
import ReviewsImg from "../../assets/courses/reviews.jpeg";
import SatendraSingh from "../../assets/students/SatendraSingh.png";
import AyoghoTiku from "../../assets/students/AyoghoTiku.png";
import PawanSingh from "../../assets/students/PawanSingh.png";
import RajatMaurya from "../../assets/students/RajatMaurya.png";
import AnujPandey from "../../assets/students/AnujPandey.png";
import AniketGautam from "../../assets/students/AniketGautam.png";
import JitendraMishra from "../../assets/students/JitendraMishra.png";
import GauravKumar from "../../assets/students/GauravKumar.png";
import SheshmaniTewari from "../../assets/students/SheshmaniTewari.png";
import NishithTiwari from "../../assets/students/NishithTiwari.png";
import ShobhitAgnihotri from "../../assets/students/ShobhitAgnihotri.png";
import DeepakTiwari from "../../assets/students/DeepakTiwari.png";
import img1 from "../../assets/courses/medical representative training.jpg";
import img2 from "../../assets/courses/Best Pharma Sales Trainer & Sales Consultant in India.jpg";
import img3 from "../../assets/courses/medical representative training institute.jpg";
import img4 from "../../assets/courses/medical representative course.jpg";
import Info from "../../components/info";

let data = [
	{
		name: "SATENDRA SINGH",
		designation: "FRESENIUS KABI",
		review:
			"“Great place where you can change yourself to a corporate person. I started my career with ALKEM LABS and till am working with FRESENIUS KABI”",
		src: SatendraSingh,
	},
	{
		name: "AYOGHO TIKU",
		designation: "from South Africa",
		review:
			"As PMaRx student in Karrier Training & Evolution Institute will appreciate the instructors for their knowledge they impact in me despite the distance from South Africa the training is 100%. I'm now exposed to Pharmaceuticals companies national and international.",
		src: AyoghoTiku,
	},
	{
		name: "PAWAN SINGH",
		designation: "ZUVENTUS HEALTHCARE LTD / MACLEODS PHARMA",
		review:
			"“Karrier Institute is the best institute for medical representative. Anubhav sir and Mam knowledge and experience will make you eligible to work in this line, this coaching makes your future secure”",
		src: PawanSingh,
	},
	{
		name: "RAJAT MAURYA",
		designation: "RELIANCE RETAIL",
		review:
			"”Spoken English classes helped me a lot, while talking during interview with confidence. Best coach & guidance support.  Got job in top growing company- Reliance Retail at Barabanki, my dream comes true.  Happy moments for me & family.  Thanks Karrier Institute for changing my life.”",
		src: RajatMaurya,
	},
	{
		name: "ANUJ PANDEY",
		designation: "SINSAN PHARMACEUTICAL LTD",
		review:
			"“Excellent faculty highly recommended for the ones who wants to build career in pharma industry. The training program enhances our knowledge about pharma industry which helps you to start your career in pharma industry and enhance your knowledge and understanding about pharma industry”",
		src: AnujPandey,
	},
	{
		name: "ANIKET GAUTAM",
		designation: "BAYER INDIA",
		review:
			"“Karrier Training & Evolution Institute is one of the best MR training Institute. The faculty is really superb & helpful. The training helps me to gain in-depth knowledge about body system and pharmacology as well as it boost my confidence level. I'm really thankful to Mr Anubhav Saxena Sir who transformed me into a confident and professional person.”",
		src: AniketGautam,
	},
	{
		name: "JETENDRA MISHRA",
		designation: "MICRO LABS",
		review:
			"“This is the best medical Rep Training Institute in Eastern UP, ,bcz the faculty of this institute is highly educated, skillful,, so that u r learning skills, communication for ur bright future in pharma industry. Now i m working at Micro Labs Ltd. Over a year at Lucknow HQ. So guys if u want, to make future in pharma industry this is the best place,,. ..👍👍”",
		src: JitendraMishra,
	},
	{
		name: "GAURAV KUMAR",
		designation: "MSN LABS",
		review:
			"“Karrier provide me an excellent path in my career. Thanks to Karrier institute for providing a job In one of the fastest growing company in India, MSN LAB Pvt. Ltd, Karrier institute is complete solution towards your desirable job where you looking for”",
		src: GauravKumar,
	},
	{
		name: "SHESHMANI TEWARI",
		designation: "GSK",
		review:
			"“it's a best place where we can develop yourself, brush up our knowledge and learn how to improve our skill required for sales & Marketing....”",
		src: SheshmaniTewari,
	},
	{
		name: "NISHITH TIWARI",
		designation: "ALEMBIC PHARMA",
		review:
			"“Karrier MR Training Institute is a big platform to learn more and more about pharma industry. Thanks Anubhav sir and Vivek sir for guidance me that's I am selected in Alembic pharmaceutical Ltd.”",
		src: NishithTiwari,
	},
	{
		name: "Drx SHOBHIT AGNOHOTRI",
		designation: "MANKIND PHARMA",
		review:
			"“I would like to say thank you sir . Now i am on my right way to get success. This Institute is best for new fresher’s who have not awareness about their profession n career. Pls join n get success.”",
		src: ShobhitAgnihotri,
	},
	{
		name: "DEEPAK TIWARI",
		designation: "MEDLEY PHARMACEUTICALS LTD",
		review:
			"“If we start talking about Karrier training have a very excellent faculty Mr. Anubhav Sir founder of Karrier with lots of experience I am doing Karrier Training because the quality of teaching is awesome so academic is excellent value of money is good in Karrier. If you are investing your money in Karrier training don’t worry you get a good result but it depends on student personality how they show their efforts. They provide good placement.”",
		src: DeepakTiwari,
	},
];
function Courses() {
	return (
		<section className={styles.ForStudents}>
			{/* <div className={styles.cardHeading}> */}
			<Heading main="Medical Representative Course" h1={true} subtext="Be Pharma Sales Ready from Day 1" />
			<Info
				data={[
					{
						picAlign: "left",
						src: img1,
						title: "medical representative training",
						alt: "person sitting with his laptop",
						// heading: "I need a job!",
						text: "Karrier training and evolution institute offers a range of medical representative training courses. These courses are short term job-oriented courses as per student need, suitability & budget. Karrier Institute was founded by industry veteran Anubhav Saxena in 2015. ",
					},
					{
						picAlign: "right",
						src: img2,
						title: "Best Pharma Sales Trainer & Sales Consultant in India",
						alt: "Anubhav Saxena - Best Pharma Sales Trainer & Sales Consultant in India",
						text: (
							<div>
								He has a rich 27+ years of experience in top-notch companies like SUN PHARMA, Cadila, Torrent,
								IPCA & Emcure. He is also LSSSDC & NSDC certified pharma trainer in India. He not only
								understands the real pain & struggle of graduates as he himself faces the situation but also
								he knows the way to overcome these situations. Under his able leadership, Karrier institute is
								making a significant difference in students' life from tier 2/3 towns for the past 7 years,
								thus karrier is considered the best medical representative training institute in India.
							</div>
						),
					},
					{
						heading: "Best Medical Representative Training Institute in India",
						h2: true,
						picAlign: "left",
						src: img3,
						title: "medical representative training institute",
						alt: "graduate becoming a professional",
						text: (
							<div>
								There are various regional training institutes that run mr courses like endeavour medical
								representative training centre & carreograph institute of medical representative, iimr, mrti
								which are offering a medical representative course in kolkata, west bengal, UP, orissa, delhi
								or state level but karrier institute has an edge over them as it offers:
								<ul>
									<li>• Pan-India presence through industry tie-up. </li>
									<li>• Both online and offline modes for training.</li>
									<li>
										• Propel Pocket- Highly Effective Online Medical Representative Training Course (Hybrid
										Model). KARRIER- the first institute that introduced online MR training courses- Live as
										well as Hybrid.
									</li>
								</ul>
							</div>
						),
					},
					{
						picAlign: "right",
						src: img4,
						title: "medical representative course",
						alt: "a man pulling another person with help of a pulley",
						text: (
							<div>
								<ul>
									<li>• Training through highly experienced LSSSDC and NSDC certified trainers.</li>
									<li>• Mock interview sessions.</li>
									<li>• Detailing and RCPA role-play.</li>
									<li>• Doubt clearance session for weak students.</li>
									<li>• Assessments, Assignments & Notes.</li>
									<li>• Professional resume writing services.</li>
									<li>• Both Hindi and English mediums are available for training.</li>
									<li>• Karrier certification after compilation of training.</li>
									<li>• Job assistance - Interview conduction in top pharma companies till selection.</li>
								</ul>
							</div>
						),
					},
				]}
			/>
			<div className={styles.courseCardContainer}>
				<CourseCard
					name="Propel"
					src={Propel}
					curriculumPoints={[
						"Effective Communication",
						"Basics of Pharma Selling",
						"MR Role and Responsibilities",
						"Basic Science",
						"Body System",
						"Pharmacology",
						"Diseases",
						"Therapies",
						"Secret of Phone Selling",
						"Roleplay",
						"Personality Development",
						"Grooming",
						"Interview Preparation classes (5 hour workshop)",
					]}
					eligibilityPoints={["Graduate with any stream", "Age <=25 years"]}
					mode={["live online classes"]}
					duration="40 hours (45 days)"
					cost="Rs 12800 + GST"
				/>
				<CourseCard
					name="Propel Pocket"
					src={PropelPocket}
					curriculumPoints={[
						"Basics of Pharma Selling",
						"MR Role and Responsibilities",
						"Basic Science",
						"Body System",
						"Pharmacology",
						"Diseases",
						"Therapies",
						"Secret of Phone Selling",
					]}
					eligibilityPoints={["Graduate with any stream", "No age bar"]}
					mode={["pre-recorded classes + ", "live online classes on demand for clearing doubts"]}
					duration="29 hours of pre-recorded classes"
					cost="Rs 4900 + GST"
				/>

				<CourseCard
					name="Propel XL"
					src={PropelXL}
					curriculumPoints={[
						"Spoken English (live classes of 40 hours)",
						"Effective Communication",
						"Basics of Pharma Selling",
						"MR Role and Responsibilities",
						"Basic Science",
						"Body System",
						"Pharmacology",
						"Diseases",
						"Therapies",
						"Secret of Phone Selling",
						"Roleplay",
						"Personality Development",
						"Grooming",
						// "Interview Preparation classes (5 hour workshop)",
						"Power of dressing",
						"Profiling",
						"Killer first Impression",
					]}
					eligibilityPoints={["Graduate with any stream", "Age <=25 years"]}
					mode={["live online classes"]}
					duration="80 hours (90 days)"
					cost="Rs 20,400 + GST"
				/>
			</div>
			{/* </div> */}
			{/* <div className={styles.sectionName}>
				<p>REVIEWS</p>
				<div className={styles.underline}></div>
			</div> */}
			<section className={styles.reviews}>
				<Heading main="Reviews" subtext="what do our students say about us" />
				<Reviews data={data} />
				<img src={ReviewsImg} className={styles.reviewImg} alt="reviews" />
			</section>
		</section>
	);
}

export default Courses;
