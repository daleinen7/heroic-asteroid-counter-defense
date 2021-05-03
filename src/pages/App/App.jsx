import {useState} from 'react';
import './App.css';
import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import Profile from '../Profile';
import Auth from '../Auth';
import Game from '../Game';
import GameCreate from '../GameCreate';
import GameSelect from '../GameSelect';
import Header from '../../components/Header';

const Main = styled.main`
  
`;

function App() {
  
  const [user, setUser] = useState(null);
  const [sound, setSound] = useState(true);

  return (
    <Main className="App">
      <Header/>
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
