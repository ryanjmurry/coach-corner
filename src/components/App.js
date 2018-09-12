import React, { Component } from 'react';
import Menu from './Menu';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      twoPlayerGame: false
    };
    this.handleTwoPlayerClick = this.handleTwoPlayerClick.bind(this);
    this.handleOnePlayerClick = this.handleOnePlayerClick.bind(this);
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


  render() {
    return (
      <div className='app'>
        <Menu twoPlayerGame={this.state.twoPlayerGame} onTwoPlayerClick={this.handleTwoPlayerClick} onOnePlayerClick={this.handleOnePlayerClick}/>
      </div>
    );
  }
}

export default App;
