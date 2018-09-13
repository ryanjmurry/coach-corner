import React from 'react';
import PropTypes from 'prop-types';

//styles start
const playerContainer = {
  border: '1px solid black',
  padding: '15px',
  borderRadius: '15px',
  backgroundColor: 'green'
}
//styles end

const Player = (props) => {
  console.log(props.player.name)
  return (
    <div style={playerContainer}>
      <p>{props.player.name}, O: {props.player.offense}, D: {props.player.defense}, E:{props.player.endurance}, Pts:{props.player.points}, Stam:{props.player.stamina}</p>
    </div>
  );
}

Player.propTypes = {
  player: PropTypes.object.isRequired
}

export default Player;
