import React from 'react';
import Player from './Player';

//styles start
const activePlayersContainer = {
  border: '1px solid black',
  padding: '15px',
  borderRadius: '15px',
  backgroundColor: 'violet'
}
//styles end

const ActivePlayers = (props) => {
  return (
    <div style={activePlayersContainer}>
      Active Player
      <Player />
      <Player />
      <Player />
      <Player />
      <Player />
    </div>
  );
}

export default ActivePlayers;
