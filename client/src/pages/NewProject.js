import { Grid, Segment } from "semantic-ui-react";
import React from "react";

function NewProject() {
	return (
		<Grid columns="equal">
			<Grid.Row>
				<Grid.Column>
					<Segment>1</Segment>
				</Grid.Column>
				<Grid.Column>
					<Segment>2</Segment>
				</Grid.Column>
				<Grid.Column>
					<Segment>3</Segment>
				</Grid.Column>
				<Grid.Column>
					<Segment>4</Segment>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
}

export default NewProject;
