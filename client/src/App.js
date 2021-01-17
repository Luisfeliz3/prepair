import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Container from "./components/Container";
import userAPI from "./utils/userAPI";
import API from "./utils/API";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NewProject from "./pages/NewProject";
import SavedProjects from "./pages/SavedProjects";
import ProtectedRoute from "./components/ProtectedRoute";
import NoMatch from "./pages/NoMatch";
import "./App.css";

function App() {
	const [userState, setUserState] = useState({});

	// from base project seed below
	const [dropdownOptions, showOptions] = useState({
		projectName: "",
		userParams: [],
		// widthOptions: [],
		// depthOptions: [],
		// heightOptions: [],
	});

	document.title = "Prepair";

	useEffect(() => {
		// auth user on first render
		authenticate();
		loadProjects();
	}, []);

	//user authentication
	function authenticate() {
		return userAPI
			.authenticateUser()
			.then(({ data }) => {
				console.log("user:", data);
				setUserState(data);
			})
			.catch((err) => console.log("registered user:", err.response));
	}

	function loadProjects() {
		return API.getAllProjects()
			.then((res) => showOptions(res.data))
			.catch((err) => console.log(err));
	}

	return (
		<BrowserRouter basename={process.env.PUBLIC_URL || "/prepair"}>
			<div className="App">
				<Nav />

				<Switch>
					<Route exact path="/" className="App-link">
						<Container />
					</Route>

					<Route exact path="/login" className="App-link">
						<Login
							userState={userState}
							setUserState={setUserState}
						/>
					</Route>

					<Route exact path="/signup" className="App-link">
						<Signup
							authenticate={authenticate}
							user={userState}
						/>
					</Route>

					<ProtectedRoute exact path="/newproject" className="App-link">
						<NewProject {...userState}
						dropdownOptions={dropdownOptions}/>
					</ProtectedRoute>

					<ProtectedRoute exact path="/myprojects" className="App-link">
						<SavedProjects {...userState} />
					</ProtectedRoute>

					<Route component={NoMatch} />
				</Switch>
			</div>
			{/* {userState.email ? <Redirect to="/newproject" /> : <></>} */}
		</BrowserRouter>
	);
}

export default App;
