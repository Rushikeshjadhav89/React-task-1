// Registration.js
import React, { useState } from 'react';

const Registration = ({ onRegistration }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegistration = () => {
    // Perform validation
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    // Call API to register user with email and password
    // For now, just log the details
    console.log('Registered user:', email, password);
    // Clear the form fields
    setEmail('');
    setPassword('');
    setError('');
    // Navigate to the home page
    onRegistration();
  };

  return (
    <div className="form-container">
      <h2>Registration</h2>
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
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default Registration;
