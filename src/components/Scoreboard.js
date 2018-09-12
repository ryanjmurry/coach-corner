import React from 'react';
import {Grid} from 'semantic-ui-react';

//styles start
const scoreboardContainer = {
  border: '1px solid black',
  borderRadius: '15px',
  padding: "15px"
}
//styles end
const ScoreBoard = (props) => {
  return (
    <div style={scoreboardContainer}>
      <Grid textAlign='center' columns={5} widths='equal'>
        <Grid.Row>
          <Grid.Column>
            <p>Home</p>
          </Grid.Column>

          <Grid.Column>
            <p>Timeouts</p>
          </Grid.Column>

          <Grid.Column>
            <p>Quarter</p>
          </Grid.Column>

          <Grid.Column>
            <p>Timeouts</p>
          </Grid.Column>

          <Grid.Column>
            <p>Away</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <p>Points</p>
          </Grid.Column>

          <Grid.Column>
            <p>Timeouts Remaining</p>
          </Grid.Column>

          <Grid.Column>
            <p>Time Remaining</p>
          </Grid.Column>

          <Grid.Column>
            <p>Timeouts Remaining</p>
          </Grid.Column>

          <Grid.Column>
            <p>Points</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default ScoreBoard;
