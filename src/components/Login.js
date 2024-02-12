import React, { useEffect } from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom'

const Login = () =>{
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    },[])

    const handleLogin = async () =>{
        console.warn(email,password);
        let result = await fetch("http://127.0.0.1:5000/login",{
            method: 'post',
            body: JSON.stringify({ email, password}),
            headers:{
                'Content-Type':'application/json'
            }
    });
    result = await result.json();
    console.warn(result);
    if(result.name){
       localStorage.setItem('user',JSON.stringify(result))
       navigate("/")
    }
    else{
        alert('please enter correct useremail');
    }
    }

    
    return(
        <div class="login">
            <h1>Login</h1>
            <input type = 'text' className='inputBox' placeholder='enter email'
            onChange={(e)=>setEmail(e.target.value)} value={email}></input>
            <input type = 'password' className='inputBox' placeholder='enter password'
            onChange={(e)=>setPassword(e.target.value)} value={password}></input>
            <button onClick={handleLogin} className='app-btn' type='button'>Sign Up</button>
        </div>
    )
}

export default Login;