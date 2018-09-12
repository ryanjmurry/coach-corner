import React from 'react';
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
      <ActivePlayers />
      <BenchPlayers />
    </div>
  );
}

export default PlayerField;
