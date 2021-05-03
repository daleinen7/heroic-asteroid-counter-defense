import {useState} from 'react';
import Space from '../../components/Space';
import Station from '../../components/Station';

import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  height: 90vh;
`;

export default function Game(props) {
  
  // Game State: gameOver, playing, startNewGame
  const [gameState, setGameState] = useState("startNewGame");

  return(
    <StyledDiv>
      <Station/>
      <Space gameState={gameState}/>
    </StyledDiv>
  )
}