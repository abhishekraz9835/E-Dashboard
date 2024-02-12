import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const Signup = () =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    },[])

    const collectData =async ()=>{
       
        let result = await fetch('http://127.0.0.1:5000/register',{
            method: 'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type' : 'application/json'
            }
        });
        result = await result.json()
        localStorage.setItem("user",JSON.stringify(result));
        if(result){
            navigate('/')
        }
    }

    return (
        <div className='signBox'>
            <h1>Sign Up</h1>
            <input className='inputBox' type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name'></input>
            <input className='inputBox' type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email'></input>
            <input className='inputBox' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password'></input>
            <button onClick={collectData}>Signup</button>
        </div>
    )
}

export default Signup;