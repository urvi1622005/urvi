import React, { useState } from 'react';
import './App.css';
import Admin from './Admin'; // Assuming Admin.jsx exports the Admin component

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
            {isAdmin ? <Admin /> : <h1>Welcome User!</h1>}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
