import React from 'react';
import Player from './Player';

//styles start
const benchPlayersContainer = {
  border: '1px solid black',
  padding: '15px',
  borderRadius: '15px',
  backgroundColor: 'yellow'
}
//styles end

const BenchPlayers = (props) => {
  return (
    <div style={benchPlayersContainer}>
      Bench Players
      <Player />
      <Player />
      <Player />
      <Player />
    </div>
  );
}

export default BenchPlayers;
