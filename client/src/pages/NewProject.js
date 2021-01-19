import React, { useState, useEffect } from "react";
// import { Grid, Segment } from "semantic-ui-react";
import { Button, Modal, Container, Row, Col } from "react-bootstrap";
// import Wrapper from "../components/Wrapper";
import chair from "../static/construction-icons/chair-main.svg";
import bookcase from "../static/construction-icons/bookcase-main.svg";
import table from "../static/construction-icons/table-main.svg";
import desk from "../static/construction-icons/desk-main.svg";
import dresser from "../static/construction-icons/dresser-main.svg";
import tile from "../static/construction-icons/tile-main.svg";
import wall from "../static/construction-icons/wall-main.svg";
import ladder from "../static/construction-icons/ladder-main.svg";
import "./style.css";
import Popup from "../components/Popup/index";
import wood from "../static/wood.png";
import API from "../utils/API";

function NewProject() {
	const [show, setShow] = useState(false);
	const [projects, setProjects] = useState({});

	useEffect(() => {
		setShow(false);
		API.getAllProjects()
				.then((res) => setProjects(res))
				.catch((err) => console.log(err));
	}, []);

	// function renderProjects(res) {
	// 	let projects = [];
	// 	projects = res.data;
	// 	console.log(projects);
		// for (i = 0; i < res.data.length; i++) {
		// 	let widths = projects[i].userParams[0].options;
		// 	let depths = projects[i].userParams[1].options;
		// 	let heights = projects[i].userParams[2].options;
		// 	console.log(widths);
		// 	console.log(depths);
		// 	console.log(heights);
		// }
	// }

	// function loadProjects() {
	// 	return API.getAllProjects()
	// 		.then((res) => renderProjects(res))
	// 		.catch((err) => console.log(err));
	// }
	// loadProjects();

	return (
		// <Wrapper>
		<Container fluid className="wrap">
			<Row className="iconRow">
				<Col>
					<Button
						variant="outline-light"
						className="iconBtn"
						id="chair"
						onClick={() => setShow(true)}
					>
						<img
							src={chair}
							className="icon"
							id="chair-change"
							alt="furniture-icon"
						/>
						<p className="title-text">Chair</p>
					</Button>
					{projects.data ? <Popup projects={projects} show={show} /> : null}
					
				</Col>

				<Col>
					<Button variant="outline-light" className="iconBtn" id="bookcase">
						<img
							src={bookcase}
							className="icon"
							id="bookcase-change"
							alt="furniture-icon"
						/>
						<p className="title-text">Bookcase</p>
					</Button>
				</Col>
				<Col>
					<Button variant="outline-light" className="iconBtn" id="table">
						<img
							src={table}
							className="icon"
							id="table-change"
							alt="furniture-icon"
						/>
						<p className="title-text">Table</p>
					</Button>
				</Col>
				<Col>
					<Button variant="outline-light" className="iconBtn" id="desk">
						<img
							src={desk}
							className="icon"
							id="desk-change"
							alt="furniture-icon"
						/>
						<p className="title-text">Desk</p>
					</Button>
				</Col>
			</Row>
			<Row className="subtitleRow">
				<h1 className="subtitle">Create a New Project</h1>
			</Row>
			<Row className="iconRow">
				<Col>
					<Button variant="outline-light" className="iconBtn" id="dresser">
						<img
							src={dresser}
							className="icon"
							id="dresser-change"
							alt="furniture-icon"
						/>
						<p className="title-text">Dresser</p>
					</Button>
				</Col>
				<Col>
					<Button variant="outline-light" className="iconBtn" id="tile">
						<img
							src={tile}
							className="icon"
							id="tile-change"
							alt="furniture-icon"
						/>
						<p className="title-text">Tile</p>
					</Button>
				</Col>
				<Col>
					<Button variant="outline-light" className="iconBtn" id="wall">
						<img
							src={wall}
							className="icon"
							id="wall-change"
							alt="furniture-icon"
						/>
						<p className="title-text">Wall</p>
					</Button>
				</Col>
				<Col>
					<Button variant="outline-light" className="iconBtn" id="ladder">
						<img
							src={ladder}
							className="icon"
							id="ladder-change"
							alt="furniture-icon"
						/>
						<p className="title-text">Ladder</p>
					</Button>
				</Col>
			</Row>
		</Container>
		// </Wrapper>
	);
}

export default NewProject;
