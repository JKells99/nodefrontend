import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import LoginForm from './components/LoginForm';
import axios from 'axios';
import { useState,useEffect } from 'react';
import Header from './components/Header';
import { Route,Routes } from 'react-router-dom';
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  
    fetchData();
  }, [1]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/logins');
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const addUser = async (username,password) => {
    try {
       await axios.post('http://localhost:3000/api/logins', { username,password });
      
      
       

       
      
      
    } catch (error) {
      console.error('Add user error:', error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:3000/api/logins/${userId}`);
      // Remove the deleted user from the data array
      setData(data.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  


  return (
    <div>
    <Header/>
    <Routes>
      <Route path='/AddUser' element={<LoginForm onAddUser={addUser}/>}/>
      <Route path='/ListAll' element={<Test data={data} onDelete={deleteUser}/>}/>

    </Routes>
    {/* <LoginForm onAddUser={addUser}  /> */}
    {/* <Test data={data} onDelete={deleteUser} /> */}
  </div>

    
  );
}

export default App;
