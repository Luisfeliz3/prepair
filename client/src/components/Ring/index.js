import React, { useState } from "react";
import {Button} from 'react-bootstrap'
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// import { CustomDialog, useDialog } from "react-st-modal";
// import CustomDialogContent from "../CustomDialogContent/index";
import Popup from "../Popup/index";

function Ring (){
  const [showModal, setShowModal] = useState(false);
  const percentage = 66;



  return (
    <div id="ring" className="float-left m-0">
      <div
        href=""
        id="clickRing"
        onClick={() => {
          setShowModal(true);
          console.log("clicked");
        }}
      >
      
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>

       {/* <Popup show={showModal}/> */}
        
 
    </div>
  );
};

export default Ring;
