// import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem, { imageListItemClasses } from "@mui/material/ImageListItem";
import styles from "./gallery.module.css";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import React, { useLayoutEffect, useState } from "react";

function useWindowSize() {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	return size;
}

// function ShowWindowDimensions(props) {
// 	const [width, height] = useWindowSize();

// }

// import img1 from "../../assets/KarrierAssets/InstituteActivities/CertificateCeremony.jpg";
function srcset(image, size, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
	};
}
function Gallery() {
	const [width, height] = useWindowSize();
	let col, rowHeight;
	if (width > 850) {
		col = 4;
		rowHeight = 302;
	} else {
		col = 2;
		rowHeight = 250;
	}
	return (
		<section className={styles.gallerySection}>
			<ImageList sx={{ width: "100%", height: "100%" }} variant="quilted" cols={col} rowHeight={rowHeight}>
				{itemData.map(item => (
					<ImageListItem
						className={styles.listItem}
						key={item.img}
						cols={item.cols || 1}
						rows={item.rows || 1}
					>
						<img
							className={styles.image}
							{...srcset(item.img, 121, item.rows, item.cols)}
							alt={item.title}
							loading="lazy"
						/>
						<ImageListItemBar
							className={styles.listItemBar}
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
			</ImageList>
		</section>
	);
}

const itemData = [
	{
		img: "https://res.cloudinary.com/def4bqkxv/image/upload/v1643440468/karrier/KarrierAssets/InstituteActivities/VIRACARE_PHARMA_w1eefy.jpg",

		title: "Breakfast",
		rows: 2,
		cols: 2,
	},
	{
		img: "https://res.cloudinary.com/def4bqkxv/image/upload/v1643440478/karrier/KarrierAssets/InstituteActivities/Rafflesia_Life_Sciences_Training_Seesion_zrkhmg.jpg",
		title: "Burger",
	},
	{
		img: "https://res.cloudinary.com/def4bqkxv/image/upload/v1643440478/karrier/KarrierAssets/InstituteActivities/CHITKARA_dflzbx.jpg",
		title: "Camera",
	},
	{
		img: "https://res.cloudinary.com/def4bqkxv/image/upload/v1643440479/karrier/KarrierAssets/InstituteActivities/Institute_Pic_ne5tvq.jpg",
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

// https://cloudinary.com/console/c-117881a20a15f3616a9c9acd951efc/media_library/folders/bf5257b4fb89323189504cf87c9ba310bb
