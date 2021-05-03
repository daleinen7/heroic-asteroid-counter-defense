import {useEffect, useState} from 'react';
import Space from '../../components/Space';
import Station from '../../components/Station';

import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  height: 90vh;
`;

export default function Game(props) {
  
  // Game State: gameOver, playing, startNewGame
  const [gameState, setGameState] = useState('startNewGame');
  const [astroCount, setAstroCount] = useState(0);
  const [focused, setFocused] = useState(0);
  const [firing, setFiring] = useState(false);
  const [asteroids, setAsteroids] = useState([]);
  const [shields, setShields] = useState(0.9);

  function newGame() {
    setGameState('playing')
    setAstroCount(0);
    setFocused(0);
    setAsteroids([]);
    setShields(0.9);
  }

  // Animate Asteroid

  // Create Asteroid

  // Play Sound

  // Fire Laser

  // Handle Focus

  // Add Event Listener Keydown

  // Handle Clear Interval and Animation

  return(
    <StyledDiv>
      <Station/>
      <Space 
        gameState={gameState}
        newGame={newGame}
      />
    </StyledDiv>
  )
}