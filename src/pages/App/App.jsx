import {useState} from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import {getUser} from '../../utilities/users-service';
import Profile from '../Profile';
import Auth from '../Auth';
import Game from '../Game';
import GameCreate from '../GameCreate';
import GameSelect from '../GameSelect';
import Header from '../../components/Header';
import styled from 'styled-components';

const Main = styled.main`
  
`;

function App() {
  
  const [user, setUser] = useState(getUser());
  const [asteroids, setAsteroids] = useState([]);
  const [sound, setSound] = useState(true);

  return (
    <Main className="App">
      <Header user={user} setUser={setUser}/>
      <Switch>
        <Route path="/profile">
          <Profile/>
        </Route>
        <Route path="/create">
          <GameCreate/>
        </Route>
        <Route path="/select">
          <GameSelect/>
        </Route>
        <Route path="/auth">
          <Auth setUser={setUser}/>
        </Route>
        <Route path="/">
          <Game/>
        </Route>
        <Redirect to="/"/>
      </Switch>
    </Main>
  );
}

export default App;
