import React, { useState, setState, useEffect } from "react";
import {
	Button,
	Modal,
	Dropdown,
	InputGroup,
	FormControl,
	Form,
	DropdownButton,
	Row,
	Col,
} from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import twentyfive from "../../static/twentyfive.png";
import fifty from "../../static/fifty.png";
import seventyfive from "../../static/seventyfive.png";
import hundred from "../../static/hundred.png";
import expl from "../../static/construction-icons/chair-ex.svg";
import ContextProvider from "../../utils/ContextProvider";
import "./styles.css";
import API from "../../utils/API";

const Popup = (props) => {
	const [show, setShow] = useState(true);
	const handleClose = () => setShow(false);
	const [dims, setDims] = useState({
		dimensionWidth: "",
		dimensionDepth: "",
		dimensionHeight: "",
	});
	const [matState, setMatState] = useState({});
	const [finalResult, setFinalResult] = useState(0);

	const handleWidthChange = (event) => {
		const { name, value } = event.target;
		setDims({
			...dims,
			dimensionWidth: value,
		});
	};

	const handleDepthChange = (event) => {
		const { name, value } = event.target;
		setDims({
			...dims,
			dimensionDepth: value,
		});
	};

	const handleHeightChange = (event) => {
		const { name, value } = event.target;
		setDims({
			...dims,
			dimensionHeight: value,
		});
	};

	useEffect(() => {
		setShow(props.show);
		API.getDims()
			.then((res) => setDims(res))
			.catch((err) => console.log(err));
		// API.setInputs(inputs)
		// .then((res) => setInputs(res))
		// .catch((err) => console.log(err));
		// showCalc();
	}, [props.show]);

	const calcButtonPressed = () => {
		const width = dims.dimensionWidth;
		const depth = dims.dimensionDepth;
		const height = dims.dimensionHeight;
		const materials = calculateForPopup(
			width,
			depth,
			height,
			props.projects.data[props.index].projectName
		);
		console.log(materials);
		setMatState(materials);
		// setFinalResult(materials);
	};

	// Function to CALCULATE CHAIR
	function calculateChair(w, d, h) {
		let twoByFourLengthInFeet = (h * 2 + (w - 1.5) + 34.5) / 12;
		// below will give actual count of 2x4 material at 8 foot lengths
		let twoByFourLengthCount = roundUpEight(twoByFourLengthInFeet);
		let twoByFourWasteFactorPercentage =
			((twoByFourLengthCount * 8 - twoByFourLengthInFeet) /
				(twoByFourLengthCount * 8)) *
			100;
		console.log(
			"You are using " +
				twoByFourLengthCount +
				" lengths of 2x4 at a waste factor of " +
				twoByFourWasteFactorPercentage +
				"%"
		);

		//Calculating plywood material below
		let plywoodAreaInFeet = (w * d) / 144;
		let plywoodCount = plywoodRound(plywoodAreaInFeet);
		let plywoodWasteFactorPercentage =
			((plywoodCount * 32 - plywoodAreaInFeet) / (plywoodCount * 32)) * 100;
		console.log(
			"You are using " +
				plywoodCount +
				" pieces of plywood at a waste factor of " +
				plywoodWasteFactorPercentage +
				"%"
		);

		//Calculating rod material below
		let rodLengthInFeet = (w - 1.5) / 12;
		let rodCount = roundUpFour(rodLengthInFeet);
		let rodWasteFactorPercentage =
			((rodCount * 12 - rodLengthInFeet) / (rodCount * 12)) * 100;
		console.log(
			"You are using" +
				rodCount +
				" lengths of rod at a waste factor of " +
				rodWasteFactorPercentage +
				"%"
		);
		return {
			twoByFourLength: twoByFourLengthInFeet,
			twoByFourQty: twoByFourLengthCount,
			twoByFourWF: twoByFourWasteFactorPercentage,
			plywoodArea: plywoodAreaInFeet,
			plywoodQty: plywoodCount,
			plywoodWF: plywoodWasteFactorPercentage,
			rodLength: rodLengthInFeet,
			rodQty: rodCount,
			rodWF: rodWasteFactorPercentage,
		};
	}

	// Function to CALCULATE BOOKCASE
	function calculateBookcase(w, d, h) {
		let plywoodAreaInFeet = (6 * (w * d) + 2 * (d * h) + d * h) / 144;
		let plywoodCount = plywoodRound(plywoodAreaInFeet);
		let plywoodWasteFactorPercentage =
			((plywoodCount * 32 - plywoodAreaInFeet) / (plywoodCount * 32)) * 100;
		console.log(
			"You are using" +
				plywoodCount +
				" pieces of plywood at a waste factor of " +
				plywoodWasteFactorPercentage +
				"%"
		);

		let oneByThreeLengthInFeet = (2 * d - 5 + 2 * w) / 12;
		// below will give actual count of 2x4 material at 8 foot lengths
		let oneByThreeLengthCount = roundUpEight(oneByThreeLengthInFeet);
		let oneByThreeWasteFactorPercentage =
			((oneByThreeLengthCount * 8 - oneByThreeLengthInFeet) /
				(oneByThreeLengthCount * 8)) *
			100;
		console.log(
			"You are using" +
				oneByThreeLengthCount +
				" lengths of 2x4 at a waste factor of " +
				oneByThreeWasteFactorPercentage +
				"%"
		);

		return {
			oneByThreeLength: oneByThreeLengthInFeet,
			oneByThreeQty: oneByThreeLengthCount,
			oneByThreeWF: oneByThreeWasteFactorPercentage,
			plywoodArea: plywoodAreaInFeet,
			plywoodQty: plywoodCount,
			plywoodWF: plywoodWasteFactorPercentage,
		};
	}

	function calculateTable(w, d, h) {
		let plywoodAreaInFeet =
			(w * d) / 144 + ((4 * (d - 12) + 24) * (h - 1)) / 144;
		let plywoodCount = plywoodRound(plywoodAreaInFeet);
		let plywoodWasteFactorPercentage =
			((plywoodCount * 32 - plywoodAreaInFeet) / (plywoodCount * 32)) * 100;
		console.log(
			"You are using" +
				plywoodCount +
				" pieces of plywood at a waste factor of " +
				plywoodWasteFactorPercentage +
				"%"
		);
		return {
			plywoodThickArea: plywoodAreaInFeet,
			plywoodThickQty: plywoodCount,
			plywoodThickWF: plywoodWasteFactorPercentage,
		};
	}

	function calculateDesk(w, d, h) {
		let twoByFourLengthInFeet = (h - 12) * 4 + 2 * (d - 9);
		// below will give actual count of 2x4 material at 8 foot lengths
		let twoByFourLengthCount = roundUpEight(twoByFourLengthInFeet);
		let twoByFourWasteFactorPercentage =
			((twoByFourLengthCount * 8 - twoByFourLengthInFeet) /
				(twoByFourLengthCount * 8)) *
			100;
		console.log(
			"You are using" +
				twoByFourLengthCount +
				" lengths of 2x4 at a waste factor of " +
				twoByFourWasteFactorPercentage +
				"%"
		);

		//Calculating plywood material below
		let plywoodAreaInFeet =
			(w * d + 2 * (12 * d) + 12 * w + 8 * (w - 3) + 117) / 144;
		let plywoodCount = plywoodRound(plywoodAreaInFeet);
		let plywoodWasteFactorPercentage =
			((plywoodCount * 32 - plywoodAreaInFeet) / (plywoodCount * 32)) * 100;
		console.log(
			"You are using" +
				plywoodCount +
				" pieces of plywood at a waste factor of " +
				plywoodWasteFactorPercentage +
				"%"
		);
		return {
			twoByFourLength: twoByFourLengthInFeet,
			twoByFourQty: twoByFourLengthCount,
			twoByFourWF: twoByFourWasteFactorPercentage,
			plywoodArea: plywoodAreaInFeet,
			plywoodQty: plywoodCount,
			plywoodWF: plywoodWasteFactorPercentage,
		};
	}

	function calculateDresser(w, d, h) {
		let twoByFourLengthInFeet = 2 * w + 2 * (d - 2.5);
		let twoByFourLengthCount = roundUpEight(twoByFourLengthInFeet);
		let twoByFourWasteFactorPercentage =
			((twoByFourLengthCount * 8 - twoByFourLengthInFeet) /
				(twoByFourLengthCount * 8)) *
			100;
		console.log(
			"You are using" +
				twoByFourLengthCount +
				" lengths of 2x4 at a waste factor of " +
				twoByFourWasteFactorPercentage +
				"%"
		);

		//Calculating plywood material below
		let plywoodAreaInFeet =
			(2 * ((h - 3.5) * d) +
				(h - 3.5) * w +
				2 * (w * (d - 0.75)) +
				w * d +
				(h - 4.25) +
				4 * (2 * (d - 3) + (w - 4) * (d - 3) + (h - 4.75) / 4)) /
			144;
		let plywoodCount = plywoodRound(plywoodAreaInFeet);
		let plywoodWasteFactorPercentage =
			((plywoodCount * 32 - plywoodAreaInFeet) / (plywoodCount * 32)) * 100;
		console.log(
			"You are using" +
				plywoodCount +
				" pieces of plywood at a waste factor of " +
				plywoodWasteFactorPercentage +
				"%"
		);

		// Calculating slides
		let slideCount = 4;
		return {
			twoByFourLength: twoByFourLengthInFeet,
			twoByFourQty: twoByFourLengthCount,
			twoByFourWF: twoByFourWasteFactorPercentage,
			plywoodArea: plywoodAreaInFeet,
			plywoodQty: plywoodCount,
			plywoodWF: plywoodWasteFactorPercentage,
			hardwareSlideCount: slideCount,
		};
	}

	function calculateTile(w, d, h) {
		let tileAreaInFeet = (w * h) / 144;
		let boxCount = boxRound(tileAreaInFeet);

		let cementBoardAreaInFeet = (w * h) / 144;
		let cementBoardCount = plywoodRound(cementBoardAreaInFeet);
		let cementBoardWasteFactorPercentage =
			((cementBoardCount * 32 - cementBoardAreaInFeet) /
				(cementBoardCount * 32)) *
			100;
		console.log(
			"You are using" +
				plywoodCount +
				" pieces of plywood at a waste factor of " +
				plywoodWasteFactorPercentage +
				"%"
		);

		let groutCount = 1;
		let adhesiveCount = 1;
		return {
			tileArea: tileAreaInFeet,
			tileBoxCount: boxCount,
			tileWF: twoByFourWasteFactorPercentage,
			cementBoardArea: cementBoardAreaInFeet,
			cementBoardQty: cementBoardCount,
			cementBoardWF: cementBoardWasteFactorPercentage,
			groutQty: groutCount,
			thinSet: adhesiveCount,
		};
	}

	function calculateWall(w, d, h) {
		let twoByFourLengthInFeet = ((w / 16 + 1) * h + 2 * (w * h)) / 12;
		// below will give actual count of 2x4 material at 8 foot lengths
		let twoByFourLengthCount = roundUpEight(twoByFourLengthInFeet);
		let twoByFourWasteFactorPercentage =
			((twoByFourLengthCount * 8 - twoByFourLengthInFeet) /
				(twoByFourLengthCount * 8)) *
			100;
		console.log(
			"You are using" +
				twoByFourLengthCount +
				" lengths of 2x4 at a waste factor of " +
				twoByFourWasteFactorPercentage +
				"%"
		);

		//Calculating plywood material below
		let gypsumBoardAreaInFeet = (w * h) / 144;
		let gypsumBoardCount = plywoodRound(gypsumBoardAreaInFeet);
		let gypsumBoardWasteFactorPercentage =
			((gypsumBoardCount * 32 - gypsumBoardAreaInFeet) /
				(gypsumBoardCount * 32)) *
			100;
		console.log(
			"You are using" +
				gypsumBoardCount +
				" pieces of gypsumBoard at a waste factor of " +
				gypsumBoardWasteFactorPercentage +
				"%"
		);
		return {
			twoByFourLength: twoByFourLengthInFeet,
			twoByFourQty: twoByFourLengthCount,
			twoByFourWF: twoByFourWasteFactorPercentage,
			gypsumBoardArea: gypsumBoardAreaInFeet,
			gypsumBoardQty: gypsumBoardCount,
			gypsumBoardWF: gypsumBoardWasteFactorPercentage,
		};
	}

	function calculateLadder(w, d, h) {
		let twoByFourLengthInFeet = (h * 2) / 12;
		let twoByFourLengthCount = roundUpEight(twoByFourLengthInFeet);
		let twoByFourWasteFactorPercentage =
			((twoByFourLengthCount * 8 - twoByFourLengthInFeet) /
				(twoByFourLengthCount * 8)) *
			100;
		console.log(
			"You are using" +
				twoByFourLengthCount +
				" lengths of 2x4 at a waste factor of " +
				twoByFourWasteFactorPercentage +
				"%"
		);

		//Calculating rod material below
		let rodLengthInFeet = (w - 3) * ((h / 12 - 1) * (w - 1.5));
		let rodCount = roundUpFour(rodLengthInFeet);
		let rodWasteFactorPercentage =
			((rodCount * 12 - rodLengthInFeet) / (rodCount * 12)) * 100;
		console.log(
			"You are using" +
				rodCount +
				" lengths of rod at a waste factor of " +
				rodWasteFactorPercentage +
				"%"
		);
		return {
			twoByFourLength: twoByFourLengthInFeet,
			twoByFourQty: twoByFourLengthCount,
			twoByFourWF: twoByFourWasteFactorPercentage,
			rodLength: rodLengthInFeet,
			rodQty: rodCount,
			rodWF: rodWasteFactorPercentage,
		};
	}

	// Rounding Functions for use in all calculations
	function roundUpEight(input) {
		if (input < 8) return 1;
		if (input > 8 && input < 16) return 2;
	}

	function roundUpFour(input) {
		if (input < 4) return 1;
		if (input > 4 && input < 8) return 2;
		if (input > 8 && input < 12) return 3;
	}

	function plywoodRound(input) {
		if (input < 32) return 32;
		if (input > 32 && input < 64) return 2;
		if (input > 64 && input < 96) return 3;
		if (input > 96 && input < 128) return 4;
		if (input > 128 && input < 160) return 5;
	}

	function boxRound(input) {
		if (input < 10) return 20;
		if (input > 20 && input < 30) return 2;
		if (input > 30 && input < 40) return 3;
		if (input > 40 && input < 50) return 4;
		if (input > 50 && input < 60) return 5;
		if (input > 60 && input < 70) return 6;
		if (input > 70 && input < 80) return 7;
		if (input > 80 && input < 90) return 8;
		if (input > 90 && input < 100) return 9;
		if (input > 100 && input < 110) return 10;
	}

	let calculateForPopup = (w, d, h, projectType) => {
		return projectType == "chair"
			? calculateChair(w, d, h)
			: projectType == "bookcase"
			? calculateBookcase(w, d, h)
			: projectType == "table"
			? calculateTable(w, d, h)
			: projectType == "desk"
			? calculateDesk(w, d, h)
			: projectType == "dresser"
			? calculateDresser(w, d, h)
			: projectType == "tile"
			? calculateTile(w, d, h)
			: projectType == "wall"
			? calculateWall(w, d, h)
			: projectType == "ladder"
			? calculateLadder(w, d, h)
			: "null";
	};

	return (
		<div id="modal">
			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
				size="lg"
				dialogClassName="modal-90w"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title>
						A simple {props.projects.data[props.index].projectName}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className="short">
					<Row>
						<p>Description: {props.projects.data[props.index].description}</p>
						<Col xs={6} md={12} className="row justify-content-around"></Col>
						<Form className="col-4">
							<div className="form-group">
								<div>
									<Form.Group controlId="exampleForm.ControlSelect1">
										<Form.Label>Width (in):</Form.Label>
										<Form.Control as="select" onChange={handleWidthChange}>
											{props.projects.data[
												props.index
											].userParams[0].options.map((i) => (
												<option>{i}</option>
											))}
										</Form.Control>
									</Form.Group>
								</div>
								<div>
									<Form.Group controlId="exampleForm.ControlSelect1">
										<Form.Label>Depth (in):</Form.Label>
										<Form.Control as="select" onChange={handleDepthChange}>
											{props.projects.data[
												props.index
											].userParams[1].options.map((i) => (
												<option>{i}</option>
											))}
										</Form.Control>
									</Form.Group>
								</div>
								<div>
									<Form.Group controlId="exampleForm.ControlSelect1">
										<Form.Label>Height (in):</Form.Label>
										<Form.Control as="select" onChange={handleHeightChange}>
											{props.projects.data[
												props.index
											].userParams[2].options.map((i) => (
												<option>{i}</option>
											))}
										</Form.Control>
									</Form.Group>
								</div>
								<Button id="calculate-button" onClick={calcButtonPressed}>
									Calculate
								</Button>
							</div>
							<img
								src={props.projects.data[props.index].imgEx}
								className="explodedDiagram"
								alt="exploded-diagram"
							/>
							<img
								id="image"
								src={twentyfive}
								className="overlay"
								alt="progress"
							/>
						</Form>
						<row>
							<div className="required">
								<ul>
									Required Tools:
									{props.projects.data[props.index].tools.map((i) => (
										<li>{i}</li>
									))}
								</ul>
								<ul>
									Optional:{" "}
									{props.projects.data[props.index].optional.map((i) => (
										<li>{i}</li>
									))}
								</ul>
							</div>

							<div className="calculations">
								<ul>
									Current Dimensions:
									<li>
										Width: 
										{dims ? dims.dimensionWidth : null} in
									</li>
									<li>
										Depth: 
										{dims ? dims.dimensionDepth : null} in
									</li>
									<li>
										Height: 
										{dims ? dims.dimensionHeight : null} in
									</li>
								</ul>
								<ul>
									Calculations:
									
										{matState.rodQty ? <li>{matState.rodQty} of {props.pricing.data[0].name} at $
										{props.pricing.data[0].price} each. </li> : null}
									
									<li>
										InsertQty of {props.pricing.data[1].name} at $
										{props.pricing.data[1].price} each.
									</li>
									<li>
										InsertQty of {props.pricing.data[2].name} at $
										{props.pricing.data[2].price} each.
									</li>
									<li>
										InsertQty of {props.pricing.data[3].name} at $
										{props.pricing.data[3].price} each.
									</li>
									<li>
										InsertQty of {props.pricing.data[4].name} at $
										{props.pricing.data[4].price} each.
									</li>
									<li>
										InsertQty of {props.pricing.data[5].name} at $
										{props.pricing.data[5].price} each.
									</li>
									<li>
										InsertQty of {props.pricing.data[6].name} at $
										{props.pricing.data[6].price} each.
									</li>
									<li>
										InsertQty of {props.pricing.data[7].name} at $
										{props.pricing.data[7].price} each.
									</li>
									<li>
										InsertQty of {props.pricing.data[8].name} at $
										{props.pricing.data[8].price} each.
									</li>
									<li>
										InsertQty of {props.pricing.data[9].name} at $
										{props.pricing.data[9].price} each.
									</li>
									<li>
										InsertQty of {props.pricing.data[10].name} at $
										{props.pricing.data[10].price} each.
									</li>
									<li>
										InsertQty of {props.pricing.data[11].name} at $
										{props.pricing.data[11].price} each.
									</li>
								</ul>
								<h4>Total Cost: ${finalResult}</h4>

								<h6>{/* {console.log(calculateChair(w, d, h))} */}</h6>

								<Form className="form-group2">
									{["checkbox"].map((type) => (
										<div key={`inline-${type}`} className="mb-3">
											<Form.Check
												label="Calculated materials."
												type={type}
												id={`inline-${type}-1`}
											/>
											<Form.Check
												label="Purchased materials and prepared tools."
												type={type}
												id={`inline-${type}-2`}
											/>
											<Form.Check
												label="Measured and cut all pieces and starting assembly."
												type={type}
												id={`inline-${type}-3`}
											/>
											<Form.Check
												disabled
												label="Completed build. (disabled)"
												type={type}
												id={`inline-${type}-3`}
											/>
										</div>
									))}

									<button className="btn btn-outline-light mt-2" type="submit">
										Save Progress
									</button>
								</Form>
							</div>
						</row>
					</Row>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default Popup;
