import React, { useState } from 'react';
import { loginUser, userDatabase } from './util';

const SignupForm = ({isLoginPage, setIsLoginPage, setCurrentUser}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdminValue, setIsAdminValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const userObj = {
        email,
        password,
        isAdminValue
    };
  //   if(!isLoginPage){
  //     userDatabase.push(userObj);
  //   }
  //   const currentUser = loginUser(userObj);
  //   setCurrentUser(currentUser);
  // };

  if (isLoginPage) {
    const currentUser = loginUser(userObj);
    if (currentUser) {
      setCurrentUser(currentUser);
      setError('');
    } else {
      setError('Invalid email or password');
      console.log(error);
    }
  } else {
    userDatabase.push(userObj);
    const currentUser = loginUser(userObj);
    setCurrentUser(currentUser);
    setError('');
  }
};

  const formHandler = () => {
    setIsLoginPage(!isLoginPage)
  }

  return (
    <form style={{display: 'flex', flexDirection: 'column', maxWidth: '400px'}} onSubmit={handleSubmit}>
      <h2>{isLoginPage ? 'Login' : 'Signup'}</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      { !isLoginPage ? <div style={{display: 'flex'}}>
        <label for="admin">Are you an Admin ?</label>
        <input onChange={(e) => setIsAdminValue(e.target.checked)} type="checkbox"/>
      </div>: null}
      <button type="submit">{isLoginPage ? 'Login' : 'Signup'}</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}  
      <p>{isLoginPage ? 'New here ?' : 'Already a member ?'} <span onClick={formHandler} style={{color: 'orange', cursor: 'pointer'}}>{isLoginPage ? 'Sign Up' : 'Sign In'}</span></p>
    </form>
  );
};

export default SignupForm;
