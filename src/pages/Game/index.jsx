import Space from '../../components/Space';
import Station from '../../components/Station';

import styled from 'styled-components';

export default function Game() {
  const StyledDiv = styled.div`
    display: flex;
    height: 90vh;
  `;

  return(
    <StyledDiv>
      <Station/>
      <Space/>
    </StyledDiv>
  )
}