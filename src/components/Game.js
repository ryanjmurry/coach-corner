import React from 'react';
import Scoreboard from './Scoreboard';
import PlayerFieldContainer from './PlayerFieldContainer';
import BoxScore from './BoxScore';

//styles start
const gameContainer = {
  border: '1px solid black',
  padding: '15px',
  borderRadius: '15px',
  backgroundColor: 'lightblue'
}
//styles end

const Game = (props) => {
  return (
    <div style={gameContainer}>
      <Scoreboard />
      <PlayerFieldContainer />
      <BoxScore />
    </div>
  );
}

export default Game;
