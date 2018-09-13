import React from 'react';
import PropTypes from 'prop-types'
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
      Active Players
      {props.players.map((player, index) =>
        <Player player={player} inTimeout={props.inTimeout} key={index} />
      )}
    </div>
  );
}

ActivePlayers.propTypes = {
  players: PropTypes.array.isRequired,
  inTimeout: PropTypes.bool.isRequired
}

export default ActivePlayers;
