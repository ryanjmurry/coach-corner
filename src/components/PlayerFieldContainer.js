import React from 'react';
import PropTypes from 'prop-types';
import PlayerField from './PlayerField';
import CoachOptionField from './CoachOptionField';
import {Grid} from 'semantic-ui-react';

//styles start
const playerFieldContainerBox = {
  border: '1px solid black',
  padding: '15px',
  borderRadius: '15px',
  backgroundColor: 'lightpink'
}
//styles end

const PlayerFieldContainer = (props) => {
  console.log(props.homeTeam);
  console.log(props.awayTeam);
  return (
    <div style={playerFieldContainerBox}>
      <Grid columns={2} widths='equal'>
        <Grid.Column>
          <PlayerField activePlayers={props.homeTeam.active} benchPlayers={props.homeTeam.bench}/>
          <CoachOptionField />
        </Grid.Column>

        <Grid.Column>
          <PlayerField activePlayers={props.awayTeam.active} benchPlayers={props.awayTeam.bench}/>
          <CoachOptionField />
        </Grid.Column>
      </Grid>
    </div>
  );
}

PlayerFieldContainer.propTypes = {
  homeTeam: PropTypes.object.isRequired,
  awayTeam: PropTypes.object.isRequired
}

export default PlayerFieldContainer;
