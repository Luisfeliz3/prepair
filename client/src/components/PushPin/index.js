import React from "react";
import { Col, Row } from "../Grid";
function PushPin(props) {
  console.log(props);
  console.log("~~~~~");
  return (
    <Row>
    <Col size="">
    <div className="avatar-med m-4" onClick={e => console.log("Clicked")}>
      <img
        className="avatar-img rounded-circle"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTrbx1lkjm3dPCtewBZITNkKDwzq5C0e61IQ&usqp=CAU"
      />
<div className="p-title">{props.projects.body}</div>
    </div>
  </Col>
</Row>
  );
}

export default PushPin;