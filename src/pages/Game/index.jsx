import {useEffect, useState} from 'react';
import Space from '../../components/Space';
import Station from '../../components/Station';
import * as questionAPI from '../../utilities/questionAPI';

import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  height: 90vh;
`;

export default function Game(props) {
  
  // Game State: gameOver, playing, startNewGame
  const [gameState, setGameState] = useState('startNewGame');
  const [focused, setFocused] = useState(0);
  const [firing, setFiring] = useState(false);
  const [asteroids, setAsteroids] = useState([]);
  const [shields, setShields] = useState(0.9);

  function newGame() {
    setGameState('playing')
    setFocused(0);
    setAsteroids([]);
    setShields(0.9);
  }

  // Set Intervals for animation and Astro creation
  useEffect(()=> {
    const startCreateAsteroids = setInterval(()=> {
      createAsteroid();
    }, 4000);
    return ()=> clearInterval(startCreateAsteroids);
  })

  useEffect(()=> {
    const startAnimations = setInterval(()=> {
      console.log("animat a astrod");
    }, 200);
    return ()=> clearInterval(startAnimations);
  })
  
  // Create Asteroid
  async function createAsteroid() {
    const question = await questionAPI.getRandom();

    const margin = Math.floor(Math.random() * 40);
    const asteroid = {
      progress: -20,
      lane: Math.floor(Math.random() * 3),
      question: question.question,
      answer: question.answer,
      score: question.score,
      margin: margin
    }
  
    setAsteroids([...asteroids, asteroid]);
  }

  // Animate Asteroid
  // function animateAsteroid() {
  //   if (gameState = 'playing') {
  //     asteroids.forEach( asteroid => {

  //     })
  //   }
  // }

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