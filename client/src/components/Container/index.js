import React from "react";
import "./style.css";
import placeholderwood from "../../static/planks.png";

export function Container() {
	return (
		<div className="overall">
			<img
				src={placeholderwood}
				className="background-placeholder"
				alt="woodplanks"
			/>
			<h1 className="title">PREPAIR</h1>
			<p className="proTip">ProTip: You can fix a cracked foundation with a small amount of epoxy and plastic tubing.</p>
		</div>
	);
}

export default Container;
