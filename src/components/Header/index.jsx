import styled from 'styled-components';
import {Link} from 'react-router-dom';
import * as userService from '../../utilities/users-service';

const Title = styled.h1`
  /* font-family: 'Overpass Mono', monospace; */
  color: rgb(31, 176, 193);
  text-shadow: 1px 1px rgb(36, 114, 145),
              2px 2px rgb(240, 128, 128),
              3px 3px rgba(240, 128, 128, 0.88),
              4px 4px rgba(240, 128, 128, 0.78),
              5px 5px rgba(240, 128, 128, 0.85),
              6px 6px rgba(240, 128, 128, 0.73),
              7px 7px rgba(240, 128, 128, 0.5),
              8px 8px rgba(240, 128, 128, 0.4),
              9px 9px rgba(240, 128, 128, 0.18),
            10px 10px rgba(240, 128, 128, 0.12),
            11px 11px rgba(240, 128, 128, 0.05),
            12px 12px rgba(240, 128, 128, 0.01);
  margin-left: 2vw;
`;

const StyledDiv = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background: rgba(9,31,53, 0.81);
  height: 10vh;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin: 0 0 20px;

  .nav-link {
    margin: 0 10px;
    color: rgb(31, 176, 193);
  }
`;

const ShieldDisplay = styled.label`
  padding: 7px 14px;
  background-color: rgb(48, 57, 60);
  border: 2px solid rgb(194, 197, 208);
  border-radius: 40px;
  font-family: 'Overpass Mono', monospace;
  font-weight: bold;
  text-align: center;
  font-size: 1.2em;
  color: rgba(94, 179, 244, 0.9);
`;

export default function Header(props) {

  function handleLogout() {
    userService.logout();
    props.setUser(null)
  }

  return(
    <StyledDiv>
      <Title>Heroic Asteroid Counter Defense</Title>
      <ShieldDisplay>
        SHIELDS: {(props.shields === 0.9) ? "100%" : Math.floor(props.shields * 100) + "%"}
      </ShieldDisplay>

      <StyledNav>
        {props.user ? 
        <>
          <Link className='nav-link' to='Profile'>User Games</Link>
          <Link className='nav-link' onClick={handleLogout} to=''>Logout</Link>
        </>
          :
          <Link className='nav-link'  to='auth'>Signup/Login</Link>
        }
        <Link className='nav-link' to='select'>Select Game</Link>
      </StyledNav>
    </StyledDiv>
  )
}