import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import UpdateForm from './UpdateForm';

const Test = ({data,onDelete,onUpdateClick}) => {
      return (
        <div>
        <h1>Users from API:</h1>
        {data.map(userData => (
          <div key={userData.id}>
            <p>Name: {userData.username}</p>
            <p>Password: {userData.password}</p> 
            <button onClick={() => onDelete(userData.id)}>Delete</button>
            <button onClick={() => onUpdateClick(userData.id)}>Update</button>
            
            
            {/* <button (<NavLink to={"/update"}/>)}>Update</button> */}

          </div>
        ))}
      </div>
      );
    };

export default Test