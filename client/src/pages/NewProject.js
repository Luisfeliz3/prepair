import React, { useState, useEffect } from "react";
// import { Grid, Segment } from "semantic-ui-react";
import { Button, Modal, Container, Row, Col } from "react-bootstrap";
import ProjectButton from "../components/ProjectButton/index";
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
	const [project, setProject] = useState([]);
	const [dims, setDims] = useState({
		dimensionWidth: "",
		dimensionDepth: "",
		dimensionHeight: ""
	})

	useEffect(() => {
		API.getAllProjects()
			.then((res) => setProject(res))
			.catch((err) => console.log(err));
		// API.saveDims()
		// 	.then((res) => setDims(res))
		// 	.catch((err) => console.log(err));
	}, []);

	return (
		<Container fluid className="wrap">
			<Row className="iconRow">
				{project.data ? project.data.map((result, index) => (
					<div key={index} data-id={index}>
						<ProjectButton projects={project} index={index} dims={dims}/>
					</div>
				)) : null}
			</Row>
			<h6 className="title">Create a New Project</h6>
		</Container>
	);
}

export default NewProject;
