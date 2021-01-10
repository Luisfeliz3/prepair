// import React, { useEffect, useState } from "react";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Container from "./components/Container";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NewProject from "./pages/NewProject";
import SavedProjects from "./pages/SavedProjects";
import "./App.css";

function App() {
	// const [userState, setUserState] = useState({});
	document.title = "Prepair";
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL || "/prepair"}>
			<div className="App">
				<Nav />
					<Switch>
						<Route exact path="/" className="App-link" component={App}>
							<Container />
						</Route>
						<Route exact path="/login" className="App-link" component={Login}>
							<Login />
						</Route>
						<Route exact path="/signup" className="App-link" component={Signup}>
							<Signup />
						</Route>
						<Route exact path="/newproject" className="App-link" component={NewProject}>
							<NewProject />
						</Route>
						<Route exact path="/myprojects" className="App-link" component={SavedProjects}>
							<SavedProjects />
						</Route>
					</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
