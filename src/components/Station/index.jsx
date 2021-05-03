
import CodeInput from '../CodeInput';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 30%;
  position: relative;
  display: flex;
  height: 90vh;
  justify-content: flex-end;
  background: rgb(101, 104, 113);
  z-index: -1;
`;

const StationSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  align-items: center;
`;

const StationFront = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: space-around;
  background-color: rgb(62, 63, 73);
  position: relative;
  z-index: -1;
`;

const LaserPort = styled.div`
  position:relative;
  transform:  skew(-24deg)
              rotate(-24deg);
  margin-top: -20px;
  width: 50%;
  height: 24px;
  left: 34%;
  background: rgb(25,26,33);
  background: linear-gradient(90deg, rgba(25,26,33,1) 0%, rgba(55,31,36,1) 100%);
`;

const LaserBeam = styled.div`
  margin-top: 260px;
  margin-left:60px;
  width: 1000px;
  height: 7px;
  border-radius: 40px;
  /* background-color: lavender; */
  transform: skew(24deg)
  rotate(30deg);
  box-shadow:
    0 0 .5rem #fff,
    inset 0 0 .5rem #fff,
    0 0 2rem rgb(235, 81, 54),
    inset 0 0 2rem rgb(235, 81, 54),
    0 0 4rem rgb(235, 81, 54),
    inset 0 0 4rem rgb(235, 81, 54);
`;

export default function Station(props) {

  return(
    <StyledDiv>
      <StationSide>
        <CodeInput/>
        <CodeInput/>
        <CodeInput/>
      </StationSide>
      <StationFront>
        <LaserPort>
          <LaserBeam style={ props.firing && props.focused === 0 ? {display: "block"} : {display:"none"}}/>
        </LaserPort>
        <LaserPort>
          <LaserBeam style={ props.firing && props.focused === 1 ? {display: "block"} : {display:"none"}}/>
        </LaserPort>
        <LaserPort>
          <LaserBeam style={ props.firing && props.focused === 2 ? {display: "block"} : {display:"none"}}/>
        </LaserPort>
      </StationFront>
    </StyledDiv>
  )
}