import React, { Component } from "react";
import styles from "./preloader.module.css";

export default class Preloader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			removed: false,
		};
	}

	componentDidMount() {
		window.onload = () => {
			this.setState({ loaded: true });
			setTimeout(() => {
				this.setState({ remove: true });
			}, 900);
		};
	}

	render() {
		return this.state.removed ? null : (
			<div id="preloader">
				<div
					id="ctn-preloader"
					className={
						("ctn-preloader",
						{
							loaded: this.state.loaded,
						})
					}
				>
					<div className="animation-preloader">
						<div className="spinner" />
						<div className="txt-loading">
							<span data-text-preloader="K" className="letters-loading">
								K
							</span>
							<span data-text-preloader="A" className="letters-loading">
								A
							</span>
							<span data-text-preloader="R" className="letters-loading">
								R
							</span>
							<span data-text-preloader="R" className="letters-loading">
								R
							</span>
							<span data-text-preloader="I" className="letters-loading">
								I
							</span>
							<span data-text-preloader="E" className="letters-loading">
								E
							</span>
							<span data-text-preloader="R" className="letters-loading">
								R
							</span>
						</div>
						<p className="text-center">Loading</p>
					</div>
					<div className="loader">
						<div className="row">
							<div className="col-3 loader-section section-left">
								<div className="bg" />
							</div>
							<div className="col-3 loader-section section-left">
								<div className="bg" />
							</div>
							<div className="col-3 loader-section section-right">
								<div className="bg" />
							</div>
							<div className="col-3 loader-section section-right">
								<div className="bg" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
