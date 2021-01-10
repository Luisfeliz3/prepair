import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import App from "../../App";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import NewProject from "../../pages/NewProject";
import SavedProjects from "../../pages/SavedProjects";
// Can change icon below to match explanation slide
import drop from "../../static/projects.png";
import "./style.css";

function Nav() {
	return (
		<nav className="navbar">
			<Dropdown>
				<Dropdown.Toggle variant="basic" id="dropdown-basic">
					<img src={drop} className="App-dropdown" alt="dropicon" />
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item>
						<Link className="App-link" to="/" href={App}>
							Home
						</Link>
					</Dropdown.Item>
					<Dropdown.Item>
						<Link className="App-link" to="/login" href={Login}>
							Log In
						</Link>
					</Dropdown.Item>
					<Dropdown.Item>
						<Link className="App-link" to="/signup" href={Signup}>
							Sign Up
						</Link>
					</Dropdown.Item>
					<Dropdown.Item>
						<Link className="App-link" to="/newproject" href={NewProject}>
							Create a New Project
						</Link>
					</Dropdown.Item>
					<Dropdown.Item>
						<Link className="App-link" to="/myprojects" href={SavedProjects}>
							My Saved Projects
						</Link>
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</nav>
	);
}

export default Nav;
