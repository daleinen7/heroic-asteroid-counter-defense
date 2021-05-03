import * as usersAPI from './users-api';

export async function signUp(userData) {
  try {
    // network request to users-api.js which returns a JWT
    const token = await usersAPI.signUp(userData);
    return token;
  } catch {
    throw new Error('Invalid Sign Up');
  }
}