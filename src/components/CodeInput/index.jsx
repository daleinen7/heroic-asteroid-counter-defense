import styled from 'styled-components';

const StyledForm = styled.form`
  input {
    height: 1.05em;
    width: 100%;
    border-radius: 4px;
    color: green;
    /* font-family: PressStart2P-Regular; */
    /* resize: none; */
    background-color: #666871;
    padding: 0.7em;
    font-size: 0.9em;
    line-height: 1.2em;
  }
`;

export default function CodeInput() {
  return(
    <StyledForm>
      <input type="text"
      
      />
    </StyledForm>
  )
}