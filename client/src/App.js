// import React, { useEffect, useState } from "react";
import React, {useState, useEffect} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Container from "./components/Container";
import userAPI from "./utils/userAPI";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NewProject from "./pages/NewProject";
import SavedProjects from "./pages/SavedProjects";
import ProtectedRoute from "./components/ProtectedRoute"
import NoMatch from "./pages/NoMatch";
import "./App.css";

function App() {
	const [userState, setUserState] = useState({});
	document.title = "Prepair";


	useEffect(() => { 
		// auth user on first render
	   authenticate() 
	}, []);

		//user authentication
		function authenticate() {
			return userAPI.authenticateUser()
				.then(({ data }) => {
					console.log('user:', data );
				setUserState(data);
				})
				.catch((err) => console.log('registered user:', err.response));
		}

	return (
		<BrowserRouter basename={process.env.PUBLIC_URL || "/prepair"}>
			<div className="App">
				<Nav />
					<Switch>
						<Route exact path="/" className="App-link" component={App}>
							<Container />
						</Route>
						<Route exact path="/login" className="App-link" component={Login}>
							<Login 
							// {...props}
							userState={userState}
							setUserState={setUserState}
							/>
						</Route>
						<Route exact path="/signup" className="App-link" component={Signup}>
							<Signup 
								// {...props}
								authenticate={authenticate}
								user={userState}
							/>
						</Route>
						<ProtectedRoute exact path="/newproject" className="App-link" component={NewProject}>
							<NewProject />
						</ProtectedRoute>
						<ProtectedRoute exact path="/myprojects" className="App-link" component={SavedProjects}>
							<SavedProjects />
						</ProtectedRoute>
					<Route component={NoMatch} />
					</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
