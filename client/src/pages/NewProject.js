import React, { useState, useEffect } from "react";
// import { Grid, Segment } from "semantic-ui-react";
import { Button, Modal, Container, Row, Col } from "react-bootstrap";
import ProjectButton from "../components/ProjectButton/index";
import "./style.css";
import Popup from "../components/Popup/index";
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
