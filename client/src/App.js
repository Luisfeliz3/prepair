import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
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
  const [userState, setUserState] = useState(false);

  document.title = "Prepair";

  useEffect(() => {
    // auth user on first render
    authenticate();
    // loadProjects();
  }, []);

  //user authentication
  async function authenticate() {
    try {
      const { data } = await userAPI.authenticateUser();
      console.log("user:", data);

      setUserState(data);
      
    } catch (err) {
      return console.log("registered user:", err.response);
    }
  }

  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL || "/prepair"}>
    <BrowserRouter>
      <div className="App">
        <Nav />

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
              <Login userState={userState} setUserState={setUserState} />
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
              element={<NewProject {...userState} />}
            ></Route>

            <Route
              exact
              path="/myprojects"
              className="App-link"
              element={<SavedProjects {...userState} />}
            ></Route>
      			{userState.email ? <Navigate to="/newproject" /> : <></>}

          </Route>

          <Route component={NoMatch} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
