import React, {useState, useEffect} from "react";
// import { Grid, Segment } from "semantic-ui-react";
import { Button, Modal, Container, Row, Col } from "react-bootstrap";
import Wrapper from "../components/Wrapper";
import chair from "../static/construction-icons/chair-main.svg";
import bookcase from "../static/construction-icons/bookcase-main.svg";
import table from "../static/construction-icons/table-main.svg";
import desk from "../static/construction-icons/desk-main.svg";
import dresser from "../static/construction-icons/dresser-main.svg";
import tile from "../static/construction-icons/tile-main.svg";
import wall from "../static/construction-icons/wall-main.svg";
import ladder from "../static/construction-icons/ladder-main.svg";
import "./style.css";
import Popup from '../components/Popup/index'
import wood from "../static/wood.png";

function NewProject() {
    const [show, setShow] = useState(false);
    useEffect(() => {
		setShow(false)
	   }, [])
	// const [showModal, setShowModal] = useState(false);
	// probably a for each here that refers to the seed data
	return (
		// <Wrapper>
		<Container fluid className="wrap">
			<Row className="iconRow">
				<Col>

					<Button variant="outline-light" 
					className="iconBtn"
					onClick={()=>setShow(true)}>
						<img src={chair} className="icon" />
						<p>Chair</p>
					</Button>
				</Col>
				
				<Col>
					<Button variant="outline-light" className="iconBtn"
					onClick={()=>setShow(true)}>
						<img src={bookcase} className="icon" />
						<p>Bookcase</p>
						
					</Button>
					<Popup show={show}/>
				</Col>
				<Col>
					<Button variant="outline-light" className="iconBtn">
						<img src={table} className="icon" alt="furniture-icon"/>
						<p className="special">Table</p>

					</Button>
				</Col>
				<Col>
					<Button variant="outline-light" className="iconBtn">
						<img src={desk} className="icon" alt="furniture-icon"/>
						<p>Desk</p>

					</Button>
				</Col>
			</Row>
			<Row className="subtitleRow">
				<h1 className="subtitle">Create a New Project</h1>
			</Row>
			<Row className="iconRow">

				<Col>
					<Button variant="outline-light" className="iconBtn">
						<img src={dresser} className="icon" alt="furniture-icon"/>
						<p>Dresser</p>
					</Button>
				</Col>
				<Col>
					<Button variant="outline-light" className="iconBtn">
						<img src={tile} className="icon" alt="furniture-icon"/>
						<p>Tile</p>

					</Button>
				</Col>
				<Col>
					<Button variant="outline-light" className="iconBtn">
						<img src={wall} className="icon" alt="furniture-icon"/>
						<p>Wall</p>

					</Button>
				</Col>
				<Col>
					<Button variant="outline-light" className="iconBtn">
						<img src={ladder} className="icon" alt="furniture-icon"/>
						<p>Ladder</p>

					</Button>
				</Col>
			</Row>
			<Popup show={show}/>
		</Container>
		// </Wrapper>
	);
}

export default NewProject;
