import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Home from "./pages/Home/index";
import Contact from "./pages/Contact/index";
import Courses from "./pages/Courses/index";
import ForCorporate from "./pages/ForCorporate/index";
import InternshipProgram from "./pages/InternshipProgram/index";
import Gallery from "./pages/Gallery/index";
import About from "./pages/About/index";
import MRRole from "./pages/MRRole/index";
import MRSalary from "./pages/MRSalary/index";
import "./App.css";
import ViewportProvider from "./viewport";

class App extends Component {
	componentDidMount() {
		this.props.hideLoader();
	}
	render() {
		return (
			<ViewportProvider>
				<Router>
					<Navbar />
					{/* whatsapp icon */}
					<a
						href="https://api.whatsapp.com/message/6GCWXVDROVNTH1?autoload=1&app_absent=0"
						className="whatsapp_float"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i class="fa fa-whatsapp whatsapp-icon"></i>
					</a>
					<div className="pages">
						{/* <ScrollToTop> */}
						<Routes>
							<Route exact path="/" element={<Home />} />
							<Route exact path="/jobs-for-fresher" element={<Home />} />
							<Route path="/role-of-medical-representative" element={<MRRole />} />
							<Route path="/salary-of-medical-representative" element={<MRSalary />} />
							<Route path="/Gallery" element={<Gallery />} />
							<Route path="/About" element={<About />} />
							<Route path="/job-oriented-course-after-graduation" element={<Courses />} />
							<Route path="/corporate-training" element={<ForCorporate />} />
							<Route path="/internship" element={<InternshipProgram />} />
							<Route path="/Contact-Us" element={<Contact />} />
						</Routes>
						{/* </ScrollToTop> */}
					</div>
					<Footer />
				</Router>
			</ViewportProvider>
		);
	}
}

export default App;
