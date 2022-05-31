import React from "react";
import clsx from "clsx";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
// @material-ui/icons components
// core components

// import componentStylesButtons from "assets/theme/components/button.js";

const useStylesButtons = makeStyles(componentStylesButtons);

const socialButtonColors = [
	{
		icon: "fab fa-facebook",
		text: "Facebook",
		color: "buttonContainedFacebook",
	},
	{
		icon: "fab fa-twitter",
		text: "Twitter",
		color: "buttonContainedTwitter",
	},
	{
		icon: "fab fa-google-plus-g",
		text: "Google +",
		color: "buttonContainedGoogle",
	},
	{
		icon: "fab fa-instagram",
		text: "Instagram",
		color: "buttonContainedInstagram",
	},
	{
		icon: "fab fa-pinterest",
		text: "Pinterest",
		color: "buttonContainedPinterest",
	},
	{
		icon: "fab fa-youtube",
		text: "Youtube",
		color: "buttonContainedYoutube",
	},
	{
		icon: "fab fa-vimeo-v",
		text: "Vimeo",
		color: "buttonContainedVimeo",
	},
	{
		icon: "fab fa-slack",
		text: "Slack",
		color: "buttonContainedSlack",
	},
	{
		icon: "fab fa-dribbble",
		text: "Dribbble",
		color: "buttonContainedDribbble",
	},
	{
		icon: "fab fa-github",
		text: "Github",
		color: "buttonContainedGithub",
	},
];

const Buttons = () => {
	const classes = { ...useStylesButtons() };
	return (
		<>
			{socialButtonColors.map((prop, key) => {
				const buttonRootClasses = {
					root: clsx(classes[prop.color], classes.buttonIconOnly),
				};
				return (
					<Box key={key} display="inline-block" marginRight="1rem" marginBottom="1rem">
						<Button variant="contained" classes={buttonRootClasses}>
							<Box component="i" className={prop.icon} />
						</Button>
					</Box>
				);
			})}
		</>
	);
};

export default Buttons;
