import React from 'react'
import axios from 'axios';
import { useState } from 'react';
const LoginForm = ({}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:3000/api/logins', {
          username,
          password
        });
      } catch (error) {
        console.error('Login error:', error);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Add User</button>
      </form>
    );
  };
  

export default LoginForm