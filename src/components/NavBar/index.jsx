import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledNav = styled.nav`
  
`;

export default function NavBar() {
  return(
    <StyledNav>
      <Link to='auth'>Login</Link>
      <Link to='select'>Select Game</Link>
    </StyledNav>
  )
}