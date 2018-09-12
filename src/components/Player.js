import React from 'react';

//styles start
const playerContainer = {
  border: '1px solid black',
  padding: '15px',
  borderRadius: '15px',
  backgroundColor: 'green'
}
//styles end

const Player = (props) => {
  return (
    <div style={playerContainer}>
      <p>Player Works</p>
    </div>
  );
}

export default Player;
