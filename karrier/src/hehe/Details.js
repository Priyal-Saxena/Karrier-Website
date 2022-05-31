import React from "react";

import Avatar from "./../../../assets/images/ProfileAvatar.png";
import Badge1 from "./../../../assets/ProfileBadges/dsabl_basic_profile.svg";
import Badge2 from "./../../../assets/ProfileBadges/dsabl_tutorial.svg";
import TextField from "@mui/material/TextField";
import PrimaryBtn from "./../../Onboarding/StyledComponents/PrimaryBtn";
import SecondaryBtn from "./../../Onboarding/StyledComponents/SecondaryBtn";
import Modal from "react-modal";
import Box from "@mui/material/Box";
import styles from "./EditModal.module.css";
import Button from "@mui/material/Button";

import "./../index.css";
import "./../../Common Styles/Text.css";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from "@mui/material/MenuItem";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const jobRoles = [
	{
		value: "Software Developer 1",
		label: "Software Developer 1",
	},
	{
		value: "Software Developer 2",
		label: "Software Developer 2",
	},
	{
		value: "Software Developer 3",
		label: "Software Developer 3",
	},
	{
		value: "Software Developer 4",
		label: "Software Developer 4",
	},
];
const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};
const Details = ({ viewState, user }) => {
	const [modalIsOpen, setIsOpen] = React.useState(true);
	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {}

	function closeModal() {
		setIsOpen(false);
	}
	const [jobRole, setJobRole] = React.useState("Software Developer 1");

	const handleChange = event => {
		setJobRole(event.target.value);
	};
	let closeImg = { cursor: "pointer", float: "right", marginTop: "5px", width: "20px" };
	return (
		<div className="Profile_details-Container Profile-block">
			<div className="Profile_details-Content">
				<div className="Profile_details-ImgnName">
					<div className="Profile_details-Avatar-Container">
						<img src={Avatar} alt={`Avatar`} className="Profile_details-Avatar" />
					</div>
					<h3 className="Profile_details-Name">{`${user.first_name} ${user.last_name}`}</h3>
				</div>
				<div className="Profile_details-Badges">
					<img src={Badge1} alt="Badge1" className="Profile_details-Badge" />
					<img src={Badge2} alt="Badge2" className="Profile_details-Badge" />
					<img src={Badge1} alt="Badge3" className="Profile_details-Badge" />
					<img src={Badge2} alt="Badge4" className="Profile_details-Badge" />
					<img src={Badge1} alt="Badge5" className="Profile_details-Badge" />
					<img src={Badge2} alt="Badge6" className="Profile_details-Badge" />
				</div>
				<p className="Profile-details-About text-Medium">{`${user.profile_description}`}</p>
				<div className="Profile-details-current text-Medium">
					{`Currently working as `}
					<span className="Profile-details-currentRole">{`Role`}</span>
					{` at `}
					<span className="Profile-details-currentCompany">{`Social3.club`}</span>
				</div>
			</div>
			{viewState === "user" ? (
				<div className="Profile_details-Buttons">
					{/* <SecondaryBtn content={`Edit`} onClick={openModal} />
					<Button variant="outline-primary" onClick={openModal}>
						Edit
					</Button> */}
					<Button
						onClick={openModal}
						className="form-button form-button-connect"
						id="connectButton"
						type="button"
						variant="outlined"
						ariaLabel="Login"
						color="primary"
						sx={{ padding: "10px 30px", fontSize: "16px" }}
					>
						Edit{" "}
					</Button>{" "}
					<Modal
						isOpen={modalIsOpen}
						onAfterOpen={afterOpenModal}
						onRequestClose={closeModal}
						style={customStyles}
						contentLabel="Wallet Connection"
					>
						{/* <Form /> */}
						<Box
							component="form"
							sx={{
								"& .MuiTextField-root": { m: 1 },
								minWidth: "53vw",
							}}
							noValidate
							autoComplete="off"
						>
							<div className={styles.row}>
								<Typography
									variant="h6"
									sx={{ mb: 0.9, fontWeight: "bold", width: "100%", fontSize: "1.8rem" }}
									gutterBottom
									color="text.secondary"
									component="div"
									align="left"
								>
									Edit Profile Information
								</Typography>
								<CloseIcon
									// size="large"
									sx={{ fontSize: "32px" }}
									style={{ cursor: "pointer" }}
									onClick={closeModal}
								/>
							</div>

							<Divider />
							<div className={styles.form}>
								<div className={`${styles.AvatarContainer} ${styles.left}`}>
									<img src={Avatar} alt={`Avatar`} />
								</div>
								<div className={styles.right}>
									<div className={styles.row}>
										<TextField id="outlined-basic" label="First Name" variant="outlined" />
										<TextField id="outlined-basic" label="Last Name" variant="outlined" />
									</div>
									<TextField
										id="outlined-multiline-static"
										label="Profile Description"
										fullWidth
										multiline
										rows={4}
										defaultValue="Default Value"
									/>
									<div className={styles.row}>
										<TextField
											id="outlined-select-job-role"
											select
											label="Job Role"
											value={jobRole}
											onChange={handleChange}
										>
											{jobRoles.map(option => (
												<MenuItem key={option.value} value={option.value}>
													{option.label}
												</MenuItem>
											))}
										</TextField>
										<TextField id="outlined-basic" label="Organization" variant="outlined" />
									</div>
									<Typography
										variant="h6"
										sx={{ mb: 0.9, fontWeight: "bold", fontSize: "1.1rem", padding: "0 15px" }}
										color="text.secondary"
										component="div"
										align="left"
									>
										Social Handles
									</Typography>
									<div className={styles.row}>
										<GitHubIcon sx={{ fontSize: "34px" }} color="action" />
										<TextField id="outlined-basic" fullWidth label="Github Link" variant="outlined" />
									</div>
									<div className={styles.row}>
										<LinkedInIcon sx={{ fontSize: "34px" }} color="action" />
										<TextField id="outlined-basic" fullWidth label="LinkedIn Link" variant="outlined" />
									</div>
									<div className={styles.row}>
										<TwitterIcon sx={{ fontSize: "34px" }} color="action" />
										<TextField id="outlined-basic" fullWidth label="Twitter Link" variant="outlined" />
									</div>
								</div>
							</div>
						</Box>
					</Modal>{" "}
				</div>
			) : (
				<div className="Profile_details-Buttons">
					<PrimaryBtn content={`Refer`} />
					<SecondaryBtn content={`Connect`} />
				</div>
			)}
		</div>
	);
};

export default Details;
