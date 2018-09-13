import React from 'react';
import {Grid} from 'semantic-ui-react';

//styles start
const scoreboardContainer = {
  border: '1px solid black',
  borderRadius: '15px',
  padding: "15px",
  backgroundColor: 'lightgreen'
}
//styles end
const ScoreBoard = (props) => {
const {timeRemaining, quarter, homePoints, awayPoints} = props.gameInfo;

  return (
    <div style={scoreboardContainer}>
      <Grid textAlign='center' columns={3} widths='equal'>
        <Grid.Row>
          <Grid.Column>
            <p>Home</p>
          </Grid.Column>

          <Grid.Column>
            <p>Q: {quarter}</p>
          </Grid.Column>

          <Grid.Column>
            <p>Away</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <p>{homePoints}</p>
          </Grid.Column>

          <Grid.Column>
            <p>{timeRemaining}</p>
          </Grid.Column>

          <Grid.Column>
            <p>{awayPoints}</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default ScoreBoard;
