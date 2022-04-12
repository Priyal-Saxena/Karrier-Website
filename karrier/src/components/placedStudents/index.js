import React from "react";
import styles from "./placedStudents.css";
// import "./placedStudents.css";
import Student from "./student";
import Heading from "../heading";

function PlacedStudents(props) {
	return (
		<div>
			<section className={styles.PlacedStudentsSection} class="PlacedStudentsSection">
				<div class="placedStudentHeading">
					<Heading main="Hundreds of Students Trained and Placed" subtext="students placed by us" />
				</div>

				<div class="container">
					<div class="row flex-center sm-no-flex">
						<div class="pull-right sm-no-float col-md-8">
							<ul class="team-members">
								<li class="clearfix">
									<Student />
									<Student />
									<Student />
								</li>
								<li class="clearfix">
									<Student />
									<Student />
									<Student />
								</li>
								<li class="clearfix">
									{/* <Student />
									<Student />
									<Student /> */}
								</li>
							</ul>
							{/* <p class="manyMore"> and many more...</p> */}
						</div>
					</div>
				</div>
			</section>

			{/* <div class="copyright">
				<p>
					Me On:
					<a
						href="https://www.upwork.com/o/profiles/users/_~0195eb53c731b0e159/"
						target="_blank"
						class="upwork"
					>
						UpWork
					</a>
					<a href="https://www.fiverr.com/thenahidul" target="_blank" class="fiverr">
						Fiverr
					</a>
					<a href="https://triplebyte.com/iv/a35URkk/cp/header" class="triplebyte" target="_blank">
						Jobs
					</a>
				</p>
			</div> */}
		</div>
	);
}

export default PlacedStudents;
