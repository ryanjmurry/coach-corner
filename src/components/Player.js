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
  const { name, offense, defense, endurance, points, stamina} = props.player;
  console.log(name, offense, defense, endurance, points, stamina)
  return (
    <div style={playerContainer}>
      <p>{name}, O: {offense}, D: {defense}, E:{endurance}, Pts:{points}, Stam:{stamina}</p>
    </div>
  );
}

Player.propTypes = {
  player: PropTypes.object.isRequired
}

export default Player;
