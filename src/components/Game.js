import React from 'react';
import Scoreboard from './Scoreboard';
import PlayerFieldContainer from './PlayerFieldContainer'

//styles start
const gameContainer = {
  border: '1px solid black',
  padding: '15px',
  borderRadius: '15px'
}
//styles end

const Game = (props) => {
  return (
    <div style={gameContainer}>
      <Scoreboard />
      <PlayerFieldContainer />
    </div>
  );
}

export default Game;
