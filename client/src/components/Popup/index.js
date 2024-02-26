import React, { useState, setState, useEffect } from "react";
import {
  Button,
  Modal,
  Dropdown,
  InputGroup,
  FormControl,
  Container,
  Form,
  DropdownButton,
  Row,
  Col,
} from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import twentyfive from "../../static/twentyfive.png";
import fifty from "../../static/fifty.png";
import seventyfive from "../../static/seventyfive.png";
import hundred from "../../static/hundred.png";
import expl from "../../static/construction-icons/chair-ex.svg";
import ContextProvider from "../../utils/ContextProvider";
import "./styles.css";
import API from "../../utils/API";



const  Popup = (props) => {

  const [show, setShow] = useState(false);
  // const [dims, setDims] = useState({
  //   dimensionWidth: "",
  //   dimensionDepth: "",
  //   dimensionHeight: "",
  // });
  // const [matState, setMatState] = useState({});
  
  useEffect(() => {
    setShow(props.show);
    // API.getDims()
    //   .then((res) => setDims(res))
    //   .catch((err) => console.log(err));
  }, [props.show]);

  
 
const {projectName,description, userParams, index } = props.project

// console.log(props)
  return (
    <Modal  
    show={show}
    backdrop={true}
    keyboard={true}
    size="xl"
    dialogClassName="modal-90w"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          A simple { projectName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={8}>
             
            <Form>
                <div className="full-form">
				            <p>Description: { description}</p>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Width (in):</Form.Label>
                    <Form.Control as="select" >
                    {userParams[0].options.map((i,index) => (
                        <option key={index}>{i}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Depth (in):</Form.Label>
                    <Form.Control as="select" >
                      {userParams[1].options.map((i,index) => (
                        <option  key={index}>{i}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>

                   <Form.Group controlId="exampleForm.ControlSelect3">
                    <Form.Label>Height (in):</Form.Label>
                    <Form.Control as="select" >
                    {userParams[2].options.map((i,index) => (
                        <option  key={index}>{i}</option>
                      ))}
                    </Form.Control>
                  </Form.Group> 
                  <Button id="calculate-button" >
                    Calculate
                  </Button>
			
                </div>
              </Form>

              <Form className="form-group2">
			          {/* <h4>
                  Total Cost: $
                  {(matState.rodQty
                    ? matState.rodQty * props.pricing.data[0].price
                    : null) +
                    (matState.twoByFourQty
                      ? matState.twoByFourQty * props.pricing.data[1].price
                      : null) +
                    (matState.plywoodQty
                      ? matState.plywoodQty * props.pricing.data[2].price
                      : null) +
                    (matState.oneByThreeQty
                      ? matState.oneByThreeQty * props.pricing.data[3].price
                      : null) +
                    (matState.plywoodThickQty
                      ? matState.plywoodThickQty * props.pricing.data[4].price
                      : null) +
                    (matState.hardwareSlideCount
                      ? matState.hardwareSlideCount *
                        props.pricing.data[5].price
                      : null) +
                    (matState.closetRodCount
                      ? matState.closetRodCount * props.pricing.data[6].price
                      : null) +
                    (matState.cementBoardCount
                      ? matState.cementBoardCount * props.pricing.data[7].price
                      : null) +
                    (matState.tileQty
                      ? matState.tileQty * props.pricing.data[8].price
                      : null) +
                    (matState.groutQty
                      ? matState.groutQty * props.pricing.data[9].price
                      : null) +
                    (matState.gypsumBoardQty
                      ? matState.gypsumBoardQty * props.pricing.data[10].price
                      : null) +
                    (matState.thinSet
                      ? matState.thinSet * props.pricing.data[11].price
                      : null)}
                </h4>  */}
                   {["checkbox"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        label="Calculated materials."
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        label="Purchased materials and prepared tools."
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        label="Measured and cut all pieces and starting assembly."
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                       
                        label="Completed build"
                        type={type}
                        id={`inline-${type}-3`}
                      />
				
                    </div>
					
                  ))}  

					<Button className="btn btn-outline-light mt-2" type="submit">
                    Save Progress
                  </Button>
                </Form>




            </Col >
            <Col xs={6} md={4} className="progress-image">
            <div>
                  <img
				  	className="exploded-diagram inline-flex"
                    src={props.project.imgEx}
                    alt="exploded-diagram"
                  />
    		 	</div>
                <div>
                  <img
				  	className="overlay"
                    id="circle-progress-bar"
                    src={twentyfive}
                    alt="progress"
                  />
                </div>
            </Col>
          </Row>

          <Row>
            {/* <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>s
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col> */}
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default Popup;
