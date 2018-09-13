import React from 'react';
import PropTypes from 'prop-types';
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
      {props.players.map((player, index) =>
        <Player
          player={player}
          inTimeout={props.inTimeout}
          key={index} />
      )}
    </div>
  );
}

BenchPlayers.propTypes = {
  players: PropTypes.array.isRequired,
  inTimeout: PropTypes.bool.isRequired
}

export default BenchPlayers;
