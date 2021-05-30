import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color: rgba(93, 133, 118, 0.338);
    border: 1px solid rgb(160, 160, 160, 0.2);
    margin-left: -2rem;
    text-align: center;
    border-radius: 3px;
    color: white;
    font-family: 'Overpass Mono', monospace;
    padding: 0.3em;
`;

export default function Question(props) {
  return(
    <StyledDiv>
      {props.question}
    </StyledDiv>
  )
}