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
	// console.log(props);
	const [show, setShow] = useState(true);
	const handleClose = () => setShow(false);
	const [dims, displayDims] = useState({});
	// const [inputs, setInputs] = setState({
	// 	dimensionWidth: "",
	// 	dimensionDepth: "",
	// 	dimensionHeight: "",
	// });

	// const [calc, showCalc] = useState(false);

	useEffect(() => {
		setShow(props.show);
		API.getDims()
			.then((res) => displayDims(res))
			.catch((err) => console.log(err))
		// API.setInputs(inputs)
		// .then((res) => setInputs(res))
		// .catch((err) => console.log(err));
		// showCalc();
	}, [props.show]);

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
									<Form.Group
										controlId="exampleForm.ControlSelect1"
									>
										<Form.Label>Width (in):</Form.Label>
										<Form.Control
											as="select"
											// onChange={setInputs}
										>
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
										<Form.Control as="select">
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
										<Form.Control as="select"
										// onChange={setInputs(inputs.dimensionHeight)}
										>
											{props.projects.data[
												props.index
											].userParams[2].options.map((i) => (
												<option>{i}</option>
											))}
										</Form.Control>
									</Form.Group>
								</div>
								<Button
									id="calculate-button"
									// onclick={setInputs(inputs)}
								>
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
									Last calculated dims:
									<li>Width: 
										{ dims.data ? dims.data[0].currentProjects[0].userParams.dimensionWidth : null}
									</li>
									<li>Depth: 
										{ dims.data ? dims.data[0].currentProjects[0].userParams.dimensionDepth : null}
									</li>
									<li>Height: 
										{ dims.data ? dims.data[0].currentProjects[0].userParams.dimensionHeight : null}
									</li>
								</ul>
								<ul>
									Calculations:
									<li>
										InsertQty of {props.pricing.data[0].name} at $
										{props.pricing.data[0].price} each.
									</li>
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
								</ul>
								<h4>Total Cost: InsCalculatedCost</h4>
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
												label="Measured and cut all pieces and starting assembly. (disabled)"
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
