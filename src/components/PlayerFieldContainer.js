import React from 'react';
import PlayerField from './PlayerField';
import {Grid} from 'semantic-ui-react';

//styles start
const playerFieldContainerBox = {
  border: '1px solid black',
  padding: '15px',
  borderRadius: '15px'
}
//styles end

const PlayerFieldContainer = (props) => {
  return (
    <div style={playerFieldContainerBox}>
      <Grid columns={2} widths='equal'>
        <Grid.Column>
          <PlayerField />
        </Grid.Column>

        <Grid.Column>
          <PlayerField />
        </Grid.Column>
      </Grid>

    </div>

  )
}

export default PlayerFieldContainer;
