import React from "react";
// import styles from "./courses.module.css";
import "./gallery1.css";
// import CoursesSlider from "../../components/coursesSlider";
import img1 from "../../assets/KarrierAssets/InstituteActivities/CertificateCeremony.jpg";

function Gallery() {
	return (
		<section class="gallerySection">
			<div class="gallery">
				<div class="images-container">
					<div class="item">
						<img
							class="img"
							src="images/thumbnail1.png"
							data-title="Oceanside video"
							data-source="video.mp4"
						/>
					</div>
					{/* <img src={img1} /> */}
					<div class="item">
						<img class="img" src={img1} data-title="image2" />
					</div>
					<div class="item">
						<img class="img" src="images/image1.jpg" data-title="image2" />
					</div>
					<div class="item">
						<img class="img" src="images/thumbnail2.png" data-title="River video" data-source="video2.mp4" />
					</div>
					<div class="item">
						<img class="img" src="images/image4.jpg" data-title="image4" />
					</div>
					<div class="item">
						<img class="img" src="images/image5.jpg" data-title="image5" />
					</div>
					<div class="item">
						<img class="img" src="images/image3.jpg" data-title="image2" />
					</div>
					<div class="item">
						<img class="img" src="images/image6.jpg" data-title="image6" />
					</div>
					<div class="item">
						<img class="img" src="images/thumbnail3.png" data-title="Forest video" data-source="video3.mp4" />
					</div>
					<div class="item">
						<img class="img" src="images/image8.jpg" data-title="image8" />
					</div>
					<div class="item">
						<img class="img" src="images/image7.jpg" data-title="image2" />
					</div>
					<div class="item">
						<img class="img" src="images/image11.jpg" data-title="image11" />
					</div>
					<div class="item">
						<img class="img" src="images/image9.jpg" data-title="image9" />
					</div>
					<div class="item">
						<img class="img" src="images/image10.jpg" data-title="image10" />
					</div>
				</div>
				<div class="vid-modal-overlay">
					<div class="arrow-container arrow-container-left">
						<div class="arrow-left"></div>
					</div>
					<div class="arrow-container arrow-container-right">
						<div class="arrow-right"></div>
					</div>
					<div class="vid-modal">
						<div class="vid-modal-text">
							<svg
								width="1.5em"
								height="1.5em"
								viewBox="0 0 16 16"
								class="bi bi-x-circle vid-close-btn"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
								/>
								<path
									fill-rule="evenodd"
									d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
								/>
							</svg>
							<h3 class="vid-title"></h3>
							<p>
								<strong>Hint: </strong>You can scroll trought the videos by using the left and right arrow
								keys on your keyboard
							</p>
						</div>
						<div class="vid-img-container"></div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Gallery;
