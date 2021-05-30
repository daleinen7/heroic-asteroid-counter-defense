import styled from 'styled-components';
import Lane from '../Lane';

const StyledDiv = styled.div`
  width: 70%;
  /* display: flex;
  flex-direction: column;
  height: 90vh;
  overflow: hidden;
  justify-content: space-evenly;
  position: relative; */
`;

const StatusScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;
  padding: 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -150px;
  background-color: rgba(122, 146, 180, 0.8);
  border-radius: 4px;
  box-shadow: 4px 4px 10px #34353a;
  h2 {
    font-size: 2rem;
    margin-top: 0;
  }
  button {
    background: rgba(94, 179, 244, 0.9);
    width: 80%;
    font-size: 1.4rem;
    color: white;
    font-weight: bold;
    padding: 17px;
    text-align: center;
    border-radius: 4px;
  }
`;

export default function Space(props) {
  const lane0 = props.asteroids.filter(a => a.lane === 0);
  const lane1 = props.asteroids.filter(a => a.lane === 1);
  const lane2 = props.asteroids.filter(a => a.lane === 2);
  return(
    <StyledDiv>
      {(props.gameState==="startNewGame")? 
        <StatusScreen>
          <h2>Ready to Defend the Station?</h2>
          <button onClick={props.newGame}>Start New Game</button>
        </StatusScreen>
      :
      (props.gameState==="gameOver" && 
        <StatusScreen>
          <h2>Game Over</h2>
          <button onClick={props.newGame}>Start New Game</button>
        </StatusScreen>
      )}

      <Lane
        asteroids={lane0} 
        focused={props.focused}
        key={0}
      />
      <Lane
        asteroids={lane1} 
        focused={props.focused}
        key={1}
      />
      <Lane
        asteroids={lane2} 
        focused={props.focused}
        key={2}
      />

    </StyledDiv>
  )
}