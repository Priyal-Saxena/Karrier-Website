import React from "react";
import PlacedStudents from "../../components/placedStudents";
import Quote from "../../components/quote";
import "./About.css";

function About() {
	return (
		<section className="mainContainer">
			<PlacedStudents />
			<Quote
				quote="Karrier Institute is a Concept more than Business started in the year 2015 with a clear cut vision of
				transforming Fresh graduates into trained pharma professionals through specialized, high quality
				education & skill development programs."
			/>
			hello
			<p>insert image of karrier ceritificate</p>
			<h1>ABOUT KARRIER</h1>
			<p>
				Karrier Institute is a Concept more than Business started in the year 2015 with a clear cut vision of
				transforming Fresh graduates into trained pharma professionals through specialized, high quality
				education & skill development programs. We attempt to add values to the industry through our Training
				& Development programs.
			</p>
			<h2>Vision</h2>
			<p>
				To be recognized as Centre of Excellence in Pharma Sales & Marketing Training in India for Fresher by
				bridging the gap between unskilled & Skilled Executives, and thus provide Sales ready Professionals to
				the industry.
			</p>
			<h2>Values</h2>
			<p>Respect for all individual at each level Integrity-a way of life in karrier</p>
		</section>
	);
}

export default About;
