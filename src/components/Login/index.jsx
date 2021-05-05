import {useState} from 'react';
import {Redirect} from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 40px auto;
  width: 80vw;
  max-width: 700px;
`;

export default function Login({setUser}) {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
  })

  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await userService.login(credentials);
      setUser(user);
      setLoggedIn(true);
    } catch {
      setError('Login Failed - Try Again');
    }
  }

  if (loggedIn) {
    return <Redirect to='/'/>
  } else {
    return(
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" value={credentials.email} onChange={handleChange} name='email'/>
        <label htmlFor="password">Password</label>
        <input type="text" value={credentials.password} onChange={handleChange} name='password'/>
        <input type="submit" value="Sign Up"/>
        <p className="error-msg">{error}</p>
      </StyledForm>
    )
  }
}