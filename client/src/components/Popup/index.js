import React, { useState, useEffect } from "react";
import {
	Button,
	Modal,
	Dropdown,
	InputGroup,
	FormControl,
	DropdownButton,
	Row,
	Col,
} from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import wood from "../../static/wood.png";
import expl from "../../static/construction-icons/table-ex.svg";
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
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title>Project Name</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Row>
						<Col xs={6} md={10} className="row justify-content-around">
							<CircularProgressbar value={percentage} text={`${percentage}%`} />
							<img
								src={expl}
								className="explodedDiagram"
								alt="exploded-diagram"
							/>
						</Col>

						<section>
							<form className="col-4">
								<div className="form-group"></div>
								<div>
									Width (in):
									<DropdownButton
										className="dropdown-basic-button"
										title="Select"
									>
										<Dropdown.Item href="#/action-1">12</Dropdown.Item>
										<Dropdown.Item href="#/action-2">
											24
										</Dropdown.Item>
										<Dropdown.Item href="#/action-3">
											36
										</Dropdown.Item>
									</DropdownButton>
								</div>

								<div>
									Height (in):
									<DropdownButton
										className="dropdown-basic-button"
										title="Select"
									>
										<Dropdown.Item href="#/action-1">18</Dropdown.Item>
										<Dropdown.Item href="#/action-2">
											24
										</Dropdown.Item>
										<Dropdown.Item href="#/action-3">
											30
										</Dropdown.Item>
									</DropdownButton>
								</div>
								<div>
									Depth (in):
									<DropdownButton
										className="dropdown-basic-button"
										title="Select"
									>
										<Dropdown.Item href="#/action-1">24</Dropdown.Item>
										<Dropdown.Item href="#/action-2">
											30
										</Dropdown.Item>
										<Dropdown.Item href="#/action-3">
											36
										</Dropdown.Item>
									</DropdownButton>
								</div>
							<Button id="calculate-button">Calculate</Button>

								<img
									id="image"
									src={wood}
									alt="Wood"
									height="350"
									width="400"
									className="d flex"
								></img>
							</form>
							<div className="form-check">
									<InputGroup className="mb-3">
								<label>
										<InputGroup.Prepend>
											<InputGroup.Checkbox aria-label="Checkbox for following text input" />
										</InputGroup.Prepend>
									Calculated materials.
								</label>
									</InputGroup>
							</div>

							<div className="form-check">
									<InputGroup className="mb-3">
								<label>
										<InputGroup.Prepend>
											<InputGroup.Checkbox aria-label="Checkbox for following text input" />
										</InputGroup.Prepend>
									Purchased materials and prepared tools.
								</label>
									</InputGroup>
							</div>

							<div className="form-check">
									<InputGroup className="mb-3">
								<label>
										<InputGroup.Prepend>
											<InputGroup.Checkbox aria-label="Checkbox for following text input" />
										</InputGroup.Prepend>
									Measured and cut all pieces and starting assembly.
								</label>
									</InputGroup>
							</div>

							<div className="form-check">
									<InputGroup className="mb-3">
								<label>
										<InputGroup.Prepend>
											<InputGroup.Checkbox aria-label="Checkbox for following text input" />
										</InputGroup.Prepend>
									Completed build.
								</label>
									</InputGroup>
							</div>
						</section>
						<button className="btn btn-primary mt-2" type="submit">
							Save
						</button>
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
