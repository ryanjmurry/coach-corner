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
      {props.players.map((player) =>
        <Player
          player={player}
          inTimeout={props.inTimeout}
          onSubPlayer={props.onSubPlayer}
          key={player.id} />
      )}
    </div>
  );
}

ActivePlayers.propTypes = {
  players: PropTypes.array.isRequired,
  inTimeout: PropTypes.bool.isRequired,
  onSubPlayer: PropTypes.func
}

export default ActivePlayers;
