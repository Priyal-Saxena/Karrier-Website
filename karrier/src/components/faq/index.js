import React from "react";
import styles from "./faq.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
let FAQs = [
	{
		ques: "What is online medical representative program?",
		ans: "Candidates who are aspiring to get a Medical Representative Job needs to successfully clear the MR Interview. Online Medical Representative Orientation is a course which is designed to understand the Job of a Medical Representative, basic human anatomy & Interview skills. On completing this course students will be able to successfully clear the MR interview & secure the job. This program can be done from your home or workplace at your convenient time.",
	},
	{
		ques: "What is medical representative training or MR training?",
		ans: "Medical Representative training is the method of training where the trainer has direct communication with trainees in a physical environment. It is the most traditional method of imparting education. In this mode students get the opportunity to do group study & also clear their doubts immediately in the presence of the trainer",
	},
	{
		ques: "Between online course & offline course, which one is suitable for me?",
		ans: "Classroom medical representative training is always a better choice since it gives full knowledge about the job, profession & Interview skills. However there are many students who don’t have the feasibility to attend regular classes as they might be working full time jobs or unable to come & stay near institute campus. Yet they aspire to become Medical Representative. PROPEL POCKET / PROPEL /PROPEL XL is suggested for those students who are unable to attend classroom MR training. Objective of training program is to develop a candidate, so that he/she can successfully answer the medical representative interview questions & get selected. •Propel Pocket – 29 hours Hybridmodel (80% recorded + 20% live) •Propel- 40 hours Live classes (for students fluent in English) •Propel XL- 80 hours Live classes (for student weak in spoken English)",
	},
	{
		ques: "Why should I do medical representative training?",
		ans: "The medical representative training will help you get prepared on how to face pharma companies’ medical representative Interview. Your performance will be much better than others who have not undergone the training program. Without doing the training program, you may or may not get a MR Job, but after doing the medical representative training you will be getting a much better quality job than what you would have got without doing the training program. Most of companies are not looking for fresher as they don’t want to invest their time for training of fresher, this training will help you to be “PHARMA SALES READY” When you have a certificate with you the interview board will appreciate that you have taken professional preparation for becoming a Medical Representative.",
	},
	{
		ques: "In what language the online classes will be held?",
		ans: "Online training & pre-recorded lecture will be mostly in easy English, because this is the language that you need to talk inside the doctor’s chamber during product promotion. However you will also get the opportunity to clear your doubt from teachers in your local language.",
	},
	{
		ques: "I am non-science graduate. Am I eligible to become a Medical Representative? ",
		ans: "Graduates from any stream can start their career as Medical Representative. Candidate has to fulfil other important criteria like: Good Communication, Presentational Skills, Scientific Knowledge with Impressive Personality & Attitude. Company usually prefers science / pharmacy graduate, certificate from Karrier will give you additional advantage over other candidates as you are “PHARMA SALES READY”  ",
	},
	{
		ques: "Being a non-science graduate, how can I learn the subject? ",
		ans: "Your apprehension is quite justified. Our training module has interactive Audio/Video/PowerPoint presentation for the ease of understanding for non-science graduates. The course content start from basic i.e 10th level, test after each lessons will help you to check your progress, you have option to book remedial classes with trainer if you have difficulty to understand the concept.",
	},
	{
		ques: "Do you give Job Guarantee? ",
		ans: "Training will help you to acquire relevant knowledge & skills to perform during interview, we will give you job assistance after completion of the course till your selection. There is high probability of getting job after the training as industry prefers trained / sales ready candidates. Certificate from Karrier’s will give clear cut edge over other candidates. ",
	},
	{
		ques: "What makes Karrier different from other training institutes? ",
		ans: "Trainers in Karrier Institute are LSSSDC / NSDC certified and having rich experience in top notch pharma companies, which makes Karrier Institute unique from other institutes. Most of our Students get placed in Top 100 Pharma Companies. Apart from theoretical knowledge you will be also exposed to real market challenges like detailing, RCPA, call planning & marketing activities implementation through role play / case study. This kind of practical real life learning procedure is introduced for the first time by Karrier Institute, which is not practiced in any other training institute.",
	},
	{
		ques: "I am weak in English- Can I get a job? ",
		ans: "It’s the most common problem. English is not your mother tongue, so it’s quite genuine that you are not confident in speaking English, and thus fear from communicating in English. But speaking English is mandatory for most of interviews and a marketing job in pharma companies.  We have Propel XL course specially designed for student having weak spoken English, our special training method will improve your vocabulary, spoken English. Mock interview helps you to build your confidence during interview. ",
	},
	{
		ques: "What would be my starting salary as Medical Representative? ",
		ans: "Usually salary packages for fresher are Rs. 18000/- to Rs. 25000/- per month.  Additionally you will get Daily Allowance (DA), Travelling Allowance (TA), Provident fund (PF), Bonus, LTA, medical insurance & Gratuity. Medical Representatives can also earn incentives on accomplishment of set objectives. ",
	},
	{
		ques: "What are the criteria for choosing Medical Representative by the Top Pharma Companies? ",
		ans: "Pharma companies judge a medical representative on following parameters- • Good Presentation Skils • Attitude • Spoken English • Scientific & Marketing Knowledge • Confidence • Pleasant Personality • Selling Skills",
	},
	{
		ques: "What are the Career Prospects as Medical Representative? ",
		ans: "A good performer with leadership qualities can be promoted as Area Business Manager. Industry is growing very fast so there is high probability for in-house promotion for a performer within 2-3 years. Even you can grow up to level of General Manager / Vice-President in a company.",
	},
	{
		ques: "How will I get the interview opportunities? ",
		ans: "It’s our responsibilities to conduct your interview after issuing of the certificate. You will get interview opportunities until you get a job.",
	},
	{
		ques: "Can I get the placement in my Home Town? ",
		ans: "Most of the time, companies prefer to appoint the candidate at his/her native place, but sometimes on basis of his/her capabilities & availability of vacancies, candidate may be placed other to their hometown. However, Karrier provides you best opportunities near your Home-Town/State depending upon availability of vacancies.",
	},
	{
		ques: "What happens if I do not perform in training test? ",
		ans: "Our Module are designed like that you will understand the concept if you attend all classes, still if you not able to understand, then you can watch the pre-recorded lecture as many times you want & you can demand live remedial classes with trainer too. If still you face the problem, you have option to change your program to live classes / physical classes by paying the difference amount. ",
	},
	{
		ques: "I have heard that if I don’t achieve budget or target, my job will be at stake in this profession?",
		ans: "As a Medical Representative you will have 2 targets – Activity Target & Sales Target. •	Activity Target – Meeting Doctors, Meeting Chemist, Meeting Stockiest •	Sales Target – Achieving, Sales Target (Eg. 1 lakh / month) As a Medical Representative activity target is within your control and sales will only be a consequence. Your job as a Medical Representative is to achieve your Activity Target which is very much within your control. In spite of achieving your Activity Target if Sales Target is not fulfilled, your Area Manager is there to guide you. Your job will never be a stake if you fulfil your Activity Target. ",
	},
];

function FAQ() {
	return (
		<div className={styles.container}>
			{FAQs.map(faq => {
				return (
					<Accordion className={styles.accordion}>
						<AccordionSummary
							className={styles.accordionSummary}
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography className={styles.question}> {faq.ques} </Typography>
						</AccordionSummary>
						<AccordionDetails className={styles.accordionDetails}>
							<Typography>{faq.ans}</Typography>
						</AccordionDetails>
					</Accordion>
				);
			})}
		</div>
	);
}

export default FAQ;
