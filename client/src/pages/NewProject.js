import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ProjectButton from "../components/ProjectButton/index";
import "./style.css";
import API from "../utils/API";

function NewProject() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    API.getAllProjects()
      .then((res) => setProject(res))
      .catch((err) => console.log(err));
  }, []);

  
  return (
    <Container fluid className="wrap col-10">
      <Row className="iconRow">
        {project.data
          ? project.data.map((result, index) => (
              <div key={index} data-id={index} className="col-xs-6 col-md-4">
                <ProjectButton project={result} />
              </div>
            ))
          : null}
      </Row>
      <h6 className="create-title">Create a New Project</h6>
    </Container>         
  );
}

export default NewProject;
