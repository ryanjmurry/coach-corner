import React, { Component } from 'react';
import Menu from './Menu';
import Game from './Game';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      twoPlayerGame: false,
      menuVisible: true,
      coach1: '',
      coach2: ''
    };
    this.handleTwoPlayerClick = this.handleTwoPlayerClick.bind(this);
    this.handleOnePlayerClick = this.handleOnePlayerClick.bind(this);
    this.handleStartGameClick = this.handleStartGameClick.bind(this);
  }

  handleTwoPlayerClick() {
    this.setState({
      twoPlayerGame: true
    })
  }

  handleOnePlayerClick() {
    this.setState({
      twoPlayerGame: false
    })
  }

  handleStartGameClick(coach1Name, coach2Name) {
    this.setState({
      menuVisible: false,
      coach1: coach1Name,
      coach2: coach2Name
    })
  }


  render() {
    let currentView = null;
    if (this.state.menuVisible) {
      currentView = <Menu twoPlayerGame={this.state.twoPlayerGame}
                          onTwoPlayerClick={this.handleTwoPlayerClick}
                          onOnePlayerClick={this.handleOnePlayerClick}
                          onStartGameClick={this.handleStartGameClick}/>;
    } else {
      currentView = <Game />
    }
    return (
      <div className='app'>
        {currentView}
      </div>
    );
  }
}

export default App;
