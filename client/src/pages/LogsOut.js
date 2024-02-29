import React from "react";
import {Outlet, Navigate } from "react-router-dom";

const LogsOut = ({authenticated}) => {

  
    return <div>
        <h1>Logginout </h1>
                 {!authenticated ? <Navigate to="/login" />:<Outlet/>  }
               
           </div>
   }
 

export default LogsOut