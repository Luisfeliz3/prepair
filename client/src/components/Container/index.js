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
		</div>
	);
}

export default Container;
