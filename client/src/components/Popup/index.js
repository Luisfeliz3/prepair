import React, { useState, useEffect } from "react";
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
import "./styles.css";

const Popup = (props) => {
	console.log(props);
	const [show, setShow] = useState(true);
	const handleClose = () => setShow(false);

	useEffect(() => {
		setShow(props.show);
	}, [props.show]);

	const percentage = 25; //Number value for the Progress Ring

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
						A simple {props.projects.data[0].projectName}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className="short">
					<Row>
						<p>Description: {props.projects.data[0].description}</p>
						<Col xs={6} md={12} className="row justify-content-around">
							{/* <CircularProgressbar value={percentage} text={`${percentage}%`} /> */}
						</Col>
						{/* <section> */}
						<Form className="col-4">
							<div className="form-group">
								<div>
									<Form.Group controlId="exampleForm.ControlSelect1">
										<Form.Label>Width (in):</Form.Label>
										<Form.Control as="select">
											<option>
												{props.projects.data[0].userParams[0].options[0]}
											</option>
											<option>
												{props.projects.data[0].userParams[0].options[1]}
											</option>
											<option>
												{props.projects.data[0].userParams[0].options[2]}
											</option>
										</Form.Control>
									</Form.Group>
								</div>
								<div>
									<Form.Group controlId="exampleForm.ControlSelect1">
										<Form.Label>Height (in):</Form.Label>
										<Form.Control as="select">
											<option>
												{props.projects.data[0].userParams[1].options[0]}
											</option>
											<option>
												{props.projects.data[0].userParams[1].options[1]}
											</option>
											<option>
												{props.projects.data[0].userParams[1].options[2]}
											</option>
										</Form.Control>
									</Form.Group>
								</div>
								<div>
									<Form.Group controlId="exampleForm.ControlSelect1">
										<Form.Label>Depth (in):</Form.Label>
										<Form.Control as="select">
											<option>
												{props.projects.data[0].userParams[2].options[0]}
											</option>
											<option>
												{props.projects.data[0].userParams[2].options[1]}
											</option>
											<option>
												{props.projects.data[0].userParams[2].options[2]}
											</option>
										</Form.Control>
									</Form.Group>
								</div>
								<Button id="calculate-button">Calculate</Button>
							</div>
							<img
								src={expl}
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
								<button className="btn btn-secondary mt-2" type="submit">
									Save Progress
								</button>
							</Form>
							<div className="col-8">
								<ul>
									Tools:
									{props.projects.data[0].tools}
								</ul>
								<ul>Optional: {props.projects.data[0].optional}</ul>
								<ul>InsertQty of {props.pricing.data[0].name} at ${props.pricing.data[0].price} each.</ul>
							</div>
						</row>
						{/* </section> */}
					</Row>
				</Modal.Body>
				{/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
			</Modal>
		</div>
	);
};

export default Popup;
