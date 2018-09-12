import React, { Component } from 'react';
import Menu from './Menu';
import themeSong from '../assets/theme.mp3'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.pauseMusic = this.pauseMusic.bind(this);
    this.song = new Audio(themeSong);
  }


  pauseMusic() {
     this.song.pause();
  }

  render() {
    // this.song.play();
    return (
      <div>
        <Menu />
        <button onClick={this.pauseMusic}>Start Game</button>
      </div>
    );
  }
}



export default App;
