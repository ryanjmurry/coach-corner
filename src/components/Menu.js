import React from 'react';
import themeSong from '../assets/theme.mp3';
import { Icon, Form, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

// Styles
const title = {
  fontFamily: 'Graduate',
  textAlign: 'center',
  fontSize: '4em'
}
// End Styles

const Menu = (props) => {
  const song = new Audio(themeSong);

  const toggleMusic = () => {
    if(song.paused) {
      song.play();
    } else {
      song.pause();
    }
  }

  const handleOnePlayerClick = () => {
    props.onOnePlayerClick();
  }

  const handleTwoPlayerClick = () => {
    props.onTwoPlayerClick();
  }

  const handleNewGameSubmission = (e) => {
      let coach2Name = e.target.coach2 === undefined ? '' : e.target.coach2.value;
      let newGame = {
      // if(e.target.coach2.value !== undefined) return coach2 = e.target.coach2.value;
      coach1: e.target.coach1.value,
      coach2: coach2Name
    }
    console.log(newGame)
  }

  let currentView = null;
  if (props.twoPlayerGame) {
    currentView = <Form.Input label='Coach 2 Name' name='coach2' placeholder='Coach 2 Name' required/>
  } else {
    currentView = null;
  }

  return (
    <div>
      <h1 style={title}>Coach's Corner!</h1>
      <Icon name='volume up' onClick={toggleMusic} />
      <Button onClick={handleOnePlayerClick}>One Player Game</Button>
      <Button onClick={handleTwoPlayerClick}>Two Player Game</Button>
        <Form onSubmit={handleNewGameSubmission}>
          <Form.Group widths='equal'>
            <Form.Input label='Coach 1 Name' name='coach1' placeholder='Coach 1 Name' required/>
            {currentView}
          </Form.Group>
          <Form.Button>Start Game</Form.Button>
        </Form>
    </div>
  );
}

Menu.propTypes = {
  twoPlayerGame: PropTypes.bool.isRequired,
  onTwoPlayerClick: PropTypes.func.isRequired,
  onOnePlayerClick: PropTypes.func.isRequired
}

export default Menu
