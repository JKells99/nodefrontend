import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { NavLink, useNavigate} from 'react-router-dom';
const LoginForm = ({fetchData}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:3000/api/logins', {
          username,
          password
        });
        fetchData()
        navigate("/ListAll")
    
        
        
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