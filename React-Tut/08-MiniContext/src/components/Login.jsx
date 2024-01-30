import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

function Login() {
  
    const [loginUser, SetLoginUser] = useState("");
    const [loginPassword, SetLoginPassword] = useState("");

    const {SetUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        SetUser({loginUser, loginPassword})
    }

    return (
    <div>
        <h2>Login</h2>
        <input type='text' placeholder='Login username' value={loginUser} onChange={(e)=> SetLoginUser(e.target.value)} />
        {" "}
        <input type='text' placeholder='Password' value={loginPassword} onChange={(e) => SetLoginPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login