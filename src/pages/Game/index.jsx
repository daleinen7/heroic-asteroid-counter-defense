import {useState} from 'react';
import Space from '../../components/Space';
import Station from '../../components/Station';

import styled from 'styled-components';

export default function Game(props) {
  
  const StyledDiv = styled.div`
    display: flex;
    height: 90vh;
  `;

  // Game State: gameOver, playing, startNewGame
  const [gameState, setGameState] = useState("startNewGame");

  return(
    <StyledDiv>
      <Station/>
      <Space gameState={gameState}/>
    </StyledDiv>
  )
}