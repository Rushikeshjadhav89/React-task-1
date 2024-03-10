// Login.js
import React, { useState } from 'react';



const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Perform validation
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    // Call API to login user with email and password
    // For now, just log the details
    console.log('Logged in user:', email, password);
    // Clear the form fields
    setEmail('');
    setPassword('');
    setError('');
    // Navigate to the home page
    onLogin();
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
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
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
