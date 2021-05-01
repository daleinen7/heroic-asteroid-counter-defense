import {useState} from 'react';
import './App.css';
import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import Profile from '../Profile';
import Auth from '../Auth';
import Game from '../Game';
import GameCreate from '../GameCreate';
import GameSelect from '../GameSelect';
import NavBar from '../../components/NavBar';

function App() {
  
  const Main = styled.main`
    background-color: gray;
  `;

  const [user, setUser] = useState(null);

  return (
    <Main className="App">
      <NavBar/>
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
        <Route path="/login">
          <Auth/>
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
