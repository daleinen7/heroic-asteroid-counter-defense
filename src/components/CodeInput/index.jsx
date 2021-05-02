import styled from 'styled-components';

export default function CodeInput() {
  const StyledForm = styled.form`
    input {
      margin-left: 0.5em;
      height: 1.05em;
      width: 100%;
      border-radius: 4px;
      color: green;
      /* font-family: PressStart2P-Regular; */
      resize: none;
      padding: 0.7em;
      font-size: 0.9em;
      line-height: 1.2em;
      &:focus {
        outline: none;
      }
    }
  `;
  return(
    <StyledForm>
      <input type="text"

      />
    </StyledForm>
  )
}