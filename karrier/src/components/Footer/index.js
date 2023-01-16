// import { Typography } from '@material-ui/core'
import React from "react";
import "./Footer.css";
import footerBackground from "../../assets/footerBackground2.jpg";
import logo from "../../assets/logo/golden.png";
import instagram from "../../assets/socialIcons/instagram.svg";
import facebook from "../../assets/socialIcons/facebook.svg";
import twitter from "../../assets/socialIcons/twitter.svg";
import linkedIn from "../../assets/socialIcons/linkedIn.svg";

function Footer() {
	return (
		<div
			className="footer"
			style={{
				backgroundImage: `url(${footerBackground})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="footer_top">
				<div className="logo">
					<img src={logo} alt="logo" />
				</div>

				<div className="contact_sec_1 contact_mail">
					{/* <div className="contact_mail_icon">
						<img alt="mail" />
					</div>
					<p>
						<a href="mailto:info@karrier.in">info@karrier.in</a>
					</p> */}
					{/* <p>Reviews</p> */}
					<a href="tel:918948600666">Phone Number 1: +91-8948600666</a>
					<a href="tel:918303990366">Phone Number 2: +91-8303990366</a>
					<a href="mailto:info@karrier.in?subject=website query">Email:info@karrier.in</a>
					{/* <p>Phone Number 1: +91-8948600666</p>
					<p>Phone Number 2: +91-8303990366</p>
					<p>Email:info@karrier.in</p> */}
					<a href="https://g.page/r/CWJc8mX1oUKhEBE/review">Google Reviews</a>
					<a href="https://g.page/KarrierMR?share">Google Profile</a>

					{/* <div className="contact_address">
						<div className="contact_pin_icon">
							<img alt="pin" />
						</div>
						<p>
							Google Developer Student's Club <br />
							<span>IIITA,Prayagraj, Uttar Pradesh, 211015</span>
						</p>
					</div> */}
				</div>
				<div className="contact_sec_2">
					<p>Follow us on</p>
					<div className="contact_links">
						<div className="contact_icon">
							<a href="https://www.instagram.com/karrierinstitute/" target="_blank" rel="noopener noreferrer">
								<img src={instagram} alt="Instagram" />
							</a>
						</div>
						<div className="contact_icon">
							<a href="https://www.facebook.com/karriersolution/" target="_blank" rel="noopener noreferrer">
								<img src={facebook} alt="Facebook" />
							</a>
						</div>

						<div className="contact_icon">
							<a href="https://twitter.com/karriermr" target="_blank" rel="noopener noreferrer">
								<img src={twitter} alt="Twitter" />
							</a>
						</div>

						<div className="contact_icon">
							<a href="https://www.linkedin.com/in/karrier/" target="_blank" rel="noopener noreferrer">
								<img src={linkedIn} alt="LinkedIn" />
							</a>
						</div>
						{/* <div className="contact_icon">
							<a
								href="https://www.justdial.com/Lucknow/Karrier-Training-Evolution-Institute-Behind-Tata-Goldrush-Showroom-Hazratganj/0522PX522-X522-180327171154-M6Z9_BZDET"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img alt="Just Dial" />
							</a>
						</div> */}
					</div>
				</div>
			</div>
			<p className="footer_divider"></p>
			<div className="footer_bot">&copy;2022 Karrier</div>
		</div>
	);
}

export default Footer;
