import React, { useState, useEffect } from "react";
// import { Grid, Segment } from "semantic-ui-react";
import { Button, Modal, Container, Row, Col } from "react-bootstrap";
// import Wrapper from "../components/Wrapper";

import chair from "../../static/construction-icons/chair-main.svg";
import bookcase from "../../static/construction-icons/bookcase-main.svg";
import table from "../../static/construction-icons/table-main.svg";
import desk from "../../static/construction-icons/desk-main.svg";
import dresser from "../../static/construction-icons/dresser-main.svg";
import tile from "../../static/construction-icons/tile-main.svg";
import wall from "../../static/construction-icons/wall-main.svg";
import ladder from "../../static/construction-icons/ladder-main.svg";
import "./styles.css";
// import "../ProjectButton/style.css";
import Popup from "../Popup/index";
import wood from "../../static/wood.png";
import API from "../../utils/API";

function ProjectButton(props) {
	const [show, setShow] = useState(false);
	const [projects, setProjects] = useState({});
	const [index, setIndex] = useState(props.index);
	const [pricing, setPricing] = useState([]);

	useEffect(() => {
		setShow(false);
		API.getAllProjects()
			.then((res) => setProjects(res))
			.catch((err) => console.log(err));
		API.getPricing()
			.then((res) => setPricing(res))
			.catch((err) => console.log(err));
	}, []);

	return (
		<Col>
			<Button
				variant="outline-light"
				className="iconBtn"
				id="chair"
				onClick={() => setShow(true)}
			>
				<img
					src={props.projects.data[props.index].imgMain}
					className="icon"
					// id="chair-change"
					id={(props.projects.data[props.index].projectName == "chair") ? "chair-change"
						: (props.projects.data[props.index].projectName == "dresser") ? "dresser-change"
						: (props.projects.data[props.index].projectName == "bookcase") ? "bookcase-change"
						: (props.projects.data[props.index].projectName == "table") ? "table-change"
						: (props.projects.data[props.index].projectName == "wall") ? "wall-change"
						: (props.projects.data[props.index].projectName == "tile") ? "tile-change"
						: (props.projects.data[props.index].projectName == "ladder") ? "ladder-change"
						: (props.projects.data[props.index].projectName == "desk") ? "desk-change"
						: null}
					alt="furniture-icon"
				/>
				<p className="title-text">{props.projects.data[props.index].projectName}</p>
			</Button>
			{projects.data && pricing.data ? (
				<Popup projects={projects} pricing={pricing} show={show} index={index}/>
			) : null}
		</Col>
	);
}

export default ProjectButton;
