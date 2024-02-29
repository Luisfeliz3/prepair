import React, { useState } from "react";
import userAPI from "../utils/userAPI";
import { Link, redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import "./style.css";

const Login = ({setUserState, authenticate})=> {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	  });

 

const	handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));		
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
	
		if ( formData.email && formData.password) {
			localStorage.setItem("token-info",
			JSON.stringify(formData)
			)

			userAPI
				.loginUser({
					email:formData.email,
					password: formData.password,
				})
				.then((res) => {
					if (res.status === 200) {
						setUserState(res.data);
						 
					}
				})
				.catch((err) => console.log(err));
		}
	};

		return (
			<Container fluid>
				<Row>
					<Col size="12">
						<form className="main" onSubmit={handleFormSubmit}>
							Email
							<Input
								value={formData.email}
								onChange={handleInputChange}
								name="email"
								placeholder="Email (required)"
								className="main-button"
							/>
							Password
							<Input
								value={formData.password}
								onChange={handleInputChange}
								name="password"
								placeholder="Password (required)"
								type="password"
								className="main-button"
							/>
							<FormBtn
								disabled={!( formData.email && formData.password)}
								className="main-button"
							>
								Log in
							</FormBtn>
							<Link to="/signup">
								<FormBtn className="main-button"> Signup </FormBtn>
							</Link>
						</form>
					</Col>
				</Row>
			</Container>
		);
	}

export default Login;
