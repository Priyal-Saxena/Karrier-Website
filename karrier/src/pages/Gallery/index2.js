import React from "react";
import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
import ImageListItem, { imageListItemClasses } from "@mui/material/ImageListItem";
import styles from "./gallery.module.css";
import img1 from "../../assets/KarrierAssets/InstituteActivities/CertificateCeremony.jpg";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import ImageListItemBar from "@mui/material/ImageListItemBar";
// import ListSubheader from '@mui/material/ListSubheader';
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

const theme = createTheme({
	breakpoints: {
		values: {
			mobile: 0,
			bigMobile: 350,
			tablet: 650,
			desktop: 900,
		},
	},
});
function srcset(image, size, rows = 2, cols = 2) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
	};
}
function Gallery() {
	return (
		<ThemeProvider theme={theme}>
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: {
						mobile: "repeat(1, 1fr)",
						bigMobile: "repeat(2, 1fr)",
						tablet: "repeat(3, 1fr)",
						desktop: "repeat(4, 1fr)",
					},
					// standard variant from here:
					// https://github.com/mui-org/material-ui/blob/3e679ac9e368aeb170d564d206d59913ceca7062/packages/mui-material/src/ImageListItem/ImageListItem.js#L42-L43
					//   [`& .${imageListItemClasses.root}`]: {
					//     display: "flex",
					//     flexDirection: "column",
					//   }
				}}
			>
				{itemData.map(item => (
					<ImageListItem key={item.img} cols={item.cols || 0.5} rows={item.rows || 1}>
						<img {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} loading="lazy" />
						<ImageListItemBar
							title={item.title}
							subtitle={item.author}
							actionIcon={
								<IconButton
									sx={{ color: "rgba(255, 255, 255, 0.54)" }}
									aria-label={`info about ${item.title}`}
								>
									<InfoIcon />
								</IconButton>
							}
						/>
					</ImageListItem>
				))}
			</Box>
		</ThemeProvider>
	);
}

const itemData = [
	{
		img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
		title: "Breakfast",
		rows: 2,
		cols: 2,
	},
	{
		img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
		title: "Burger",
	},
	{
		img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
		title: "Camera",
	},
	{
		img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
		title: "Coffee",
		cols: 2,
	},
	{
		img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
		title: "Hats",
		cols: 2,
	},
	{
		img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
		title: "Honey",
		author: "@arwinneil",
		rows: 2,
		cols: 2,
	},
	{
		img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
		title: "Basketball",
	},
	{
		img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
		title: "Fern",
	},
	{
		img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
		title: "Mushrooms",
		rows: 2,
		cols: 2,
	},
	{
		img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
		title: "Tomato basil",
	},
	{
		img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
		title: "Sea star",
	},
	{
		img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
		title: "Bike",
		cols: 2,
	},
];

export default Gallery;
