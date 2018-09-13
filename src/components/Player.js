import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

//styles start
const playerContainer = {
  border: '1px solid black',
  padding: '15px',
  borderRadius: '15px',
  backgroundColor: 'green'
}
//styles end



const Player = (props) => {
  const { name, offense, defense, endurance, points, stamina, active, id} = props.player;
  const inTimeout = props.inTimeout;

  const onSubPlayerIn = () => {
    props.onSubPlayerIn(id);
  }



  let currentButton = null;

  if(inTimeout && active) {
    currentButton = <Button size='mini'>Move To Bench</Button>
  } else if (inTimeout && !active) {
    currentButton = <Button onClick={onSubPlayerIn} size='mini'>Move To Active</Button>
  } else {
    currentButton = null;
  }

  return (
    <div style={playerContainer}>
      <p>{name}, O: {offense}, D: {defense}, E:{endurance}, Pts:{points}, Stam:{stamina}</p>
      {currentButton}
    </div>
  );
}

Player.propTypes = {
  player: PropTypes.object.isRequired,
  inTimeout: PropTypes.bool.isRequired
}

export default Player;
