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
  const [score, setScore] = useState(0);

  function newGame() {
    setGameState('playing')
    setFocused(0);
    setAsteroids([]);
    createAsteroid()
    setShields(0.9);
  }

  function gameOver() {
    setGameState('gameOver');
    //if (user.highScore < score) {user.highScore = score}
  }

  // Set Intervals for animation and Astro creation
  useEffect(()=> {
    const startCreateAsteroids = setInterval(()=> {
      createAsteroid();
    }, 4000);
    return ()=> clearInterval(startCreateAsteroids);
  }, [])

  useEffect(()=> {
    const startAnimations = setInterval(()=> {
      animateAsteroids()
    }, 200);
    return ()=> clearInterval(startAnimations);
  }, [])
  
  // Create Asteroid
  async function createAsteroid() {
    if (gameState === 'playing') {
      console.log("createAsteroid");
      const newAsteroids = asteroids;
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
      setAsteroids([...newAsteroids, asteroid]);
    }
  }

  // Animate Asteroid
  function animateAsteroids() {
    if (gameState === 'playing' && asteroids.length > 0) {
      console.log("movi");
      const newAsteroids = asteroids;
      const nextAsteroids = newAsteroids.map( asteroid => {
        // if asteroid collided with station this cycle
        if (asteroid.progress > 76) {
          // if there were no shields left and it's game over
          if (shields <= 0) {
            gameOver();
          } else {
            // otherwise adjust shields
            const newShields = shields;
            setShields((newShields -= 0.3).toFixed(2))
          }
          // remove asteroid by not returning it in the map
          //setAsteroids(newAsteroids.splice(idx, 1));
        } else {
          // otherwise move asteroid forward
          asteroid.progress = asteroid.progress + 0.10; 
          return asteroid;
        }
      })
      setAsteroids(nextAsteroids);
    }
  }

  // Play Sound

  // Fire Laser

  // Handle Focus

  // Add Event Listener Keydown

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