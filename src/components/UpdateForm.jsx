import React, { useState, useEffect } from 'react';

const UpdateForm = ({ selectedUser, updateUser }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=> {
        if(selectedUser)
        {
            setUsername(selectedUser.username)
            setPassword(selectedUser.password)

        }
    },{selectedUser});

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!selectedUser)
        {
            return
        }

        const newData = 
        {
            username,
            password
        };

        updateUser(selectedUser.id,newData)
    }
  return (
    <div>
    <h2>Update User</h2>
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Update</button>
    </form>
  </div>
  )
}

export default UpdateForm