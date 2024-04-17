import React, { useState } from 'react';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Check if the user is an admin based on the entered ID
    const isAdminUser = userId === 'admin' && password === 'adminpassword';
    
    if (isAdminUser) {
      
      setIsAdmin(true);
    } else {
      // Handle regular user login
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          User ID:
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
