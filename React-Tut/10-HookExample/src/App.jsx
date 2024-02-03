
import { useCallback, useState } from 'react';
import './App.css'
import UserContext from './context/UserContext'
import MainLayout from './components/MainLayout';

function App() {

  const [user, setUser] = useState(null);
  /**
  * Asynchronous function to fetch user data from a remote server and set the user data.
  *
  * @return {Promise<void>} Promise representing the completion of the function
  */
  const getUser = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const data = await response.json();
      setUser(data);  
    } catch (error) {
      console.error(error);
    }
  
  }
  
  return (
    <UserContext.Provider value={user}>
      <h1>React Hook Example</h1>
      <MainLayout />
      <button onClick={getUser}>Get User</button>      
    </UserContext.Provider>
  )
}

export default App
