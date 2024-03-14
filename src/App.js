import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import LoginForm from './components/LoginForm';
import axios from 'axios';
import { useState,useEffect } from 'react';
import Header from './components/Header';
import { Route,Routes, useNavigate } from 'react-router-dom';
import UpdateForm from './components/UpdateForm';
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
  
    fetchData();
  }, []);

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
       fetchData();
       
       
    } catch (error) {
      console.error('Add user error:', error);
    }
  };

  const updateUser = async (userId, newData) => {
    try {
      await axios.patch(`http://localhost:3000/api/logins/${userId}`, newData);
      fetchData(); // Refresh user list after updating a user
      setSelectedUser(null);
      navigate(`/ListAll`);
    } catch (error) {
      console.error('Update user error:', error);
    }
  };

  const handleUpdateClick = (userId) => {
    const userToUpdate = data.find(user => user.id === userId);
    setSelectedUser(userToUpdate);
    navigate(`/update/${userId}`);
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:3000/api/logins/${userId}`);
      
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
      <Route path='/AddUser' element={<LoginForm onAddUser={addUser} selectedUser={selectedUser} fetchData={fetchData}/>}/>
      <Route path='/ListAll' element={<Test data={data} onDelete={deleteUser} onUpdateClick={handleUpdateClick}/>}/>
      <Route path='/update/:userId' element={<UpdateForm selectedUser={selectedUser} updateUser={updateUser}/>}/>


    </Routes>
    {/* <LoginForm onAddUser={addUser}  /> */}
    {/* <Test data={data} onDelete={deleteUser} /> */}
  </div>

    
  );
}

export default App;
