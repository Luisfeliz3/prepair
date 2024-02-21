

import React from 'react';
// import ReactDOM from "react-dom";
// import './index.css';
import App from './App';

// import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));


const render = () => {

  root.render(
    <React.StrictMode>
        <App/>,
    </React.StrictMode>,
  );
}
render();
// store.subscribe(render)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


