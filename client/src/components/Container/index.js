import React from "react";
import "./style.css";
import placeholderwood from "../../static/planks.png";

export function Container() {
	let proTipArray = [
		"You can fix a cracked foundation with a small amount of epoxy and plastic tubing.",
		"A self-centering drill bit costs less than $25 and can save hours of frustration.",
		"A snap toggle anchor can hold up to 265 pounds in 1/2 inch drywall.",
		"Sand with the grain of the wood, especially for the final grits. To remove deep scratches and stains, angle across the grain up to about 45º for the first sanding. Sand with the grain to remove all cross-grain scratches.",
		"When working with wood, know the moisture content of each piece. Too dry, and the end product may swell or crack. Too moist, it may shrink or warp. Incorrect moisture causes 80% of all woodworking problems.",
		"Make accurate measuring and marking layouts on boards faster and easier with a drafting square.",
		"Always try to use cut tiles that are between half- and full-size. Anything less than half-size will look like an out-of-place sliver compared to larger tiles.",
		"Remember that preparation is 75% of the job.",
		"Measure twice and cut once.",
		"Always use protective gear when working with a table saw.",
	];
	let random = Math.floor(Math.random() * 10);

	return (
		<div className="overall">
			<video playsInline autoPlay muted loop poster={placeholderwood} className="background-placeholder">
				<source src="/splittwo.mp4" type="video/mp4"/>
			</video>
			<h1 className="title">PREPAIR</h1>
			<p className="proTip">ProTip: {proTipArray[random]}</p>
		</div>
	);
}

export default Container;
