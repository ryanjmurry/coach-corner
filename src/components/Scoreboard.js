import React from 'react';
import {Grid} from 'semantic-ui-react';

const ScoreBoard = (props) => {

  return (
    <div>
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
