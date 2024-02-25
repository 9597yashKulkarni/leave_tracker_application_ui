export const LOG_IN='LOG_IN';

export function logIn(user){
    return{
      type: LOG_IN,
      user
    }
  }