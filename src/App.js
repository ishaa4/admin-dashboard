import React, { useState } from 'react';
import { BrowserRouter as Routes, Route, Link } from 'react-router-dom';
import SignupForm from './SigupForm';
import DashboardPage from './DashboardPage';
import { userDatabase } from './util';

const App = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [currentUser, setCurrentUser] = useState('');
  
  return (
    <div>
      {currentUser ? <DashboardPage currentUser={currentUser} setCurrentUser={setCurrentUser} /> : <SignupForm isLoginPage={isLoginPage} setIsLoginPage={setIsLoginPage} setCurrentUser={setCurrentUser} />}
    </div>
  );
};

export default App;
