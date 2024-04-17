import React,{useState } from 'react';
const User = ()=>{
    return (
        <div> <h1> welcome user</h1></div>
    );
}
const Admin =()=> {
    return (
        <div>
            <h1> welcome admin </h1>
        </div>
    );
}
const App=()=> {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);



 const handleLogin = () => {
<button onClick={handleLogin}>Login</button>
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
        {loggedIn ? (
          isAdmin ? <Admin /> : <User />
        ) : null}
      </header>
    </div>
  );
                                                                                                 }                                                                         
                                                                                                                         export default App;