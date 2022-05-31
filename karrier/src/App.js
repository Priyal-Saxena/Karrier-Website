import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Footer from "./Components/Footer/index";
// import Navbar from "./Components/Navbar/index";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
// import About from "./pages/About/index";
import Home from "./pages/Home/index";
// import Team from "./pages/Team/index";
import Contact from "./pages/Contact/index";
import ForStudents from "./pages/ForStudents/index";
import ForCorporate from "./pages/ForCorporate/index";
import ForInstitutes from "./pages/ForInstitutes/index";
import Gallery from "./pages/Gallery/index";
// import Blogs from './pages/Blogs/index';
// import Contact from './pages/Contact/index';
// import Events from './pages/Events/index';
// import Projects from './pages/Projects/index';
// import Team from './pages/Team/index';
import ViewportProvider from "./viewport";
import IndividualOpportunity from "./pages/IndividualOpportunities/index";
import Buttons from "./pages/IndividualOpportunities/icons";

class App extends Component {
	componentDidMount() {
		this.props.hideLoader();
	}
	render() {
		return (
			<ViewportProvider>
				<Router>
					{/* <Navbar /> */}
					<div className="pages">
						<Routes>
							<Route exact path="/" element={<Home />} />
							{/* <Route exact path="/" element={<Buttons />} /> */}
							{/* <Route exact path="/" element={<IndividualOpportunity />} /> */}

							<Route path="/Gallery" element={<Gallery />} />

							<Route path="/For%20Students" element={<ForStudents />} />
							<Route path="/For%20Corporate" element={<ForCorporate />} />
							<Route path="/For%20Institutes" element={<ForInstitutes />} />
							<Route path="/Contact" element={<Contact />} />

							{/* <Route path="/Events">
						<Events />
					</Route>
					<Route path="/Team">
						<Team />
					</Route>
					<Route path="/Projects">
						<Projects />
					</Route>
					<Route path="/Blogs">
						<Blogs />
					</Route>
					<Route path="/Contact">
						<Contact />
					</Route> */}
						</Routes>
					</div>
					<Footer />
				</Router>
			</ViewportProvider>
		);
	}
}

export default App;
