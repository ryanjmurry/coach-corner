import React from 'react';

//styles start
const boxScoreContainer = {
  border: '1px solid black',
  padding: '15px',
  borderRadius: '15px',
  backgroundColor: 'grey'
}
//styles end

const BoxScore = (props) => {
  return (
    <div style={boxScoreContainer}>
      <p>Box Score Works</p>
    </div>
  );
}

export default BoxScore;
