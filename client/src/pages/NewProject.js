import React, { useState, useEffect } from "react";
// import { Grid, Segment } from "semantic-ui-react";
import { Button, Modal, Container, Row, Col } from "react-bootstrap";
import ProjectButton from "../components/ProjectButton/index";
import "./style.css";
import Popup from "../components/Popup/index";
import API from "../utils/API";

function NewProject() {
	const [project, setProject] = useState([]);

	useEffect(() => {
		API.getAllProjects()
			.then((res) => setProject(res))
			.catch((err) => console.log(err));
		}, []);
		
		return (
		<Container fluid className="wrap">
			<Row className="iconRow">
				{project.data ? project.data.map((result, index) => (
					<div key={index} data-id={index}>
						<ProjectButton projects={project} index={index}
						/>
					</div>
				)) : null}
			</Row>
			<h6 className="create-title">Create a New Project</h6>
		</Container>
	);
}

export default NewProject;
