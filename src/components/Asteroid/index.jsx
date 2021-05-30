import Question from '../Question';
import styled from 'styled-components';

const StyledDiv = styled.div`
  position: absolute;
  width: 15%;
  z-index: 5;
  float: right;
  background-image: url('./blob.svg');
  background-repeat: no-repeat;
  padding: 40px;
`;

export default function Asteroid(props) {
  return(
    <StyledDiv>
      <Question
        question={props.question}
      />
    </StyledDiv>
  )
}