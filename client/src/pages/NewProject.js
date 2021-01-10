import React from "react";
// import { Grid, Segment } from "semantic-ui-react";
import { Button, Container, Row, Col } from "react-bootstrap";
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

function NewProject() {
	// probably a for each here that refers to the seed data
	return (
		// <Wrapper>
		<Container fluid className="wrap">
			<Row className="iconRow">
				<Col>
					<Button variant="outline-light" className="iconBtn">
						<img src={chair} className="icon" />
						<p>Chair</p>
					</Button>
				</Col>
				<Col>
					<Button variant="outline-light" className="iconBtn">
						<img src={bookcase} className="icon" />
						<p>Bookcase</p>

					</Button>
				</Col>
				<Col>
					<Button variant="outline-light" className="iconBtn">
						<img src={table} className="icon" />
						<p className="special">Table</p>

					</Button>
				</Col>
				<Col>
					<Button variant="outline-light" className="iconBtn">
						<img src={desk} className="icon" />
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
						<img src={dresser} className="icon" />
						<p>Dresser</p>
					</Button>
				</Col>
				<Col>
					<Button variant="outline-light" className="iconBtn">
						<img src={tile} className="icon" />
						<p>Tile</p>

					</Button>
				</Col>
				<Col>
					<Button variant="outline-light" className="iconBtn">
						<img src={wall} className="icon" />
						<p>Wall</p>

					</Button>
				</Col>
				<Col>
					<Button variant="outline-light" className="iconBtn">
						<img src={ladder} className="icon" />
						<p>Ladder</p>

					</Button>
				</Col>
			</Row>
		</Container>
		// </Wrapper>
	);
}

export default NewProject;
