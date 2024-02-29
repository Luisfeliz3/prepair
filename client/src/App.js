import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./components/Container";
import userAPI from "./utils/userAPI";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import LogsOut from "./pages/LogsOut";
import Signup from "./pages/Signup";
import NewProject from "./pages/NewProject";
import SavedProjects from "./pages/SavedProjects";
import ProtectedRoute from "./components/ProtectedRoute";
import NoMatch from "./pages/NoMatch";
import "./App.css";


function App() {
  const [userState, setUserState] = useState();
 


  document.title = "Prepair";

  useEffect(() => {
    // auth user on first render
    authenticate();

  }, []);




  //user authentication

	//user authentication
	const authenticate = async () => {
		try {
			const { data } = await userAPI.authenticateUser();
			console.log('user:', data);
			setUserState(data);
		} catch (err) {
			return console.log('registered user:', err.response);
		}
	}
 
  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL || "/prepair"}>
    <BrowserRouter>
      <div className="App">
        <Nav  setUserState={setUserState}/>

        <Routes>
          <Route
            exact
            path="/"
            className="App-link"
            element={<Container />}
          ></Route>

          <Route
            exact
            path="/login"
            className="App-link"
            element={
              <Login setUserState={setUserState} authenticate={authenticate}/>
            }
          ></Route>

          <Route
            exact
            path="/signup"
            className="App-link"
            element={<Signup authenticate={authenticate} user={userState} />}
          ></Route>

          <Route element={<ProtectedRoute isLoggedIn={userState} />}>

            
            <Route
              exact
              path="/newproject"
              className="App-link"
              element={<NewProject/>}
            ></Route>

            <Route
              exact
              path="/myprojects"
              className="App-link"
              element={<SavedProjects />}
            ></Route>

          </Route>

        

          <Route component={NoMatch} />
         
       
        </Routes>
		{/* {userState.email ? <Navigate to="/newproject" /> : <></>} */}
      </div>
    </BrowserRouter>
  );
}

export default App;
