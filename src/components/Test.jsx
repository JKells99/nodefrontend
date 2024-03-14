import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Test = ({data,onDelete}) => {
      return (
        <div>
        <h1>Users from API:</h1>
        {data.map(userData => (
          <div key={userData.id}>
            <p>Name: {userData.username}</p>
            <p>Password: {userData.password}</p> 
            <button onClick={() => onDelete(userData.id)}>Delete</button>
            <button onClick={() => onDelete(userData.id)}>Update</button>

          </div>
        ))}
      </div>
      );
    };

export default Test