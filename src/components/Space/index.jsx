import styled from 'styled-components';


export default function Space(props) {

  const StyledDiv = styled.div`
    width: 70%;
    background: none;
  `;

  const StatusScreen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -150px;
    background-color: rgba(122, 146, 180, 0.8);
    border-radius: 4px;
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
    </StyledDiv>
  )
}