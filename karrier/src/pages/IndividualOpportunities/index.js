import React, { useEffect, useState } from "react";
import styles from "./IndividualOpportunities.module.css";
// import styles from "./IndividualOpportunities.module.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
// import { useParams } from "react-router";
// import { API_URL } from "../../../utils";
// import referralContract from "../../../Utils/Refer.json";

// import { ethers, providers } from "ethers";
// import { Web3Provider } from "@ethersproject/providers";
// import Modal from "react-modal";

// import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
// import {
// 	NoEthereumProviderError,
// 	UserRejectedRequestError as UserRejectedRequestErrorInjected,
// } from "@web3-react/injected-connector";
// import {
// 	URI_AVAILABLE,
// 	UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
// } from "@web3-react/walletconnect-connector";

// import { injected, walletconnect, walletlink } from "../../../Connector/Connectors";
// import { Spinner } from "../../Landing/auth/Spinner";
// import { useEagerConnect, useInactiveListener } from "../../Landing/auth/hooks";

// const connectorsByName = {
// 	Metamask: injected,
// 	WalletConnect: walletconnect,
// 	Coinbase: walletlink,
// };

// const connectorImagesByName = {
// 	Metamask: "./MetaMask_Fox.svg.png",
// 	WalletConnect: "./walletconnect.png",
// 	Coinbase: "./coinbase-logo-freelogovectors.net_.png",
// };

// const customStyles = {
// 	content: {
// 		top: "50%",
// 		left: "50%",
// 		right: "auto",
// 		bottom: "auto",
// 		marginRight: "-50%",
// 		transform: "translate(-50%, -50%)",
// 	},
// };

// const axios = require("axios");

// // fill this object with some terms that would be found from our solidity contract's errors,
// // and then we can write custom responses for the alerts (but keep them all up here):
// let SOLIDITY_ERROR_LIST = {
// 	1: {
// 		error: "[error text snippet from wallet error]",
// 		response: "[alert response]",
// 	},
// 	2: {
// 		error: "exceed the wallet limit",
// 		response: "Your transaction would exceed the wallet limit.",
// 	},
// 	3: {
// 		error: "exceed the max supply",
// 		response: "This drop is sold out. Check OpenSea for the secondary market.",
// 	},
// 	4: {
// 		error: "exceed max supply",
// 		response: "This drop is sold out. Check OpenSea for the secondary market.",
// 	},
// 	5: {
// 		error: "Sale is not active",
// 		response: "The sale has been disabled on the smart contract.",
// 	},
// 	6: {
// 		error: "Not enough ether sent",
// 		response:
// 			"You sent too little ETH for your purchase. If you feel this error is wrong, drop the team a note.",
// 	},
// 	7: {
// 		error: "User denied transaction",
// 		response: "The user has denied the current transaction.",
// 	},
// 	8: {
// 		error: "already claimed",
// 		response: "It looks like you have already claimed your allowlist NFTs.",
// 	},
// 	9: {
// 		error: "insufficient funds",
// 		response: "Insufficient funds. Please add enough ETH to your wallet for this NFT purchase + gas.",
// 	},
// };

// let GENERIC_RESPONSE =
// 	"Transaction canceled. Usually if you see this, it means that you have rejected a transaction. If you feel that this message displayed because of another error, please alert the devs and we will have a look.";

// function getErrorMessage(error) {
// 	if (error instanceof NoEthereumProviderError) {
// 		return "No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.";
// 	} else if (error instanceof UnsupportedChainIdError) {
// 		return "You're connected to an unsupported network.";
// 	} else if (
// 		error instanceof UserRejectedRequestErrorInjected ||
// 		error instanceof UserRejectedRequestErrorWalletConnect
// 	) {
// 		return "Please authorize this website to access your Ethereum account.";
// 	} else {
// 		console.error(error);
// 		return "An unknown error occurred. Check the console for more details.";
// 	}
// }

// function getLibrary(provider, connector) {
// 	const library = new Web3Provider(provider);
// 	library.pollingInterval = 8000;
// 	return library;
// }

// export default function () {
// 	return (
// 		<Web3ReactProvider getLibrary={getLibrary}>
// 			<IndividualOpportunity />
// 		</Web3ReactProvider>
// 	);
// }

// const CONFIGS_CONTRACT_ADDRESS = "0xcf9eEFfCf1d3381359Be87cCA57f8a5aebbe2C62";
// const CONFIGS_NETWORK = "mumbai";

const IndividualOpportunity = () => {
	// const [job, setJob] = useState([]);
	// const [message, setMessage] = useState("");
	// const { id } = useParams();
	// const [isNative, setIsNative] = useState(true);
	// const [candidate, setCandidate] = useState("0xF7d1FBc5e5ff0118B4Ddee8E62c2dA90AfEeb7d8");
	// const [reason, setReason] = useState("reason");
	// const [amount_locked, setAmount_locked] = useState(0.01);
	// const [amount_locked_token, setAmount_locked_token] = useState("MATIC");
	// const [tokenContract, setTokenContract] = useState("0x0000000000000000000000000000000000001010");

	// let subtitle;
	// const [modalIsOpen, setIsOpen] = React.useState(false);

	// function openModal() {
	// 	setIsOpen(true);
	// }

	// function afterOpenModal() {
	// 	// references are now sync'd and can be accessed.
	// 	subtitle.style.color = "#f00";
	// }

	// function closeModal() {
	// 	setIsOpen(false);
	// }

	// const context = useWeb3React();
	// const { connector, library, chainId, account, activate, deactivate, active, error } = context;

	// // handle logic to recognize the connector currently being activated
	// const [activatingConnector, setActivatingConnector] = useState();

	// useEffect(() => {
	// 	console.log("running");
	// 	if (activatingConnector && activatingConnector === connector) {
	// 		setActivatingConnector(undefined);
	// 	}
	// }, [activatingConnector, connector]);

	// // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
	// const triedEager = useEagerConnect();

	// // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
	// useInactiveListener(!triedEager || !!activatingConnector);

	// const onDisconnect = async () => {
	// 	console.log("Killing the wallet connection", library);
	// 	// disconnect wallet
	// 	deactivate();
	// 	console.log(account);
	// 	console.log(library);
	// 	console.log(connector);
	// };

	// const ReferContractCall = async () => {
	// 	try {
	// 		let wallet = library;
	// 		let signer = wallet.getSigner();
	// 		let connectedContract = new ethers.Contract(CONFIGS_CONTRACT_ADDRESS, referralContract.abi, signer);

	// 		console.log("Creating Referral: Popping wallet now to pay gas.");
	// 		let referralTxn;
	// 		if (isNative) {
	// 			referralTxn = await connectedContract.refer(
	// 				candidate,
	// 				reason,
	// 				id,
	// 				tokenContract,
	// 				amount_locked,
	// 				isNative,
	// 				{
	// 					value: ethers.utils.parseEther(amount_locked.toString()),
	// 				}
	// 			);
	// 		} else {
	// 			referralTxn = await connectedContract.refer(
	// 				candidate,
	// 				reason,
	// 				id,
	// 				tokenContract,
	// 				amount_locked,
	// 				isNative
	// 			);
	// 		}

	// 		console.log("Creating Referral: Please wait...");
	// 		await referralTxn.wait();

	// 		alert("Referral has been created.");

	// 		console.log(
	// 			"Candidate referred, see transaction: https://" +
	// 				CONFIGS_NETWORK +
	// 				"polygonscan.io/tx/" +
	// 				referralTxn.hash
	// 		);
	// 	} catch (e) {
	// 		console.log(e);
	// 		var error = e.toString().split(",");
	// 		var rawErrorMessage = e.toString();
	// 		let numSolidityErrors = Object.keys(SOLIDITY_ERROR_LIST).length;
	// 		let errorFound = 0;

	// 		// some canned responses from above:
	// 		for (let i = 1; i <= numSolidityErrors; i++) {
	// 			var targetString = SOLIDITY_ERROR_LIST[i].error;
	// 			if (rawErrorMessage.search(targetString) > 1) {
	// 				let theMessage = SOLIDITY_ERROR_LIST[i].response;
	// 				errorFound++;
	// 				alert(theMessage);
	// 				console.log(theMessage);
	// 			}
	// 		}

	// 		// or if no error was found yet:
	// 		if (!errorFound) {
	// 			alert(GENERIC_RESPONSE);
	// 			console.log(rawErrorMessage);
	// 		}
	// 	}
	// };

	// const getJob = async e => {
	// 	// e.preventDefault();
	// 	try {
	// 		let accessToken = localStorage.getItem("jwt_token");

	// 		const rawResponse = await axios.get(String(API_URL) + "job/get/" + id, {
	// 			headers: {
	// 				Accept: "application/json",
	// 				"x-access-token": accessToken,
	// 			},
	// 		});
	// 		const content = await rawResponse.data;

	// 		console.log(content.data);
	// 		setJob(content.data);
	// 	} catch (e) {
	// 		console.log(e);
	// 		// return(e);
	// 	}
	// };

	// const applyJob = async e => {
	// 	// e.preventDefault();
	// 	try {
	// 		let accessToken = localStorage.getItem("jwt_token");
	// 		const payload = {
	// 			message: message,
	// 		};

	// 		const rawResponse = await axios.post(String(API_URL) + "job/application/create/" + id, payload, {
	// 			headers: {
	// 				Accept: "application/json",
	// 				"x-access-token": accessToken,
	// 			},
	// 		});
	// 		const content = await rawResponse.data;

	// 		console.log(content.data);
	// 	} catch (e) {
	// 		console.log(e);
	// 		// return(e);
	// 	}
	// };

	/*const referJob = async(e) => {
            // e.preventDefault();
            try {

                let accessToken = localStorage.getItem('jwt_token');
                const payload = {
                    job_id: id,
                    referred: referred_username,
                    reason: reason,
                    amount_locked: amount_locked,
                    amount_locked_token: amount_locked_token
                };

                const rawResponse = await axios.post(
                    String(API_URL) + "referral/add" + id, payload, {
                        headers: {
                            Accept: "application/json",
                            'x-access-token': accessToken,
                        },

                    }
                );
                const content = await rawResponse.data;

                console.log(content.data);
            } catch (e) {
                console.log(e);
                // return(e);
            }
        }*/

	// useEffect(() => {
	// 	getJob();
	// }, []);
	const handleClick = () => {
		console.info("You clicked the Chip.");
	};
	return (
		<div>
			{/* <form className="form-container">
				{" "}
				{active === false ? (
					<div>
						{" "}
						<Button
							// onClick={openModal}
							className="form-button form-button-connect"
							id="connectButton"
							type="button"
							variant="contained"
							ariaLabel="Login"
							color="primary"
							sx={{ padding: "10px 30px", fontSize: "16px" }}
						>
							Connect wallet to Refer candidate{" "}
						</Button>{" "}
						<Modal
							// isOpen={modalIsOpen}
							// onAfterOpen={afterOpenModal}
							// onRequestClose={closeModal}
							// style={customStyles}
							contentLabel="Wallet Connection"
						>
							<h2 ref={_subtitle => (subtitle = _subtitle)}>Choose Wallet Provider </h2>{" "}
							<button onClick={closeModal}> close </button>
							<div> </div>{" "}
							{Object.keys(connectorsByName).map(name => {
								const currentConnector = connectorsByName[name];
								const activating = currentConnector === activatingConnector;
								const connected = currentConnector === connector;

								return (
									<button
										className="providerChoices"
										key={name}
										onClick={() => {
											setActivatingConnector(currentConnector);
											activate(connectorsByName[name]);
											closeModal();
										}}
									>
										<div
											style={{
												position: "absolute",
												top: "0",
												left: "0",
												height: "100%",
												display: "flex",
												alignItems: "center",
												color: "black",
												margin: "0 0 0 1rem",
											}}
										>
											{" "}
											{activating && (
												<Spinner color={"black"} style={{ height: "25%", marginLeft: "-1rem" }} />
											)}
										</div>
										<img className="logo-wallet" src={connectorImagesByName[name]} alt="" />
										<span className="walletName"> {name} </span>{" "}
									</button>
								);
							})}
						</Modal>
					</div>
				) : (
					<div id="connected">
						<button
							onClick={onDisconnect}
							className="btn btn-primary pageButton"
							id="disconnectButton"
							type="button"
						>
							Disconnect
							<span class="qty smaller fixcaps">
								0x {String(account).slice(2, 5) + "..." + String(account).slice(-4)}
							</span>
						</button>
					</div>
				)}
				<div className="form-button-container">
					<Button
						className="form-button"
						onClick={ReferContractCall}
						variant="outlined"
						size="small"
						ariaLabel="Login"
						color="primary"
						sx={{ padding: "10px 30px", fontSize: "16px" }}
					>
						Refer candidate{" "}
					</Button>
				</div>
			</form> */}
			<div className={styles.oppPage}>
				<Card className={`${styles.header} ${styles.card}`} sx={{ width: "78.5vw" }}>
					<Avatar
						className={styles.headerAvatar}
						alt="Position Name"
						src=""
						sx={{ width: "14vh", height: "14vh" }}
					/>
					<div className={styles.headerText}>
						<Typography
							variant="h3"
							sx={{ fontWeight: "bold" }}
							// gutterBottom
							color="text.secondary"
							component="div"
							// align="left"
						>
							Position Name
						</Typography>
						<Typography
							variant="h5"
							sx={{ fontWeight: "bold" }}
							gutterBottom
							color="text.secondary"
							component="div"
							align="left"
							width="100%"
						>
							Company Name
						</Typography>
					</div>
				</Card>
				<div className={styles.pageContent}>
					<div className={styles.left}>
						<Card className={`${styles.infoBox} ${styles.card}`} sx={{ maxWidth: "55vw" }}>
							<CardContent>
								<Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }} component="div">
									What you 'll do
								</Typography>
								<Typography sx={{ mb: 1.5 }} color="text.secondary">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.Dolor quis scelerisque pellentesque
									ut sed dolor.Tortor mauris tellus viverra curabitur laoreet.Fermentum risus diam elit dolor
									viverra pulvinar habitant.Proin diam euismod augue mauris facilisi placerat nullam
									dolor.Posuere id eu pellentesque ipsum nisl nunc nibh.Posuere in urna pulvinar in quis
									laoreet ullamcorper.Quis sapien consectetur magna auctor lorem eget cursus enim.Integer sed
									cursus nullam rhoncus in .Orci tristique justo, pharetra eget urna.In at congue ornare
									blandit.Sed ante tempor volutpat in .Adipiscing dui cursus hendrerit dis cras at facilisis
									diam ut.Gravida ultrices consequat nunc euismod ridiculus nisi, aliquam morbi.Tellus lorem
									laoreet massa, est neque.Porttitor libero risus id enim, tristique amet, convallis integer
									blandit.Sed odio ultricies elit pellentesque.Dolor leo urna, viverra mauris tincidunt
									vivamus interdum sed.A, arcu pharetra sem orci.Ut sed dolor egestas aliquet.Id elementum
									amet massa ipsum tincidunt libero sed.Nibh tellus ultrices proin egestas.Nisi lacus id sit
									amet urna.Sed proin facilisis urna, neque.Euismod tortor dolor egestas lorem ut purus varius
									in .Arcu feugiat tellus, elit placerat.{" "}
								</Typography>{" "}
								{/* <Typography variant="body2">
            						well meaning and kindly.
            						<br />
            						{'"a benevolent smile"'}
            					</Typography> */}
							</CardContent>
						</Card>
					</div>
					<div className={`${styles.rightBar}`}>
						<div className={styles.row}>
							<div className={`${styles.smallCard} ${styles.card}`}>
								{" "}
								<Typography sx={{ mb: 1.5, fontWeight: "bold" }} align="left" width="100%" gutterBottom>
									Location
								</Typography>
								<Typography
									sx={{ mb: 1.5, marginBottom: "0" }}
									align="left"
									width="100%"
									color="text.secondary"
								>
									Lorem Ipsum, COUNTRY
								</Typography>
							</div>
							<div className={`${styles.smallCard} ${styles.card}`}>
								{" "}
								<Typography sx={{ mb: 1.5, fontWeight: "bold" }} align="left" width="100%" gutterBottom>
									Location
								</Typography>
								<Typography
									sx={{ mb: 1.5, marginBottom: "0" }}
									align="left"
									width="100%"
									color="text.secondary"
								>
									Lorem Ipsum, COUNTRY
								</Typography>
							</div>
						</div>
						<div className={styles.row}>
							<div className={`${styles.smallCard} ${styles.card}`}>
								{" "}
								<Typography sx={{ mb: 1.5, fontWeight: "bold" }} align="left" width="100%" gutterBottom>
									Location
								</Typography>
								<Typography
									sx={{ mb: 1.5, marginBottom: "0" }}
									align="left"
									width="100%"
									color="text.secondary"
								>
									Lorem Ipsum, COUNTRY
								</Typography>
							</div>
							<div className={`${styles.smallCard} ${styles.card}`}>
								{" "}
								<Typography sx={{ mb: 1.5, fontWeight: "bold" }} align="left" width="100%" gutterBottom>
									Location
								</Typography>
								<Typography
									sx={{ mb: 1.5, marginBottom: "0" }}
									align="left"
									width="100%"
									color="text.secondary"
								>
									Lorem Ipsum, COUNTRY
								</Typography>
							</div>
						</div>
						<div className={styles.row}>
							<div className={`${styles.longCard} ${styles.card}`}>
								{" "}
								<Typography sx={{ mb: 1.5, fontWeight: "bold" }} align="left" width="100%" gutterBottom>
									Tags
								</Typography>
								<Stack direction="row" spacing={2.5} sx={{ width: "95%" }}>
									<Chip label="Tag One" onClick={handleClick} sx={{ borderRadius: "0" }} />
									<Chip label="Tag One" onClick={handleClick} sx={{ borderRadius: "0" }} />
									<Chip label="Tag One" onClick={handleClick} sx={{ borderRadius: "0" }} />
									<Chip label="Tag One" onClick={handleClick} sx={{ borderRadius: "0" }} />
								</Stack>
								<Stack direction="row" spacing={2.5} sx={{ margin: "2vh 0", width: "95%" }}>
									<Chip label="Tag One" onClick={handleClick} sx={{ borderRadius: "0" }} />
									<Chip label="Tag One" onClick={handleClick} sx={{ borderRadius: "0" }} />
									<Chip label="Tag One" onClick={handleClick} sx={{ borderRadius: "0" }} />
									<Chip label="Tag One" onClick={handleClick} sx={{ borderRadius: "0" }} />
								</Stack>
							</div>
						</div>
						<div className={styles.row}>
							<div className={`${styles.longCard} ${styles.card}`}>
								{" "}
								<Typography sx={{ mb: 1.5, fontWeight: "bold" }} align="left" width="100%" gutterBottom>
									Company Name on Social3
								</Typography>
								<Typography
									sx={{ mb: 1.5, marginBottom: "0" }}
									align="left"
									width="100%"
									color="text.secondary"
								>
									<div className={styles.table}>
										<div className={styles.tableCol}>
											<p>Open Opportunities Listed:</p>
											<p>People Hired:</p>
											<p>Category:</p>
										</div>
										<Typography sx={{ mb: 1.5, marginBottom: "0" }} align="right" color="text.secondary">
											<div>
												<p>03</p>
												<p>03</p>
												<p>Finance</p>
											</div>
										</Typography>
									</div>
									Associated Tags:
								</Typography>
								<Stack direction="row" spacing={2.5} sx={{ margin: "2vh 0", width: "95%" }}>
									<Chip label="Tag One" onClick={handleClick} sx={{ borderRadius: "0" }} />
									<Chip label="Tag One" onClick={handleClick} sx={{ borderRadius: "0" }} />
									<Chip label="Tag One" onClick={handleClick} sx={{ borderRadius: "0" }} />
									<Chip label="Tag One" onClick={handleClick} sx={{ borderRadius: "0" }} />
								</Stack>
								<Typography
									sx={{ mb: 1.5, margin: "2vh 0" }}
									align="center"
									width="100%"
									color="text.secondary"
								>
									Joined on DD Month YYYY
								</Typography>
							</div>
						</div>

						<div className={styles.row}>
							<div className={`${styles.longCard} ${styles.card}`}>
								{" "}
								<Typography sx={{ mb: 1.5, fontWeight: "bold" }} align="left" width="100%" gutterBottom>
									Share the Opportunity
								</Typography>
								<Stack direction="row" spacing={2.5} sx={{ width: "95%" }}></Stack>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default IndividualOpportunity;
