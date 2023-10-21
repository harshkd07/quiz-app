import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Quiz from './Quiz';

export default function Profile() {
  const auth=localStorage.getItem('user')
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate('/');
  }
  return (
      <div style={{border: '1px solid black', alignItems:"center", textAlign:"center", width:'100%',
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#1880cf",
      borderRadius: 10
  }}>
  <div style={{textAlign: "center"}}>
        <h1 style={{fontSize: 25}}  className='text-3xl font-bold underline'>Hello {JSON.parse(auth).name}</h1>
        <br></br>
        <h1 style={{fontSize: 25}}>Attempt your quiz</h1>
        <Quiz/>
        <br></br>
        <div style={{width:100, height:35, borderRadius:5, fontSize:20 , backgroundColor:"red", color:"white"}}><Link onClick={logout} to="/">Log out</Link></div>
  </div>
    </div>
  )
}
