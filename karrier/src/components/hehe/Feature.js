import * as React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import "./Feature.css";

function Feature() {
	return (
		<div className="person hrvoje">
			<div className="links">
				<a href="#">Website</a>
				<a href="#">Twitter</a>
			</div>
			<div className="meta">
				<div>
					<h4>Hrvoje Grubišić</h4>
				</div>
				<div>
					<p>
						Hrvoje is the head of design at an award-­winning, full service digital agency Degordian.In
						addition to leading a team of 13 young experts that include designers, motion graphers and
						frontend developers. Hrvoje would describe himself as a typography junkie and his major passions
						are visual conceptualisation and digital interaction.
					</p>
				</div>
			</div>
			<div className="image"></div>
		</div>
	);
}

export default Feature;
