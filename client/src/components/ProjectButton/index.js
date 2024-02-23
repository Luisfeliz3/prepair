import React, { useState, useEffect } from "react";

import { Button, Modal, Container, Row, Col } from "react-bootstrap";

import "./styles.css";
// import "../ProjectButton/style.css";
import Popup from "../Popup/index.js";
import wood from "../../static/wood.png";
import API from "../../utils/API";

function ProjectButton(props) {

// 	const [projects, setProjects] = useState([])

//   useEffect(() => {
//     API.getAllProjects()
//       .then((res) => setProjects(res))
//       .catch((err) => console.log(err));
//   }, []);


	
// console.log(props)


	const [show, setShow] = useState(false);
	const [pricing, setPricing] = useState([]);


	

	return (
		<Col>
			<Button
				variant="outline-light"
				className="iconBtn"
				id="chair"
				onClick={() => setShow(true)}
			>
				<img
					src={props.project.imgMain}
					className="icon"
					alt="furniture-icon"
					onMouseOver={e => (e.currentTarget.src = props.project.imgEx)}
					onMouseOut={e => (e.currentTarget.src = props.project.imgMain)}
				/>
				<p className="title-text">{props.project.projectName}</p>


			</Button>
			 
					
			 
		
                <Popup project={props.project} show={show}  index={props.index} onHide={() => setShow(false)} />     
          
			
		</Col>
	);
}

export default ProjectButton;
