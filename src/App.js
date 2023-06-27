import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignupPage from './SignupPage';
import SignupForm from './SigupForm';
// const arr = [{
//   email: 'isha@gmail.com',
//   password: 'password',
//   isAdmin: true
// }
// ]
const App = () => {
  const [userDatabase, setUserDatabase] = useState([]);
  console.log(userDatabase)
  const [isLoginPage, setIsLoginPage] = useState(true);
  return (
    // <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/login">Login</Link>
    //         </li>
    //         <li>
    //           <Link to="/signup">Signup</Link>
    //         </li>
    //       </ul>
    //     </nav>
    //     <Route exact path="/login" component={LoginPage} />
    //     <Route exact path="/signup" component={SignupPage} />
    //   </div>
    // </Router>
    <div>
      <SignupForm isLoginPage={isLoginPage} setIsLoginPage={setIsLoginPage} userDatabase={userDatabase} setUserDatabase={setUserDatabase} />
    </div>
  );
};

export default App;
