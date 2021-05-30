import Asteroid from '../Asteroid';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 220px;
  width: 100%;
  position: relative;
`;

export default function Lane(props) {
  
  return(
    <StyledDiv>
      {props.asteroids.map(asteroid => {
        return <Asteroid
          question={asteroid.question}
          margin={asteroid.margin}
          progress={asteroid.progress}
          astroKey={asteroid.key}
          key={asteroid.key}
        />
      })}
    </StyledDiv>
  )
}