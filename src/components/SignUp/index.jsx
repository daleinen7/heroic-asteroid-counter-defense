import {useState} from 'react'
import {Redirect} from 'react-router-dom';
import {signUp} from '../../utilities/users-service';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 40px auto;
  width: 80vw;
  max-width: 700px;
`;

export default function SignUp({setUser}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  })
  const [signedUp, setSignedUp] = useState(false);

  const handleChange = (e) => {
    const newFormData = {...formData, [e.target.name]: e.target.value};
    setFormData(newFormData);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const signUpData = formData;
      delete signUpData.confirm;
      delete signUpData.error;
      const user = await signUp(signUpData);
      setUser(user);
      
    } catch {
      setFormData({...formData, error: 'An error occured!'})
    }
    setFormData({
      name: '',
      email: '',
      password: '',
      confirm: '',
      error: ''
    })
  }

  if (signedUp){
    return <Redirect to='/'/>
  } else {
    return(
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" value={formData.name} onChange={handleChange} name='name'/>
        <label htmlFor="email">Email</label>
        <input type="text" value={formData.email} onChange={handleChange} name='email'/>
        <label htmlFor="password">Password</label>
        <input type="text" value={formData.password} onChange={handleChange} name='password'/>
        <label htmlFor="confirm">Confirm Password</label>
        <input type="text" value={formData.confirm} onChange={handleChange} name='confirm'/>
        <input type="submit" value="Sign Up"/>
      </StyledForm>
    )
  }
}