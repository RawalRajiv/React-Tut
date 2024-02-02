
import { useCallback, useState } from 'react';
import './App.css'
import UserContext from './context/UserContext'

function App() {

  const [user, setUser] = useState({});
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
  
//useCallback(getUser, [])
console.log(user);
  return (
    <UserContext.Provider value={user}>
      <h1>React Hook Example</h1>
      <button onClick={getUser}>Get User</button>      
    </UserContext.Provider>
  )
}

export default App
