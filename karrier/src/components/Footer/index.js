// import { Typography } from '@material-ui/core'
import React from "react";
import "./Footer.css";
// import DSC_logo from '../../Assets/DSC-IIITA-Dark-Horizontal.svg'
// import mail_icon from '../../Assets/Message.svg'
// import pin_icon from '../../Assets/Location.svg'

// import follow_icon_1 from '../../Assets/instagram.svg'
// import follow_icon_2 from '../../Assets/facebook.svg'
// import follow_icon_3 from '../../Assets/medium.svg'
// import follow_icon_4 from '../../Assets/youtube.svg'
// import follow_icon_5 from '../../Assets/twitter.svg'
// import follow_icon_6 from '../../Assets/linkedin.svg'
// import follow_icon_7 from '../../Assets/github.svg'
// import follow_icon_8 from '../../Assets/discord.png'

function Footer() {
	return (
		<div className="footer">
			<div className="footer_top">
				<div className="logo">
					<img
						src="https://medicalrepresentativetraining.com/wp-content/uploads/2020/05/logooo.png"
						alt="logo"
					/>
				</div>

				<div className="contact_sec_1 contact_mail">
					<div className="contact_mail_icon">
						<img alt="mail" />
					</div>
					<p>
						<a href="mailto:info@karrier.in">info@karrier.in</a>
					</p>

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
								<img alt="Insta" />
							</a>
						</div>
						<div className="contact_icon">
							<a href="https://www.facebook.com/karriersolution/" target="_blank" rel="noopener noreferrer">
								<img alt="Facebook" />
							</a>
						</div>

						<div className="contact_icon">
							<a
								href="https://www.youtube.com/channel/UCvItI3Qr_36kLB6zATcjj7Q/featured"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img alt="YouTube" />
							</a>
						</div>

						<div className="contact_icon">
							<a href="https://www.linkedin.com/in/karrier/" target="_blank" rel="noopener noreferrer">
								<img alt="LinkedIn" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<p className="footer_divider"></p>
			<div className="footer_bot">&copy;2022 Karrier</div>
		</div>
	);
}

export default Footer;
