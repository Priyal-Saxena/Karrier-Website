import React, { useState, useEffect } from "react";
// import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo/black.png";
// import Navbar_logo from "../../Assets/DSC-IIITA-Light-Horizontal.svg";

// const navbarContent = [
// 	"About",
// 	"Gallery",
// 	"Team",
// 	"For Students",
// 	"For Corporate",
// 	"For Institutes",
// 	"Contact",
// ];
const navbarContent = [
	"Home",
	// "About",
	"MR Role",
	"Salary",
	"Campus to Corporate",
	"Courses",
	"Corporate",
	"Gallery",
	"Contact Us",
];
const path = [
	"jobs-for-fresher",
	// "About",
	"role-of-medical-representative",
	"salary-of-medical-representative",
	"internship",
	"job-oriented-course-after-graduation",
	"corporate-training",
	"Gallery",
	"Contact-Us",
];
// const navbarContent = ["Internship Program", "For Students", "For Corporate", "Contact", "Gallery"];
// const path = ["Internship%20Program", "For%20Students", "For%20Corporate", "Contact", "Gallery"];

function Navbar() {
	const [width, setWidth] = useState(window.innerWidth);
	const [Drawer, setDrawer] = useState("none");

	const handleWindowResize = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleWindowResize);
		return () => window.removeEventListener("resize", handleWindowResize);
	}, []);

	const ExpandMenu = () => {
		if (Drawer === "none") {
			setDrawer("flex");
		} else {
			setDrawer("none");
		}
	};

	if (width > 900) {
		return (
			<div className="fixed">
				<div className="contactBar">
					<a className="contact" href="tel:918948600666">
						Phone Number 1: +91-8948600666
					</a>
					<a className="contact" href="tel:918303990366">
						Phone Number 2: +91-8303990366
					</a>
					<a className="contact" href="mailto:info@karrier.in?subject=website query">
						Email:info@karrier.in
					</a>

					{/* <div className="contact">Phone Number 1: +91-8948600666</div>
					<div className="contact">Phone Number 2: +91-8303990366</div>
					<div className="contact">Email:info@karrier.in</div> */}
				</div>
				<div className="navbar">
					<NavLink className="navbar_logo" to="/" style={{ width: "150px" }}>
						<img src={logo} alt="logo" />
						{/* <img src={Navbar_logo} alt="logo" /> */}
					</NavLink>
					<div className="navbar_links">
						{/* <Link className="navbar_link" to="/">
					<p className="navbar_link_txt">Home</p>
				</Link> */}
						{navbarContent.map((item, index) => (
							<NavLink
								className={({ isActive }) => (isActive ? "navbar_link_active" : "navbar_link_inactive")}
								key={index}
								to={`${path[index]}`}
							>
								<p className="navbar_link_txt">{item}</p>
							</NavLink>
						))}
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="fixed">
				<div className="contactBar">
					<div className="contact">Phone Number 1: +91-8948600666</div>
					<div className="contact">Phone Number 2: +91-8303990366</div>
					<div className="contact">Email:info@karrier.in</div>
				</div>
				<div className="navbar">
					<NavLink className="navbar_logo" to="/" style={{ width: "140px" }}>
						<img src={logo} alt="logo" />
					</NavLink>
					<div className="navbar_Drawer">
						<input type="checkbox" value="drawer" onChange={ExpandMenu} unchecked />
						<div className="navbar_drawer_icon">
							<p className="drawer_line_1"></p>
							<p className="drawer_line_2"></p>
							<p className="drawer_line_3"></p>
						</div>
					</div>
					<div className="navbar_drawer_links" style={{ display: `${Drawer}` }}>
						<div className="drawerLinks">
							<NavLink
								className={({ isActive }) => (isActive ? "navbar_link_active" : "navbar_link_inactive")}
								to="/"
							>
								<input type="checkbox" value="drawer" onChange={ExpandMenu} unchecked />

								{/* <p className="navbar_link_txt">Home</p> */}
							</NavLink>

							{navbarContent.map((item, index) => (
								<div className="drawerLinks">
									<NavLink
										className={({ isActive }) => (isActive ? "navbar_link_active" : "navbar_link_inactive")}
										key={index}
										to={`${path[index]}`}
									>
										<input type="checkbox" value="drawer" onChange={ExpandMenu} unchecked />

										<p className="navbar_link_txt">{item}</p>
									</NavLink>
								</div>
							))}
						</div>
						{/* <Link className="navbar_link" to="Contact">
					<p className="navbar_link_txt navbar_contact">Contact</p>
				</Link> */}
					</div>
				</div>
			</div>
		);
	}
}

export default Navbar;
