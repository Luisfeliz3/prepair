import React from "react";
import { Route, Link } from "react-router-dom";

const ProtectedRoute = ({ children }) => (
   <Route >
      {children.props._id
       ? children
       : <Link to='/login' />}
   </Route>
)
 export default ProtectedRoute;