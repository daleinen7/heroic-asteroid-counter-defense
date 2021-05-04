import {useState} from 'react';
import SignUp from '../../components/SignUp';
import Login from '../../components/Login';

export default function Auth({setUser}) {

  return(
    <>
      <h2>Login</h2>
      <Login setUser={setUser}/>
      <h2>Sign Up</h2>
      <SignUp setUser={setUser}/>    
    </>
  )
}