import React from 'react';
import themeSong from '../assets/theme.mp3';

// Styles
const title = {
  fontFamily: 'Graduate',
  textAlign: 'center',
  fontSize: '4em'
}
// End Styles

const song = new Audio(themeSong);

const toggleMusic = () => {
  if(song.paused) {
    song.play();
  } else {
    song.pause();
  }
}

const Menu = (props) => {
  return (
    <div>
      <h1 style={title}>Coach's Corner!</h1>
      <button onClick={toggleMusic}>Start Game</button>
    </div>
  );
}

export default Menu
