import React from 'react';

//styles start
const coachPanelContainer = {
  border: '1px solid black',
  padding: '15px',
  borderRadius: '15px',
  backgroundColor: 'teal'
}
//styles end

const CoachPanel = (props) => {
  return (
    <div style={coachPanelContainer}>
      <p>Coach Panel Works</p>
    </div>
  );
}

export default CoachPanel;
