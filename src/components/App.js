import React, { Component } from 'react';
import Menu from './Menu';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div className='app'>
        <Menu />
      </div>
    );
  }
}

export default App;