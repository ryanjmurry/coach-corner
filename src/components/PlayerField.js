import React from 'react';
import PropTypes from 'prop-types';
import ActivePlayers from './ActivePlayers';
import BenchPlayers from './BenchPlayers';
import CoachPanel from './CoachPanel';

//styles start
const playerFieldContainer = {
  border: '1px solid black',
  padding: '15px',
  borderRadius: '15px',
  backgroundColor: 'goldenrod'
}
//styles end

const PlayerField = (props) => {

  let benchPlayers = [];
  let activePlayers = [];

  props.players.forEach((player) => {
    if(player.active) {
      activePlayers.push(player);
    } else {
      benchPlayers.push(player);
    }
  });

  return (
    <div style={playerFieldContainer}>
      PlayerField
      <CoachPanel />
      <ActivePlayers players={activePlayers} inTimeout={props.inTimeout} />
      <BenchPlayers players={benchPlayers} inTimeout={props.inTimeout} onSubPlayerIn={props.onSubPlayerIn}/>
    </div>
  );
}

PlayerField.propTypes = {
  players: PropTypes.array.isRequired,
  inTimeout: PropTypes.bool.isRequired,
  onSubPlayerIn: PropTypes.func.isRequired
}

export default PlayerField;
