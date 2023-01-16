import React from "react";
import styles from "./InternshipProgram.module.css";
// import "./courses.css";
import CourseCard from "../../components/courseCard";
import Heading from "../../components/heading";
import Reviews from "../../components/reviews/index";
import onlineClasses from "../../assets/onlineClasses.jpg";
import Benefits from "../../components/benefits";
import StudentsReviews from "../../components/studentsReviews";
import Background from "../../assets/internship/students/background.jpg";
import CollegeReviews from "../../components/collegeReviews";
import RamgopalBangad from "../../assets/internship/corporate/RamgopalBangad.png";
import ArvindNigam from "../../assets/internship/corporate/ArvindNigam.png";
import RajendraKhati from "../../assets/internship/corporate/RajendraKhati.png";
import RajeshTewari from "../../assets/internship/corporate/RajeshTewari.png";
import RajivPathak from "../../assets/internship/corporate/RajivPathak.png";
import img1 from "../../assets/internship/internship after graduation.jpg";
import img2 from "../../assets/courses/Best Pharma Sales Trainer & Sales Consultant in India.jpg";
import internshipModel from "../../assets/internship/campus to corporate.jpg";
import Info from "../../components/info";
let data = [
	{
		name: "RAMGOPAL BANGAD",
		designation: "DIRECTOR EVIDENS LIFESCIENCES",
		review:
			"“Good start by KARRIER. The training and teaching module is well created and executed. The candidate's comes out with enhanced skills, knowledge and stronger base in pharma sales. Great going. Well done”",
		src: RamgopalBangad,
	},
	{
		name: "ARVIND NIGARM",
		designation: "DIRECTOR KAPKIND PHARMA PVT LTD.",
		review:
			"“Yes, I believe with the help of this institute candidate can get help to improve themselves in a better way. Thank you Anubhav Sir, Please keep it up as always.” ",
		src: ArvindNigam,
	},
	{
		name: "RAJENDRA KHATI",
		designation: "ABBOTT HEALTHCARE",
		review:
			"Great platform for new comers in our pharma industry I welcome and wish ALL THE BEST for career and prosperity as pharma sales is one of the admired and respectable profession where one reach to the topmost post of the organization thru his dedicated hard work and sincerity",
		src: RajendraKhati,
	},
	{
		name: "RAJIV PATHAK",
		designation: "Zonal Sales Manager SUN PHARMA",
		review:
			"It's good to join Karrier Med Representative training Institute. As you get trained from a skilled trainer to grow in your career",
		src: RajivPathak,
	},
	{
		name: "RAJESH TEWARI",
		designation: "Head L&D Ozone Pharmaceuticals",
		review:
			"“Mr. Anubhav is a passionate training and development professional. He has excellent networking and interpersonal skills. He has strong business acumen. My association with Anubhav has always been mutually satisfying, rewarding and purposeful.”",
		src: RajeshTewari,
	},
];
function InternshipProgram() {
	return (
		<section className={styles.ForInstitutes}>
			<Heading
				h1={true}
				main="Campus to Corporate"
				subtext="Flagship Model, a win-win model for all stakeholders"
			/>
			<Info
				data={[
					{
						picAlign: "left",
						src: img1,
						h2: true,
						title: "internship after graduation",
						alt: "students sitting in front of the laptop",
						heading: "Internship after Graduation",
						text: (
							<div>
								Kick-start your career - An Internship Program (for degree colleges, universities). 9 out of
								10 students with internships get the job offer. Our Internship Program introduces the future
								leaders of Pharma sales and marketing to the industry. You will be trained by our veteran
								team, learn from industry veterans, and create valuable relationships with top professionals.
								As a part of the program, you will be paired with a mentor who will guide you throughout your
								entire experience.
								<br />
								This program is ideal for degree colleges/university final year graduates (any stream) willing
								to start a career in pharma sales. This is a unique opportunity for students to earn a stipend
								during a field internship within their state for a period of 3 months. There is a very high
								chance for students to get employed after the successful completion of the field internship.
							</div>
						),
					},
					{
						picAlign: "right",
						src: img2,
						title: "certified soft skill trainer in India",
						alt: "Anubhav Saxena- Best Pharma Sales Trainer",
						heading:
							"Know your Mentor: Anubhav Saxena - Best Pharma Sales Trainer & Sales Consultant in India",
						text: (
							<div>
								9 out of 10 students with internships get the job offer. Our Internship Program introduces the
								future leaders of Pharma sales and marketing to the industry. You will be trained by our
								veteran team, learn from industry veterans, and create valuable relationships with top
								professionals. As a part of the program, you will be paired with a mentor who will guide you
								throughout your entire experience.
								<br />
								This program is ideal for degree colleges/university final year graduates (any stream) willing
								to start a career in pharma sales. This is a unique opportunity for students to earn a stipend
								during a field internship within their state for a period of 3 months. There is a very high
								chance for students to get employed after the successful completion of the field internship.
							</div>
						),
					},
				]}
			/>
			<p>Kindly refer to the Internship model illustrated here… </p>
			<img
				src={internshipModel}
				title="campus to corporate"
				alt="Picture illustrating campus to corporate program"
				className={styles.internshipModel}
			/>
			<Info
				data={[
					{
						text: "Note: Inquiries from colleges & universities for tie-up for the internship program are most welcomed. (We don’t entertain individual student internship requests.)",
					},
				]}
			/>
			<section className={styles.featuresSection}>
				<Heading main="Features" subtext="Salient Features" />
				<Benefits />
			</section>
			<section
				style={{
					backgroundImage: `url(${Background})`,
					backgroundPosition: "center",
					backgroundSize: "center",
					backgroundRepeat: "no-repeat",
				}}
				className={styles.reviews}
			>
				<Heading main="Student Reviews" subtext="What do our students say about us" />
				{/* <Reviews /> */}
				<StudentsReviews />
			</section>
			<section className={styles.reviews}>
				<Heading main="College Reviews" subtext="What do colleges say about us" />
				{/* <Reviews /> */}
				<CollegeReviews />
			</section>
			<section className={styles.reviews}>
				<Heading main="Corporate Reviews" subtext="What do pharma companies say about us" />
				<Reviews data={data} />
			</section>
		</section>
	);
}

export default InternshipProgram;
