import * as usersAPI from './users-api';

export async function login(credentials) {
  try {
    const token = await usersAPI.login(credentials)
    // set token
    localStorage.setItem('token', token)
    return getUser();
  } catch {
    throw new Error('Invalid Login Credentials');
  }
}

export async function signUp(userData) {
  try {
    // network request to users-api.js which returns a JWT
    const token = await usersAPI.signUp(userData);
    // persist token
    localStorage.setItem('token', token);
    return getUser();
  } catch {
    throw new Error('Invalid Sign Up');
  }
}

export function getUser() {
  const token = getToken();
  //if there's a token, return the user in the payload, otherwise return null
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export function getToken() {
  const token = localStorage.getItem('token');
  if(!token) return null;

  // return payload of token + json parse the body
  const payload = JSON.parse(atob(token.split('.')[1]));

  // if the token has expired
  if(payload.exp < Date.now() / 1000) {
    // remove it
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export function logout() {
  localStorage.removeItem('token');
}