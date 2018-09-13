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
      <ActivePlayers players={activePlayers} />
      <BenchPlayers players={benchPlayers} />
    </div>
  );
}

PlayerField.propTypes = {
  players: PropTypes.array.isRequired,
}

export default PlayerField;
