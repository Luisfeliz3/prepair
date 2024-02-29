import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import App from "../../App";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import NewProject from "../../pages/NewProject";
import SavedProjects from "../../pages/SavedProjects";
import logo from "../../static/logo.png";
// Can change icon below to match explanation slide
import drop from "../../static/projects.png";
import userAPI from '../../utils/userAPI.js'
import "./style.css";
 
 

const Nav = ({setUserState}) => {
const navigate = useNavigate();
const token = localStorage.getItem('token');

  const handleLogout = (e) => {
		e.preventDefault();   // keep link from immediately navigating
		localStorage.removeItem("token-info");
		localStorage.clear(); // clear storage
		setUserState("")
		navigate("/login");   // now navigate away


		userAPI
				.logoutUser()
				.then((res) => {
					if (res.status === 200) {
						console.log(res) 
					}
				})
				.catch((err) => console.log(err));

	  };
	  
 
	return (



		<nav className="navbar">
			<Dropdown>
				<Dropdown.Toggle variant="basic" id="dropdown-basic">
					<img src={logo} className="App-dropdown" alt="dropicon" />
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
					<Dropdown.Item>
					<Link className="App-link" onClick={handleLogout}>
    <span className="App-link">Logout</span>
  </Link>
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</nav>
	);
}

export default Nav;
