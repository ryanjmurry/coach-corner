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
  return (
    <div style={playerFieldContainerBox}>
      PlayerFieldContainer
      <Grid columns={2} widths='equal'>
        <Grid.Column>
          <PlayerField players={props.homeTeam.players} inTimeout={props.inTimeout} onSubPlayer={props.onSubPlayer}/>
          <CoachOptionField />
        </Grid.Column>

        <Grid.Column>
          <PlayerField players={props.awayTeam.players} inTimeout={props.inTimeout} onSubPlayer={props.onSubPlayer}/>
          <CoachOptionField />
        </Grid.Column>
      </Grid>
    </div>
  );
}

PlayerFieldContainer.propTypes = {
  homeTeam: PropTypes.object.isRequired,
  awayTeam: PropTypes.object.isRequired,
  inTimeout: PropTypes.bool.isRequired
}

export default PlayerFieldContainer;
