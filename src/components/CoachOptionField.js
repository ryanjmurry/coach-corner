import React from 'react';

//styles start
const coachOptionFieldContainer = {
  border: '1px solid black',
  padding: '15px',
  borderRadius: '15px',
  backgroundColor: 'goldenrod'
}
//styles end

const CoachOptionField = (props) => {
  return (
    <div style={coachOptionFieldContainer}>
      <p>Coach Option Field Works!</p>
    </div>
  );
}

export default CoachOptionField;
