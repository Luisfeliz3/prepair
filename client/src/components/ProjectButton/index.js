import React, { useState, useEffect } from "react";

import { Button, Modal, Container, Row, Col } from "react-bootstrap";

import "./styles.css";
// import "../ProjectButton/style.css";
import Popup from "../Popup/index.js";
import wood from "../../static/wood.png";
import API from "../../utils/API";

function ProjectButton({project}) {

	const [projects, setProjects] = useState([])

  useEffect(() => {
    API.getAllProjects()
      .then((res) => setProjects(res))
      .catch((err) => console.log(err));
  }, []);


	


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
					src={project.imgMain}
					className="icon"
					alt="furniture-icon"
					onMouseOver={e => (e.currentTarget.src = project.imgEx)}
					onMouseOut={e => (e.currentTarget.src = project.imgMain)}
				/>
				<p className="title-text">{project.projectName}</p>


			</Button>
			{projects.data
          ? projects.data.map((result, index) => (
              <div key={index} data-id={index} className="col-xs-6 col-md-4">
                <Popup project={result} show={show} onHide={() => setShow(false)} />
              </div>
            ))
          : null}
			
			{<Popup project={project} show={show} onHide={() => setShow(false)} />}


			{/* {project && project ? (
				<Popup project={project} pricing={pricing} show={false}
				/>
			) : null} */}

		

			


		</Col>
	);
}

export default ProjectButton;
