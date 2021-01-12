import React, { useState, useEffect } from "react";
import { Button, Modal, Dropdown,InputGroup, FormControl, DropdownButton, Row, Col } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import wood from "../../static/wood.png";
import "./styles.css";
const Popup = (props) => {
  console.log(props);
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);
  const percentage = 66;

  return (
    <div id="modal">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Table Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={6} md={10} className="row justify-content-around">
              <CircularProgressbar value={percentage} text={`${percentage}%`} />
              <div id="calculate-button">Click "Calculate" </div>
            </Col>

            <section>
              <form className="col-4">
                <div className="form-group">
                  <button className="btn btn-primary mt-2" type="submit">
                    Save
                  </button>
                </div>
                <div>
                  Enter Width :
                  <DropdownButton id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
                </div>

                <div>
                  Enter Height :
                  <DropdownButton id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
                </div>
                <div>
                  Enter Depth :
                  <DropdownButton id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
                </div>
                <img
                  id="image"
                  src={wood}
                  alt="Wood"
                  height="350"
                  width="400"
                  className="d flex"
                ></img>
              </form>
              <div className="form-check">
                <label>
                <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
    </InputGroup.Prepend>
  </InputGroup>
                  Option 1
                </label>
              </div>

              <div className="form-check">
                <label>
                <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
    </InputGroup.Prepend>
  </InputGroup>
                  Option 2
                </label>
              </div>

              <div className="form-check">
                <label>
                <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
    </InputGroup.Prepend>
  </InputGroup>
                  Option 3
                </label>
              </div>
            </section>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Popup;
