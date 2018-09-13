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
  return (
    <div style={playerFieldContainer}>
      PlayerField
      <CoachPanel />
      <ActivePlayers activePlayers={props.activePlayers}/>
      <BenchPlayers benchPlayers={props.benchPlayers}/>
    </div>
  );
}

PlayerField.propTypes = {
  activePlayers: PropTypes.array.isRequired,
  benchPlayers: PropTypes.array.isRequired
}

export default PlayerField;
