import React, { useState } from 'react';
import Admin from './Admin.jsx';
import User from './User.jsx';
import login from './login.jsx';
// import Counter from './counter.jsx';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = () => {
    // Check credentials and set login status and admin status
    if (username === 'user' && password === 'userpassword') {
      setLoggedIn(true);
      setIsAdmin(false);
    } else if (username === 'admin' && password === 'adminpassword') {
      setLoggedIn(true);
      setIsAdmin(true);
    } else {
      alert('Wrong username or password!');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {!loggedIn ? (
          <div>
            <h1>Login</h1>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        ) : (
          <div>
            {isAdmin ? <Admin /> : <User />} {/* Corrected component name */}
          </div>
        )}
      </header>
    </div>
    // <Counter/>
  );
}

export default App;
