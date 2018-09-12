import React from 'react'
import PropTypes from 'prop-types'

//styles start
const activePlayersContainer = {
  border: '1px solid black',
  padding: '15px',
  borderRadius: '15px'
}
//styles end

const ActivePlayers = (props) => {
  return (
    <div style={activePlayersContainer}>
      <p>Active Players Works</p>
    </div>
  )
}

export default ActivePlayers
